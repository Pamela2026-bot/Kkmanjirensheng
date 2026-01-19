import svgPaths from "./svg-j7qvqu22xc";
import imgImage from "figma:asset/f624659d04fa1a68b239f7834bdcf22687695ba6.png";
import imgImage1 from "figma:asset/de3627606355f4b4a49b1cab111dcb240dfe3f50.png";
import imgImage2 from "figma:asset/a1d51aa87f0c3a0c962d748c05abcd66efef42c0.png";
import imgLogo21 from "figma:asset/5fdbaa866905802849e668820867459ac5addc93.png";
import imgImage3 from "figma:asset/fd46d01768300b3baaf91df1c6f5d0fd5ede2656.png";
import imgImgBiaoti1 from "figma:asset/a3378aaf2ea1140f7879d5d494775dfb5d9ea093.png";
import imgManhua4 from "figma:asset/1992ee527cfa8d457d4deb39ae0913ac100bbbeb.png";
import imgBg from "figma:asset/4a5ce5711b4e15a0cc00c8740153329eb6eeadb8.png";
import imgImage4 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";
import imgButtonFenxiang from "figma:asset/43ab5f94cd9080db17b82582252073e780d92593.png";
import imgBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";

function Groups1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1004.5px] h-[350.225px] right-0 w-[750px]" data-name="Groups">
      <div className="absolute bottom-[101.35px] right-[653.15px] size-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-[171.17px] h-[36.036px] right-[50.67px] w-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bottom-[199.32px] right-[40.54px] size-[18.018px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[116.192px] left-[171.45px] top-[177.62px] w-[416.102px]" data-name="img_title_finish">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416.102 116.192">
          <path d={svgPaths.pb938700} fill="var(--fill-0, black)" id="img_title_finish" />
        </svg>
      </div>
      <div className="absolute h-[47.93px] left-[300.56px] top-[96.86px] w-[141.792px]" data-name="logo2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo21} />
      </div>
    </div>
  );
}

function Groups() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[266.89px] h-[1354.73px] right-0 w-[750px]" data-name="Groups">
      <div className="absolute bottom-0 h-[1013.514px] right-[19.14px] w-[709.459px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <Groups1 />
      <div className="absolute h-[94px] left-[423.45px] top-[257.81px] w-[238px]" data-name="img_biaoti 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgBiaoti1} />
      </div>
      <div className="absolute h-[867px] left-[51.9px] top-[377.62px] w-[647px]" data-name="manhua_4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManhua4} />
      </div>
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] h-[65px] leading-[61.538px] left-[calc(50%-73.1px)] not-italic opacity-40 text-[24px] text-black top-[1247.62px] w-[151px] whitespace-pre-wrap">长按保存图片</p>
    </div>
  );
}

function Root() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[1621.622px] left-[-0.45px] right-[0.45px] top-[0.19px]" data-name="Root">
      <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px]" data-name="bg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      </div>
      <div className="absolute bottom-0 h-[1621.622px] right-0 w-[1.126px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Groups />
    </div>
  );
}

function ButtonFenxiang() {
  return (
    <div className="absolute content-stretch flex h-[91px] items-center justify-center left-[262.55px] px-[196px] py-[22px] top-0 w-[461px]" data-name="button_fenxiang">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonFenxiang} />
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[33.784px] text-white whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">分享</p>
      </div>
    </div>
  );
}

function ButtonOne() {
  return (
    <div className="absolute h-[90px] left-[36px] top-0 w-[208px]" data-name="button_one">
      <div className="absolute h-[90px] left-0 top-0 w-[208px]" data-name="back">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBack} />
      </div>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-[41px] not-italic text-[32px] text-black top-[24px] uppercase whitespace-pre">再记一次</p>
    </div>
  );
}

function ButtoGroups() {
  return (
    <div className="absolute h-[91px] left-[-0.55px] top-[1405px] w-[750px]" data-name="butto_groups">
      <ButtonFenxiang />
      <ButtonOne />
    </div>
  );
}

export default function FigmaDesignPng() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Figma design - 绘制完成.png">
      <Root />
      <ButtoGroups />
    </div>
  );
}