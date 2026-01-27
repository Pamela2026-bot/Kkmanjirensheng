import imgComponent81 from "figma:asset/85394e908a373791fae3529c5b174a82d7a1fcd2.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";

function Component() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 8">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 8 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent81} />
      </div>
    </div>
  );
}

function ImgRenwu() {
  return (
    <div className="mr-[-4px] relative shrink-0 size-[84px]" data-name="img_renwu_1">
      <div className="absolute h-[76.65px] left-[-3.15px] top-[-1.05px] w-[89.425px]" data-name="日式漫画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-0.79%] max-w-none top-0 w-[1017.46%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mr-[-184px] pr-[4px] relative shrink-0">
      <ImgRenwu />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] mr-[-4px] not-italic relative shrink-0 text-[#2a2a2a] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">日式漫画</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[216px] relative size-full" data-name="button_4">
      <Component />
      <Frame />
    </div>
  );
}