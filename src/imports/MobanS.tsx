import imgComponent6 from "figma:asset/f35fed4d2af251f5094e4d7258c8b13e6ea704fa.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";
import img1 from "figma:asset/0998c63f86525358d26fafa731b3801081346889.png";
import imgComponent4 from "figma:asset/e09f0778d89b2ba69d2519df2c108ba80dfe8f2c.png";
import imgQ from "figma:asset/faef3107ff6973d86c8cbf3fb1a6365202db6d1a.png";

function Component2() {
  return (
    <div className="absolute h-[80px] left-[calc(50%-0.06px)] top-[calc(50%+0.04px)] translate-x-[-50%] translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu() {
  return (
    <div className="absolute left-[2px] size-[80px] top-[2px]" data-name="img_renwu_1">
      <div className="absolute h-[73px] left-[-3px] top-[-1px] w-[85.167px]" data-name="日式漫画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-0.79%] max-w-none top-0 w-[1017.46%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[84px] relative shrink-0 w-[210px]" data-name="button">
      <Component2 />
      <ImgRenwu />
      <div className="absolute flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] left-[82px] not-italic text-[#2a2a2a] text-[25px] top-[41.54px] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">日式漫画</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[80px] right-[-1px] top-1/2 translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu1() {
  return (
    <div className="absolute left-[8.95px] size-[80px] top-[-1.16px]" data-name="img_renwu_1">
      <div className="absolute h-[67.438px] left-[1.07px] top-[6.29px] w-[78.347px]" data-name="彩色动漫">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.74%] left-0 max-w-none top-0 w-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[84px] relative shrink-0 w-[219px]" data-name="button">
      <Component3 />
      <ImgRenwu1 />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[89px] not-italic text-[#2a2a2a] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">彩色动漫</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[80px] right-[-0.4px] top-[calc(50%-0.04px)] translate-y-[-50%] w-[231.333px]" data-name="Component 4">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent4} />
    </div>
  );
}

function ImgRenwu2() {
  return (
    <div className="absolute left-[9.01px] size-[80px] top-[-1.2px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[-3.58px] top-[-1.67px] w-[87.934px]" data-name="吉卜力风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-189.47%] max-w-none top-0 w-[963.91%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[84px] relative shrink-0 w-[241px]" data-name="button">
      <Component />
      <ImgRenwu2 />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[81.06px] not-italic text-[#424341] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">吉卜力风格</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[80px] right-[-15.33px] top-1/2 translate-y-[-50%] w-[231.333px]" data-name="Component 4">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent4} />
    </div>
  );
}

function ImgRenwu3() {
  return (
    <div className="absolute left-[8.95px] size-[80px] top-[-1.16px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[-2px] top-px w-[83.306px]" data-name="新海诚风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-305.56%] max-w-none top-0 w-[1017.46%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[84px] relative shrink-0 w-[226px]" data-name="button">
      <Component1 />
      <ImgRenwu3 />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[80px] not-italic text-[#454646] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">新海诚风格</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[80px] right-[-0.06px] top-[calc(50%-0.04px)] translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu4() {
  return (
    <div className="absolute left-[9.01px] size-[80px] top-[-1.2px]" data-name="img_renwu_1">
      <div className="absolute h-[68px] left-[-1px] top-[5px] w-[82px]" data-name="Q版可爱">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.63%] left-[-0.6%] max-w-none top-[0.46%] w-[100.03%]" src={imgQ} />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[84px] relative shrink-0 w-[220px]" data-name="button">
      <Component4 />
      <ImgRenwu4 />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[89.06px] not-italic text-[#3d3e3c] text-[25px] top-[calc(50%-0.54px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">Q版可爱</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[80px] right-[-0.4px] top-[calc(50%-0.04px)] translate-y-[-50%] w-[231.333px]" data-name="Component 4">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent4} />
    </div>
  );
}

function ImgRenwu5() {
  return (
    <div className="absolute left-[-1.12px] size-[80px] top-[-1.2px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[-2px] top-[3px] w-[88.264px]" data-name="热血少年漫">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-475.66%] max-w-none top-0 w-[960.3%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[84px] relative shrink-0 w-[241px]" data-name="button">
      <Component5 />
      <ImgRenwu5 />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[81.06px] not-italic text-[#404040] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">热血少年漫</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[80px] right-[4px] top-1/2 translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu6() {
  return (
    <div className="absolute left-[8.95px] size-[80px] top-[-1.16px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-0 top-[3px] w-[83.636px]" data-name="港漫风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-607.51%] max-w-none top-0 w-[1013.44%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[84px] relative shrink-0 w-[224px]" data-name="button">
      <Component6 />
      <ImgRenwu6 />
      <div className="absolute flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] left-[86px] not-italic text-[#40413f] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">港漫风格</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[80px] right-0 top-1/2 translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu7() {
  return (
    <div className="absolute left-[10.95px] size-[80px] top-[-1.16px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[2px] top-px w-[79.008px]" data-name="美式漫画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-754.81%] max-w-none top-0 w-[1072.8%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[84px] relative shrink-0 w-[220px]" data-name="button">
      <Component7 />
      <ImgRenwu7 />
      <div className="absolute flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] left-[86px] not-italic text-[#494949] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">美式漫画</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[80px] right-0 top-1/2 translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu8() {
  return (
    <div className="absolute left-[8.95px] size-[80px] top-[-1.16px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-px top-[3px] w-[79.669px]" data-name="水彩插画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-853.11%] max-w-none top-0 w-[1063.9%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[84px] relative shrink-0 w-[220px]" data-name="button">
      <Component8 />
      <ImgRenwu8 />
      <div className="absolute flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] left-[85px] not-italic text-[#4c4c4c] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">水彩插画</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute h-[80px] right-[-10px] top-1/2 translate-y-[-50%] w-[210px]" data-name="Component 6">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent6} />
    </div>
  );
}

function ImgRenwu9() {
  return (
    <div className="absolute left-[7.1px] size-[80px] top-[-3.01px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[5.4px] top-[2.33px] w-[70.083px]" data-name="铅笔素描">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-1098.11%] max-w-none top-0 w-[1209.43%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[84px] relative shrink-0 w-[210px]">
      <Component9 />
      <ImgRenwu9 />
      <div className="absolute flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] left-[82px] not-italic text-[#444] text-[25px] top-[calc(50%-0.5px)] translate-y-[-50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">铅笔素描</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="button">
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[0.06px] top-[-0.04px] w-[651.892px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Button9 />
    </div>
  );
}

export default function MobanS() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="moban_s">
      <Frame />
    </div>
  );
}