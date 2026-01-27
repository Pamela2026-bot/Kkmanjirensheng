import svgPaths from "./svg-xmznh0j2fv";
import imgIcDengpao from "figma:asset/b18c8fb4ba87df8e8fc90c9d3e391479ac0aec14.png";
import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center leading-[0] not-italic relative shrink-0 text-center">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[45.045px] justify-center relative shrink-0 text-[#222] text-[32px] w-full">
        <p className="css-4hzbpn leading-[normal]">确认/修改剧本</p>
      </div>
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center opacity-40 relative shrink-0 text-[24px] text-black w-full">
        <p className="css-4hzbpn leading-[normal]">Ai已经为你设计好了分镜，你可以微调描述和对白。</p>
      </div>
    </div>
  );
}

function Groups1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1038px] content-stretch flex flex-col gap-[20px] items-center left-[calc(50%+0.5px)] px-[16px] py-[12px] translate-x-[-50%] w-[685px]" data-name="Groups">
      <Frame12 />
      <div className="h-[3px] relative shrink-0 w-[643px]" data-name="img_line_2">
        <div className="absolute inset-[-51.47%_-0.19%_-44.99%_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.5 5.89402">
            <path d={svgPaths.p32e5d600} fill="var(--stroke-0, #4E4E4E)" id="img_line_2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.94px] h-[23.649px] right-[617.17px] w-[14.64px]" data-name="ic_dengpao">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcDengpao} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-3 border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pr-[20px] py-[20px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
            <p className="css-4hzbpn leading-[39px]">主角走在阳光明媚的街道上，突然发现脚下有一只发光的啦啦啦啦啦啦啦啦啦</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
        <p className="css-4hzbpn leading-[39px]">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[38.148px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "68.4375", "--transform-inner-height": "90" } as React.CSSProperties}>
        <div className="flex-none scale-y-[98%] skew-x-[-12deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#464f5d] text-[26px] w-full">
            <p className="css-4hzbpn leading-[39px]">{`主角：'咦？这是什么？'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame2 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Groups3() {
  return (
    <div className="bg-[#eeeff1] relative rounded-[11.261px] shrink-0 w-full" data-name="Groups">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Miaoshu() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[666px]" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[24px] w-full">
        <p className="css-4hzbpn leading-[normal]">PANEL1 画面描述</p>
      </div>
      <Frame />
      <Groups3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-3 border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pr-[20px] py-[20px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
            <p className="css-4hzbpn leading-[39px]">猫咪突然变成了一个巨大的机甲战士，路人惊恐万分。大叫起来！</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
        <p className="css-4hzbpn leading-[39px]">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[38.148px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "64.703125", "--transform-inner-height": "90" } as React.CSSProperties}>
        <div className="flex-none scale-y-[98%] skew-x-[-12deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#464f5d] text-[26px] w-full">
            <p className="css-4hzbpn leading-[39px]">{`路人：'啊啊啊！怪兽！'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame5 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Groups4() {
  return (
    <div className="bg-[#eeeff1] relative rounded-[11.261px] shrink-0 w-full" data-name="Groups">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Miaoshu1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[666px]" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[24px] w-full">
        <p className="css-4hzbpn leading-[normal]">PANEL2 画面描述</p>
      </div>
      <Frame1 />
      <Groups4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-3 border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pr-[20px] py-[20px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
            <p className="css-4hzbpn leading-[39px]">主角不仅没有害怕，反而兴奋地拿出了逗猫棒。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
        <p className="css-4hzbpn leading-[39px]">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[38.148px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "68.4375", "--transform-inner-height": "67.5" } as React.CSSProperties}>
        <div className="flex-none scale-y-[98%] skew-x-[-12deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#464f5d] text-[26px] w-full">
            <p className="css-4hzbpn leading-[39px]">{`主角：'乖，来玩呀！'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame8 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Groups5() {
  return (
    <div className="bg-[#eeeff1] relative rounded-[11.261px] shrink-0 w-full" data-name="Groups">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Miaoshu2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[666px]" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[24px] w-full">
        <p className="css-4hzbpn leading-[normal]">PANEL3 画面描述</p>
      </div>
      <Frame6 />
      <Groups5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-3 border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pr-[20px] py-[20px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
            <p className="css-4hzbpn leading-[39px]">机甲战士脸红了，乖乖坐下被主角摸头。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
        <p className="css-4hzbpn leading-[39px]">对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[38.148px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "61.3125", "--transform-inner-height": "90" } as React.CSSProperties}>
        <div className="flex-none scale-y-[98%] skew-x-[-12deg] w-full">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#464f5d] text-[26px] w-full">
            <p className="css-4hzbpn leading-[39px]">{`机甲猫：'喵..（害羞）'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame11 />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

function Groups6() {
  return (
    <div className="bg-[#eeeff1] relative rounded-[11.261px] shrink-0 w-full" data-name="Groups">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Miaoshu3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[666px]" data-name="miaoshu">
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[24px] w-full">
        <p className="css-4hzbpn leading-[normal]">PANEL4 画面描述</p>
      </div>
      <Frame9 />
      <Groups6 />
    </div>
  );
}

function Groups2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[40px] h-[1018px] items-start left-[20px] overflow-clip pl-[16px] pr-[24px] top-[170px] w-[710px]" data-name="Groups">
      <Miaoshu />
      <Miaoshu1 />
      <Miaoshu2 />
      <Miaoshu3 />
    </div>
  );
}

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <Groups1 />
      <Groups2 />
      <div className="absolute h-[159px] left-[717px] top-[141px] w-[7px]" data-name="line_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 159">
          <path d={svgPaths.p57a2250} fill="var(--fill-0, #D4D4D4)" id="line_2" />
        </svg>
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,253,252,0)] h-[37px] left-[29px] to-[#fffdfc] w-[679px]" />
    </div>
  );
}