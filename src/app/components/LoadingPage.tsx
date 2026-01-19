import { useState, useEffect } from 'react';
import TopHeader from '@/app/components/TopHeader';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import LoadingBook from '@/app/components/LoadingBook';
import imgImage from "figma:asset/fd46d01768300b3baaf91df1c6f5d0fd5ede2656.png";
import imgBg from "figma:asset/5a0ac0a879b18c754e27b297ce3c5de07caee829.png";
import imgImage6 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";

export default function LoadingPage() {
  const [dotCount, setDotCount] = useState(0);
  const [phase, setPhase] = useState<'reading' | 'generating'>('reading');
  const [readingCycles, setReadingCycles] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => {
        const nextCount = (prev + 1) % 4; // 0, 1, 2, 3 循环
        
        // 当完成一个完整的"..."循环（从0到3再回到0）
        if (nextCount === 0) {
          if (phase === 'reading') {
            setReadingCycles((cycles) => {
              const newCycles = cycles + 1;
              // 完成1遍后切换到生成阶段
              if (newCycles >= 1) {
                setPhase('generating');
                return 0;
              }
              return newCycles;
            });
          }
        }
        
        return nextCount;
      });
    }, 250); // 每0.25秒增加一个点，1秒完成一个循环

    return () => clearInterval(interval);
  }, [phase]);

  const getText = () => {
    const dots = '.'.repeat(dotCount);
    if (phase === 'reading') {
      return `正在阅读故事${dots}`;
    } else {
      return `正在生成分镜脚本${dots}`;
    }
  };

  return (
    <div className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]" data-name="Figma design - 生成剧本loading.png">
      {/* Root */}
      <div className="absolute bg-[rgba(0,0,0,0)] h-[1621.622px] left-[-0.45px] right-[0.45px] top-[0.19px]" data-name="Root">
        {/* Background */}
        <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px]" data-name="bg">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
        </div>

        {/* Side border */}
        <div className="absolute bottom-0 h-[1621.622px] right-0 w-[1.126px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>

        {/* Main content - Groups */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[266.89px] h-[1354.73px] right-0 w-[750px]" data-name="Groups">
          {/* Paper background */}
          <div className="absolute bottom-0 h-[1013.514px] right-[19.14px] w-[709.459px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
          </div>

          {/* LoadingBook组件包含书本和文案 */}
          <LoadingBook text={getText()} />
        </div>

        {/* Top section - Groups1 */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1271.4px] h-[350.225px] right-0 w-[750px]" data-name="Groups">
          {/* 春节光点粒子效果 */}
          <GuangDianLiZi width={750} height={350} />
          
          {/* 顶部Logo和装饰 - 使用TopHeader组件 */}
          <TopHeader />
        </div>
      </div>
    </div>
  );
}