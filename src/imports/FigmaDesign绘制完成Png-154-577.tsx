import svgPaths from "./svg-gye7ots30p";
import imgButtonOne1 from "figma:asset/69de948d7cd03c37f1e947da1dc8143b986f071a.png";
import imgImgFenjing1 from "figma:asset/dbb171d2225adde8ae64766bcaab50b15fb769c7.png";
import imgImgFenjing2 from "figma:asset/be41c60c5de6a7413fdc9e12822d66e6c19f9322.png";
import imgImgFenjing3 from "figma:asset/a52ad586e600889efc6d4d13f87843ab9cb840b3.png";
import imgImgFenjing4 from "figma:asset/acfc209956f8207c967483c533b9a98dff56bc68.png";
import imgLogo3 from "figma:asset/92dc9658465759a43da7aa00eb06e3555084cc95.png";
import imgImgErweima from "figma:asset/bbf445879bc68e48a13f507f1ea6de17bf17e475.png";
import img from "figma:asset/f7cd03bc127f2158e7ceccbb61f0098f04691af1.png";
import imgButton from "figma:asset/cf4bcd0d0a54ae94b807f6476bb16067788ca525.png";
import imgBg from "figma:asset/a414cc1cab9532be936d7017bf7b90b9478bb82f.png";
import imgImgBiaoti1 from "figma:asset/53a7721e9074d13357770789642fa4c12f60cde6.png";
import imgBgNeirong from "figma:asset/34a1c0f54f3f7dfdf8479e34b66f99181ee0e1f2.png";
import img1 from "figma:asset/6aef243b87c7016a05f394c93e72c55b3133a22a.png";
import imgLogo from "figma:asset/c301e171aed62395c79f7ef941923a62626a0795.png";

function Component() {
  return (
    <div className="h-[90px] relative shrink-0 w-[332px]" data-name="重新编辑">
      <div className="absolute h-[90px] left-[-0.5px] top-0 w-[332px]" data-name="button_one 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonOne1} />
      </div>
      <p className="absolute css-ew64yg font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-[calc(50%-64px)] not-italic text-[32px] text-black top-[calc(50%-22px)] uppercase">重新编辑</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[90px] relative shrink-0 w-[332px]" data-name="再画一张">
      <div className="absolute h-[90px] left-[-0.5px] top-0 w-[332px]" data-name="button_one 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonOne1} />
      </div>
      <p className="absolute css-ew64yg font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-[calc(50%-64px)] not-italic text-[32px] text-black top-[calc(50%-22px)] uppercase">再画一张</p>
    </div>
  );
}

function ButtoGroups() {
  return (
    <div className="absolute bottom-[2px] content-stretch flex gap-[19px] items-start justify-center left-[-1px] pb-[90px] w-[750px]" data-name="butto_groups">
      <Component />
      <Component1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-[20px] pt-[32px] top-0 w-[700px]" data-name="小标题">
      <p className="css-ew64yg font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[36px] text-black tracking-[1.5px]">“快看！我的奇葩亲戚”</p>
    </div>
  );
}

function Shang() {
  return (
    <div className="content-stretch flex gap-[11.016px] h-[332.613px] items-center relative shrink-0 w-full" data-name="shang">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing1">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImgFenjing1} />
        <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing2">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImgFenjing2} />
        <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
      </div>
    </div>
  );
}

function Xia() {
  return (
    <div className="content-stretch flex gap-[11.016px] h-[332.613px] items-center relative shrink-0 w-full" data-name="xia">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing3">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImgFenjing3} />
        <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing4">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImgFenjing4} />
        <div aria-hidden="true" className="absolute border-[3.305px] border-black border-solid inset-0" />
      </div>
    </div>
  );
}

function Manhua() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.016px] h-[695.1px] items-start left-1/2 pointer-events-none top-[102.92px] translate-x-[-50%] w-[668.583px]" data-name="manhua">
      <Shang />
      <Xia />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4.789px] items-center relative shrink-0">
      <div className="h-[38px] relative shrink-0 w-[37.463px]" data-name="快看LOGO_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[322.86%]" src={imgLogo3} />
        </div>
      </div>
      <div className="h-[31px] relative shrink-0 w-[96px]" data-name="快看LOGO_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.71%] left-[-55.38%] max-w-none top-[-25.88%] w-[155.27%]" src={imgLogo3} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.305px] items-start left-[35.34px] top-[808.98px] w-[248.452px]">
      <Frame />
      <div className="flex h-[29.441px] items-center justify-center min-w-full relative shrink-0 w-[min-content]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "1027.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.33deg] skew-x-[-0.01deg] w-full">
          <p className="css-4hzbpn font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-30 relative text-[20px] text-black tracking-[1.1016px] w-full">长按扫描二维码可体验</p>
        </div>
      </div>
    </div>
  );
}

function Groups() {
  return (
    <div className="absolute h-[915px] left-[25px] overflow-clip top-[280px] w-[700px]" data-name="Groups">
      <div className="absolute h-[915px] left-0 top-0 w-[700px]" data-name="image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="image" />
        </svg>
      </div>
      <Component2 />
      <Manhua />
      <div className="absolute left-[563.52px] size-[103.547px] top-[795.47px]" data-name="img_erweima">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgErweima} />
      </div>
      <div className="absolute h-[87.796px] left-[572.33px] top-[803.18px] w-[85.754px]" data-name="二维码">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
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

function Component3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="下载">
      <Frame2 />
      <p className="css-ew64yg font-['PingFang_SC:Regular',sans-serif] leading-[61.538px] not-italic opacity-40 relative shrink-0 text-[#222] text-[24px]">点击下载或长按图片保存</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[91px] items-center justify-center px-[246px] relative shrink-0 w-[652px]" data-name="button_分享">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButton} />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white">
        <p className="css-ew64yg leading-[normal]">分享</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%+2.5px)] pt-[60px] top-[1117px] translate-x-[-50%] w-[705px]" style={{ backgroundImage: "linear-gradient(178.009deg, rgba(255, 255, 255, 0) 7.2242%, rgba(255, 255, 255, 0.9) 21.361%, rgb(255, 255, 255) 39.933%)" }}>
      <Component3 />
      <Button />
    </div>
  );
}

export default function FigmaDesignPng() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Figma design - 绘制完成.png">
      <div className="absolute h-[1624px] left-0 top-0 w-[750px]" data-name="bg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      </div>
      <div className="absolute h-[142px] left-[calc(50%+179px)] top-[167px] translate-x-[-50%] w-[246px]" data-name="img_biaoti1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgBiaoti1} />
      </div>
      <div className="absolute h-[1284px] left-0 top-[140px] w-[750px]" data-name="bg_neirong">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgNeirong} />
      </div>
      <ButtoGroups />
      <div className="absolute h-[103px] left-[calc(50%+7.5px)] top-[145px] translate-x-[-50%] w-[411px]" data-name="绘制完成 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <Groups />
      <Frame3 />
      <div className="absolute h-[38px] left-[313.66px] top-[1562.18px] w-[123px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}