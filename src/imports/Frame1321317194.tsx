export default function Frame() {
  return (
    <div className="bg-white flex gap-[20px] items-start pl-0 pr-[20px] py-[20px] relative rounded-[13px] w-full">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row self-stretch">
        <div className="bg-[#d9dadc] rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
      </div>
      <div className="flex-1 font-['PingFang_SC:Bold',sans-serif] not-italic text-[#222] text-[26px]">
        <p className="leading-[39px] whitespace-pre-wrap m-0">主角走在阳光明媚的街道上，突然发现脚下有一只发光的啦啦啦啦啦啦啦啦啦</p>
      </div>
    </div>
  );
}