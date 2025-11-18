# Footer Section - Figma MCP 参数对照表

## Footer Section 模块
**Node ID:** 4-120969  
**Figma Link:** https://www.figma.com/design/OgG7go0gil6qtU9AQG3Qi4/CONVERGENCE-TECH_Deskdop?node-id=4-120969

---

## Layout 参数映射

| Figma MCP ID | CSS Class | Layout Type | 关键参数 |
|--------------|-----------|-------------|---------|
| `layout_A42I2B` | `.footer-section` | column | padding: 56px 100px |
| `layout_SZABGU` | `.footer-bg-pattern` | row (center, wrap) | position: absolute, top: -66.9px, width: 1440px |
| `layout_L549OT` | Pattern单元 | none | 38.4×38.4px |
| `layout_F8XNGY` | `.footer-container` | column | gap: 80px |
| `layout_H5FVB1` | `.footer-links` | row (space-between, wrap) | gap: 88px |
| `layout_RGXCXB` | `.footer-logo-title` / `.footer-menu` | column | gap: 24px |
| `layout_1Q1VV0` | `.footer-logo` | none | 249×34px |
| `layout_FT13OR` | `.footer-title-container` | column | gap: 4px |
| `layout_KUEM0M` | Text elements | none | fill × hug |
| `layout_EWDIDP` | `.footer-nav-links` | column | gap: 16px |
| `layout_1E123Y` | `.footer-bottom` | row (stretch, wrap) | gap: 77px |

---

## Fill 参数映射

| Figma MCP ID | CSS Value | 用途 |
|--------------|-----------|------|
| `Neutral/100` | `#101010` | Footer背景色 |
| `fill_TOWBDQ` | `#FFFFFF` | Logo、Title文字 |
| `Neutral/10` | `#FFFFFF` | Contact Title、Copyright |
| `Neutral/50` | `#C2C2C2` | Subtitle、Email Link |

---

## Background Pattern 参数

**Node ID:** 4-120970  
**Figma Link:** https://www.figma.com/design/OgG7go0gil6qtU9AQG3Qi4/CONVERGENCE-TECH_Deskdop?node-id=4-120970

| 参数 | 值 | Figma MCP ID |
|------|-----|--------------|
| **类型** | `IMAGE-SVG` | - |
| **位置** | `position: absolute; left: 0; top: -66.9px` | `layout_SZABGU` |
| **尺寸** | `width: 1440px` | `layout_B1AA1Y` |
| **透明度** | `opacity: 0.07999999821186066` | MCP精确值 |
| **Pattern单元** | `38.4×38.4px` | `layout_MHQNE0` |
| **圆点尺寸** | `r: 2.4px` | `layout_Q8USIN` |
| **圆点位置** | `cx: 19.2, cy: 19.2` | 居中 |
| **填充色** | `#FFFFFF` | `fill_1K7A8C` / `Neutral/10` |
| **背景图** | `pattern-dot-white.svg` | - |
| **对齐** | `justify-content: center; flex-wrap: wrap` | `mode: row` |
| **背景定位** | `background-position: 0 0` | 左上对齐 |

---

## Text Style 参数映射

### Inter/Body/Large/16/Medium (Title Text, Email Link)
```css
font-family: Inter
font-weight: 500
font-size: 16px
line-height: 1.5em
letter-spacing: -5%
text-align: LEFT
color: #FFFFFF (Title) / #C2C2C2 (Subtitle/Email)
```

### Inter/Heading/H6/18/Medium (Contact Title)
```css
font-family: Inter
font-weight: 500
font-size: 18px
line-height: 1.3999999364217122em
letter-spacing: -5%
text-align: LEFT
color: #FFFFFF
```

### Inter/Body/Large/16/Regular (Copyright)
```css
font-family: Inter
font-weight: 400
font-size: 16px
line-height: 1.5em
letter-spacing: -5%
text-align: LEFT (左侧) / RIGHT (右侧)
color: #FFFFFF
opacity: 0.699999988079071
```

---

## HTML 结构映射

```html
<footer class="footer-section">                    <!-- layout_A42I2B -->
  <div class="footer-bg-pattern"></div>           <!-- layout_SZABGU -->
  
  <div class="footer-container">                   <!-- layout_F8XNGY -->
    <div class="footer-links">                     <!-- layout_H5FVB1 -->
      <div class="footer-logo-title">              <!-- layout_RGXCXB -->
        <img class="footer-logo">                  <!-- layout_1Q1VV0 -->
        <div class="footer-title-container">       <!-- layout_FT13OR -->
          <p class="footer-title-text">...</p>     <!-- Inter/Body/Large/16/Medium -->
          <p class="footer-title-subtitle">...</p> <!-- Inter/Body/Large/16/Medium, Neutral/50 -->
        </div>
      </div>
      
      <div class="footer-menu">                    <!-- layout_RGXCXB -->
        <h4 class="footer-contact-title">Email</h4> <!-- Inter/Heading/H6/18/Medium -->
        <div class="footer-nav-links">             <!-- layout_EWDIDP -->
          <a class="footer-email-link">...</a>     <!-- Inter/Body/Large/16/Medium, Neutral/50 -->
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">                    <!-- layout_1E123Y -->
      <p class="footer-copyright-left">...</p>     <!-- Inter/Body/Large/16/Regular, opacity: 0.7 -->
      <p class="footer-copyright-right">...</p>    <!-- Inter/Body/Large/16/Regular, opacity: 0.7 -->
    </div>
  </div>
</footer>
```

---

## 响应式布局 (768px以下)

```css
.footer-section {
    padding: 40px 24px; /* 从 56px 100px 调整 */
}

.footer-links {
    gap: 40px; /* 从 88px 调整 */
}

.footer-bg-pattern {
    width: 100%; /* 从 1440px 调整为全宽 */
    top: -40px; /* 从 -66.9px 调整，移动端优化 */
}

.footer-bottom {
    flex-direction: column; /* 垂直排列 */
    gap: 20px; /* 从 77px 调整 */
}

.footer-copyright-right {
    text-align: left; /* 从 right 调整为 left */
}
```

---

## 实现验证清单

- [x] Layout间距完全匹配 (padding, gap)
- [x] Fill颜色精确到RGB
- [x] Background Pattern位置和透明度精确
- [x] Text Style line-height精确值
- [x] Auto Layout mode (row/column)
- [x] Sizing规则 (fill/hug/fixed)
- [x] Logo尺寸 249×34px
- [x] Pattern单元 38.4×38.4px
- [x] Opacity精确到10位小数
- [x] 响应式布局适配

---

## 关键设计细节

### Background Pattern
- **绝对定位**: 顶部偏移 -66.9px，创建延伸效果
- **固定宽度**: 1440px居中对齐
- **低透明度**: 0.08（精确值），subtle背景效果

### 间距系统
- **主容器**: 56px 100px（上下、左右）
- **内容间隔**: 80px（Container内部）
- **卡片间隔**: 88px（Footer Links）
- **元素间隔**: 24px（标题组）、16px（链接）、4px（文本行）

### 文本层级
1. **Contact Title**: 18px Medium（最大）
2. **Body Text**: 16px Medium/Regular
3. **Copyright**: 16px Regular + 70% opacity（最小）

---

**最后更新:** 2025-11-18  
**Figma文件:** CONVERGENCE TECH_Deskdop  
**设计基准:** 1440px Desktop  
**更新内容:** Footer Section严格MCP对齐 + Background Pattern背景
