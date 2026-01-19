import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Fireworks from '@/app/components/Fireworks';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import ImgBiaoti from '@/imports/ImgBiaoti';
import Manhua from '@/imports/Manhua';
import Groups from '@/imports/Groups-58-79';
import imgImage3 from "figma:asset/fd46d01768300b3baaf91df1c6f5d0fd5ede2656.png";
import imgBg from "figma:asset/5a0ac0a879b18c754e27b297ce3c5de07caee829.png";
import imgImage4 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";
import imgButtonFenxiang from "figma:asset/59e5f22793b657bc21fdbb86a939d00ea239bd36.png";
import imgBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";

interface ComicResultPageProps {
  comicPanelImages?: string[]; // 4张分镜图片URL数组
  onRestart: () => void; // 再记一次按钮
  onShare: () => void; // 分享按钮
}

export default function ComicResultPage({ comicPanelImages, onRestart, onShare }: ComicResultPageProps) {
  // 使用时间戳作为key来确保每次进入结果页都重新触发礼花
  const [fireworksKey, setFireworksKey] = useState(Date.now());

  useEffect(() => {
    // 每次组件挂载时更新key，触发礼花重新播放
    setFireworksKey(Date.now());
  }, []);

  return (
    <div className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]" data-name="Figma design - 绘制完成.png">
      {/* 春节烟花粒子效果 - 只在结果页显示一次 */}
      <Fireworks key={fireworksKey} />
      
      {/* Root */}
      <div className="absolute bg-[rgba(0,0,0,0)] h-[1621.622px] left-[-0.45px] right-[0.45px] top-[0.19px]" data-name="Root">
        {/* Background */}
        <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px]" data-name="bg">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
        </div>

        {/* Side border */}
        <div className="absolute bottom-0 h-[1621.622px] right-0 w-[1.126px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
        </div>

        {/* Groups - Main content */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[266.89px] h-[1354.73px] right-0 w-[750px] overflow-visible" data-name="Groups">
          {/* Paper background */}
          <div className="absolute bottom-0 h-[1013.514px] right-[19.14px] w-[709.459px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>

          {/* Groups1 - Top decorations */}
          <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1004.5px] h-[350.225px] right-0 w-[750px]" data-name="Groups">
            {/* 春节光点粒子效果 */}
            <GuangDianLiZi width={750} height={350} />
            
            <Groups />
          </div>

          {/* Subtitle image - 汤圆装饰 */}
          <div className="absolute h-[94px] left-[423.45px] top-[257.81px] w-[238px] overflow-visible" data-name="img_biaoti 1" style={{ zIndex: 50 }}>
            <ImgBiaoti />
          </div>

          {/* Comic image - 四格漫画 */}
          <motion.div 
            className="absolute h-[867px] left-[51.9px] top-[377.62px] w-[647px]" 
            data-name="manhua_4"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <Manhua 
              panel1Image={comicPanelImages?.[0]}
              panel2Image={comicPanelImages?.[1]}
              panel3Image={comicPanelImages?.[2]}
              panel4Image={comicPanelImages?.[3]}
            />
          </motion.div>

          {/* Long press hint */}
          <p className="absolute font-['PingFang_SC:Regular',sans-serif] h-[65px] leading-[61.538px] left-[calc(50%-73.1px)] not-italic opacity-40 text-[24px] text-black top-[1247.62px] w-[151px] whitespace-pre-wrap">长按保存图片</p>
        </div>
      </div>

      {/* Button Groups - 底部按钮 */}
      <div className="absolute h-[91px] left-[-0.55px] top-[1405px] w-[750px]" data-name="butto_groups">
        {/* Share button */}
        <motion.button 
          className="absolute content-stretch flex h-[91px] items-center justify-center left-[262.55px] px-[196px] py-[22px] top-0 w-[461px] cursor-pointer bg-transparent border-none outline-none" 
          data-name="button_fenxiang"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={onShare}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonFenxiang} />
          <div className="flex flex-col font-['PingFang_SC:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap pointer-events-none z-10" style={{ fontWeight: 700 }}>
            <p className="leading-[normal] whitespace-pre" style={{ fontWeight: 700 }}>分享</p>
          </div>
        </motion.button>

        {/* Restart button - 再记一次 */}
        <motion.button
          className="absolute h-[90px] left-[36px] top-0 w-[208px] cursor-pointer bg-transparent border-none outline-none"
          data-name="button_one"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={onRestart}
        >
          <div className="absolute h-[90px] left-0 top-0 w-[208px]" data-name="back">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBack} />
          </div>
          <p className="absolute font-['PingFang_SC:Bold',sans-serif] leading-[normal] left-[calc(50%-64.45px)] not-italic text-[32px] text-black top-[calc(50%-22px)] uppercase whitespace-pre pointer-events-none z-10" style={{ fontWeight: 700 }}>再记一次</p>
        </motion.button>
      </div>
    </div>
  );
}