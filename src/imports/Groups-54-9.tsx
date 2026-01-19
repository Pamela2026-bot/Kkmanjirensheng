import imgImgLine from "figma:asset/c0762e2474149013581116f4ef06f1142dba6d65.png";
import imgIcDengpao from "figma:asset/b18c8fb4ba87df8e8fc90c9d3e391479ac0aec14.png";

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <div className="absolute bottom-[5.63px] h-[18.018px] right-[64.19px] w-[579.955px]" data-name="img_line">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgLine} />
      </div>
      <div className="absolute bottom-[51.57px] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic right-[612.61px] text-[#b2b2b2] text-[24px] translate-x-[100%] translate-y-[50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">Ai已经为你设计好了分镜，你可以微调描述和对白。</p>
      </div>
      <div className="absolute bottom-[41.67px] h-[23.649px] right-[617.12px] w-[14.64px]" data-name="ic_dengpao">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcDengpao} />
      </div>
      <div className="absolute bottom-[95.72px] flex flex-col font-['PingFang_SC:Medium',sans-serif] h-[45.045px] justify-center leading-[0] not-italic right-[459.46px] text-[#222] text-[32px] translate-x-[100%] translate-y-[50%] w-[236.486px]">
        <p className="leading-[normal] whitespace-pre-wrap">确认/修改剧本</p>
      </div>
    </div>
  );
}