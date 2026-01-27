import imgBiaoti1 from "figma:asset/9355696ed92268585733ce1b02e7fbec3f19ee42.png";

export default function TopHeader() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Groups">
      {/* 标题图片 - 快看!你的漫画故事 */}
      <div className="absolute h-[170px] left-[162.9px] top-[155px] w-[416px]" data-name="biaoti 1">
        <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgBiaoti1} />
      </div>
    </div>
  );
}