# H5响应式布局适配指南

## 📱 适配说明

本项目已完成全机型响应式布局适配，适配范围：**320px - 430px**，支持主流移动端设备。

---

## ✅ 已完成的适配内容

### 1. **响应式容器包装器** (`ResponsiveWrapper.tsx`)
- 将设计稿（750px × 1624px）自动缩放适配到目标屏幕
- 支持 320px（小屏安卓）到 430px（iPhone Pro Max）
- 自动计算缩放比例，保持设计稿宽高比
- 监听屏幕旋转和尺寸变化，实时响应

**使用方式：**
```tsx
<ResponsiveWrapper>
  <YourComponent />
</ResponsiveWrapper>
```

### 2. **响应式样式系统** (`/src/styles/responsive.css`)

#### 📏 字体大小适配
使用 `clamp()` 函数实现自适应字号，确保：
- 小屏（≤360px）：字号不小于 12px
- 大屏（≥400px）：字号不超过设计稿的 1.1 倍

```css
/* 字号示例 */
--font-size-xs: clamp(12px, 3.2vw, 20px);      /* 12-20px */
--font-size-base: clamp(16px, 4.27vw, 24px);   /* 16-24px */
--font-size-lg: clamp(20px, 5.33vw, 32px);     /* 20-32px */
```

**CSS类使用：**
```html
<p class="text-base">基础文字</p>
<h1 class="text-xl">标题文字</h1>
```

#### 📐 间距系统适配
使用相对单位（vw + clamp）保证不同屏幕间距一致性：

```css
--spacing-xs: clamp(4px, 1.07vw, 8px);
--spacing-base: clamp(12px, 3.2vw, 16px);
--spacing-lg: clamp(20px, 5.33vw, 32px);
```

**CSS类使用：**
```html
<div class="p-base gap-lg">内容区</div>
```

#### 🖼️ 背景图片适配

**全屏背景（核心视觉不裁切）：**
```css
.bg-fullscreen {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
```

**局部背景（按钮、卡片）：**
```css
.bg-adaptive {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
```

#### 🎨 图片素材适配

**标题切图（保持宽高比）：**
```html
<img src="title.png" class="img-title" alt="标题" />
```

**装饰性图片：**
```html
<img src="decoration.png" class="img-decoration" alt="" />
```

### 3. **媒体查询分级适配**

#### 小屏设备 (320px - 360px)
```css
@media (max-width: 360px) {
  /* 字号最小值保护 */
  --font-size-base: 16px;
  /* 减小间距避免挤压 */
  padding: clamp(8px, 2.67vw, 12px);
}
```

#### 中屏设备 (361px - 390px) - iPhone 12/13/14
```css
@media (min-width: 361px) and (max-width: 390px) {
  /* 标准比例适配 */
  --font-size-base: clamp(16px, 4.4vw, 22px);
}
```

#### 大屏设备 (391px - 430px) - iPhone Pro Max
```css
@media (min-width: 391px) {
  /* 限制最大字号为设计稿 1.1 倍 */
  --font-size-base: clamp(20px, 4.4vw, 26px);
  /* 增加间距避免过挤 */
  padding: clamp(16px, 4.27vw, 20px);
}
```

### 4. **横竖屏适配**

```css
@media (orientation: landscape) {
  .responsive-container {
    max-height: 100vh;
    overflow-y: auto;
  }
  
  /* 横屏时固定字号 */
  --font-size-base: 16px;
}
```

---

## 🔧 关键代码注释说明

### ResponsiveWrapper 组件核心逻辑

```tsx
// 计算缩放比例
const calculateScale = () => {
  const viewportWidth = window.innerWidth;
  
  // 限制适配范围 320px - 430px
  const clampedWidth = Math.max(320, Math.min(430, viewportWidth));
  
  // 缩放比例 = 实际宽度 / 设计稿宽度
  const scaleRatio = clampedWidth / 750;
  
  // 按比例缩放高度
  const scaledHeight = 1624 * scaleRatio;
};
```

### 响应式文字处理

