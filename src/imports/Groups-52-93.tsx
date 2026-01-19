import imgDengpao from "figma:asset/b7f4048c7007d2bededa6552d67be0b630090bb8.png";
import imgXunhuan1 from "figma:asset/1d8785d386faefce2995b19e9dc624bda0f0a905.png";
import img from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";
import imgEmo from "figma:asset/d11bae0c4a990af9f311de74cb74ba8942251105.png";
import imgXunhuan21 from "figma:asset/5d2e010a9242d6ecaf27e08c4cd77a95fc635c5f.png";
import imgBgGushi from "figma:asset/df474ef20da8ae7b8133b10dc728cdcba520c71a.png";
import imgImgLine from "figma:asset/0a8396393e973bffff1393e9db032bf3f604abc9.png";
import imgIconBook from "figma:asset/68b77d83ff93b272448ac91a9cdab1e0120570fa.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-[27.03px] top-[482.2px]">
      <div className="h-[23.649px] relative shrink-0 w-[13.514px]" data-name="dengpao">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDengpao} />
      </div>
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] h-[29.279px] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3a2c] text-[23px] w-[103.604px]">
        <p className="leading-[normal] whitespace-pre-wrap">话题灵感:</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d57940] text-[23.649px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">春节名场面</p>
      </div>
      <div className="relative shrink-0 size-[16.892px]" data-name="xunhuan1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan1} />
      </div>
    </div>
  );
}

function ButtonHot({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Button_hot">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[26px]" data-name="Component 7">
        <div className="absolute h-[22.523px] left-[23.08%] right-[16.29%] top-[2px]" data-name="denglong">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Component 7">
      <div className="absolute inset-[7.69%_2.59%_5.68%_2.12%]" data-name="emo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmo} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d57940] text-[23.649px] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">魔鬼亲戚</p>
      </div>
      <div className="relative shrink-0 size-[16.892px]" data-name="xunhuan1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan1} />
      </div>
    </div>
  );
}

function ButtonHot1() {
  return (
    <div className="bg-[#fefefe] content-stretch flex gap-[4px] h-[51px] items-center pl-[8px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button_hot">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component1 />
      <Frame2 />
    </div>
  );
}

function Frame3() {
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

function Button() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">塑料友情</p>
      </div>
      <div className="relative shrink-0 size-[17px]" data-name="xunhuan2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan21} />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">有毒父母</p>
      </div>
      <div className="relative shrink-0 size-[17px]" data-name="xunhuan2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan21} />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">我的老师</p>
      </div>
      <div className="relative shrink-0 size-[17px]" data-name="xunhuan2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan21} />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame6 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[167.31px] overflow-clip top-[471.2px] w-[458px]" data-name="话题灵感模块">
      <ButtonHot />
      <ButtonHot1 />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function Groups() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      <div className="absolute bottom-[-5.63px] h-[568.694px] right-[11.26px] w-[686.937px]" data-name="bg_gushi">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgGushi} />
      </div>
      <div className="absolute bottom-[427.93px] h-[21.396px] right-[72.58px] w-[584.459px]" data-name="img_line">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgLine} />
      </div>
      <div className="absolute bottom-[472.97px] h-[25.901px] right-[610.36px] w-[32.658px]" data-name="icon_book">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconBook} />
      </div>
      <Frame1 />
      <div className="absolute bottom-[346.28px] flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[136.261px] justify-center leading-[44px] not-italic right-[647.52px] text-[#bfbfbf] text-[26px] translate-x-[100%] translate-y-[50%] w-[575.45px] whitespace-pre-wrap">
        <p className="mb-0">例如：大年三十，我回到老家，爷爷奶奶准备了一</p>
        <p className="mb-0">大桌年夜饭..或者写下你的新年愿望：希望心的一</p>
        <p>年能升职加薪，脱单成功...</p>
      </div>
      <div className="absolute bottom-[484.8px] flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[43.919px] justify-center leading-[0] not-italic right-[596.85px] text-[#2c2c2c] text-[32px] translate-x-[100%] translate-y-[50%] w-[204.955px]">
        <p className="leading-[normal] whitespace-pre-wrap">写下你的故事</p>
      </div>
      <Component />
    </div>
  );
}