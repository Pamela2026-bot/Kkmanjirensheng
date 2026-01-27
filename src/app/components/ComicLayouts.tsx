// 四格漫画的五种不同布局样式
// 保持整体尺寸: 668px × 676px
// 保持边框: 3.305px 黑色
// 保持间距: 11.016px

interface ComicLayoutProps {
  images?: string[];
  fallbackImages: string[]; // 默认占位图
}

const borderWidth = 3.305;
const gap = 11.016;

// 布局1: 标准2x2均等布局 (原版)
export function Layout1({ images, fallbackImages }: ComicLayoutProps) {
  const panelHeight = 332.492; // (676 - 11.016) / 2
  
  // 调试日志
  console.log('Layout1 接收到的图片:', images);
  console.log('Layout1 备用图片:', fallbackImages);
  
  return (
    <div className="content-stretch flex flex-col gap-[11.016px] h-[676px] items-start w-full">
      {/* 上半部分 */}
      <div className="content-stretch flex gap-[11.016px] h-[332.492px] items-center relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" style={{ backgroundColor: '#FFFDE9' }}>
          <img 
            alt="Panel 1" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[0] || fallbackImages[0]}
            onError={(e) => {
              console.error('图片1加载失败:', images?.[0]);
              e.currentTarget.src = fallbackImages[0];
            }}
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" style={{ backgroundColor: '#FFFDE9' }}>
          <img 
            alt="Panel 2" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[1] || fallbackImages[1]}
            onError={(e) => {
              console.error('图片2加载失败:', images?.[1]);
              e.currentTarget.src = fallbackImages[1];
            }}
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
      
      {/* 下半部分 */}
      <div className="content-stretch flex gap-[11.016px] h-[332.492px] items-center relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" style={{ backgroundColor: '#FFFDE9' }}>
          <img 
            alt="Panel 3" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[2] || fallbackImages[2]}
            onError={(e) => {
              console.error('图片3加载失败:', images?.[2]);
              e.currentTarget.src = fallbackImages[2];
            }}
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" style={{ backgroundColor: '#FFFDE9' }}>
          <img 
            alt="Panel 4" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[3] || fallbackImages[3]}
            onError={(e) => {
              console.error('图片4加载失败:', images?.[3]);
              e.currentTarget.src = fallbackImages[3];
            }}
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
    </div>
  );
}

