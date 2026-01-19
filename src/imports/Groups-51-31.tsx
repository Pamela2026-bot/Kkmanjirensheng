import imgImage from "figma:asset/f624659d04fa1a68b239f7834bdcf22687695ba6.png";
import imgImage1 from "figma:asset/de3627606355f4b4a49b1cab111dcb240dfe3f50.png";
import imgImage2 from "figma:asset/a1d51aa87f0c3a0c962d748c05abcd66efef42c0.png";
import imgLogo21 from "figma:asset/5fdbaa866905802849e668820867459ac5addc93.png";
import imgTitleFinish from "figma:asset/11a51d8121f1666f818050954c2a39f74f9e34aa.png";

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <div className="absolute bottom-[101.35px] right-[653.15px] size-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-[171.17px] h-[36.036px] right-[50.67px] w-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bottom-[199.32px] right-[40.54px] size-[18.018px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[116.192px] left-[calc(50%+0.5px)] top-[174.62px] translate-x-[-50%] w-[416.102px]" data-name="img_title_finish">
        <img alt="绘制完成" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgTitleFinish} />
      </div>
      <div className="absolute h-[47.93px] left-[300.11px] top-[86.48px] w-[141.792px]" data-name="logo2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo21} />
      </div>
    </div>
  );
}