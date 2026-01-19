import imgButtonFenxiang from "figma:asset/43ab5f94cd9080db17b82582252073e780d92593.png";

export default function ButtonFenxiang() {
  return (
    <div className="content-stretch flex items-center justify-center px-[196px] py-[22px] relative size-full" data-name="button_fenxiang">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonFenxiang} />
      <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">分享</p>
      </div>
    </div>
  );
}