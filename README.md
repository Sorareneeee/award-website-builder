<!--
README.md for award-website-builder
GitHub renders this file on the repo homepage.
Bilingual: English top half, 中文 bottom half.
-->

<div align="center">

<!-- Logo placeholder — replace with actual SVG when you create one -->
<img src="https://img.shields.io/badge/award--website--builder-v1.0.0-0000f2?style=for-the-badge&logo=html5&logoColor=white" alt="award-website-builder" />

# award-website-builder

**Build Awwwards-tier marketing, brand, and product sites in 75 minutes.**

[English](#english) · [中文](#中文) · [Demo](#demo) · [Docs](#documentation) · [Contributing](#contributing) · [License](#license)

</div>

---

<a id="english"></a>

## English

> A Claude Code Skill that distills the design and engineering techniques from two Awwwards-tier production sites — [DICH Fashion](https://dich-fashion.webflow.io/) and [Hermes Desktop](https://hermes-agent.nousresearch.com/desktop) — into a complete, copy-paste-ready kit: design tokens, 5 zero-dependency JS modules, 12 HTML templates, 9 color palettes, 6 font sets, 30+ SVG elements, image generation prompts, 2 worked examples, and a 48-point self-audit.

### Why this exists

A 2024–2026 Awwwards-tier site takes a real team 6–12 weeks. This skill captures the *patterns* (not the content) of two such sites and gives them to you as a 380KB drop-in kit. The first Awwwards SOTD we ship together won't be in 6 weeks — it'll be in 75 minutes.

### Features at a glance

| Area | What you get | Lines / Size |
|------|--------------|---------------|
| **Design tokens** | 3 CSS files (tokens / base / effects), 9 theme presets, container query unit system, frame overlay, animated gradient borders, parallax, reveal, marquee | 22 KB |
| **JS modules** | noise, smooth-scroll, scramble, scroll-parallax, type-splitter — **zero dependencies** | ~700 LOC / 25 KB |
| **HTML templates** | 6 hero patterns + 6 section patterns, all themable via wrapper class | ~25 KB |
| **Color palettes** | Hermes Blue (default) + 8 more, each with light/dark inversion | 9 systems |
| **Font sets** | DICH set + Hermes set + 4 more, with free Google Fonts alternatives | 6 systems |
| **Image prompts** | 5 visual moods (A–E) + 8-asset minimum set + complete MJ/SD prompts | 20+ prompts |
| **SVG arsenal** | 30+ inline icons + decorative shapes + atmospheric elements | 15 KB |
| **Self-audit** | 48-point checklist (visual / typo / color / motion / tech / content) | 1 doc |
| **Worked examples** | Step-by-step: 60 min fashion launch + 45 min AI tool landing | 2 docs |
| **Deep analysis** | 100k+ words line-numbered analysis of the 2 reference sites | 1 doc |

### Quick start

```bash
# 1. Copy the 3 CSS files into your project
cp .claude/skills/award-website-builder/assets/css/{tokens,base,effects}.css your-project/css/

# 2. Pick a palette from assets/prompts/color-palettes.md
#    Override the 5 brand colors in tokens.css :root

# 3. Pick a font set from assets/prompts/typography-prompts.md
#    Override --font-display, --font-sans, --font-mono, --font-serif

# 4. Copy 1 hero + 3-5 section patterns from assets/html/

# 5. Import the 5 JS modules (or none if you want Apple-level motion)
```

**The 4 lines that get you 80% of the look:**

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/effects.css>

<script type="module">
  import { initAllNoise, initSmoothScroll, initParallax, initReveal, splitText } from "./js/index.js";
</script>
```

### Browser support

- ✅ Chrome 89+ (2021) — full features
- ✅ Firefox 108+ (2022) — full features
- ✅ Safari 15.4+ (2022) — full features
- ✅ Edge 89+ — full features
- ⚠️ 2019-era browsers — degraded experience via `@supports not` fallbacks (documented in `base.css` §8)

### Use with Claude Code

The Skill auto-loads when you mention any of these triggers:

- "杂志感" / "金奖站" / "Awwwards 级别" / "高端品牌站" / "落地页"
- "editorial site" / "premium landing page" / "magazine-grade"
- "make a brand site" / "make a launch page" / "make a hero section"

Or invoke explicitly:

```
/skill award-website-builder
```

### Documentation

| Doc | What it is |
|-----|------------|
| [SKILL.md](.claude/skills/award-website-builder/SKILL.md) | Skill manifest, 4 decisions, 7-phase SOP, 48-point audit |
| [MASTER-ANALYSIS.md](docs/analysis/MASTER-ANALYSIS.md) | 100k+ words deep dive into the 2 reference sites |
| [examples/01-fashion-launch.md](.claude/skills/award-website-builder/examples/01-fashion-launch.md) | Build a DICH-style fashion brand site in 60 min |
| [examples/02-ai-tool-landing.md](.claude/skills/award-website-builder/examples/02-ai-tool-landing.md) | Build a Hermes-style AI tool landing in 45 min |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to submit a new pattern |
| [CHANGELOG.md](CHANGELOG.md) | Release history |
| [SECURITY.md](SECURITY.md) | Vulnerability disclosure |
| [LICENSE](LICENSE) | MIT |

### 19 "irreplaceable" techniques

The 19 techniques below are the ones you **cannot** replace with a simpler alternative. If a design calls for one, you MUST implement it:

1. **Container query unit system** `--u = 100cqw / 2360` (Hermes)
2. **`text-box-trim: trim-both`** on all headings (Hermes)
3. **Triple-stacked canvas noise** (3 blend modes) (Hermes)
4. **Frame overlay** (`border: var(--hw-frame) solid var(--hw-bg)`) (Hermes)
5. **Animated gradient border via `mask-composite: exclude`** (Hermes)
6. **Per-image rAF-throttled scroll parallax** (Hermes)
7. **Scramble text reveal with OS detection** (Hermes)
8. **Footer opacity tied to scroll-end (60vh ramp)** (Hermes)
9. **`:has()` parent-selector for section isolation** (Hermes)
10. **`mix-blend-mode` stack: lighten + screen + difference + multiply** (Hermes)
11. **`::selection` with brand accent** (Hermes)
12. **Editorial copy: ALL CAPS, tracked mono, sans body** (Both)
13. **Generous section padding (4.44em → 12.8em on mobile)** (DICH)
14. **Lenis + GSAP ScrollTrigger for "magazine feel"** (DICH)
15. **Char-reveal via SplitType + GSAP stagger** (DICH)
16. **Brand-color "ambient bounce" in image prompts** (DICH)
17. **Multi-stage "concept totems" (3D objects) as section dividers** (DICH)
18. **3D parallax on images** (`transform: scale(1.22)`) (Hermes)
19. **3 font roles minimum, 4 ideal** (Both)

### Performance

| Metric | Target | This skill |
|--------|--------|------------|
| HTML size | < 50 KB | ~33 KB (Hermes-style single page) |
| CSS size | < 50 KB gzipped | 22 KB |
| JS size | < 250 KB gzipped | 25 KB |
| First paint | < 1s on 4G | ✅ (no render-blocking resources) |
| CLS | < 0.05 | ✅ (all container sizes explicit) |
| Lighthouse perf | ≥ 90 | ✅ (when combined with optimized images) |

### Reference sites

| Site | What it teaches | URL |
|------|-----------------|-----|
| **DICH Fashion** | Webflow + Lenis + GSAP + SplitType + Swiper + Three.js + UnicornStudio — "artist-driven" 6-library pattern | [dich-fashion.webflow.io](https://dich-fashion.webflow.io/) |
| **Hermes Desktop** | Tailwind v4 + container query + self-written noise/parallax/scramble — "engineer-driven" 0-library pattern | [hermes-agent.nousresearch.com/desktop](https://hermes-agent.nousresearch.com/desktop) |

Both are Awwwards-tier production sites. **No images, fonts, brand names, or copy from the source sites are reproduced** in this repo.

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit a new pattern, palette, or font set. We accept PRs that pass the 48-point self-audit with a score ≥ 90.

### License

- Skill source code (CSS / JS / HTML / SVG / prompt text): **MIT** — commercial use, modification, redistribution OK.
- Reference sites (DICH Fashion, Hermes Desktop): © their respective owners.
- See [LICENSE](LICENSE) for full text.

### Acknowledgements

- [DICH Fashion](https://dich-fashion.webflow.io/) — the visual ambition reference.
- [Nous Research](https://nousresearch.com/) — the engineering discipline reference (Hermes Desktop).
- [Tailwind CSS](https://tailwindcss.com/) — CSS variable cascade inspiration.
- [GSAP](https://gsap.com/) / [Lenis](https://lenis.darkroom.engineering/) / [SplitType](https://github.com/lukePeavey/SplitType) — techniques inspired by, but re-implemented without dependencies.
- The 19 reference patterns in the [MASTER-ANALYSIS.md](docs/analysis/MASTER-ANALYSIS.md) are all publicly observable; no source code was copied.

### Citation

If you use this skill in academic work or want to credit it, see [CITATION.cff](CITATION.cff) or use:

```bibtex
@software{sorarin_award_website_builder_2026,
  author = {Sorarin},
  title = {award-website-builder: Awwwards-tier web design as a Claude Code Skill},
  year = {2026},
  url = {https://github.com/Sorareneeee/award-website-builder}
}
```

---

<a id="中文"></a>

## 中文

> 一个 Claude Code Skill，把两个 Awwwards 级别生产站——[DICH Fashion](https://dich-fashion.webflow.io/) 和 [Hermes Desktop](https://hermes-agent.nousresearch.com/desktop)——的设计和工程技法，提炼成一套开箱即用的完整工具包：设计 token、5 个零依赖 JS 模块、12 个 HTML 模板、9 套调色板、6 套字体、30+ SVG 元素、生图 prompt、2 个完整示例、48 项自检清单。

### 为什么做这个

做一个 2024–2026 年 Awwwards 级别的站点，真实团队需要 6–12 周。本 Skill 抽取了两个 Awwwards 站点的**模式**（而非内容），提供 380KB 的即用工具包。下一个金奖站从 6 周缩短到 75 分钟。

### 核心特性

| 类别 | 内容 | 行数 / 大小 |
|------|------|------------|
| **设计 token** | 3 个 CSS（tokens / base / effects），9 套主题预设，container query 单位体系，frame overlay，渐变描边，视差，reveal，marquee | 22 KB |
| **JS 模块** | noise、smooth-scroll、scramble、scroll-parallax、type-splitter——**零依赖** | ~700 行 / 25 KB |
| **HTML 模板** | 6 hero + 6 section 模板，全部可通过 wrapper class 切换主题 | ~25 KB |
| **调色板** | Hermes Blue（默认）+ 8 套其他，每套都有亮/暗反转 | 9 套系统 |
| **字体组合** | DICH 组合 + Hermes 组合 + 4 套其他，每套都配免费 Google Fonts 替代 | 6 套系统 |
| **生图 prompt** | 5 种视觉 mood（A–E）+ 8 张图最小集 + 完整 MJ/SD prompt | 20+ prompts |
| **SVG 元素库** | 30+ 内联图标 + 装饰形状 + 大气元素 | 15 KB |
| **自检清单** | 48 项（视觉 / 排版 / 色彩 / 动效 / 技术 / 内容） | 1 文档 |
| **完整示例** | Step-by-step：60 分钟做时尚站 + 45 分钟做 AI 工具落地页 | 2 文档 |
| **深度分析** | 10万字+ 的两个参考站解析（含源代码行号引用） | 1 文档 |

### 5 分钟上手

```bash
# 1. 复制 3 个 CSS 到你的项目
cp .claude/skills/award-website-builder/assets/css/{tokens,base,effects}.css your-project/css/

# 2. 从 assets/prompts/color-palettes.md 选 1 套调色板
#    在 tokens.css 的 :root 覆盖 5 个品牌色

# 3. 从 assets/prompts/typography-prompts.md 选 1 套字体
#    覆盖 --font-display, --font-sans, --font-mono, --font-serif

# 4. 从 assets/html/ 复制 1 个 hero + 3-5 个 section 模板

# 5. 引入 5 个 JS 模块（如果你只要 Apple 级别的动效，可以不引入）
```

**4 行代码 = 80% 的视觉效果**：

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/effects.css">

<script type="module">
  import { initAllNoise, initSmoothScroll, initParallax, initReveal, splitText } from "./js/index.js";
</script>
```

### 浏览器支持

- ✅ Chrome 89+（2021）— 完整功能
- ✅ Firefox 108+（2022）— 完整功能
- ✅ Safari 15.4+（2022）— 完整功能
- ✅ Edge 89+ — 完整功能
- ⚠️ 2019 年浏览器 — 通过 `@supports not` 降级（详见 `base.css` §8）

### 在 Claude Code 中使用

提到以下任一关键词会自动加载 Skill：

- 杂志感 / 金奖站 / Awwwards 级别 / 高端品牌站 / 落地页
- editorial site / premium landing page / magazine-grade
- make a brand site / make a launch page / make a hero section

或显式调用：

```
/skill award-website-builder
```

### 19 条不可替代技法

下面 19 条技法**不能**用更简单的方案替代。如果一个设计需要用到其中之一，你必须实现它：

1. **Container query 单位体系** `--u = 100cqw / 2360`（Hermes）
2. **`text-box-trim: trim-both`** 在所有标题上（Hermes）
3. **三层 canvas noise**（3 种 blend mode）（Hermes）
4. **Frame overlay**（`border: var(--hw-frame) solid var(--hw-bg)`）（Hermes）
5. **`mask-composite: exclude` 动画渐变描边**（Hermes）
6. **逐图 rAF 滚动视差**（Hermes）
7. **文字 scramble + OS 检测**（Hermes）
8. **Footer 透明度绑定滚动末端**（60vh 渐变）（Hermes）
9. **`:has()` 父选择器做段隔离**（Hermes）
10. **`mix-blend-mode` 叠层：lighten + screen + difference + multiply**（Hermes）
11. **`::selection` 用品牌强调色**（Hermes）
12. **编辑式文案：全大写、tracked mono、sans 正文**（两站）
13. **慷慨的 section padding**（桌面 4.44em → 移动 12.8em）（DICH）
14. **Lenis + GSAP ScrollTrigger 实现"杂志感"**（DICH）
15. **SplitType + GSAP stagger 做字符 reveal**（DICH）
16. **图像 prompt 中的品牌色"环境反射"**（DICH）
17. **3D 物体作为"概念图腾"分段**（DICH）
18. **图片 3D 视差**（`transform: scale(1.22)`）（Hermes）
19. **最少 3 套字体、4 套最佳**（两站）

### 性能

| 指标 | 目标 | 本 Skill |
|------|------|----------|
| HTML 大小 | < 50 KB | ~33 KB（Hermes 风格单页） |
| CSS 大小 | < 50 KB gzipped | 22 KB |
| JS 大小 | < 250 KB gzipped | 25 KB |
| 首屏渲染 | < 1s（4G） | ✅（无 render-blocking 资源） |
| CLS | < 0.05 | ✅（所有容器尺寸显式） |
| Lighthouse 性能 | ≥ 90 | ✅（搭配优化后的图片） |

### 参考站点

| 站点 | 教学点 | URL |
|------|--------|-----|
| **DICH Fashion** | Webflow + Lenis + GSAP + SplitType + Swiper + Three.js + UnicornStudio——"美术总监驱动"的 6 库模式 | [dich-fashion.webflow.io](https://dich-fashion.webflow.io/) |
| **Hermes Desktop** | Tailwind v4 + container query + 自写 noise/parallax/scramble——"工程师驱动"的 0 库模式 | [hermes-agent.nousresearch.com/desktop](https://hermes-agent.nousresearch.com/desktop) |

两个站点都是 Awwwards 级别的生产站。**本仓库不复制任何源站的图片、字体、品牌名、文案。**

### 贡献

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。我们接受通过 48 项自检（分数 ≥ 90）的 PR。

### 许可

- Skill 源代码（CSS / JS / HTML / SVG / prompt 文本）：**MIT**——可商用、可修改、可再发布。
- 参考站点（DICH Fashion、Hermes Desktop）：© 各自所有者。
- 完整许可见 [LICENSE](LICENSE)。

### 致谢

- [DICH Fashion](https://dich-fashion.webflow.io/) — 视觉野心的参考。
- [Nous Research](https://nousresearch.com/) — 工程纪律的参考（Hermes Desktop）。
- [Tailwind CSS](https://tailwindcss.com/) — CSS 变量级联的灵感。
- [GSAP](https://gsap.com/) / [Lenis](https://lenis.darkroom.engineering/) / [SplitType](https://github.com/lukePeavey/SplitType) — 受其技法启发，但全部重新实现无依赖。
- [MASTER-ANALYSIS.md](docs/analysis/MASTER-ANALYSIS.md) 中提到的 19 条参考模式都是公开可观察的；没有复制源站的任何代码。

### 引用

如果你在学术作品中使用本 Skill 或想引用它，详见 [CITATION.cff](CITATION.cFF)，或使用：

```bibtex
@software{sorarin_award_website_builder_2026,
  author = {Sorarin},
  title = {award-website-builder: Awwwards-tier web design as a Claude Code Skill},
  year = {2026},
  url = {https://github.com/Sorareneeee/award-website-builder}
}
```

---

<a id="demo"></a>

## Demo

To see the design system in action, run a local server from the assets directory:

```bash
cd .claude/skills/award-website-builder/assets/html
python -m http.server 8000
# Open http://127.0.0.1:8000/hero-patterns.html
# and  http://127.0.0.1:8000/section-patterns.html
```

You'll see 6 different hero patterns and 6 different section patterns, each themed differently, all built from the same `tokens.css` + `base.css` + `effects.css` + 5 JS modules.

---

<a id="documentation"></a>

## Documentation links

- 🇨🇳 中文分析（10万字+）: [MASTER-ANALYSIS.md](docs/analysis/MASTER-ANALYSIS.md)
- 🇺🇸 English Skill: [SKILL.md](.claude/skills/award-website-builder/SKILL.md)
- 🇺🇸 Image prompts: [image-prompts.md](.claude/skills/award-website-builder/assets/prompts/image-prompts.md)
- 🇺🇸 Color palettes: [color-palettes.md](.claude/skills/award-website-builder/assets/prompts/color-palettes.md)
- 🇺🇸 Typography: [typography-prompts.md](.claude/skills/award-website-builder/assets/prompts/typography-prompts.md)
- 🇺🇸 SVG arsenal: [svg-arsenal.md](.claude/skills/award-website-builder/assets/icons/svg-arsenal.md)
- 🇺🇸 Fashion launch example: [01-fashion-launch.md](.claude/skills/award-website-builder/examples/01-fashion-launch.md)
- 🇺🇸 AI tool landing example: [02-ai-tool-landing.md](.claude/skills/award-website-builder/examples/02-ai-tool-landing.md)

---

<a id="contributing"></a>

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow, commit message format, and style guides. Bug reports, feature requests, and PRs can be filed in the [Issues](https://github.com/Sorareneeee/award-website-builder/issues) section.

---

<a id="license"></a>

## License

[MIT](LICENSE) © 2026 [Sorarin](https://github.com/Sorareneeee)

---

<div align="center">

⭐ Star this repo if it saved you hours of design work.

Made with 🎨 and ☕ in spare time.

</div>
