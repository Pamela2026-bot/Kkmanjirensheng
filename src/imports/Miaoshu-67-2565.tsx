import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";

export default function Miaoshu() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-[623px]" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[24px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">PANEL1 画面描述</p>
      </div>
      {/* 画面描述区域 - 自适应高度 */}
      <div className="bg-white content-stretch flex gap-[20px] items-start pl-0 pr-[20px] py-[20px] relative rounded-[13px] shrink-0 w-[612px]">
        <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-stretch self-stretch">
          <div className="bg-[#d9dadc] rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Bold',sans-serif] justify-start leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
          <p className="leading-[39px] whitespace-pre-wrap">主角走在阳光明媚的街道上，突然发现脚下有一只发光的啦啦啦啦啦啦啦啦啦</p>
        </div>
      </div>
      {/* 对白区域 - 自适应高度 */}
      <div className="bg-[#eeeff1] content-stretch flex flex-col items-start p-[20px] relative rounded-[11.261px] shrink-0 w-[617.117px]" data-name="Groups">
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[576.577px]">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
            <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-start leading-[0] not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
              <p className="leading-[39px] whitespace-pre-wrap">对白</p>
            </div>
            <div className="flex flex-[1_0_0] items-start justify-start min-h-px min-w-px relative">
              <div className="w-full">
                <div className="flex flex-col font-['PingFang_SC:Bold',sans-serif] justify-start leading-[0] not-italic relative text-[#464f5d] text-[26px] w-full">
                  <p className="leading-[39px] whitespace-pre-wrap">{`主角：'咦？这是什么？'`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}