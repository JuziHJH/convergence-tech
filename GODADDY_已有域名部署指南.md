# GoDaddy 已有域名 - 网站部署操作指南

## 🎯 前提条件

✅ 您已有 GoDaddy 域名 (例如: `yourdomain.com`)  
✅ 域名已激活并可访问  
✅ 有 GoDaddy 账户登录权限

---

## 📋 部署方式选择

GoDaddy 提供两种主要部署方式:

### 方式 A: 使用 Website Builder (网站构建器)
**适用**: 如果您购买了 GoDaddy Website Builder 服务  
**缺点**: 通常不支持直接上传自定义 HTML/CSS  
**推荐**: ❌ 不推荐 (限制较多)

### 方式 B: 使用 Web Hosting (虚拟主机)
**适用**: 有 cPanel 或 Plesk 控制面板  
**优点**: 完全控制,支持自定义代码  
**推荐**: ✅ **强烈推荐** (本指南采用此方式)

---

## 🚀 详细部署步骤

### 第一步: 登录 GoDaddy 并确认主机状态

#### 1.1 登录账户
1. 访问 https://www.godaddy.com
2. 点击右上角 **Sign In** (登录)
3. 输入用户名和密码

#### 1.2 查看产品列表
1. 登录后,点击顶部 **My Products** (我的产品)
2. 查找以下任一项:
   - **Web Hosting** (虚拟主机)
   - **WordPress Hosting** (WordPress 主机)
   - **cPanel** (控制面板)
   - **Plesk**

#### 1.3 确认域名绑定
1. 在 **Domains** (域名) 部分,找到您的域名
2. 确认状态为 **Active** (已激活)
3. 检查域名是否已指向您的主机

> **重要**: 如果没有 Web Hosting,需要先购买主机服务!

---

### 第二步: 访问文件管理器 (File Manager)

#### 方法 A: 通过 cPanel (最常见)

1. 在 **My Products** 页面,找到 **Web Hosting**
2. 点击右侧的 **Manage** (管理) 或 **cPanel Admin**
3. 进入 cPanel 控制面板
4. 在 **Files** (文件) 区域,点击 **File Manager** (文件管理器)

#### 方法 B: 通过直接链接

1. 在浏览器访问: `https://yourdomain.com/cpanel`
2. 输入 cPanel 用户名和密码登录
3. 找到并点击 **File Manager**

#### 方法 C: 通过 Plesk (部分用户)

1. 找到 **Plesk** 入口
2. 登录后点击 **Files** > **File Manager**

---

### 第三步: 清理并准备上传目录

#### 3.1 定位网站根目录
进入 File Manager 后,找到以下目录之一:
- **public_html** (最常见) ✅
- **httpdocs** (Plesk 用户)
- **www** (某些配置)

> **提示**: `public_html` 是网站的根目录,访问 `yourdomain.com` 时会显示此文件夹的内容

#### 3.2 备份现有文件 (重要!)
如果 `public_html` 中已有文件:

1. 全选所有文件 (Ctrl+A 或点击顶部复选框)
2. 点击 **Compress** (压缩) 按钮
3. 选择 **Zip Archive** 格式
4. 命名为: `backup_旧网站_20251118.zip`
5. 点击 **Compress File(s)**
6. 下载备份文件到本地电脑

#### 3.3 清空目录 (可选)
如果需要完全替换旧网站:

1. 全选 `public_html` 中的所有文件
2. 点击 **Delete** (删除)
3. 确认删除

> **注意**: 请确保已备份重要文件!

---

### 第四步: 上传 Convergence Tech 网站文件

#### 方法 1: 使用 File Manager 上传 (推荐新手)

##### 4.1 准备本地文件
在您的电脑上,找到项目文件夹:
```
C:\Users\Administrator\codebuddy\CONVERGENCE_TECH\
```

选择以下文件/文件夹:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `assets` 文件夹 (整个文件夹)

##### 4.2 上传文件
1. 在 File Manager 中,确保当前位置在 `public_html`
2. 点击顶部的 **Upload** (上传) 按钮
3. 拖拽或选择以下文件上传:
   - `index.html`
   - `styles.css`
   - `script.js`
4. 等待上传完成 (会显示进度条)

##### 4.3 上传 assets 文件夹

**选项 A: 压缩后上传 (推荐)**
1. 在本地电脑,右键 `assets` 文件夹
2. 选择 **发送到** > **压缩(zipped)文件夹**
3. 得到 `assets.zip`
4. 在 File Manager 点击 **Upload**
5. 上传 `assets.zip`
6. 上传完成后,右键 `assets.zip`
7. 选择 **Extract** (解压缩)
8. 选择解压到当前目录 (`public_html`)
9. 完成后删除 `assets.zip`

