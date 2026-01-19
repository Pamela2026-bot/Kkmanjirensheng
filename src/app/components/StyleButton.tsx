import { motion } from 'motion/react';

// Import selected state images (新版切图)
import imgButton4S from "figma:asset/d92c8064c49be3ab4730295588fa329397f057eb.png";
import imgButton5S from "figma:asset/63c2d746dbbb41287c8843933142d2b30c876380.png";

// Import unselected state images
import imgButton4N from "figma:asset/54c6e9b0d8a8bcbbcf904835dfb860018d765358.png";
import imgComponent4N from "figma:asset/690c5c7e3e163901154633853d57e4addabffb18.png";

// Import character images
import imgCharacters from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";
import imgColorful from "figma:asset/0998c63f86525358d26fafa731b3801081346889.png";
import imgQ from "figma:asset/faef3107ff6973d86c8cbf3fb1a6365202db6d1a.png";

interface CharacterConfig {
  containerClass: string;
  imgWrapperClass: string;
  imgClass: string;
  imgStyle: { left: string; top?: string };
}

interface StyleButtonProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  characterImage?: 'characters' | 'colorful' | 'q';
  characterConfig?: CharacterConfig;
  textLeft?: string;
  textTop?: string;
  width?: number;
  isWide?: boolean; // 宽版按钮(226px)
}

export default function StyleButton({
  id,
  label,
  isSelected,
  onClick,
  characterImage,
  characterConfig,
  textLeft = "85px",
  textTop = "50%",
  width = 210,
  isWide = false
}: StyleButtonProps) {
  // Select character image
  const charImg = characterImage === 'colorful' 
    ? imgColorful 
    : characterImage === 'q' 
      ? imgQ 
      : imgCharacters;

  return (
    <motion.div
      className={`flex flex-col items-start relative ${isWide ? 'w-[227.568px]' : 'w-[211px]'} h-[86.486px] cursor-pointer`}
      style={{ width: `${width}px` }}
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      animate={{
        scale: isSelected ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Background */}
      {isSelected ? (
        // Selected state background
        isWide ? (
          <div className="absolute h-[80px] left-0 top-1/2 translate-y-[-50%] w-[232px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButton5S} />
          </div>
        ) : (
          <div className="absolute h-[80px] right-0 top-1/2 translate-y-[-50%] w-[210px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButton4S} />
          </div>
        )
      ) : (
        // Unselected state background
        isWide ? (
          <div className="absolute h-[80px] right-0 top-1/2 translate-y-[-50%] w-[216px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponent4N} />
          </div>
        ) : (
          <div className="absolute h-[80px] right-[0.06px] top-[calc(50%+0.04px)] translate-y-[-50%] w-[200px]">
            <div className="absolute aspect-[300/120] left-0 right-0 top-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButton4N} />
            </div>
          </div>
        )
      )}

      {/* Character Image */}
      {characterConfig && characterImage && (
        <motion.div 
          className={characterConfig.containerClass}
          animate={{
            scale: isSelected ? 1.08 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <div className={characterConfig.imgWrapperClass}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                alt="" 
                className={characterConfig.imgClass}
                style={characterConfig.imgStyle}
                src={charImg}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Label Text - 垂直居中 */}
      <div 
        className={`absolute flex flex-col justify-center leading-[0] not-italic text-[25px] top-1/2 translate-y-[-50%] whitespace-nowrap pointer-events-none`}
        style={{
          left: textLeft,
          color: isSelected ? '#2a2a2a' : getTextColor(id),
          fontFamily: isSelected ? "'PingFang_SC:Semibold',sans-serif" : "'PingFang_SC:Medium',sans-serif",
          fontWeight: isSelected ? 600 : 500
        }}
      >
        <p className="leading-[normal] whitespace-pre">{label}</p>
      </div>
    </motion.div>
  );
}

function getTextColor(id: string): string {
  const colorMap: Record<string, string> = {
    'japanese': '#2a2a2a',
    'colorful': '#2a2a2a',
    'ghibli': '#424341',
    'shinkai': '#454646',
    'qversion': '#3d3e3c',
    'shonen': '#404040',
    'hongkong': '#40413f',
    'american': '#494949',
    'watercolor': '#4c4c4c',
    'sketch': '#444'
  };
  return colorMap[id] || '#2a2a2a';
}