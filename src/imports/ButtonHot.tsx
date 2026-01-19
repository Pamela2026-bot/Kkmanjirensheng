import imgEmo from "figma:asset/d11bae0c4a990af9f311de74cb74ba8942251105.png";
import imgDenglong from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";
import imgXunhuan1 from "figma:asset/1d8785d386faefce2995b19e9dc624bda0f0a905.png";
type ComponentProps = {
  className?: string;
  property1?: "denglong" | "emo";
};

function Component({ className, property1 = "emo" }: ComponentProps) {
  const isDenglong = property1 === "denglong";
  const isEmo = property1 === "emo";
  return (
    <div className={className}>
      {isEmo && (
        <div className="absolute inset-[7.69%_2.59%_5.68%_2.12%]" data-name="emo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmo} />
        </div>
      )}
      {isDenglong && (
        <div className="absolute h-[22.523px] left-[23.08%] right-[16.29%] top-[2px]" data-name="denglong">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDenglong} />
        </div>
      )}
    </div>
  );
}

export default function ButtonHot() {
  return (
    <div className="bg-[#fefefe] content-stretch flex gap-[4px] h-[51px] items-center pl-[8px] pr-[12px] py-[2px] relative rounded-[16px]" data-name="Button_hot">
      <div aria-hidden="true" className="absolute border-[#fdf9e7] border-[1.126px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component className="relative shrink-0 size-[26px]" property1="denglong" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d57940] text-[23.649px] whitespace-nowrap">
          <p className="leading-[normal] whitespace-pre">春节名场面</p>
        </div>
        <div className="relative shrink-0 size-[16.892px]" data-name="xunhuan1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan1} />
        </div>
      </div>
    </div>
  );
}