import imgButton from "figma:asset/9d17f46e43c53e5709b80964a914732dc3612d5d.png";

function button() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center px-[246px] py-[23px] relative shrink-0 w-[687px]" data-name="生成漫画剧本button">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[102.03%] left-[-0.07%] max-w-none top-[-0.46%] w-full" src={imgButton} />
      </div>
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white">
        <p className="css-ew64yg leading-[normal]">生成漫画剧本</p>
      </div>
    </div>
  );
}

export default function ButtoGroups() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[90px] pt-[20px] relative size-full" data-name="butto_groups">
      <button />
    </div>
  );
}