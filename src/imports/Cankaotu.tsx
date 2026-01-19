import imgImage from "figma:asset/8bc68a58078960f25d10cdd9cbefd4f89506c20d.png";

export default function Cankaotu() {
  return (
    <div className="relative size-full" data-name="cankaotu">
      <div className="absolute bottom-[9.88px] h-[102.477px] right-0 w-[111.486px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-[15.77px] flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[31.532px] justify-center leading-[0] not-italic right-[88.97px] text-[#3d3d3d] text-[22px] translate-x-[100%] translate-y-[50%] w-[81.081px]">
        <p className="leading-[normal] whitespace-pre-wrap">参考图</p>
      </div>
    </div>
  );
}