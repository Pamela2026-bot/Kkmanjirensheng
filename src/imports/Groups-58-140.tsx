import imgImage from "figma:asset/f624659d04fa1a68b239f7834bdcf22687695ba6.png";
import imgImage1 from "figma:asset/de3627606355f4b4a49b1cab111dcb240dfe3f50.png";
import imgImage2 from "figma:asset/a1d51aa87f0c3a0c962d748c05abcd66efef42c0.png";
import imgLogo21 from "figma:asset/5fdbaa866905802849e668820867459ac5addc93.png";
import imgBiaoti1 from "figma:asset/c3dc68c5455d1a684184386c6a2115f02fe2fd17.png";

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <div className="absolute bottom-[63.06px] right-[592.94px] size-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-[134.06px] h-[36.036px] right-[152.94px] w-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bottom-[162.21px] right-[142.81px] size-[18.018px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
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
