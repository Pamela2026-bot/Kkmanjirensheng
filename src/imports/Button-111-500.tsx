import svgPaths from "./svg-vx4i1p3d59";

function Xunhuan() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="xunhuan1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="xunhuan1" opacity="0.3">
          <path clipRule="evenodd" d={svgPaths.p43c2c00} fill="var(--fill-0, #222222)" fillRule="evenodd" id="å½¢ç¶" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black">
        <p className="css-ew64yg leading-[normal]">塑料友情</p>
      </div>
      <Xunhuan />
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
    </div>
  );
}