export default function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center pl-0 pr-[20px] py-[20px] relative rounded-[13px] size-full">
      <div aria-hidden="true" className="absolute border-3 border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
        <p className="leading-[39px]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 700 }}>主角走在阳光明媚的街道上，突然发现脚下有一只发光的啦啦啦啦啦啦啦啦啦</p>
      </div>
    </div>
  );
}
