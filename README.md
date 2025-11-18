# Convergence Tech Singapore - Landing Page

**完全基于 Figma MCP 提取的设计数据实现**

本项目使用 Figma MCP (Model Context Protocol) 直接从 Figma 设计文件中提取所有设计数据，包括样式、变量、间距、Auto Layout 等，确保 100% 还原设计稿。

## 🎯 Figma MCP 使用

### 获取的设计数据
通过 `Framelink Figma MCP Server` 获取：
- File Key: `OgG7go0gil6qtU9AQG3Qi4`
- Node ID: `31-18406` (Landing Page & Header)

### MCP 提供的精确数据

#### 1. **布局系统 (Auto Layout)**
```yaml
Landing Page:
  - Mode: column
  - Padding: 140px 80px 60px
  - Gap: 24px
  - Dimensions: 1440×880px

Main Frame Container:
  - Mode: column
  - Gap: 343px (精确间距)
  
Section Header:
  - Mode: column
  - Gap: 32px

Brand Container:
  - Mode: column
  - Gap: 20px

Title Container:
  - Mode: column
  - Gap: 16px
```

#### 2. **颜色系统**
```css
--neutral-100: #101010  /* 背景色 */
--neutral-10: #FFFFFF   /* 文字色 */
--neutral-30: #EDEDED   /* 边框色 */
--neutral-60: #878787   /* 次要文字 */
--primary-main: #0971DA /* 主色调 */
```

#### 3. **字体样式**
从 Figma 提取的精确字体规范：

**Hero Title (Inter/Heading/H1/64/Medium)**
- Font Family: Inter
- Font Weight: 500
- Font Size: 64px
- Line Height: 1.2em (120%)
- Letter Spacing: -5%

**Hero Subtitle (Inter/Heading/H6/18/Regular)**
- Font Family: Inter
- Font Weight: 400
- Font Size: 18px
- Line Height: 1.4em (140%)
- Letter Spacing: -5%

**Button Text (Inter/Body/Large/16/Medium)**
- Font Family: Inter
- Font Weight: 500
- Font Size: 16px
- Line Height: 1.5em (150%)
- Letter Spacing: -5%

#### 4. **组件尺寸**
```
Logo: 205×28px (layout_8PF6X3)
Button: padding 14px 18px (layout_M64TAV)
Border Radius: 16px (精确圆角)
Side Content: 628×680px (layout_CW9EJU)
```

#### 5. **阴影效果**
```css
Button Shadow: 0px 4px 40px rgba(0, 0, 0, 0.06)
Background Blur: blur(479.99px)
Backdrop Filter: blur(28px)
```

## 🖼️ Side Content 图片

使用 `download_figma_images` MCP 工具直接从 Figma 导出：
- Node ID: `31:16080`
- 文件名: `side-content.png`
- 尺寸: 1256×1362px (2x scale)
- 保存路径: `assets/figma-images/side-content.png`

### MCP 导出命令
```json
{
  "fileKey": "OgG7go0gil6qtU9AQG3Qi4",
  "nodes": [{
    "nodeId": "31:16080",
    "fileName": "side-content.png"
  }],
  "pngScale": 2,
  "localPath": "c:\\Users\\Administrator\\codebuddy\\CONVERGENCE_TECH\\assets\\figma-images"
}
```

## 🚀 如何预览

### 方法 1：直接打开
在文件资源管理器中双击 `index.html` 文件

### 方法 2：使用 Python 服务器
```bash
cd c:/Users/Administrator/codebuddy/CONVERGENCE_TECH
python -m http.server 8080
```
然后访问：`http://localhost:8080`

### 方法 3：使用 Live Server (VS Code)
1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## ✨ 功能特性

- ✅ **100% Figma 数据还原**：所有样式直接来自 Figma MCP
- ✅ **精确的间距系统**：使用 Figma Auto Layout 的精确值
- ✅ **完整的字体规范**：字体族、大小、行高、字间距完全一致
- ✅ **准确的颜色变量**：使用 Figma 定义的色彩系统
- ✅ **完全响应式设计**
- ✅ **平滑滚动导航**
- ✅ **交互式 FAQ**
- ✅ **Steps 悬浮效果**

