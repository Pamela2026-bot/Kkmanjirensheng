import imgButtonFenxiang from "figma:asset/59e5f22793b657bc21fdbb86a939d00ea239bd36.png";
import imgBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";

function ButtonFenxiang() {
  return (
    <div className="absolute content-stretch flex h-[91px] items-center justify-center left-[262.55px] px-[196px] py-[22px] top-0 w-[461px]" data-name="button_fenxiang">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonFenxiang} />
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">分享</p>
      </div>
    </div>
  );
}

function ButtonOne() {
  return (
    <div className="absolute h-[90px] left-[36px] top-0 w-[208px]" data-name="button_one">
      <div className="absolute h-[90px] left-0 top-0 w-[208px]" data-name="back">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBack} />
      </div>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-[calc(50%-64.45px)] not-italic text-[32px] text-black top-[calc(50%-22px)] uppercase whitespace-pre">再记一次</p>
    </div>
  );
}

export default function ButtoGroups() {
  return (
    <div className="relative size-full" data-name="butto_groups">
      <ButtonFenxiang />
      <ButtonOne />
    </div>
  );
}