// 布局2: 左大右小 - 左边一个大格占满高度，右边上中下三个小格
export function Layout2({ images, fallbackImages }: ComicLayoutProps) {
  const leftWidth = 438; // 约65%宽度
  const rightWidth = 218.984; // 668 - 438 - 11.016
  const rightPanelHeight = 217.989; // (676 - 22.032) / 3
  
  return (
    <div className="content-stretch flex gap-[11.016px] h-[676px] items-start w-full">
      {/* 左边大格 */}
      <div className="h-full relative" style={{ width: `${leftWidth}px`, backgroundColor: '#FFFDE9' }}>
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover size-full" 
          src={images?.[0] || fallbackImages[0]} 
        />
        <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
      </div>
      
      {/* 右边三个小格 */}
      <div className="content-stretch flex flex-col gap-[11.016px] h-full" style={{ width: `${rightWidth}px` }}>
        <div className="relative" style={{ height: `${rightPanelHeight}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[1] || fallbackImages[1]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative" style={{ height: `${rightPanelHeight}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[2] || fallbackImages[2]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative" style={{ height: `${rightPanelHeight}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[3] || fallbackImages[3]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
    </div>
  );
}

// 布局3: 上大下3小 - 上面一个大格，下面三个小格横向排列
export function Layout3({ images, fallbackImages }: ComicLayoutProps) {
  const topHeight = 438; // 约63%高度
  const bottomHeight = 226.984; // 676 - 438 - 11.016
  const bottomPanelWidth = 215.183; // (668 - 22.032) / 3
  
  return (
    <div className="content-stretch flex flex-col gap-[11.016px] h-[676px] items-start w-full">
      {/* 上面大格 */}
      <div className="relative w-full" style={{ height: `${topHeight}px`, backgroundColor: '#FFFDE9' }}>
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover size-full" 
          src={images?.[0] || fallbackImages[0]} 
        />
        <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
      </div>
      
      {/* 下面三个小格 */}
      <div className="content-stretch flex gap-[11.016px] w-full" style={{ height: `${bottomHeight}px` }}>
        <div className="relative h-full" style={{ width: `${bottomPanelWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[1] || fallbackImages[1]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative h-full" style={{ width: `${bottomPanelWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[2] || fallbackImages[2]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative h-full" style={{ width: `${bottomPanelWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[3] || fallbackImages[3]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
    </div>
  );
}

// 布局4: 品字形变体 - 上面两个，下面一个大的 + 一个小的
export function Layout4({ images, fallbackImages }: ComicLayoutProps) {
  const topHeight = 332.492; // (676 - 11.016) / 2
  const bottomHeight = 332.492; // (676 - 11.016) / 2
  const topPanelWidth = 328.492; // (668 - 11.016) / 2
  const bottomLeftWidth = 438; // 65%宽度
  const bottomRightWidth = 218.984; // 668 - 438 - 11.016
  
  return (
    <div className="content-stretch flex flex-col gap-[11.016px] h-[676px] items-start w-full">
      {/* 上面两个格子 */}
      <div className="content-stretch flex gap-[11.016px] w-full" style={{ height: `${topHeight}px` }}>
        <div className="relative h-full" style={{ width: `${topPanelWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[0] || fallbackImages[0]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative h-full" style={{ width: `${topPanelWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[1] || fallbackImages[1]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
      
      {/* 下面一大一小 */}
      <div className="content-stretch flex gap-[11.016px] w-full" style={{ height: `${bottomHeight}px` }}>
        <div className="relative h-full" style={{ width: `${bottomLeftWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[2] || fallbackImages[2]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative h-full" style={{ width: `${bottomRightWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[3] || fallbackImages[3]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
    </div>
  );
}

// 布局5: Z字形 - 左上大，右上小，左下小，右下大
export function Layout5({ images, fallbackImages }: ComicLayoutProps) {
  const largeWidth = 438; // 65%宽度
  const smallWidth = 218.984; // 668 - 438 - 11.016
  const topHeight = 332.492; // (676 - 11.016) / 2
  const bottomHeight = 332.492; // (676 - 11.016) / 2
  
  return (
    <div className="content-stretch flex flex-col gap-[11.016px] h-[676px] items-start w-full">
      {/* 上排: 左大右小 */}
      <div className="content-stretch flex gap-[11.016px] w-full" style={{ height: `${topHeight}px` }}>
        <div className="relative h-full" style={{ width: `${largeWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[0] || fallbackImages[0]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative h-full" style={{ width: `${smallWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[1] || fallbackImages[1]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
      
      {/* 下排: 左小右大 */}
      <div className="content-stretch flex gap-[11.016px] w-full" style={{ height: `${bottomHeight}px` }}>
        <div className="relative h-full" style={{ width: `${smallWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[2] || fallbackImages[2]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
        <div className="relative h-full" style={{ width: `${largeWidth}px`, backgroundColor: '#FFFDE9' }}>
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover size-full" 
            src={images?.[3] || fallbackImages[3]} 
          />
          <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
        </div>
      </div>
    </div>
  );
}

// 根据布局类型选择对应的布局组件
export function getLayoutComponent(layoutType: number) {
  switch (layoutType) {
    case 1:
      return Layout1;
    case 2:
      return Layout2;
    case 3:
      return Layout3;
    case 4:
      return Layout4;
    case 5:
      return Layout5;
    default:
      return Layout1;
  }
}