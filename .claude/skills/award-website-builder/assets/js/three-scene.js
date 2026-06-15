/* =============================================================
 * three-scene.js — Scroll-driven 3D object module
 * -------------------------------------------------------------
 * Two modes:
 *   MODE A — Three.js procedural geometry (no external model)
 *     Uses built-in THREE.* primitives (IcosahedronGeometry,
 *     TorusKnotGeometry, etc.) with animated material. Rotates
 *     the entire scene / object group on Y-axis as the user
 *     scrolls, plus vertical offset for parallax.
 *
 *   MODE B — Spline embed (DICH approach)
 *     Loads a Spline <canvas> (via their data-spline-url attr)
 *     and applies scroll-driven opacity + Y-parallax on the
 *     wrapper element. Rotational control is delegated to
 *     Spline's built-in scroll event (if scene defines one).
 *
 *   Both modes share the same scroll-binding API so you can
 *   swap Modes by changing one attribute in the HTML.
 *
 * Usage — Mode A (Three.js, default):
 *   <div data-three-scene
 *        data-shape="torusKnot"    // icosahedron | torusKnot | octahedron | sphere | torus | dodecahedron | box
 *        data-color="#cfb8ff"
 *        data-wireframe="false"
 *        data-rotation-speed="0.5"
 *        data-parallax-speed="0.15"
 *        style="width:100%; height:60vh;">
 *   </div>
 *
 * Usage — Mode B (Spline embed):
 *   <div data-spline-scene
 *        data-spline-url="https://prod.spline.design/xxxxx/scene.splinecode"
 *        data-parallax-speed="0.15"
 *        style="width:100%; height:60vh;">
 *   </div>
 *
 * Scroll API (both modes):
 *   Y-rotation maps 0 → 2π across the element's visible scroll range.
 *   Y-parallax translates at fraction of scroll speed (data-parallax-speed).
 *
 * Browser: Mode A needs Three.js CDN, Chrome 61+. Mode B needs Spline SDK.
 * ============================================================= */

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

/* ---------- defaults ---------- */
const TUNING = {
  rotationMap: Math.PI * 2,
  parallaxFactor: 0.15,
  cameraZ: 6,
  // Radius in THREE world units. The camera frustum half-height at cameraZ=6
  // with fov=45° is ~2.49, so a radius of 1.5 leaves comfortable margin and
  // keeps the camera well outside the mesh (FrontSide materials render nothing
  // from inside).
  radius: 1.5,
};

const SHAPES = {
  icosahedron: (r) => new THREE.IcosahedronGeometry(r, 1),
  torusKnot:   (r) => new THREE.TorusKnotGeometry(r * 0.7, r * 0.3, 64, 8),
  octahedron:  (r) => new THREE.OctahedronGeometry(r),
  sphere:      (r) => new THREE.SphereGeometry(r, 32, 32),
  torus:       (r) => new THREE.TorusGeometry(r * 0.7, r * 0.3, 32, 32),
  dodecahedron:(r) => new THREE.DodecahedronGeometry(r),
  box:         (r) => new THREE.BoxGeometry(r * 1.2, r * 1.2, r * 1.2),
};

/* =============================================================
 * MODE A — Three.js procedural geometry
 * ============================================================= */

