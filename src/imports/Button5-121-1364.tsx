import imgComponent111 from "figma:asset/0f0ea4c95651954a2a36d0671ab3ca706c1052b5.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";

function Component() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 11">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent111} />
      </div>
    </div>
  );
}

function ImgRenwu() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[65px] left-[-2.37px] top-[6.2px] w-[81px]" data-name="热血少年漫">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-475.66%] max-w-none top-0 w-[960.3%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[83px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[21px] relative size-full">
          <ImgRenwu />
          <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#404040] text-[26px] text-right">
            <p className="css-ew64yg leading-[normal]">热血少年漫</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="button_5">
      <Component />
      <Frame />
    </div>
  );
}