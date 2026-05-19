# 蝴蝶种群观测笔记

一个使用 Vite + React + Tailwind CSS 构建的中文 INFP 主题单页网站。页面定位为温柔、低饱和、适合自我理解与成长记录的静态网站。

## 功能

- INFP 首页、字母解释、常见特质、成长指南
- 今日 INFP 状态测试，回答 4 个问题后生成状态结果
- 人格探索小屋，包含 3 个外部测试入口并在新标签页打开
- 随机生成 INFP 日记 Prompt
- 随机生成今日 INFP 鼓励语
- FAQ 折叠问答
- 深色模式切换
- 响应式布局和轻量 Framer Motion 动画

## 安装依赖

先安装 Node.js，然后在项目目录执行：

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

终端会显示本地访问地址，通常是：

```bash
http://localhost:5173
```

## 打包

```bash
npm run build
```

构建结果会生成在 `dist/` 目录。

## 本地预览打包结果

```bash
npm run preview
```

## 部署到 GitHub Pages

1. 将项目推送到 GitHub 仓库。
2. 安装部署工具：

```bash
npm install -D gh-pages
```

3. 在 `package.json` 中增加：

```json
{
  "homepage": "https://你的用户名.github.io/你的仓库名",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. 执行部署：

```bash
npm run deploy
```

当前 `vite.config.js` 已使用 `base: './'`，适合静态目录部署。如果你使用固定仓库路径，也可以把 `base` 改成 `'/你的仓库名/'`。

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 中导入该仓库。
3. Framework Preset 选择 `Vite`。
4. Build Command 使用：

```bash
npm run build
```

5. Output Directory 使用：

```bash
dist
```

## 后续扩展方向

- 增加更多 INFP 状态结果和题目权重
- 将日记 Prompt 分类为情绪、创作、人际、行动四类
- 增加收藏 Prompt 或复制结果功能
- 增加更多人格类型入口，扩展成完整人格探索站点
