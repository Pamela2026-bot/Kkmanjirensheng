import { motion } from 'motion/react';

interface StyleButtonV2Props {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  characterImg: string;
  characterImgStyle: {
    left: string;
    top: string;
    width?: string;
    height?: string;
  };
  width: number; // 217 or 235
  textColor?: string;
  fontWeight?: 'Semibold' | 'Medium';
}

export default function StyleButtonV2({
  id,
  label,
  isSelected,
  onClick,
  characterImg,
  characterImgStyle,
  width,
  textColor = '#2a2a2a',
  fontWeight = 'Medium'
}: StyleButtonV2Props) {
  const isWide = width === 235;

  return (
    <motion.button
      onClick={onClick}
      className="content-stretch flex h-[90px] items-center justify-center relative shrink-0 cursor-pointer bg-transparent border-none outline-none"
      style={{ width: `${width}px` }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Background Layer - Selected or Unselected */}
      {isSelected ? (
        // Selected State - Yellow Double Layer
        <>
          {/* Bottom Layer - Darker Yellow */}
          <div className="absolute bg-[#ffbf2b] h-[58px] left-[46px] rounded-[12px] top-[16.93px] w-[168px]">
            <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
          </div>
          {/* Top Layer - Lighter Yellow */}
          <div className="absolute bg-[#ffe639] h-[57.926px] left-[42.41px] rounded-[12px] top-[11.34px] w-[165.503px]">
            <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
          </div>
        </>
      ) : (
        // Unselected State - White Single Layer
        <div className={`absolute bg-white h-[56px] rounded-[12px] top-[calc(50%-0.5px)] translate-y-[-50%]`} style={{ left: isWide ? '30px' : '45px', width: isWide ? '175px' : '160px' }}>
          <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
        </div>
      )}

      {/* Content - Character + Text */}
      <div className={`${isWide ? 'content-stretch flex items-center pr-[21px] relative size-full' : 'content-stretch flex items-center mr-[-184px] pr-[4px] relative shrink-0'}`}>
        {/* Character Image */}
        <div className={`${isWide ? 'mr-[-1px]' : 'mr-[-4px]'} relative shrink-0`} style={{ width: isWide ? '80px' : '84px', height: isWide ? '80px' : '84px' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute max-w-none pointer-events-none"
              src={characterImg}
              style={{
                left: characterImgStyle.left,
                top: characterImgStyle.top,
                width: characterImgStyle.width || '1017.46%',
                height: characterImgStyle.height || '160.19%'
              }}
            />
          </div>
        </div>

        {/* Text Label */}
        <div className={`flex flex-col font-['PingFang_SC:${fontWeight}',sans-serif] justify-center leading-[0] ${isWide ? 'mr-[-1px]' : 'mr-[-4px]'} not-italic relative shrink-0 text-[26px] text-right`} style={{ color: textColor }}>
          <p className="leading-[normal]">{label}</p>
        </div>
      </div>
    </motion.button>
  );
}