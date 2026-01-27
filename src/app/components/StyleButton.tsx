import { motion } from 'motion/react';

// Import character images
import imgCharacters from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";
import imgColorful from "figma:asset/0998c63f86525358d26fafa731b3801081346889.png";
import imgQ from "figma:asset/faef3107ff6973d86c8cbf3fb1a6365202db6d1a.png";

// Import background images for buttons
import imgBgUnselected4 from "figma:asset/85394e908a373791fae3529c5b174a82d7a1fcd2.png"; // 4字未选中
import imgBgUnselected5 from "figma:asset/29f462eb45e94adc22a34d44763c58ff4a3f3e99.png"; // 5字未选中
import imgBgSelected4 from "figma:asset/ae15f00af34083b24533af65ea78eaa1ade8dc9a.png"; // 4字选中
import imgBgSelected5 from "figma:asset/0f0ea4c95651954a2a36d0671ab3ca706c1052b5.png"; // 5字选中

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
  characterImg?: string;
  characterImgStyle?: {
    left: string;
    top: string;
    width?: string;
    height?: string;
  };
  textLeft?: string;
  textTop?: string;
  width?: number;
  isWide?: boolean; // 宽版按钮(235px for 5字)
  textColor?: string;
  fontWeight?: 'Semibold' | 'Medium';
}

export default function StyleButton({
  id,
  label,
  isSelected,
  onClick,
  characterImage,
  characterConfig,
  characterImg,
  characterImgStyle,
  textLeft = "85px",
  textTop = "50%",
  width = 217,
  isWide = false,
  textColor,
  fontWeight
}: StyleButtonProps) {
  // Select character image - support both old and new prop formats
  let charImg = characterImage === 'colorful' 
    ? imgColorful 
    : characterImage === 'q' 
      ? imgQ 
      : imgCharacters;
  
  // If characterImg prop is provided directly, use it
  if (characterImg) {
    charImg = characterImg;
  }

  // 根据文字长度判断按钮类型
  const isFourChar = label.length === 4;
  const buttonWidth = isWide ? 235 : 217;
  
  // 角色图片容器尺寸：选中态用84px，未选中态用80px（根据Figma设计稿）
  const characterSize = isSelected ? 84 : 80;
  
  // 选择背景图片
  let bgImage;
  if (isSelected) {
    bgImage = isFourChar ? imgBgSelected4 : imgBgSelected5;
  } else {
    bgImage = isFourChar ? imgBgUnselected4 : imgBgUnselected5;
  }

  return (
    <motion.div
      className={`flex flex-col items-start relative ${isWide ? 'w-[235px]' : 'w-[217px]'} h-[90px] cursor-pointer`}
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      animate={{
        scale: isSelected ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Background - Using Figma assets */}
      <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]">
        <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]">
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={bgImage} 
          />
        </div>
      </div>

      {/* Character Image */}
      {characterConfig && (
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

      {/* Character Image - New style using characterImgStyle */}
      {!characterConfig && characterImgStyle && (
        <div 
          className="absolute left-0 top-[3px]"
          style={{ 
            width: `${characterSize}px`,
            height: `${characterSize}px`
          }}
        >
          <div className="relative size-full overflow-hidden">
            <img 
              alt="" 
              className="absolute"
              src={charImg}
              style={{
                left: characterImgStyle.left,
                top: characterImgStyle.top,
                width: characterImgStyle.width || '1017.46%',
                height: characterImgStyle.height || '160.19%',
                maxWidth: 'none'
              }}
            />
          </div>
        </div>
      )}

      {/* Label Text - 垂直居中 */}
      <div 
        className={`absolute flex flex-col justify-center leading-[0] not-italic text-[26px] top-1/2 translate-y-[-50%] whitespace-nowrap pointer-events-none z-10`}
        style={{
          left: textLeft,
          color: textColor || getTextColor(id),
          // 根据Figma：选中态用Medium，未选中态用Semibold
          fontFamily: fontWeight 
            ? (fontWeight === 'Semibold' ? "'PingFang_SC:Semibold',sans-serif" : "'PingFang_SC:Medium',sans-serif")
            : (isSelected ? "'PingFang_SC:Medium',sans-serif" : "'PingFang_SC:Semibold',sans-serif"),
          fontWeight: fontWeight 
            ? (fontWeight === 'Semibold' ? 600 : 500)
            : (isSelected ? 500 : 600)
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
    'shinkai': '#3d3e3c',
    'qversion': '#3d3e3c',
    'shonen': '#404040',
    'hongkong': '#454646',
    'american': '#3d3e3c',
    'watercolor': '#404040',
    'sketch': '#454646'
  };
  return colorMap[id] || '#2a2a2a';
}