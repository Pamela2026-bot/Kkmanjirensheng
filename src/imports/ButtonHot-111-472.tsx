import svgPaths from "./svg-4o73gq58o9";
import imgDenglong from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";

function Component() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Component 7">
      <div className="absolute h-[22.523px] left-[23.08%] right-[16.29%] top-[2px]" data-name="denglong">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDenglong} />
      </div>
    </div>
  );
}

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
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black">
        <p className="css-ew64yg leading-[normal]">春节名场面</p>
      </div>
      <Xunhuan />
    </div>
  );
}

export default function ButtonHot() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[2px] relative rounded-[16px] size-full" data-name="Button_hot">
      <Component />
      <Frame />
    </div>
  );
}