import imgBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";
import imgButtonB2 from "figma:asset/59e5f22793b657bc21fdbb86a939d00ea239bd36.png";

function ButtonBack() {
  return (
    <div className="absolute h-[90px] left-[36px] top-0 w-[208px]" data-name="button_back">
      <div className="absolute h-[90px] left-0 top-0 w-[208px]" data-name="back">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBack} />
      </div>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-[70px] not-italic text-[32px] text-black top-[24px] uppercase whitespace-pre">返回</p>
    </div>
  );
}

export default function ButtoGroups() {
  return (
    <div className="relative size-full" data-name="butto_groups">
      <div className="absolute h-[91px] left-[263px] top-0 w-[461px]" data-name="button_b_2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonB2} />
      </div>
      <div className="absolute bottom-[45.07px] flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic right-[347px] text-[32px] text-white translate-x-[100%] translate-y-[50%] whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">开始绘制漫画</p>
      </div>
      <ButtonBack />
    </div>
  );
}