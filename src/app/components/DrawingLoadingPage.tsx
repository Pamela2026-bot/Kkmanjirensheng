import LoadingBook from '@/app/components/LoadingBook';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import imgBgNeirong from "figma:asset/2a6c9751d81d48708cbfbf2940b80766ac489e2e.png";
import imgBg from "figma:asset/a414cc1cab9532be936d7017bf7b90b9478bb82f.png";
import imgLogo from "figma:asset/c301e171aed62395c79f7ef941923a62626a0795.png";

export default function DrawingLoadingPage() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]" data-name="Figma design - 生成漫画.png">
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

          {/* Loading组件 - 使用统一的LoadingBook */}
          <LoadingBook text="正在努力绘画中..." />
        </div>

        {/* Bottom Logo - 与首页位置一致 */}
        <div className="absolute h-[38px] left-[313.66px] top-[1562.18px] w-[123px] z-20" data-name="logo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}