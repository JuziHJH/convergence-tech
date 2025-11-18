# GoDaddy 部署指南 - Convergence Tech 网站

## 📦 项目资源清单

### 核心文件 (必须上传)
```
convergence-tech/
├── index.html          # 主页面文件 (20.7 KB)
├── styles.css          # 样式文件 (52.74 KB)
├── script.js           # 交互脚本 (5.01 KB)
└── assets/             # 资源文件夹
```

### Assets 文件夹内容 (全部需要上传)
```
assets/
├── 图片文件 (PNG)
│   ├── avatar.png                  # 2.23 KB - 简介头像
│   ├── introduction-img.png        # 254.4 KB - 简介图片
│   ├── content-container.png       # 177.16 KB - 内容容器
│   ├── request-text.png            # 115.33 KB - Request文本图片
│   ├── logo-header.png             # 5.9 KB - 头部Logo
│   ├── logo-landing.png            # 5.9 KB - 着陆页Logo
│   └── logo-footer.png             # 5.9 KB - 页脚Logo
│
├── 图标文件 (SVG)
│   ├── arrow-right.svg             # 367 B - 右箭头
│   ├── icon-ai.svg                 # 2.42 KB - AI图标
│   ├── icon-execution.svg          # 2.54 KB - 执行图标
│   ├── icon-expertise.svg          # 1.63 KB - 专业图标
│   ├── icon-perspective.svg        # 4.66 KB - 视角图标
│   ├── number-one.svg              # 751 B - 数字1
│   ├── number-two.svg              # 1.46 KB - 数字2
│   ├── number-three.svg            # 1.71 KB - 数字3
│   ├── number-four.svg             # 1.34 KB - 数字4
│   └── status-indicators.svg       # 355 B - 状态指示器
│
├── 背景和图案 (SVG)
│   ├── pattern-dot-white.svg       # 167 B - 白色点阵图案
│   ├── pattern-dot.svg             # 315 B - 点阵图案
│   ├── bg-gradient-why.svg         # 2.11 KB - Why背景渐变
│   └── bg-gradient-why-complete.svg # 2.11 KB - Why完整渐变
│
├── Logo文件 (SVG备用)
│   ├── logo-header.svg             # 859 B
│   ├── logo-landing.svg            # 815 B
│   ├── logo-footer.svg             # 826 B
│   ├── convergence-logo.svg        # 342 B
│   ├── convergence-icon.svg        # 516 B
│   └── convergence-tech-logo.svg   # 666 B
│
└── 子文件夹
    ├── figma-images/
    │   └── side-content.png        # 296.88 KB - 侧边内容
    └── CodeBubbyAssets/
        └── 1_20703/
            └── 52.svg              # FAQs图标
```

---

## 🚀 GoDaddy 部署步骤

### 步骤 1: 准备文件
1. ✅ 确保所有文件完整(见上方清单)
2. ✅ 检查文件路径引用正确
3. ✅ 压缩资源(可选,提升加载速度)

