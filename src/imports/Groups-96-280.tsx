import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
        <p className="leading-[39px]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 500 }}>对白</p>
      </div>
      <div className="flex flex-[1_0_0] h-[38.148px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "169", "--transform-inner-height": "23" } as React.CSSProperties}>
        <div className="flex-none skew-x-[348.255deg] w-full">
          <div className="flex flex-col justify-center not-italic relative text-[#464f5d] text-[26px] w-full">
            <p className="leading-[39px]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 700 }}>{`主角：'咦？这是什么？'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[576.577px]">
      <Frame />
      <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
      </div>
    </div>
  );
}

export default function Groups() {
  return (
    <div className="bg-[#eeeff1] content-stretch flex flex-col items-start p-[20px] relative rounded-[11.261px] size-full" data-name="Groups">
      <Frame1 />
    </div>
  );
}