## 📁 文件结构

```
CONVERGENCE_TECH/
├── index.html                 # 主 HTML 文件（基于 Figma 结构）
├── styles.css                 # 样式表（基于 Figma MCP 数据）
├── script.js                  # 交互脚本
├── assets/
│   ├── CodeBubbyAssets/
│   │   └── 1_20703/          # SVG 图标资源
│   └── figma-images/
│       └── side-content.png  # MCP 导出的 Side Content 图片
└── README.md                  # 本文件
```

## 🎯 实现细节

### Figma MCP 数据映射

| Figma 属性 | CSS 实现 | 值 |
|-----------|---------|-----|
| `layout_HLI012` padding | `.landing-page` padding | `140px 80px 60px` |
| `layout_1KXWRO` gap | `.landing-content` gap | `24px` |
| `layout_XDSL02` gap | `.main-frame-container` gap | `343px` |
| `Inter/Heading/H1/64/Medium` | `.hero-title` | 64px/500/1.2/−5% |
| `Primary/Main` | `.btn-learn-more` | `#0971DA` |
| `Neutral/100` | `.landing-page` background | `#101010` |
| Border radius | `.btn-learn-more` | `16px` |
| Shadow | Box shadow | `0px 4px 40px rgba(0,0,0,0.06)` |

### 设计令牌 (Design Tokens)

从 Figma 提取的所有设计令牌：

```css
/* 从 globalVars/styles 提取 */
--layout-mode: column;
--layout-gap: 24px;
--padding-top: 140px;
--padding-horizontal: 80px;
--padding-bottom: 60px;

/* 从 Neutral 色板提取 */
--neutral-10: #FFFFFF;
--neutral-30: #EDEDED;
--neutral-60: #878787;
--neutral-100: #101010;

/* 从 Primary 色板提取 */
--primary-main: #0971DA;
```

## 📱 响应式断点

基于 Figma 1440px 基准：
- Desktop: 1024px+（保持 Figma 原始布局）
- Tablet: 768px - 1024px（调整间距）
- Mobile: 320px - 768px（单列布局）

## 🔗 Figma 源文件

- **设计文件**: [CONVERGENCE TECH_Desktop](https://www.figma.com/design/OgG7go0gil6qtU9AQG3Qi4/CONVERGENCE-TECH_Deskdop?node-id=31-18406)
- **Node ID**: 31-18406
- **组件**: Landing Page & Header

## 💡 技术亮点

1. **MCP 直接集成**：使用 Framelink Figma MCP Server 直接读取设计数据
2. **零手动测量**：所有尺寸、间距都来自 Figma API
3. **设计系统一致性**：颜色、字体、间距完全符合 Figma 设计系统
4. **可维护性**：当 Figma 更新时，可快速重新导出数据

## 🚀 如何预览

### 方法 1：直接打开
在文件资源管理器中双击 `index.html` 文件

### 方法 2：使用 Python 服务器
```bash
cd c:/Users/Administrator/codebuddy/CONVERGENCE_TECH
python -m http.server 8080
```
然后访问：`http://localhost:8080`

### 方法 3：使用 Live Server (VS Code)
1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## ✨ 功能特性

- ✅ 完全响应式设计
- ✅ 平滑滚动导航
- ✅ 卡片悬浮动画
- ✅ 渐变背景效果
- ✅ 代码语法高亮
- ✅ 交互式 FAQ
- ✅ Steps 悬浮效果

## 📁 文件结构

```
CONVERGENCE_TECH/
├── index.html          # 主 HTML 文件
├── styles.css          # 样式表（基于 Figma 设计数据）
├── script.js           # 交互脚本
├── assets/
│   └── CodeBubbyAssets/
│       └── 1_20703/   # 图片资源
└── README.md          # 本文件
```

## 🎯 实现细节

所有样式、间距、颜色和布局都基于 Figma 设计规范：
- 精确的像素值
- 准确的颜色代码
- 真实的字体大小和行高
- 完整的视觉层次

## 📱 响应式断点

- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: 320px - 768px
