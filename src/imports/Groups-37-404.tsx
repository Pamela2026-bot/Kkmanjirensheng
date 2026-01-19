import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";

function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center pl-0 pr-[20px] py-[20px] relative rounded-[13px] shrink-0 w-[612px]">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black">
        <p className="leading-[38px] whitespace-pre-wrap">主角走在阳光明媚的街道上，突然发现脚下有一只发光的啦啦啦啦啦啦啦啦啦</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[20px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[27.538px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "168.875", "--transform-inner-height": "22.5" } as React.CSSProperties}>
        <div className="flex-none skew-x-[348.255deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[28.153px] justify-center leading-[0] not-italic relative text-[#464f5d] text-[22px] w-full">
            <p className="leading-[normal] whitespace-pre-wrap">{`主角：'咦？这是什么？'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[576.577px]">
      <Frame2 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#eeeff1] content-stretch flex flex-col items-start justify-center left-[5.63px] p-[20px] rounded-[11.261px] top-[1.81px] w-[617.117px]">
      <Frame3 />
    </div>
  );
}

function Groups1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[69.82px] relative shrink-0 w-full" data-name="Groups">
      <Frame4 />
    </div>
  );
}

function Miaoshu({ className }: { className?: string }) {
  return (
    <div className={className} data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[23.649px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">PANEL1 画面描述</p>
      </div>
      <Frame />
      <Groups1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center pl-0 pr-[20px] py-[20px] relative rounded-[13px] shrink-0 w-[612px]">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black">
        <p className="leading-[38px] whitespace-pre-wrap">猫咪突然变成了一个巨大的机甲战士，路人惊恐万分。大叫起来！</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[20px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[27.538px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "168.875", "--transform-inner-height": "22.5" } as React.CSSProperties}>
        <div className="flex-none skew-x-[348.255deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[28.153px] justify-center leading-[0] not-italic relative text-[#464f5d] text-[22px] w-full">
            <p className="leading-[normal] whitespace-pre-wrap">{`路人：'啊啊啊！怪兽！'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[576.577px]">
      <Frame7 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#eeeff1] content-stretch flex flex-col items-start justify-center left-[5.63px] p-[20px] rounded-[11.261px] top-[1.81px] w-[617.117px]">
      <Frame6 />
    </div>
  );
}

function Groups2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[69.82px] relative shrink-0 w-full" data-name="Groups">
      <Frame5 />
    </div>
  );
}

function Miaoshu1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[23.649px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">PANEL2 画面描述</p>
      </div>
      <Frame1 />
      <Groups2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center pl-0 pr-[20px] py-[20px] relative rounded-[13px] shrink-0 w-[612px]">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black">
        <p className="leading-[38px] whitespace-pre-wrap">主角不仅没有害怕，反而兴奋地拿出了逗猫棒。</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[20px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[27.538px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "152.875", "--transform-inner-height": "22.5" } as React.CSSProperties}>
        <div className="flex-none skew-x-[348.255deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[28.153px] justify-center leading-[0] not-italic relative text-[#464f5d] text-[22px] w-full">
            <p className="leading-[normal] whitespace-pre-wrap">{`主角：'乖，来玩呀！'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[576.577px]">
      <Frame11 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#eeeff1] content-stretch flex flex-col items-start justify-center left-[5.63px] p-[20px] rounded-[11.261px] top-[1.81px] w-[617.117px]">
      <Frame10 />
    </div>
  );
}

function Groups3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[69.82px] relative shrink-0 w-full" data-name="Groups">
      <Frame9 />
    </div>
  );
}

function Miaoshu2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[23.649px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">PANEL3 画面描述</p>
      </div>
      <Frame8 />
      <Groups3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center pl-0 pr-[20px] py-[20px] relative rounded-[13px] shrink-0 w-[612px]">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black">
        <p className="leading-[38px] whitespace-pre-wrap">机甲战士脸红了，乖乖坐下被主角摸头。</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[20px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[27.538px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "161.75", "--transform-inner-height": "22.5" } as React.CSSProperties}>
        <div className="flex-none skew-x-[348.255deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[28.153px] justify-center leading-[0] not-italic relative text-[#464f5d] text-[22px] w-full">
            <p className="leading-[normal] whitespace-pre-wrap">{`机甲猫：'喵..（害羞）'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[576.577px]">
      <Frame15 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#eeeff1] content-stretch flex flex-col items-start justify-center left-[5.63px] p-[20px] rounded-[11.261px] top-[1.81px] w-[617.117px]">
      <Frame14 />
    </div>
  );
}

function Groups4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[69.82px] relative shrink-0 w-full" data-name="Groups">
      <Frame13 />
    </div>
  );
}

function Miaoshu3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[23.649px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">PANEL4 画面描述</p>
      </div>
      <Frame12 />
      <Groups4 />
    </div>
  );
}

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[40px] items-start px-[31px] py-0 relative size-full" data-name="Groups">
      <Miaoshu />
      <Miaoshu1 />
      <Miaoshu2 />
      <Miaoshu3 />
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(251,251,250,0)] h-[55px] left-1/2 to-[#fbfbfa] translate-x-[-50%] w-[653px]" />
    </div>
  );
}