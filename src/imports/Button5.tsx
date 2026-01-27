import imgComponent91 from "figma:asset/29f462eb45e94adc22a34d44763c58ff4a3f3e99.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";

function Component() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 9">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 9 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent91} />
      </div>
    </div>
  );
}

function ImgRenwu() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[84px]" data-name="img_renwu_1">
      <div className="absolute h-[74.975px] left-[-3.76px] top-[-3.85px] w-[92.331px]" data-name="吉卜力风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-189.47%] max-w-none top-0 w-[963.91%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[83px] items-center pr-[6px] relative shrink-0">
      <ImgRenwu />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] mr-[-6px] not-italic relative shrink-0 text-[#2a2a2a] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">吉卜力风格</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[24px] relative size-full" data-name="button_5">
      <Component />
      <Frame />
    </div>
  );
}