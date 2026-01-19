import imgXunhuan21 from "figma:asset/5d2e010a9242d6ecaf27e08c4cd77a95fc635c5f.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">神仙对象</p>
      </div>
      <div className="relative shrink-0 size-[17px]" data-name="xunhuan2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan21} />
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
    </div>
  );
}