export default function Toast() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center px-[24px] py-[20px] relative rounded-[16px] size-full" data-name="toast">
      <div className="font-['PingFang_SC:Regular',sans-serif] leading-[34px] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap whitespace-pre">
        <p className="mb-[6px]">提示性的文案最好请控制在十八个字以内</p>
        <p>超过后居中显示</p>
      </div>
    </div>
  );
}