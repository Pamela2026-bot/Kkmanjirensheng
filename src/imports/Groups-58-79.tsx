import imgImage from "figma:asset/f624659d04fa1a68b239f7834bdcf22687695ba6.png";
import imgImage1 from "figma:asset/de3627606355f4b4a49b1cab111dcb240dfe3f50.png";
import imgImage2 from "figma:asset/a1d51aa87f0c3a0c962d748c05abcd66efef42c0.png";
import imgImgTitleFinish from "figma:asset/11a51d8121f1666f818050954c2a39f74f9e34aa.png";
import imgLogo21 from "figma:asset/5fdbaa866905802849e668820867459ac5addc93.png";

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <div className="absolute bottom-[63.25px] right-[593.39px] size-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-[134.24px] h-[36.036px] right-[123.39px] w-[37.162px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bottom-[162.39px] right-[113.26px] size-[18.018px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[117px] left-[calc(50%-0.05px)] top-[calc(50%+58.2px)] translate-x-[-50%] translate-y-[-50%] w-[417px]" data-name="img_title_finish">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgTitleFinish} />
      </div>
      <div className="absolute h-[47.93px] left-[300.11px] top-[86.48px] w-[141.792px]" data-name="logo2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo21} />
      </div>
    </div>
  );
}
