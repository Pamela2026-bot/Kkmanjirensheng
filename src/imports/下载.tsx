import svgPaths from "./svg-b40gvmo8oe";

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

export default function Component() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative size-full" data-name="下载">
      <Frame />
      <p className="css-ew64yg font-['PingFang_SC:Regular',sans-serif] leading-[61.538px] not-italic opacity-40 relative shrink-0 text-[#222] text-[24px]">点击下载或长按图片保存</p>
    </div>
  );
}