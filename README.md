# 数字文旅驾驶舱

## 项目介绍

数字文旅驾驶舱是一个数据可视化平台，展示数字文化和数字旅游的相关数据，帮助用户直观了解文旅产业的发展状况。

## 功能特点

- **数字文化模块**：展示核心IP数、重点文物数、IP效能分析、文创产品展示和重点文物监测
- **地图展示模块**：展示旅游景点分布
- **数字旅游模块**：展示日均人数、文创产品数、智慧商圈、客流统计分析和消费分析
- **响应式设计**：适配不同设备的屏幕尺寸
- **数据可视化**：使用Chart.js实现各种图表展示
- **视觉效果**：添加了加载动画和淡入效果，提升用户体验

## 技术栈

- HTML5
- CSS3
- JavaScript
- Chart.js

## 项目结构

```
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript文件
└── README.md           # 项目说明
```

## 如何部署到GitHub Pages

1. **创建GitHub仓库**：在GitHub上创建一个新的仓库
2. **克隆仓库**：将仓库克隆到本地
3. **添加项目文件**：将本项目的所有文件复制到克隆的仓库中
4. **提交代码**：使用git命令提交代码到GitHub
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
5. **启用GitHub Pages**：
   - 进入仓库的Settings页面
   - 找到GitHub Pages设置
   - 选择main分支作为Source
   - 点击Save
6. **访问网站**：等待几分钟后，GitHub会生成一个访问链接，格式为 `https://username.github.io/repository-name`

## 本地开发

1. **克隆项目**：
   ```bash
   git clone https://github.com/username/repository-name.git
   ```
2. **进入项目目录**：
   ```bash
   cd repository-name
   ```
3. **启动本地服务器**：
   ```bash
   python3 -m http.server 8000
   ```
4. **访问网站**：在浏览器中访问 `http://localhost:8000`

## 分辨率说明

本项目设计分辨率为7680*2880，适配所访问的电脑效果展示。

## 数据说明

本项目使用的是模拟数据，实际部署时可以根据真实数据进行替换。

## 许可证

MIT
