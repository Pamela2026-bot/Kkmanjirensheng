import svgPaths from "./svg-5fv16l04d5";
import imgDengpao from "figma:asset/b7f4048c7007d2bededa6552d67be0b630090bb8.png";
import imgDenglong from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";
import imgEmo from "figma:asset/d11bae0c4a990af9f311de74cb74ba8942251105.png";
import imgShangchuan1 from "figma:asset/8bc68a58078960f25d10cdd9cbefd4f89506c20d.png";
import imgBgNeirong from "figma:asset/cb50e47ac21ede477f3a8f4c8676b039fcd538d5.png";
import imgImgTuanzi from "figma:asset/8a8f345f168f409597b3a2560c2125b19d6aad97.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-[54px] top-[523px] w-[122px]">
      <div className="h-[23.649px] relative shrink-0 w-[13.514px]" data-name="dengpao">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDengpao} />
      </div>
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3a2c] text-[24px]">
        <p className="css-ew64yg leading-[normal]">话题灵感:</p>
      </div>
    </div>
  );
}

function Component1() {
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

function ButtonHot() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex gap-[4px] h-[51px] items-center pl-[8px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button_hot">
      <Component1 />
      <Frame />
    </div>
  );
}

function Xunhuan1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black">
        <p className="css-ew64yg leading-[normal]">塑料友情</p>
      </div>
      <Xunhuan1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
    </div>
  );
}

function Xunhuan2() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black">
        <p className="css-ew64yg leading-[normal]">神仙对象</p>
      </div>
      <Xunhuan2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <Frame3 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Component 7">
      <div className="absolute inset-[7.69%_2.59%_5.68%_2.12%]" data-name="emo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmo} />
      </div>
    </div>
  );
}

function Xunhuan3() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black">
        <p className="css-ew64yg leading-[normal]">魔鬼亲戚</p>
      </div>
      <Xunhuan3 />
    </div>
  );
}

function ButtonHot1() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex gap-[4px] h-[51px] items-center pl-[8px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button_hot">
      <Component2 />
      <Frame4 />
    </div>
  );
}

function Xunhuan4() {
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black">
        <p className="css-ew64yg leading-[normal]">有毒父母</p>
      </div>
      <Xunhuan4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame5 />
    </div>
  );
}

function Xunhuan5() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black">
        <p className="css-ew64yg leading-[normal]">我的老师</p>
      </div>
      <Xunhuan5 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame6 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[196px] overflow-clip top-[514px] w-[494px]" data-name="话题灵感模块">
      <ButtonHot />
      <Button />
      <Button1 />
      <ButtonHot1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Cankaotu() {
  return (
    <div className="absolute h-[112.362px] left-[54px] top-[353px] w-[111.486px]" data-name="cankaotu">
      <div className="absolute bottom-[9.88px] h-[102.477px] right-0 w-[111.486px]" data-name="shangchuan1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShangchuan1} />
      </div>
      <div className="absolute bottom-[15.77px] flex flex-col font-['PingFang_SC:Medium',sans-serif] h-[31.532px] justify-center leading-[0] not-italic right-[88.97px] text-[#3d3d3d] text-[22px] translate-x-[100%] translate-y-[50%] w-[81.081px]">
        <p className="css-4hzbpn leading-[normal]">参考图</p>
      </div>
    </div>
  );
}

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <div className="absolute h-[592px] left-0 top-[19px] w-[750px]" data-name="bg_neirong">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgNeirong} />
      </div>
      <div className="absolute h-[3px] left-[54px] top-[120px] w-[643px]" data-name="img_line_1">
        <div className="absolute inset-[-51.47%_-0.19%_-44.99%_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.5 5.89402">
            <path d={svgPaths.p32e5d600} fill="var(--stroke-0, #4E4E4E)" id="img_line_1" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[137px] justify-center leading-[0] left-[54px] not-italic opacity-40 text-[#222] text-[28px] top-[212.5px] translate-y-[-50%] w-[642px]">
        <p className="css-4hzbpn leading-[45px]">例如：大年三十，我回到老家，爷爷奶奶准备了一大桌年夜饭..或者写下你的新年愿望：希望心的一年能升职加薪，脱单成功...</p>
      </div>
      <div className="absolute bottom-[535.07px] flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[43.919px] justify-center leading-[0] not-italic right-[695.59px] text-[#2c2c2c] text-[34px] translate-x-[100%] translate-y-[50%] w-[204.955px]">
        <p className="css-4hzbpn leading-[normal]">写下你的故事</p>
      </div>
      <div className="absolute h-0 left-[54px] top-[488px] w-[645px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645 1">
            <path d="M0 0.5H645" id="Line 3" stroke="var(--stroke-0, black)" strokeDasharray="5 5" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Frame1 />
      <div className="absolute bg-gradient-to-l from-white h-[66px] left-[656px] to-[rgba(255,255,255,0)] top-[501px] w-[31px]" />
      <Component />
      <Cankaotu />
      <div className="absolute h-[150px] left-[468px] top-[-30px] w-[210px]" data-name="img_tuanzi">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgTuanzi} />
      </div>
    </div>
  );
}