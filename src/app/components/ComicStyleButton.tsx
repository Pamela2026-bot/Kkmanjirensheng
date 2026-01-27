import { motion } from 'motion/react';

// 导入背景图片
import imgBgSelected4 from "figma:asset/85394e908a373791fae3529c5b174a82d7a1fcd2.png"; // Component 8 - 4字选中
import imgBgSelected5 from "figma:asset/29f462eb45e94adc22a34d44763c58ff4a3f3e99.png"; // Component 9 - 5字选中
import imgBgUnselected4 from "figma:asset/ae15f00af34083b24533af65ea78eaa1ade8dc9a.png"; // Component 10 - 4字未选中
import imgBgUnselected5 from "figma:asset/0f0ea4c95651954a2a36d0671ab3ca706c1052b5.png"; // Component 11 - 5字未选中

// 导入角色图片
import imgCharacters from "figma:asset/cacfd9097e1934d3ced6fd030f4b6949d7355d1d.png";
import imgColorfulSrc from "figma:asset/0998c63f86525358d26fafa731b3801081346889.png";
import imgQ from "figma:asset/faef3107ff6973d86c8cbf3fb1a6365202db6d1a.png";

interface StyleConfig {
  characterImg: string;
  // 选中态 (84px容器)
  selected: {
    cropBox: { w: string; h: string; l: string; t: string; };
    img: { w: string; h: string; l: string; t: string; };
    marginRight: string; // 图片容器的marginRight
  };
  // 未选中态 (80px容器)
  unselected: {
    cropBox: { w: string; h: string; l: string; t: string; };
    img: { w: string; h: string; l: string; t: string; };
  };
  textColor: string;
}

// 从Figma精确提取的配置
const styleConfigs: Record<string, StyleConfig> = {
  japanese: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '89.425px', h: '76.65px', l: '-3.15px', t: '-1.05px' },
      img: { w: '1017.46%', h: '160.19%', l: '-0.79%', t: '0' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '85px', h: '73px', l: '-3px', t: '-1px' },
      img: { w: '1017.46%', h: '160.19%', l: '-0.79%', t: '0' }
    },
    textColor: '#2a2a2a'
  },
  colorful: {
    characterImg: imgColorfulSrc, // 使用彩色动漫专属图片
    selected: {
      cropBox: { w: '82.95px', h: '71.4px', l: '0.89px', t: '5.28px' },
      img: { w: '100%', h: '115.74%', l: '0', t: '0' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '79px', h: '68px', l: '0.84px', t: '5.03px' },
      img: { w: '100%', h: '115.74%', l: '0', t: '0' }
    },
    textColor: '#2a2a2a'
  },
  ghibli: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '92.331px', h: '74.975px', l: '-3.76px', t: '-3.85px' },
      img: { w: '963.91%', h: '160.19%', l: '-189.47%', t: '0' },
      marginRight: '-6px'
    },
    unselected: {
      cropBox: { w: '87.934px', h: '71.405px', l: '-3.58px', t: '-3.67px' },
      img: { w: '963.91%', h: '160.19%', l: '-189.47%', t: '0' }
    },
    textColor: '#424341'
  },
  shinkai: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '95.55px', h: '81.9px', l: '-4.2px', t: '-3.99px' },
      img: { w: '1017.46%', h: '160.19%', l: '-305.56%', t: '0' },
      marginRight: '-6px'
    },
    unselected: {
      cropBox: { w: '91px', h: '78px', l: '-4px', t: '-3.8px' },
      img: { w: '1017.46%', h: '160.19%', l: '-305.56%', t: '0' }
    },
    textColor: '#3d3e3c'
  },
  qversion: {
    characterImg: imgQ,
    selected: {
      cropBox: { w: '86.1px', h: '71.4px', l: '-3.15px', t: '3.15px' },
      img: { w: '100.03%', h: '120.63%', l: '-0.6%', t: '0.46%' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '82px', h: '68px', l: '-3px', t: '3px' },
      img: { w: '100.03%', h: '120.63%', l: '-0.6%', t: '0.46%' }
    },
    textColor: '#3d3e3c'
  },
  shonen: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '84.365px', h: '68.25px', l: '-2.49px', t: '6.51px' },
      img: { w: '960.3%', h: '160.19%', l: '-475.66%', t: '0' },
      marginRight: '-6px'
    },
    unselected: {
      cropBox: { w: '81px', h: '65px', l: '-2.37px', t: '6.2px' },
      img: { w: '960.3%', h: '160.19%', l: '-475.66%', t: '0' }
    },
    textColor: '#404040'
  },
  hongkong: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '87.818px', h: '74.975px', l: '0', t: '3.15px' },
      img: { w: '1013.44%', h: '160.19%', l: '-607.51%', t: '0' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '83.636px', h: '71.405px', l: '0', t: '3px' },
      img: { w: '1013.44%', h: '160.19%', l: '-607.51%', t: '0' }
    },
    textColor: '#454646'
  },
  american: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '82.959px', h: '74.975px', l: '2.1px', t: '1.05px' },
      img: { w: '1072.8%', h: '160.19%', l: '-754.81%', t: '0' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '79.008px', h: '71.405px', l: '2px', t: '1px' },
      img: { w: '1072.8%', h: '160.19%', l: '-754.81%', t: '0' }
    },
    textColor: '#3d3e3c'
  },
  watercolor: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '83.653px', h: '74.975px', l: '1.05px', t: '3.15px' },
      img: { w: '1063.9%', h: '160.19%', l: '-853.11%', t: '0' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '79.669px', h: '71.405px', l: '1px', t: '3px' },
      img: { w: '1063.9%', h: '160.19%', l: '-853.11%', t: '0' }
    },
    textColor: '#404040'
  },
  sketch: {
    characterImg: imgCharacters,
    selected: {
      cropBox: { w: '78.322px', h: '79.8px', l: '5.66px', t: '-2.38px' },
      img: { w: '1209.43%', h: '160.19%', l: '-1098.11%', t: '0' },
      marginRight: '-4px'
    },
    unselected: {
      cropBox: { w: '75px', h: '76px', l: '5.39px', t: '-2.26px' },
      img: { w: '1209.43%', h: '160.19%', l: '-1098.11%', t: '0' }
    },
    textColor: '#454646'
  }
};

