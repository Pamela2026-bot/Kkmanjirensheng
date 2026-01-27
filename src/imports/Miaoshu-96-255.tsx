import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";

export default function Miaoshu() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-[623px]" data-name="miaoshu">
      {/* PANEL标题 - 使用Bold粗体 */}
      <div className="flex flex-col h-[25.901px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2a246] text-[24px] w-full">
        <p className="css-4hzbpn leading-[normal]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 700 }}>PANEL1 画面描述</p>
      </div>
      
      {/* 画面描述内容卡片 - 使用Bold粗体 */}
      <div className="bg-white content-stretch flex gap-[20px] items-center pl-0 pr-[20px] py-[20px] relative rounded-[13px] shrink-0 w-[612px]">
        <div aria-hidden="true" className="absolute border-3 border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[26px]">
          <p className="css-4hzbpn leading-[39px]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 700 }}>主角走在阳光明媚的街道上，突然发现脚下有一只发光的啦啦啦啦啦啦啦啦啦</p>
        </div>
      </div>
      
      {/* 对白卡片 */}
      <div className="bg-[#eeeff1] content-stretch flex flex-col items-start p-[20px] relative rounded-[11.261px] shrink-0 w-[617.117px]" data-name="Groups">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[576.577px]">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
            {/* "对白"标签 - 使用Medium */}
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[26px] w-[52px]">
              <p className="css-4hzbpn leading-[39px]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 500 }}>对白</p>
            </div>
            {/* 对白内容 - 使用Bold粗体 */}
            <div className="flex flex-[1_0_0] h-[38.148px] items-center justify-center min-h-px min-w-px relative" style={{ "--transform-inner-width": "168.875", "--transform-inner-height": "22.5" } as React.CSSProperties}>
              <div className="flex-none skew-x-[348.255deg] w-full">
                <div className="flex flex-col justify-center leading-[0] not-italic relative text-[#464f5d] text-[26px] w-full">
                  <p className="css-4hzbpn leading-[39px]" style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 700 }}>{`主角：'咦？这是什么？'`}</p>
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