**选项 B: 直接上传文件夹**
1. 在 File Manager,点击 **+ Folder** 创建 `assets` 文件夹
2. 进入 `assets` 文件夹
3. 点击 **Upload**
4. 选择并上传 `assets` 文件夹中的所有文件
5. 同样方式创建并上传子文件夹:
   - `figma-images/`
   - `CodeBubbyAssets/1_20703/`

---

#### 方法 2: 使用 FTP 客户端上传 (推荐有经验用户)

##### 4.1 安装 FTP 客户端
下载并安装 **FileZilla**: https://filezilla-project.org/

##### 4.2 获取 FTP 凭据
1. 在 GoDaddy cPanel 中,找到 **FTP Accounts** (FTP账户)
2. 记录以下信息:
   ```
   FTP Host: ftp.yourdomain.com
   用户名: yourusername@yourdomain.com
   密码: [您的FTP密码]
   端口: 21
   ```

> **找不到密码?** 可以在 FTP Accounts 中重置密码

##### 4.3 连接 FTP
1. 打开 FileZilla
2. 点击左上角 **文件** > **站点管理器**
3. 点击 **新站点**,命名为 "Convergence Tech"
4. 填写连接信息:
   - **主机**: `ftp.yourdomain.com`
   - **协议**: FTP - 文件传输协议
   - **加密**: 使用显式的 FTP over TLS (如果可用)
   - **登录类型**: 正常
   - **用户**: 您的FTP用户名
   - **密码**: 您的FTP密码
5. 点击 **连接**

##### 4.4 上传文件
1. 连接成功后,右侧窗口会显示服务器文件
2. 导航到 `public_html` 目录
3. 在左侧窗口,找到本地项目文件夹
4. 选择以下文件拖拽到右侧:
   ```
   index.html
   styles.css
   script.js
   assets/ (整个文件夹)
   ```
5. 等待上传完成 (底部会显示队列进度)

---

### 第五步: 验证文件结构

上传完成后,在 File Manager 或 FTP 中检查 `public_html` 结构:

```
public_html/
├── index.html          ✅
├── styles.css          ✅
├── script.js           ✅
└── assets/             ✅
    ├── avatar.png
    ├── introduction-img.png
    ├── content-container.png
    ├── request-text.png
    ├── logo-header.png
    ├── logo-landing.png
    ├── logo-footer.png
    ├── arrow-right.svg
    ├── icon-ai.svg
    ├── icon-execution.svg
    ├── icon-expertise.svg
    ├── icon-perspective.svg
    ├── number-one.svg
    ├── number-two.svg
    ├── number-three.svg
    ├── number-four.svg
    ├── status-indicators.svg
    ├── pattern-dot-white.svg
    ├── pattern-dot.svg
    ├── bg-gradient-why.svg
    ├── bg-gradient-why-complete.svg
    ├── logo-header.svg
    ├── logo-landing.svg
    ├── logo-footer.svg
    ├── convergence-icon.svg
    ├── convergence-logo.svg
    ├── convergence-tech-logo.svg
    ├── bg-gradient-shape1.svg
    ├── figma-images/
    │   └── side-content.png
    └── CodeBubbyAssets/
        └── 1_20703/
            └── 52.svg
```

---

### 第六步: 测试网站

#### 6.1 访问您的域名
在浏览器地址栏输入: `https://yourdomain.com` 或 `http://yourdomain.com`

#### 6.2 检查清单
- [ ] 页面能正常加载
- [ ] Header Logo 显示正常
- [ ] Landing Page 背景渐变正常
- [ ] 所有图片显示正常
- [ ] "Learn More" 按钮点击跳转
- [ ] "Contact Us" 按钮点击跳转
- [ ] FAQ 展开/收起功能正常
- [ ] Footer Logo 显示
- [ ] Footer Background Pattern 显示

#### 6.3 检查浏览器控制台
1. 按 **F12** 打开开发者工具
2. 切换到 **Console** (控制台) 标签
3. 刷新页面
4. **确保没有红色错误**,特别是:
   - ❌ 404 错误 (文件未找到)
   - ❌ CORS 错误
   - ❌ JavaScript 错误

#### 6.4 测试移动端
1. 按 **F12** 打开开发者工具
2. 点击 **Toggle device toolbar** (设备模拟器图标)
3. 选择不同设备测试:
   - iPhone 12/13
   - iPad
   - Samsung Galaxy
4. 确认响应式布局正常

---

## 🔧 常见问题排查

### 问题 1: 访问域名显示 404 或空白页
**可能原因**:
- `index.html` 未在 `public_html` 根目录
- 文件名大小写错误 (应为 `index.html`,不是 `Index.html`)

**解决方法**:
1. 检查 `public_html` 中是否有 `index.html`
2. 确认文件名为小写
3. 清除浏览器缓存后重试

---

### 问题 2: 图片不显示
**可能原因**:
- `assets` 文件夹路径错误
- 图片文件未上传完整
- 文件权限问题