```css
/* 文字自动换行，防止溢出 */
.text-wrap {
  word-wrap: break-word;      /* 老版本浏览器 */
  word-break: break-word;     /* 标准属性 */
  overflow-wrap: break-word;  /* 最新标准 */
}

/* 单行文字省略 */
.text-overflow-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

---

## 📦 性能优化

### 1. **硬件加速**
```css
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}
```

### 2. **图片懒加载**
```css
.lazy-image {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.lazy-image.loaded {
  opacity: 1;
}
```

---

## 🛠️ 兼容性修复

### iOS Safari 100vh 问题
```css
.full-height {
  min-height: 100vh;
  min-height: -webkit-fill-available; /* iOS修复 */
}
```

### 文字渲染优化
```css
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 触摸区域优化
```css
.touch-target {
  /* iOS人机界面指南：最小触摸区域 44×44px */
  min-width: 44px;
  min-height: 44px;
}
```

---

## 📱 测试设备列表

### ✅ 已适配机型

| 设备类型 | 屏幕宽度 | 备注 |
|---------|---------|------|
| iPhone SE | 375px | 小屏 iPhone |
| iPhone 12/13/14 | 390px | 标准 iPhone |
| iPhone 12/13/14 Pro Max | 430px | 大屏 iPhone |
| 小屏安卓 | 320px - 360px | 入门级安卓 |
| 标准安卓 | 360px - 400px | 主流安卓 |
| 大屏安卓 | 400px - 430px | 旗舰安卓 |

### 测试浏览器
- ✅ 微信内置浏览器
- ✅ Safari Mobile
- ✅ Chrome Mobile
- ✅ 华为浏览器
- ✅ 小米浏览器

---

## 🎯 使用指南

### 在现有页面应用响应式

**步骤1：导入响应式样式**
```tsx
import '@/styles/responsive.css';
```

**步骤2：包裹组件**
```tsx
import ResponsiveWrapper from '@/app/components/ResponsiveWrapper';

function MyPage() {
  return (
    <ResponsiveWrapper>
      {/* 你的固定宽度设计稿内容 */}
      <div className="w-[750px] h-[1624px]">
        ...
      </div>
    </ResponsiveWrapper>
  );
}
```

**步骤3：使用响应式CSS类**
```html
<!-- 响应式文字 -->
<p class="text-base text-wrap">
  这段文字会根据屏幕大小自动调整，并且会自动换行不溢出
</p>

<!-- 响应式按钮 -->
<button class="btn-responsive">
  点击按钮
</button>

<!-- 响应式卡片 -->
<div class="card-responsive">
  卡片内容
</div>
```

---

## ⚠️ 注意事项

### 1. **不要使用固定像素字号**
❌ 错误示例：
```css
font-size: 16px; /* 固定字号不响应 */
```

✅ 正确示例：
```css
font-size: var(--font-size-base); /* 使用响应式变量 */
```
或
```html
<p class="text-base">文字内容</p>
```

### 2. **避免使用固定宽度**
❌ 错误示例：
```css
width: 300px; /* 固定宽度 */
```

✅ 正确示例：
```css
width: 100%;
max-width: 300px; /* 使用最大宽度 */
```

### 3. **图片要设置 max-width**
❌ 错误示例：
```html
<img src="image.png" width="200" />
```

✅ 正确示例：
```html
<img src="image.png" class="img-title" style="max-width: 200px" />
```

---

## 🚀 扩展使用

### 添加自定义响应式断点
```css
/* 在 responsive.css 中添加 */
@media (min-width: 480px) and (max-width: 600px) {
  :root {
    --custom-font-size: clamp(18px, 4vw, 24px);
  }
}
```

### 自定义响应式组件
```tsx
import { useEffect, useState } from 'react';

function useViewportWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}

// 使用
function MyComponent() {
  const width = useViewportWidth();
  const isSmallScreen = width <= 360;
  
  return (
    <div>
      {isSmallScreen ? '小屏显示' : '大屏显示'}
    </div>
  );
}
```

---

## 📊 适配效果对比

| 项目 | 适配前 | 适配后 |
|------|--------|--------|
| 小屏显示 | 内容过大，需横向滚动 | ✅ 自动缩放，完美适配 |
| 大屏显示 | 内容过小，两侧留白 | ✅ 自动放大，填满屏幕 |
| 文字大小 | 固定不变 | ✅ 响应式调整 12-35px |
| 图片显示 | 可能变形或裁切 | ✅ 保持比例，完整显示 |
| 横屏适配 | 布局混乱 | ✅ 自动调整，支持滚动 |
| 触摸体验 | 按钮可能过小 | ✅ 最小44px触摸区域 |

---

## 💡 调试技巧

### 1. **查看当前屏幕宽度**
在浏览器控制台输入：
```javascript
console.log('屏幕宽度:', window.innerWidth);
```

### 2. **测试不同设备**
Chrome DevTools:
1. 按 F12 打开开发者工具
2. 点击设备模拟图标（Ctrl + Shift + M）
3. 选择不同设备预设或自定义尺寸

### 3. **显示响应式调试信息**
```html
<div class="debug-responsive" 
     data-width="" 
     data-height="">
</div>

<script>
  const debug = document.querySelector('.debug-responsive');
  const update = () => {
    debug.dataset.width = window.innerWidth;
    debug.dataset.height = window.innerHeight;
  };
  update();
  window.addEventListener('resize', update);
</script>
```

---

## 📞 技术支持

如遇响应式适配问题，请检查：
1. ✅ 是否导入了 `responsive.css`
2. ✅ 是否使用了 `ResponsiveWrapper` 包裹组件
3. ✅ 浏览器是否支持 CSS clamp() 函数（iOS 13.4+, Android 79+）
4. ✅ viewport meta 标签是否正确设置

---

## 📄 文件清单

```
/src/styles/responsive.css       - 响应式样式主文件
/src/app/components/ResponsiveWrapper.tsx  - 响应式包装器组件
/RESPONSIVE_GUIDE.md            - 本文档
```

---

**更新日期：** 2025-01-19  
**版本：** v1.0.0  
**适配机型：** 320px - 430px 全机型覆盖
