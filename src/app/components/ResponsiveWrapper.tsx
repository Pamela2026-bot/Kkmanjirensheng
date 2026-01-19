/**
 * 响应式包装器组件
 * 用于将固定宽度设计稿适配到响应式H5页面
 * 适配范围：320px - 430px
 */

import { useEffect, useState, ReactNode } from 'react';

interface ResponsiveWrapperProps {
  children: ReactNode;
  designWidth?: number;  // 设计稿宽度，默认750px
  designHeight?: number; // 设计稿高度，默认1624px
  className?: string;
}

export default function ResponsiveWrapper({ 
  children, 
  designWidth = 750, 
  designHeight = 1624,
  className = '' 
}: ResponsiveWrapperProps) {
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    const calculateScale = () => {
      // 获取视口宽度
      const viewportWidth = window.innerWidth;
      
      // 限制适配范围 320px - 430px
      const clampedWidth = Math.max(320, Math.min(430, viewportWidth));
      
      // 计算缩放比例
      const scaleRatio = clampedWidth / designWidth;
      
      setScale(scaleRatio);
      
      // 计算容器高度以保持宽高比
      const scaledHeight = designHeight * scaleRatio;
      setContainerHeight(`${scaledHeight}px`);
    };

    // 初始计算
    calculateScale();

    // 监听窗口大小变化和横竖屏切换
    window.addEventListener('resize', calculateScale);
    window.addEventListener('orientationchange', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
      window.removeEventListener('orientationchange', calculateScale);
    };
  }, [designWidth, designHeight]);

  return (
    <div 
      className={`responsive-wrapper ${className}`}
      style={{
        width: '100%',
        maxWidth: '430px',
        minWidth: '320px',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
        height: containerHeight
      }}
    >
      <div
        className="responsive-content"
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'relative'
        }}
      >
        {children}
      </div>
    </div>
  );
}
