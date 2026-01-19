import imgImage from "figma:asset/fd46d01768300b3baaf91df1c6f5d0fd5ede2656.png";
import imgLoadingBook from "figma:asset/80012b9815e236283e3f301af59f5dc5a4cbcb51.png";
import imgBg from "figma:asset/4a5ce5711b4e15a0cc00c8740153329eb6eeadb8.png";
import imgImage1 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";
import imgImage2 from "figma:asset/f624659d04fa1a68b239f7834bdcf22687695ba6.png";
import imgImage3 from "figma:asset/de3627606355f4b4a49b1cab111dcb240dfe3f50.png";
import imgImage4 from "figma:asset/a1d51aa87f0c3a0c962d748c05abcd66efef42c0.png";
import imgLogo21 from "figma:asset/5fdbaa866905802849e668820867459ac5addc93.png";
import imgBiaoti1 from "figma:asset/c3dc68c5455d1a684184386c6a2115f02fe2fd17.png";

function Groups() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[266.89px] h-[1354.73px] right-0 w-[750px]" data-name="Groups">
      <div className="absolute bottom-0 h-[1013.514px] right-[19.14px] w-[709.459px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-[calc(50%-122.55px)] not-italic text-[36px] text-black top-[812.62px] whitespace-pre">正在阅读故事...</p>
      <div className="absolute left-[calc(50%-0.05px)] size-[139px] top-[673.81px] translate-x-[-50%]" data-name="loading_book">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLoadingBook} />
      </div>
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Groups />
    </div>
  );
}

function Groups1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[350.225px] right-[0.9px] top-0 w-[750px]" data-name="Groups">
      <div className="absolute bottom-[101.35px] right-[653.15px] size-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute bottom-[171.17px] h-[36.036px] right-[50.67px] w-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute bottom-[199.32px] right-[40.54px] size-[18.018px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[47.93px] left-[300.56px] top-[86.86px] w-[141.792px]" data-name="logo2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo21} />
      </div>
      <div className="absolute h-[170px] left-[162.9px] top-[155px] w-[416px]" data-name="biaoti 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBiaoti1} />
      </div>
    </div>
  );
}

export default function FigmaDesignloadingPng() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Figma design - 生成剧本loading.png">
      <Root />
      <Groups1 />
    </div>
  );
}