# Figma MCP 参数对照表

## Insight. Innovation. Implementation 模块
**Node ID:** 4-106923  
**Figma Link:** https://www.figma.com/design/OgG7go0gil6qtU9AQG3Qi4/CONVERGENCE-TECH_Deskdop?node-id=4-106923

---

## 最新更新 (2025-11-18)

### 更新3: Execution Label左上对齐
- **Title Container (`.insight-title-container`)**: `align-items: flex-start` - Label在容器中左上对齐
- **Label (`.insight-label`)**: `text-align: left` - 文本左对齐

### 更新2: Request Container 严格MCP对齐
- **Request Text输出方式:** 改为图片输出 (`request-text.png`)
- **图片尺寸:** 923×902px (2x scale)
- **布局参数:** 严格按照 `layout_6Q2TE2` (Request Container) 和 `layout_4X8WP4` (Request Content)

### 更新1: 居中对齐调整
- **Section (`.insight-section-content`)**: `align-items: center` - 按照 `layout_NMKMPW`
- **Content Container (`.insight-content-wrapper`)**: `align-items: center` - 按照 `layout_Q1T118`
- **Container (`.insight-container`)**: `justify-content: center` + `align-items: center` - 按照 `layout_DKT6X1`

---

## Layout 参数映射

| Figma MCP ID | CSS Class | Layout Type | 关键参数 |
|--------------|-----------|-------------|---------|
| `layout_Q4B5QA` | `.insight-innovation-section` | column | padding: 100px 80px, gap: 4px |
| `layout_DKT6X1` | `.insight-container` | row (center) | gap: 24px, justifyContent: center, alignItems: center |
| `layout_NMKMPW` | `.insight-section-content` | column (center) | gap: 60px, alignItems: center |
| `layout_O4RB3B` | `.insight-section-header` | column | width: 628px, gap: 32px |
| `layout_5LZVAG` | `.insight-title-container` | column | gap: 20px |
| `layout_IAX8XF` | `.insight-label` | none | hug × hug |
| `layout_QOWG5M` | `.insight-text-container` / `.insight-content-inner` | column | gap: 12px |
| `layout_WCLVJM` | `.insight-section-title` / `.insight-section-description` / `.insight-request-text-image` | none | fill × hug |
| `layout_Q1T118` | `.insight-content-wrapper` | column (center) | padding: 72px 0px 72px 72px, gap: 4px, alignItems: center |
| `layout_46UPXT` | `.insight-main-container` | column | padding: 16.8px |
| `layout_K5POK7` | `.insight-status-indicators` | row | gap: 8px |
| `layout_6Q2TE2` | `.insight-request-container` | column | fill × hug |
| `layout_4X8WP4` | `.insight-request-content` | row (stretch) | gap: 5.6px, padding: 16.8px |

---

## Fill 参数映射

| Figma MCP ID | CSS Value | 用途 |
|--------------|-----------|------|
| `fill_0EHIQX` | `rgba(255, 255, 255, 0.1)` | Main Container background |
| `Neutral/10` | `#FFFFFF` | 白色文本和背景 |
| `Neutral/100` | `#101010` | 黑色文本 |
| `Primary/Main` | `#0971DA` | 主题蓝色 (Label) |
| `fill_65ZWPG` | `#F7F7F7` | Status Indicators圆点 |

---

## Stroke 参数映射

| Figma MCP ID | CSS Value | Stroke Weight |
|--------------|-----------|---------------|
| `stroke_CE3H2F` | `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)` | 1px |
| `stroke_PSLHJI` | `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)` | 1.4px |

---

## Effect 参数映射

| Figma MCP ID | CSS Value | 用途 |
|--------------|-----------|------|
| `effect_2JNKXS` | `backdrop-filter: blur(28px)` | Main Container & Request Content |

---

## Border Radius

| 元素 | Border Radius |
|------|---------------|
| Main Container | `16.799999237060547px` |
| Request Container | `11.199999809265137px` |

---

## Text Style 参数映射

### style_NY9ZJH (Label - Execution)
```css
font-family: Inter
font-weight: 600
font-size: 16px
line-height: 1.5em
letter-spacing: -5%
text-transform: UPPERCASE
text-align: left  /* 左对齐 - Align top left in Title Container */
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

### style_P3CT6S (Request Text - 图片输出)
```css
font-family: JetBrains Mono
font-weight: 400
font-size: 16.799999237060547px  /* 精确值 */
line-height: 1.7000000454130648em  /* 精确值 */
text-align: LEFT
color: #101010 (Neutral/100)
```

**注意:** Request Text现在以图片方式输出 (`request-text.png`)，保留Figma原始文本样式。

---

## Request Text 图片导出信息

- **Node ID:** 4-106952
- **导出格式:** PNG (2x scale)
- **导出尺寸:** 923×902px
- **文件路径:** `assets/request-text.png`
- **原始文本尺寸:** 488.8×464px (Figma设计稿)

---

## Auto Layout 规则

### Sizing 规则
- `horizontal: fill, vertical: hug` = `flex: 1` (列方向) 或 `width: 100%` (行方向)
- `horizontal: fixed, vertical: hug` = `width: [fixed]px`
- `horizontal: hug, vertical: hug` = `width: fit-content` 或默认

### Alignment 规则
- `alignSelf: stretch` = 填满父容器
- `justifyContent: center` = 水平居中
- `alignItems: center` = 垂直居中
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
- [x] Request Text图片输出
- [x] Section & Content Container居中对齐

---

**最后更新:** 2025-11-18  
**Figma文件:** CONVERGENCE TECH_Deskdop  
**设计基准:** 1440px Desktop  
**更新内容:** Request Container模块严格MCP对齐 + 图片输出 + 居中对齐

