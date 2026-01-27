import svgPaths from "./svg-3y93qejsfa";
import imgImgFenjing1 from "figma:asset/dbb171d2225adde8ae64766bcaab50b15fb769c7.png";
import imgImgFenjing2 from "figma:asset/be41c60c5de6a7413fdc9e12822d66e6c19f9322.png";
import imgImgFenjing3 from "figma:asset/a52ad586e600889efc6d4d13f87843ab9cb840b3.png";
import imgImgFenjing4 from "figma:asset/acfc209956f8207c967483c533b9a98dff56bc68.png";
import imgLogo3 from "figma:asset/92dc9658465759a43da7aa00eb06e3555084cc95.png";
import imgImgErweima from "figma:asset/bbf445879bc68e48a13f507f1ea6de17bf17e475.png";
import img from "figma:asset/f7cd03bc127f2158e7ceccbb61f0098f04691af1.png";
import imgIcWeixin from "figma:asset/5be50b56b7550126314326c2300159aaf3e4baf2.png";
import imgIcPengyouquan from "figma:asset/710ed1c6744864fc91fd99f2e32dc00bf46c2333.png";
import imgIcQq from "figma:asset/d3025ffb8b182b9d38c49552ad2ee3dcfe3779a0.png";
import imgIcQqkongjian from "figma:asset/873effe5288c14bc17b87700602efcbfc93fbbec.png";
import imgIcXiazai from "figma:asset/09ea51ee4a5b64e948cba4e399b588ee5e3c2c0b.png";

function Component() {
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

function Frame2() {
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

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.305px] items-start left-[35.34px] overflow-clip top-[808.98px] w-[248.452px]">
      <Frame2 />
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
    <div className="h-[915px] overflow-clip relative shrink-0 w-[700px]" data-name="Groups">
      <div className="absolute h-[915px] left-0 top-0 w-[700px]" data-name="image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 915">
          <path d={svgPaths.p1fa47780} fill="var(--fill-0, #FBFBFB)" id="image" />
        </svg>
      </div>
      <Component />
      <Manhua />
      <div className="absolute left-[563.52px] size-[103.547px] top-[795.47px]" data-name="img_erweima">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgErweima} />
      </div>
      <div className="absolute h-[87.796px] left-[572.33px] top-[803.18px] w-[85.754px]" data-name="二维码">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <Frame3 />
    </div>
  );
}

function Weixin() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="weixin">
      <div className="relative shrink-0 size-[70px]" data-name="ic_weixin">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcWeixin} />
      </div>
      <p className="css-4hzbpn font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px]">微信</p>
    </div>
  );
}

function Pengyouquan() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="pengyouquan">
      <div className="relative shrink-0 size-[70px]" data-name="ic_pengyouquan">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcPengyouquan} />
      </div>
      <p className="css-4hzbpn font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px]">朋友圈</p>
    </div>
  );
}

function Qq() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="qq">
      <div className="relative shrink-0 size-[70px]" data-name="ic_qq">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcQq} />
      </div>
      <p className="css-4hzbpn font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px]">QQ</p>
    </div>
  );
}

function Qqkongjian() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="qqkongjian">
      <div className="relative shrink-0 size-[70px]" data-name="ic_qqkongjian">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcQqkongjian} />
      </div>
      <p className="css-4hzbpn font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px]">QQ空间</p>
    </div>
  );
}

function Xiazaitupian() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="xiazaitupian">
      <div className="relative shrink-0 size-[70px]" data-name="ic_xiazai">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcXiazai} />
      </div>
      <p className="css-4hzbpn font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px]">下载图片</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Weixin />
      <Pengyouquan />
      <Qq />
      <Qqkongjian />
      <Xiazaitupian />
    </div>
  );
}

function IcClosure() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="ic_closure">
      <div className="absolute inset-[-14.58%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 55">
          <g id="ic_closure">
            <g id="Rectangle">
              <rect fill="var(--fill-0, white)" fillOpacity="0.1" height="48" rx="24" width="48" />
              <rect height="45" rx="22.5" stroke="var(--stroke-0, white)" strokeOpacity="0.4" strokeWidth="3" width="45" x="1.5" y="1.5" />
            </g>
            <path d="M31.5 16.5L16.5 31.5" id="Vector 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M16.5 16.5L31.5 31.5" id="Vector 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[1173px] items-center left-1/2 top-[265px] translate-x-[-50%]">
      <Groups />
      <Frame />
      <IcClosure />
    </div>
  );
}

export default function FigmaDesignPng() {
  return (
    <div className="relative size-full" data-name="Figma design - 分享.png">
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[1624px] left-0 top-[-0.19px] w-[750px]" data-name="gaosimohu" />
      <Frame1 />
    </div>
  );
}