import { useState, useEffect } from 'react';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import LoadingBook from '@/app/components/LoadingBook';
import imgBgNeirong from "figma:asset/2a6c9751d81d48708cbfbf2940b80766ac489e2e.png";
import imgBg from "figma:asset/a414cc1cab9532be936d7017bf7b90b9478bb82f.png";
import imgImage6 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";
import imgLogo from "figma:asset/c301e171aed62395c79f7ef941923a62626a0795.png";

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
        {/* Background - z-0 */}
        <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px] z-0" data-name="bg">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
        </div>

        {/* 烟花粒子效果 - z-5 在背景之上，内容之下 */}
        <div className="absolute bg-[rgba(0,0,0,0)] h-[350.225px] left-0 top-0 w-[750px] z-5" data-name="Fireworks">
          <GuangDianLiZi width={750} height={350} />
        </div>

        {/* Main content - Groups - z-10 */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[266.89px] h-[1354.73px] right-0 w-[750px] z-10" data-name="Groups">
          {/* Paper background - 750x1284px 完整显示 - 距上140px */}
          <div className="absolute left-0 top-[140px] w-[750px] h-[1284px]" data-name="Image">
            <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgBgNeirong} />
          </div>

          {/* LoadingBook组件包含书本和文案 */}
          <LoadingBook text={getText()} />
        </div>

        {/* Bottom Logo - 与首页位置一致 */}
        <div className="absolute h-[38px] left-[313.66px] top-[1562.18px] w-[123px]" data-name="logo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}