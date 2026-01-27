import imgComponent101 from "figma:asset/ae15f00af34083b24533af65ea78eaa1ade8dc9a.png";
import img from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";
import img1 from "figma:asset/0998c63f86525358d26fafa731b3801081346889.png";
import imgComponent111 from "figma:asset/0f0ea4c95651954a2a36d0671ab3ca706c1052b5.png";
import imgQ from "figma:asset/faef3107ff6973d86c8cbf3fb1a6365202db6d1a.png";

function Component() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[73px] left-[-3px] top-[-1px] w-[85px]" data-name="日式漫画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-0.79%] max-w-none top-0 w-[1017.46%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#2a2a2a] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">日式漫画</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component />
      <Frame6 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu1() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[68px] left-[0.84px] top-[5.03px] w-[79px]" data-name="彩色动漫">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.74%] left-0 max-w-none top-0 w-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu1 />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#2a2a2a] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">彩色动漫</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component1 />
      <Frame7 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 11">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent111} />
      </div>
    </div>
  );
}

function ImgRenwu2() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[-3.58px] top-[-3.67px] w-[87.934px]" data-name="吉卜力风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-189.47%] max-w-none top-0 w-[963.91%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[83px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[21px] relative size-full">
          <ImgRenwu2 />
          <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#424341] text-[26px] text-right">
            <p className="css-ew64yg leading-[normal]">吉卜力风格</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col h-[90px] items-center justify-center relative shrink-0 w-[235px]" data-name="button_5">
      <Component2 />
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 11">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent111} />
      </div>
    </div>
  );
}

function ImgRenwu3() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[78px] left-[-4px] top-[-3.8px] w-[91px]" data-name="新海诚风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-305.56%] max-w-none top-0 w-[1017.46%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[83px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[21px] relative size-full">
          <ImgRenwu3 />
          <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#3d3e3c] text-[26px] text-right">
            <p className="css-ew64yg leading-[normal]">新海诚风格</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col h-[90px] items-center justify-center relative shrink-0 w-[235px]" data-name="button_5">
      <Component3 />
      <Frame5 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu4() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[68px] left-[-3px] top-[3px] w-[82px]" data-name="Q版可爱">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.63%] left-[-0.6%] max-w-none top-[0.46%] w-[100.03%]" src={imgQ} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu4 />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#3d3e3c] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">Q版可爱</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component4 />
      <Frame8 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 11">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 11 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent111} />
      </div>
    </div>
  );
}

function ImgRenwu5() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[-6px] top-[3px] w-[88.264px]" data-name="热血少年漫">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-475.66%] max-w-none top-0 w-[960.3%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[83px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[21px] relative size-full">
          <ImgRenwu5 />
          <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#404040] text-[26px] text-right">
            <p className="css-ew64yg leading-[normal]">热血少年漫</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col h-[90px] items-center justify-center relative shrink-0 w-[235px]" data-name="button_5">
      <Component5 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu6() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-0 top-[3px] w-[83.636px]" data-name="港漫风格">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-607.51%] max-w-none top-0 w-[1013.44%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu6 />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#454646] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">港漫风格</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component6 />
      <Frame10 />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu7() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-[2px] top-px w-[79.008px]" data-name="美式漫画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-754.81%] max-w-none top-0 w-[1072.8%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu7 />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#3d3e3c] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">美式漫画</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component7 />
      <Frame11 />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu8() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[71.405px] left-px top-[3px] w-[79.669px]" data-name="水彩插画">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-853.11%] max-w-none top-0 w-[1063.9%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu8 />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#404040] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">水彩插画</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component8 />
      <Frame12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]" data-name="Component 10">
      <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]" data-name="Component 10 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent101} />
      </div>
    </div>
  );
}

function ImgRenwu9() {
  return (
    <div className="mr-[-1px] relative shrink-0 size-[80px]" data-name="img_renwu_1">
      <div className="absolute h-[76px] left-[5.39px] top-[-2.26px] w-[75px]" data-name="铅笔素描">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.19%] left-[-1098.11%] max-w-none top-0 w-[1209.43%]" src={img} />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
      <ImgRenwu9 />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] mr-[-1px] not-italic relative shrink-0 text-[#454646] text-[26px] text-right">
        <p className="css-ew64yg leading-[normal]">铅笔素描</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center pr-[198px] py-[3px] relative shrink-0 w-[217px]" data-name="button_4">
      <Component9 />
      <Frame13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Button9 />
    </div>
  );
}

export default function Groups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative size-full" data-name="Groups">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}