**解决方法**:
1. 在 File Manager 检查 `assets` 文件夹是否在 `public_html` 下
2. 确认所有图片都已上传
3. 右键 `assets` 文件夹 > **Change Permissions** > 设置为 `755`
4. 右键 `assets` 中的文件 > **Change Permissions** > 设置为 `644`

---

### 问题 3: CSS 样式不生效
**可能原因**:
- `styles.css` 路径错误
- 文件未上传
- 浏览器缓存

**解决方法**:
1. 确认 `styles.css` 在 `public_html` 根目录
2. 在浏览器按 **Ctrl+Shift+R** 强制刷新
3. 检查 `index.html` 中的引用: `<link rel="stylesheet" href="styles.css">`

---

### 问题 4: JavaScript 不工作
**可能原因**:
- `script.js` 未上传
- 文件路径错误

**解决方法**:
1. 确认 `script.js` 在 `public_html` 根目录
2. 检查 `index.html` 底部: `<script src="script.js"></script>`
3. 打开浏览器控制台查看具体错误

---

### 问题 5: 显示 "Coming Soon" 或 GoDaddy 默认页
**原因**: 
- 域名未正确指向主机
- DNS 未生效

**解决方法**:
1. 在 GoDaddy **My Products** > **Domains**
2. 点击域名右侧的 **DNS**
3. 检查 **A记录** 是否指向主机IP
4. 等待 DNS 传播 (可能需要 24-48 小时)

---

## 🔒 启用 SSL 证书 (HTTPS)

### 为什么需要 SSL?
- ✅ 浏览器显示 🔒 安全标识
- ✅ 提升 SEO 排名
- ✅ 保护用户数据

### 操作步骤

#### 1. 在 cPanel 中启用 SSL
1. 登录 cPanel
2. 找到 **Security** (安全) 区域
3. 点击 **SSL/TLS Status**
4. 找到您的域名,点击 **Run AutoSSL**
5. 等待证书安装完成 (几分钟)

#### 2. 强制 HTTPS 重定向
在 `public_html` 创建 `.htaccess` 文件,添加:

```apache
# 强制 HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### 3. 测试
访问 `http://yourdomain.com`,应该自动跳转到 `https://yourdomain.com`

---

## 📊 性能优化 (可选)

### 1. 启用 Gzip 压缩
在 `.htaccess` 添加:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript image/svg+xml
</IfModule>
```

### 2. 设置浏览器缓存
在 `.htaccess` 添加:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. 压缩图片
使用在线工具压缩图片:
- **TinyPNG**: https://tinypng.com (PNG压缩)
- **SVGOMG**: https://jakearchibald.github.io/svgomg/ (SVG优化)

---

## ✅ 部署完成检查清单

### 文件上传
- [ ] index.html 已上传
- [ ] styles.css 已上传
- [ ] script.js 已上传
- [ ] assets/ 文件夹及所有文件已上传
- [ ] 文件结构正确

### 功能测试
- [ ] 网站能正常访问
- [ ] 所有页面部分显示正常
- [ ] 图片全部加载
- [ ] 导航功能正常
- [ ] 按钮交互正常
- [ ] 移动端响应式正常

### SEO 优化
- [ ] SSL 证书已启用 (HTTPS)
- [ ] 自动跳转到 HTTPS
- [ ] 页面标题正确
- [ ] Meta 描述已添加

### 性能优化
- [ ] Gzip 压缩已启用
- [ ] 浏览器缓存已配置
- [ ] 图片已优化压缩

---

## 🎯 预计部署时间

| 步骤 | 预计时间 |
|------|----------|
| 登录并准备 | 5 分钟 |
| 备份旧文件 | 5 分钟 |
| 上传文件 (File Manager) | 10-15 分钟 |
| 上传文件 (FTP) | 5-10 分钟 |
| 测试验证 | 10 分钟 |
| SSL 配置 | 5 分钟 |
| **总计** | **30-50 分钟** |

---

## 📞 需要帮助?

### GoDaddy 客服
- **电话**: 查看 GoDaddy 官网您所在地区的客服电话
- **在线聊天**: 登录后点击右下角聊天图标
- **帮助中心**: https://www.godaddy.com/help

### 常用资源
- GoDaddy cPanel 教程: https://www.godaddy.com/help/cpanel
- FileZilla 使用指南: https://wiki.filezilla-project.org/

---

## 🎉 恭喜!

完成以上步骤后,您的 Convergence Tech 网站就成功部署到 GoDaddy 了!

**下一步建议**:
1. 📱 分享网站链接给团队测试
2. 📊 添加 Google Analytics 跟踪访问
3. 🔍 提交网站到 Google Search Console
4. 📧 配置邮箱 (如 info@yourdomain.com)

---

**文档版本**: 1.0  
**最后更新**: 2025-11-18  
**适用**: GoDaddy 已有域名用户
