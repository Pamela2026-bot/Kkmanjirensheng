import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";

export default function Groups() {
  return (
    <div className="bg-[#eeeff1] flex flex-col items-start p-[20px] relative rounded-[11.261px] w-full" data-name="Groups">
      <div className="flex gap-[20px] items-start w-full">
        <div className="flex flex-1 gap-[12px] items-start">
          <div className="font-['PingFang_SC:Medium',sans-serif] not-italic shrink-0 text-[#989da9] text-[26px] w-[52px]">
            <p className="leading-[39px] whitespace-pre-wrap m-0">对白</p>
          </div>
          <div className="flex-1">
            <div className="font-['PingFang_SC:Bold',sans-serif] not-italic text-[#464f5d] text-[26px] w-full">
              <p className="leading-[39px] whitespace-pre-wrap m-0">{`主角：'咦？这是什么？'`}</p>
            </div>
          </div>
        </div>
        <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
        </div>
      </div>
    </div>
  );
}