interface ComicStyleButtonProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function ComicStyleButton({
  id,
  label,
  isSelected,
  onClick
}: ComicStyleButtonProps) {
  const config = styleConfigs[id];
  if (!config) return null;

  // 根据文字字数判断按钮类型和宽度
  const isFiveChar = label.length === 5;
  const buttonWidth = isFiveChar ? 235 : 217;
  
  // 根据文字长度和选中状态选择背景图
  let bgImage;
  if (isSelected) {
    bgImage = isFiveChar ? imgBgSelected5 : imgBgSelected4;
  } else {
    bgImage = isFiveChar ? imgBgUnselected5 : imgBgUnselected4;
  }

  // 获取当前状态的裁剪配置
  const crop = isSelected ? config.selected : config.unselected;
  const containerSize = isSelected ? 84 : 80;

  // 字体：选中用Semibold，未选中用Medium
  const fontFamily = isSelected ? "'PingFang_SC:Semibold',sans-serif" : "'PingFang_SC:Medium',sans-serif";
  const fontWeight = isSelected ? 600 : 500;

  return (
    <motion.div
      className="relative h-[90px] cursor-pointer"
      style={{ width: `${buttonWidth}px` }}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isSelected ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* 背景图片 */}
      <div className="absolute h-[83px] right-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[217px]">
        <div className="absolute h-[83px] right-0 top-1/2 translate-y-[-50%] w-[216px]">
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={bgImage} 
          />
        </div>
      </div>

      {/* 内容层 - 按照Figma原始布局 */}
      {isSelected ? (
        // 选中态布局
        isFiveChar ? (
          // 5字选中态：flex-col items-start justify-center pr-[24px]
          <div className="content-stretch flex flex-col h-[90px] items-start justify-center pr-[24px] relative z-10">
            <div className={`content-stretch flex h-[83px] items-center pr-[${crop.marginRight === '-6px' ? '6px' : '4px'}] relative shrink-0`}>
              {/* 角色图片容器 */}
              <motion.div
                className="relative shrink-0"
                style={{ 
                  width: `${containerSize}px`,
                  height: `${containerSize}px`,
                  marginRight: crop.marginRight
                }}
                animate={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div 
                  className="absolute"
                  style={{
                    width: crop.cropBox.w,
                    height: crop.cropBox.h,
                    left: crop.cropBox.l,
                    top: crop.cropBox.t
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="" 
                      className="absolute max-w-none"
                      src={config.characterImg}
                      style={{
                        width: crop.img.w,
                        height: crop.img.h,
                        left: crop.img.l,
                        top: crop.img.t
                      }}
                      onError={() => {
                        console.error('❌ 图片加载失败:', {
                          buttonId: id,
                          src: config.characterImg
                        });
                      }}
                      onLoad={() => {
                        if (id === 'colorful') {
                          console.log('✅ 彩色动漫图片加载成功');
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* 文字 */}
              <div 
                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-right"
                style={{
                  marginRight: crop.marginRight,
                  color: config.textColor,
                  fontFamily: fontFamily,
                  fontWeight: fontWeight
                }}
              >
                <p className="leading-[normal]">{label}</p>
              </div>
            </div>
          </div>
        ) : (
          // 4字选中态：items-center justify-center pr-[216px]
          <div className="content-stretch flex h-[90px] items-center justify-center pr-[216px] relative z-10">
            <div className="content-stretch flex items-center mr-[-198px] pr-[4px] relative shrink-0">
              {/* 角色图片容器 */}
              <motion.div
                className="relative shrink-0"
                style={{ 
                  width: `${containerSize}px`,
                  height: `${containerSize}px`,
                  marginRight: crop.marginRight
                }}
                animate={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div 
                  className="absolute"
                  style={{
                    width: crop.cropBox.w,
                    height: crop.cropBox.h,
                    left: crop.cropBox.l,
                    top: crop.cropBox.t
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="" 
                      className="absolute max-w-none"
                      src={config.characterImg}
                      style={{
                        width: crop.img.w,
                        height: crop.img.h,
                        left: crop.img.l,
                        top: crop.img.t
                      }}
                      onError={() => {
                        console.error('❌ 图片加载失败:', {
                          buttonId: id,
                          src: config.characterImg
                        });
                      }}
                      onLoad={() => {
                        if (id === 'colorful') {
                          console.log('✅ 彩色动漫图片加载成功');
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* 文字 */}
              <div 
                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-right"
                style={{
                  marginRight: '-1px',
                  color: config.textColor,
                  fontFamily: fontFamily,
                  fontWeight: fontWeight
                }}
              >
                <p className="leading-[normal]">{label}</p>
              </div>
            </div>
          </div>
        )
      ) : (
        // 未选中态布局 - 所有按钮统一：items-center justify-center pr-[198px] py-[3px]
        <div className={`content-stretch flex h-[90px] items-center justify-center ${isFiveChar ? '' : 'pr-[198px] py-[3px]'} relative z-10`}>
          {isFiveChar ? (
            <div className="h-[83px] relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pr-[21px] relative size-full">
                  {/* 角色图片容器 */}
                  <div
                    className="relative shrink-0"
                    style={{ 
                      width: `${containerSize}px`,
                      height: `${containerSize}px`,
                      marginRight: '-1px'
                    }}
                  >
                    <div 
                      className="absolute"
                      style={{
                        width: crop.cropBox.w,
                        height: crop.cropBox.h,
                        left: crop.cropBox.l,
                        top: crop.cropBox.t
                      }}
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img 
                          alt="" 
                          className="absolute max-w-none"
                          src={config.characterImg}
                          style={{
                            width: crop.img.w,
                            height: crop.img.h,
                            left: crop.img.l,
                            top: crop.img.t
                          }}
                          onError={() => {
                            console.error('❌ 图片加载失败:', {
                              buttonId: id,
                              src: config.characterImg
                            });
                          }}
                          onLoad={() => {
                            if (id === 'colorful') {
                              console.log('✅ 彩色动漫图片加载成功');
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 文字 */}
                  <div 
                    className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-right"
                    style={{
                      marginRight: '-1px',
                      color: config.textColor,
                      fontFamily: fontFamily,
                      fontWeight: fontWeight
                    }}
                  >
                    <p className="leading-[normal]">{label}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="content-stretch flex items-center justify-end mr-[-198px] pr-[21px] relative shrink-0">
              {/* 角色图片容器 */}
              <div
                className="relative shrink-0"
                style={{ 
                  width: `${containerSize}px`,
                  height: `${containerSize}px`,
                  marginRight: '-1px'
                }}
              >
                <div 
                  className="absolute"
                  style={{
                    width: crop.cropBox.w,
                    height: crop.cropBox.h,
                    left: crop.cropBox.l,
                    top: crop.cropBox.t
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="" 
                      className="absolute max-w-none"
                      src={config.characterImg}
                      style={{
                        width: crop.img.w,
                        height: crop.img.h,
                        left: crop.img.l,
                        top: crop.img.t
                      }}
                      onError={() => {
                        console.error('❌ 图片加载失败:', {
                          buttonId: id,
                          src: config.characterImg
                        });
                      }}
                      onLoad={() => {
                        if (id === 'colorful') {
                          console.log('✅ 彩色动漫图片加载成功');
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* 文字 */}
              <div 
                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-right"
                style={{
                  marginRight: '-1px',
                  color: config.textColor,
                  fontFamily: fontFamily,
                  fontWeight: fontWeight
                }}
              >
                <p className="leading-[normal]">{label}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}