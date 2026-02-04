import svgPaths from "./svg-rybzven8jm";
import imgButton from "figma:asset/62b74367e8997eb9fb995e952b61b74ce6350b36.png";

function Frame() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 1321317232">
          <path d={svgPaths.p3f87aff2} fill="var(--fill-0, #222222)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="下载">
      <Frame />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[61.538px] not-italic opacity-40 relative shrink-0 text-[#222] text-[24px]">点击下载或长按图片保存</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[91px] items-center justify-center px-[246px] relative shrink-0 w-[652px]" data-name="button_分享">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButton} />
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
        <p className="leading-[normal]">分享</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pt-[60px] relative size-full" style={{ backgroundImage: "linear-gradient(178.009deg, rgba(255, 255, 255, 0) 7.2242%, rgba(255, 255, 255, 0.9) 21.361%, rgb(255, 255, 255) 39.933%)" }}>
      <Component />
      <Button />
    </div>
  );
}