export function initThreeScene(el, opts = {}) {
  if (!el) return () => {};

  const o = { ...TUNING, ...opts };
  const shapeName = el.dataset.shape || opts.shape || "torusKnot";
  const wireframe = (el.dataset.wireframe || opts.wireframe) === "true";
  const color = el.dataset.color || opts.color || "#070707";
  const rotSpeed = parseFloat(el.dataset.rotationSpeed || opts.rotationSpeed || 0.5);
  const parallax = parseFloat(el.dataset.parallaxSpeed || opts.parallaxSpeed || TUNING.parallaxFactor);

  const w = el.clientWidth || 400;
  const h = el.clientHeight || 400;
  // Use a fixed world-unit radius. CSS pixels are NOT world units — multiplying
  // a 600px container by 0.35 would give radius=210, which is far outside the
  // 2.49-unit camera frustum half-height, putting the camera inside the mesh.
  // With FrontSide materials (the default for MeshStandardMaterial) that means
  // every face is back-facing and the canvas renders nothing.
  const radius = o.radius;

  /* --- Three.js setup --- */
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.set(0, 0, o.cameraZ);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  el.appendChild(renderer.domElement);

  /* --- lights --- */
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(5, 5, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.4);
  fill.position.set(-5, -3, -3);
  scene.add(fill);

  /* --- geometry --- */
  const factory = SHAPES[shapeName] || SHAPES.torusKnot;
  const geo = factory(radius);
  const mat = new THREE.MeshStandardMaterial({
    color: color,
    wireframe: wireframe,
    roughness: 0.35,
    metalness: 0.65,
    envMapIntensity: 1.2,
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  /* --- optional second mesh with wireframe overlay --- */
  if (!wireframe) {
    const wireMat = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wireMesh = new THREE.Mesh(geo.clone(), wireMat);
    wireMesh.scale.set(1.02, 1.02, 1.02);
    scene.add(wireMesh);
  }

  /* --- scroll binding --- */
  function getScrollProgress() {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const elCenter = rect.top + rect.height / 2;
    const viewCenter = vh / 2;
    const raw = (elCenter - viewCenter) / (vh / 2 + rect.height / 2);
    const clamped = Math.max(-1, Math.min(1, raw));
    return (1 - clamped) / 2;
  }

  let currentRotation = 0;
  let currentY = 0;

  function update() {
    const p = getScrollProgress();
    const targetRotation = p * o.rotationMap * rotSpeed;
    currentRotation += (targetRotation - currentRotation) * 0.08;

    mesh.rotation.x = currentRotation * 0.3;
    mesh.rotation.y = currentRotation;

    const yTarget = -(p - 0.5) * el.offsetHeight * parallax * 2;
    currentY += (yTarget - currentY) * 0.06;
    renderer.domElement.style.transform = `translate3d(0, ${currentY}px, 0)`;

    renderer.render(scene, camera);
  }

  let raf = 0;
  function loop() {
    update();
    raf = requestAnimationFrame(loop);
  }
  loop();

  function onResize() {
    const nw = el.clientWidth;
    const nh = el.clientHeight;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh);
  }
  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    renderer.dispose();
    el.innerHTML = "";
  };
}

/* =============================================================
 * MODE B — Spline embed (DICH approach)
 * ============================================================= */

export function initSplineScene(el, opts = {}) {
  if (!el) return () => {};

  const parallax = parseFloat(el.dataset.parallaxSpeed || opts.parallaxSpeed || 0.15);
  const url = el.dataset.splineUrl || opts.splineUrl;

  if (!url) {
    console.warn("data-spline-url is required for Spline mode");
    return () => {};
  }

  /* --- Load Spline Viewer SDK --- */
  const scriptId = "spline-viewer-sdk";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.textContent = `import { Application } from "https://unpkg.com/@splinetool/runtime@1.9.35/build/runtime.js";
window.__splineRuntime = { Application };`;
    document.body.appendChild(script);
  }

  /* --- Create canvas for Spline --- */
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";
  el.appendChild(canvas);

  let app = null;
  let currentY = 0;

  async function loadSpline() {
    try {
      const { Application } = await import(
        "https://unpkg.com/@splinetool/runtime@1.9.35/build/runtime.js"
      );
      app = new Application(canvas);
      await app.load(url);
    } catch (err) {
      console.warn("Spline load failed:", err.message);
    }
  }
  loadSpline();

  /* --- scroll-driven Y-parallax on the wrapper --- */
  function getScrollProgress() {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const elCenter = rect.top + rect.height / 2;
    const viewCenter = vh / 2;
    const raw = (elCenter - viewCenter) / (vh / 2 + rect.height / 2);
    return (1 - Math.max(-1, Math.min(1, raw))) / 2;
  }

  function update() {
    const p = getScrollProgress();
    const targetY = -(p - 0.5) * el.offsetHeight * parallax * 2;
    currentY += (targetY - currentY) * 0.06;
    canvas.style.transform = `translate3d(0, ${currentY}px, 0)`;

    if (app && app.findObjectByName && app.setVariable) {
      try { app.setVariable("scrollProgress", Math.round(p * 100) / 100); }
      catch (_) {}
    }
  }

  let raf = 0;
  function loop() {
    update();
    raf = requestAnimationFrame(loop);
  }
  loop();

  function onResize() {
    if (app) {
      const w = el.clientWidth;
      const h = el.clientHeight;
    }
  }
  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    if (app) {
      try { app.dispose(); } catch (_) {}
    }
    el.innerHTML = "";
  };
}

/* =============================================================
 * Auto-init
 * ============================================================= */

export function initAll3D() {
  const stops = [];
  document.querySelectorAll("[data-three-scene]").forEach((el) => {
    stops.push(initThreeScene(el));
  });
  document.querySelectorAll("[data-spline-scene]").forEach((el) => {
    stops.push(initSplineScene(el));
  });
  return () => stops.forEach((s) => s());
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll3D());
  } else {
    initAll3D();
  }
}
// v3: shrink radius to 0.18x — still too large (108 world units vs 2.5 frustum)
// v4: use fixed world-unit radius = 1.5 (CSS pixels ≠ world units)
