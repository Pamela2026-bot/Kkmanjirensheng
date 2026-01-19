import imgComponent4 from "figma:asset/690c5c7e3e163901154633853d57e4addabffb18.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";

function Component() {
  return (
    <div className="absolute h-[80px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 4">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent4} />
    </div>
  );
}

function ImgRenwu() {
  return (
    <div className="absolute left-[10.06px] size-[77.77px] top-[-0.04px]" data-name="img_renwu_1">
      <div className="absolute h-[69.415px] left-[-1.94px] top-[0.97px] w-[80.984px]" data-name="新海诚风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-305.56%] max-w-none top-0 w-[1017.46%]" src={img} />
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative size-full" data-name="button">
      <Component />
      <ImgRenwu />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[80px] not-italic text-[#454646] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">新海诚风格</p>
      </div>
    </div>
  );
}