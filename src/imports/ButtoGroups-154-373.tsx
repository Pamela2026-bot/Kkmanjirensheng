import imgButtonBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";
import imgFrame1321317227 from "figma:asset/59e5f22793b657bc21fdbb86a939d00ea239bd36.png";

function ButtonBack() {
  return (
    <div className="content-stretch flex h-[90px] items-center justify-center overflow-clip px-[70px] py-[21px] relative shrink-0 w-[208px]" data-name="button_back">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonBack} />
      <p className="css-ew64yg font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black uppercase">返回</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#ff6868] content-stretch flex flex-col items-start left-[336.5px] px-[8px] py-[4px] rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] top-[-8.5px]" data-name="气泡">
      <p className="css-ew64yg font-['PingFang_SC:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">免费一次</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] h-[91px] items-center justify-center px-[129px] py-[23px] relative shrink-0 w-[461px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1321317227} />
      <div className="css-g0mm18 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white">
        <p className="css-ew64yg leading-[normal]">开始绘制漫画</p>
      </div>
      <Component />
    </div>
  );
}

export default function ButtoGroups() {
  return (
    <div className="content-stretch flex gap-[19px] items-start justify-center pb-[90px] pt-[20px] relative size-full" data-name="butto_groups">
      <ButtonBack />
      <Frame />
    </div>
  );
}