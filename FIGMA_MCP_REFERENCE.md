# Figma MCP 参数对照表

## Insight. Innovation. Implementation 模块
**Node ID:** 4-106923  
**Figma Link:** https://www.figma.com/design/OgG7go0gil6qtU9AQG3Qi4/CONVERGENCE-TECH_Deskdop?node-id=4-106923

---

## Layout 参数映射

| Figma MCP ID | CSS Class | Layout Type | 关键参数 |
|--------------|-----------|-------------|---------|
| `layout_Q4B5QA` | `.insight-innovation-section` | column | padding: 100px 80px, gap: 4px |
| `layout_NH6XKD` | `.insight-container` | row (stretch) | gap: 24px |
| `layout_UWA03Z` | `.insight-section-content` | column | gap: 60px |
| `layout_3CNZTL` | `.insight-section-header` | column | width: 628px, gap: 32px |
| `layout_9E0TGZ` | `.insight-title-container` | column | gap: 20px |
| `layout_I3ZH9U` | `.insight-label` | none | hug × hug |
| `layout_7BI9PA` | `.insight-text-container` / `.insight-content-inner` | column | gap: 12px |
| `layout_OD25RO` | `.insight-section-title` / `.insight-section-description` / `.insight-request-text` | none | fill × hug |
| `layout_SRY71O` | `.insight-content-wrapper` | column | padding: 72px 0px 72px 72px, gap: 4px |
| `layout_XQQHC7` | `.insight-main-container` | column | padding: 16.8px |
| `layout_LE88JJ` | `.insight-status-indicators` | row | gap: 8px |
| `layout_8V6WT2` | `.insight-request-container` | column | fill × hug |
| `layout_XTPGS8` | `.insight-request-content` | row (stretch) | gap: 5.6px, padding: 16.8px |

---

## Fill 参数映射

| Figma MCP ID | CSS Value | 用途 |
|--------------|-----------|------|
| `fill_TUGAQR` | `rgba(255, 255, 255, 0.1)` | Main Container background |
| `Neutral/10` | `#FFFFFF` | 白色文本和背景 |
| `Neutral/100` | `#101010` | 黑色文本 |
| `Primary/Main` | `#0971DA` | 主题蓝色 (Label) |
| `fill_V0I6F3` | `#F7F7F7` | Status Indicators圆点 |

---

## Stroke 参数映射

| Figma MCP ID | CSS Value | Stroke Weight |
|--------------|-----------|---------------|
| `stroke_JIZR8T` | `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)` | 1px |
| `stroke_2SY7R5` | `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)` | 1.4px |

---

## Effect 参数映射

| Figma MCP ID | CSS Value | 用途 |
|--------------|-----------|------|
| `effect_M7T5W2` | `backdrop-filter: blur(28px)` | Main Container & Request Content |

---

## Border Radius

| 元素 | Border Radius |
|------|---------------|
| Main Container | `16.799999237060547px` |
| Request Container | `11.199999809265137px` |

---

## Text Style 参数映射

### style_DKAAD3 (Label)
```css
font-family: Inter
font-weight: 600
font-size: 16px
line-height: 1.5em
letter-spacing: -5%
text-transform: UPPERCASE
text-align: CENTER
color: #0971DA (Primary/Main)
```

### Inter/Heading/H2/48/Medium (Title)
```css
font-family: Inter
font-weight: 500
font-size: 48px
line-height: 1.2000000476837158em  /* 精确值 */
letter-spacing: -5%
text-align: LEFT
color: #FFFFFF (Neutral/10)
```

### Inter/Heading/H6/18/Regular (Description)
```css
font-family: Inter
font-weight: 400
font-size: 18px
line-height: 1.3999999364217122em  /* 精确值 */
letter-spacing: -5%
text-align: LEFT
color: #FFFFFF (Neutral/10)
```

### style_J453T2 (Request Text)
```css
font-family: JetBrains Mono
font-weight: 400
font-size: 16.799999237060547px  /* 精确值 */
line-height: 1.7000000454130648em  /* 精确值 */
text-align: LEFT
color: #101010 (Neutral/100)
```

---

## Auto Layout 规则

### Sizing 规则
- `horizontal: fill, vertical: hug` = `flex: 1` (列方向) 或 `width: 100%` (行方向)
- `horizontal: fixed, vertical: hug` = `width: [fixed]px`
- `horizontal: hug, vertical: hug` = `width: fit-content` 或默认

### Alignment 规则
- `alignSelf: stretch` = 填满父容器
- `justifyContent: stretch` = 子元素均匀分布
- `alignItems: stretch` = 子元素拉伸填满交叉轴

---

## 实现验证清单

- [x] Layout间距完全匹配 (gap, padding)
- [x] Fill颜色精确到RGBA
- [x] Stroke渐变方向和透明度
- [x] Effect blur数值 (28px)
- [x] Border radius小数精确值
- [x] Text Style line-height精确到10位小数
- [x] Auto Layout mode (row/column)
- [x] Sizing规则 (fill/hug/fixed)
- [x] Status Indicators SVG (3个圆点)
- [x] JetBrains Mono字体应用

---

**最后更新:** 2025-11-18  
**Figma文件:** CONVERGENCE TECH_Deskdop  
**设计基准:** 1440px Desktop