### 步骤 2: 登录 GoDaddy
1. 访问 [GoDaddy.com](https://www.godaddy.com)
2. 登录您的账户
3. 进入 **My Products** (我的产品)
4. 找到您的 **Web Hosting** 或 **cPanel**

### 步骤 3: 上传文件

#### 方式 A: 使用 File Manager (文件管理器)
1. 在 cPanel 中打开 **File Manager**
2. 导航到 `public_html` 目录
3. 上传以下文件:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── assets/        # 上传整个文件夹
       ├── *.png
       ├── *.svg
       ├── figma-images/
       └── CodeBubbyAssets/
   ```

#### 方式 B: 使用 FTP 客户端 (推荐)
1. **下载 FTP 客户端**: FileZilla 或 Cyberduck
2. **获取 FTP 凭据**:
   - Host: `ftp.yourdomain.com`
   - Username: 您的 GoDaddy FTP 用户名
   - Password: 您的 FTP 密码
   - Port: 21 (或 22 for SFTP)
3. **连接并上传**:
   - 连接到 FTP 服务器
   - 导航到 `public_html` 或 `www` 目录
   - 上传所有文件,保持文件夹结构

### 步骤 4: 验证部署
1. 访问您的域名: `https://yourdomain.com`
2. 检查项:
   - ✅ 页面正常加载
   - ✅ 所有图片显示正常
   - ✅ 导航和交互功能正常
   - ✅ 响应式布局在移动端正常
   - ✅ Footer Background Pattern 显示正确

---

## 📋 文件完整性检查清单

### 核心文件 (3个)
- [ ] `index.html` - 20.7 KB
- [ ] `styles.css` - 52.74 KB
- [ ] `script.js` - 5.01 KB

### 图片文件 (7个 PNG)
- [ ] `assets/avatar.png`
- [ ] `assets/introduction-img.png`
- [ ] `assets/content-container.png`
- [ ] `assets/request-text.png`
- [ ] `assets/logo-header.png`
- [ ] `assets/logo-landing.png`
- [ ] `assets/logo-footer.png`
- [ ] `assets/figma-images/side-content.png`

### SVG 图标 (17个)
- [ ] `assets/arrow-right.svg`
- [ ] `assets/icon-ai.svg`
- [ ] `assets/icon-execution.svg`
- [ ] `assets/icon-expertise.svg`
- [ ] `assets/icon-perspective.svg`
- [ ] `assets/number-one.svg`
- [ ] `assets/number-two.svg`
- [ ] `assets/number-three.svg`
- [ ] `assets/number-four.svg`
- [ ] `assets/status-indicators.svg`
- [ ] `assets/pattern-dot-white.svg`
- [ ] `assets/pattern-dot.svg`
- [ ] `assets/bg-gradient-why.svg`
- [ ] `assets/bg-gradient-why-complete.svg`
- [ ] `assets/logo-header.svg`
- [ ] `assets/logo-landing.svg`
- [ ] `assets/logo-footer.svg`

### FAQs 资源
- [ ] `assets/CodeBubbyAssets/1_20703/52.svg`

---

## ⚙️ 可选优化 (上线前)

### 1. 性能优化
```bash
# 压缩图片 (推荐工具)
- TinyPNG (https://tinypng.com) - PNG压缩
- SVGOMG (https://jakearchibald.github.io/svgomg/) - SVG优化
```

### 2. SEO 优化
在 `index.html` 的 `<head>` 中添加:
```html
<!-- Meta 标签 -->
<meta name="description" content="Convergence Tech Singapore - Strategic Advisory, Powered by Intelligence and Ethics">
<meta name="keywords" content="consulting, strategy, AI, business intelligence, Singapore">
<meta name="author" content="Convergence Tech">

<!-- Open Graph (社交媒体分享) -->
<meta property="og:title" content="Convergence Tech Singapore">
<meta property="og:description" content="Accelerating growth through strategy, innovation, and intelligence">
<meta property="og:image" content="https://yourdomain.com/assets/logo-landing.png">
<meta property="og:url" content="https://yourdomain.com">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="assets/convergence-icon.svg">
```

### 3. SSL 证书
- GoDaddy 通常提供免费 SSL 证书
- 在 cPanel 中启用 **SSL/TLS**
- 确保网站使用 `https://` 访问

### 4. .htaccess 配置 (可选)
创建 `.htaccess` 文件用于重定向和缓存:
```apache
# 强制 HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# 浏览器缓存
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip 压缩
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript image/svg+xml
</IfModule>
```

---

## 🔧 故障排除

### 问题 1: 图片不显示
**原因**: 文件路径不正确或文件未上传
**解决**:
1. 检查 `index.html` 中的路径是否为 `assets/xxx.png`
2. 确认 `assets` 文件夹与 `index.html` 在同一目录
3. 检查文件名大小写是否匹配 (Linux服务器区分大小写)

### 问题 2: CSS 样式未应用
**原因**: `styles.css` 路径错误或文件损坏
**解决**:
1. 确认 `<link rel="stylesheet" href="styles.css">` 路径正确
2. 检查浏览器控制台是否有 404 错误
3. 清除浏览器缓存后重试

### 问题 3: JavaScript 不工作
**原因**: `script.js` 路径错误
**解决**:
1. 确认 `<script src="script.js"></script>` 在 `</body>` 前
2. 检查浏览器控制台是否有 JavaScript 错误

### 问题 4: 响应式布局问题
**原因**: 缺少 viewport meta 标签
**解决**:
确保 `<head>` 中包含:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 📊 总文件大小统计

| 类型 | 数量 | 总大小 |
|------|------|--------|
| HTML | 1 | 20.7 KB |
| CSS | 1 | 52.74 KB |
| JavaScript | 1 | 5.01 KB |
| PNG 图片 | 8 | ~856 KB |
| SVG 图标 | 17+ | ~25 KB |
| **总计** | **28+** | **~960 KB** |

> **上传带宽**: 建议使用至少 5 Mbps 上传速度
> **预计上传时间**: 约 2-5 分钟 (取决于网络速度)

---

## ✅ 最终检查清单

部署前请确认:
- [ ] 所有文件已准备完毕
- [ ] 文件路径引用正确
- [ ] GoDaddy 账户和 FTP 凭据已准备
- [ ] 域名已绑定到主机
- [ ] 备份了原有网站内容 (如有)

部署后请测试:
- [ ] 首页加载正常
- [ ] 所有图片和图标显示
- [ ] 导航菜单工作正常
- [ ] "Contact Us" 和 "Learn More" 按钮功能正常
- [ ] FAQ 展开/收起功能正常
- [ ] 移动端响应式布局正常
- [ ] Footer 联系信息正确
- [ ] Background Pattern 显示正确

---

## 📞 技术支持

**项目版本**: Plan 1 + Footer MCP + Request Container 12px + Our Core 1280px
**最后更新**: 2025-11-18
**GitHub 仓库**: https://github.com/JuziHJH/convergence-tech
**在线预览**: https://juzihjh.github.io/convergence-tech/

如有问题,请检查:
1. GoDaddy 官方文档: https://www.godaddy.com/help
2. 项目 GitHub Issues
3. 浏览器开发者工具控制台错误信息

---

**祝部署顺利! 🎉**
