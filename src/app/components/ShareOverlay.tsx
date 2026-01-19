import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import svgPaths from "@/imports/svg-i0rw1tk5c6";
import imgImgFenjing1 from "figma:asset/1992ee527cfa8d457d4deb39ae0913ac100bbbeb.png";
import imgLogo3 from "figma:asset/92dc9658465759a43da7aa00eb06e3555084cc95.png";
import imgBiaoti2 from "figma:asset/c3dc68c5455d1a684184386c6a2115f02fe2fd17.png";
import imgImgErweima from "figma:asset/bbf445879bc68e48a13f507f1ea6de17bf17e475.png";
import img from "figma:asset/f7cd03bc127f2158e7ceccbb61f0098f04691af1.png";
import imgIcWeixin from "figma:asset/5be50b56b7550126314326c2300159aaf3e4baf2.png";
import imgIcPengyouquan from "figma:asset/710ed1c6744864fc91fd99f2e32dc00bf46c2333.png";
import imgIcQq from "figma:asset/d3025ffb8b182b9d38c49552ad2ee3dcfe3779a0.png";
import imgIcQqkongjian from "figma:asset/873effe5288c14bc17b87700602efcbfc93fbbec.png";
import imgIcXiazai from "figma:asset/09ea51ee4a5b64e948cba4e399b588ee5e3c2c0b.png";

interface ShareOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  comicPanelImages?: string[]; // 四格漫画的图片数组
}

// 漫画上半部分（前两格）
function Shang({ images }: { images?: string[] }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" data-name="shang">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing1">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            {images?.[0] ? (
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={images[0]} />
            ) : (
              <img alt="" className="absolute h-[254.9%] left-[-8.71%] max-w-none top-[-10.31%] w-[259.08%]" src={imgImgFenjing1} />
            )}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing2">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            {images?.[1] ? (
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={images[1]} />
            ) : (
              <img alt="" className="absolute h-[308.59%] left-[-139.2%] max-w-none top-[-168.12%] w-[313.66%]" src={imgImgFenjing1} />
            )}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
    </div>
  );
}

// 漫画下半部分（后两格）
function Xia({ images }: { images?: string[] }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" data-name="xia">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing3">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            {images?.[2] ? (
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={images[2]} />
            ) : (
              <img alt="" className="absolute h-[254.9%] left-[-8.71%] max-w-none top-[-10.31%] w-[259.08%]" src={imgImgFenjing1} />
            )}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing4">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            {images?.[3] ? (
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={images[3]} />
            ) : (
              <img alt="" className="absolute h-[308.59%] left-[-139.2%] max-w-none top-[-168.12%] w-[313.66%]" src={imgImgFenjing1} />
            )}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
    </div>
  );
}

// 四格漫画组件
function Manhua({ images }: { images?: string[] }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[828px] items-start left-[calc(50%+0.05px)] pointer-events-none top-[80.19px] translate-x-[-50%] w-[611px]" data-name="manhua">
      <Shang images={images} />
      <Xia images={images} />
    </div>
  );
}

// Logo组件
function Frame4() {
  return (
    <div className="content-stretch flex gap-[4.844px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[42.382px]" data-name="快看LOGO_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[322.86%]" src={imgLogo3} />
        </div>
      </div>
      <div className="h-[47.226px] relative shrink-0 w-[98.084px]" data-name="快看LOGO_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-54.79%] max-w-none top-0 w-[154.79%]" src={imgLogo3} />
        </div>
      </div>
    </div>
  );
}

// 顶部标题栏
function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[9.687px] items-center left-[180px] top-[23px]">
      <Frame4 />
      <div className="relative shrink-0 size-[8.325px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.32529 8.32533">
          <path d={svgPaths.p1a281b00} fill="#1E1E1E" id="Union" />
        </svg>
      </div>
      <div className="h-[32px] relative shrink-0 w-[93px]" data-name="biaoti 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.42%] left-[-0.05%] max-w-none top-0 w-[100.11%]" src={imgBiaoti2} />
        </div>
      </div>
    </div>
  );
}

// 底部文案
function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[37px] top-[938px] w-[566px]">
      <div className="flex items-center justify-start relative shrink-0 w-full">
        <p className="font-['PingFang_SC-Bold',sans-serif] font-bold leading-[normal] not-italic relative text-[20.12px] text-black tracking-[0.5px]">写下你的故事，一键生成专属四格漫画</p>
      </div>
      <div className="flex items-center justify-start relative shrink-0 w-full">
        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-30 relative text-[18px] text-black tracking-[1px]">扫描二维码可体验</p>
      </div>
    </div>
  );
}

// 卡片主体
function Frame2({ images }: { images?: string[] }) {
  return (
    <div className="h-[1039px] overflow-clip relative shrink-0 w-[640px]">
      <div className="absolute bg-white h-[1033px] left-0 rounded-[21px] top-0 w-[640px]" data-name="image" />
      <Manhua images={images} />
      <div className="absolute left-[515.55px] size-[94px] top-[921.19px]" data-name="img_erweima">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgErweima} />
      </div>
      <div className="absolute h-[79.701px] left-[523.55px] top-[928.19px] w-[77.848px]" data-name="二维码">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>
      <Frame3 />
      <Frame5 />
    </div>
  );
}

// 分享按钮 - 微信
function Weixin({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 cursor-pointer" 
      data-name="weixin"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[70px]" data-name="ic_weixin">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcWeixin} />
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px] whitespace-pre-wrap">微信</p>
    </motion.div>
  );
}

// 分享按钮 - 朋友圈
function Pengyouquan({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 cursor-pointer" 
      data-name="pengyouquan"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[70px]" data-name="ic_pengyouquan">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcPengyouquan} />
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px] whitespace-pre-wrap">朋友圈</p>
    </motion.div>
  );
}

// 分享按钮 - QQ
function Qq({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 cursor-pointer" 
      data-name="qq"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[70px]" data-name="ic_qq">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcQq} />
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px] whitespace-pre-wrap">QQ</p>
    </motion.div>
  );
}

// 分享按钮 - QQ空间
function Qqkongjian({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 cursor-pointer" 
      data-name="qqkongjian"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[70px]" data-name="ic_qqkongjian">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcQqkongjian} />
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px] whitespace-pre-wrap">QQ空间</p>
    </motion.div>
  );
}

// 分享按钮 - 下载图片
function Xiazaitupian({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 cursor-pointer" 
      data-name="xiazaitupian"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[70px]" data-name="ic_xiazai">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcXiazai} />
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] h-[26px] leading-[1.2] not-italic relative shrink-0 text-[21px] text-center text-white w-[90px] whitespace-pre-wrap">下载图片</p>
    </motion.div>
  );
}

// 分享按钮组
function Frame({ onShare }: { onShare: (type: string) => void }) {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Weixin onClick={() => onShare('weixin')} />
      <Pengyouquan onClick={() => onShare('pengyouquan')} />
      <Qq onClick={() => onShare('qq')} />
      <Qqkongjian onClick={() => onShare('qqkongjian')} />
      <Xiazaitupian onClick={() => onShare('download')} />
    </div>
  );
}

// 关闭按钮
function IcClosure({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="relative shrink-0 size-[48px] cursor-pointer" 
      data-name="ic_closure"
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ic/home/关闭类/分类">
          <g id="Rectangle">
            <rect fill="white" fillOpacity="0.1" height="48" rx="24" width="48" />
            <rect height="45" rx="22.5" stroke="white" strokeOpacity="0.4" strokeWidth="3" width="45" x="1.5" y="1.5" />
          </g>
          <path d="M31.5 16.5L16.5 31.5" id="Vector 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M16.5 16.5L31.5 31.5" id="Vector 3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

// 分享内容区域（固定设计稿尺寸）
function Frame1({ images, onClose, onShare }: { images?: string[], onClose: () => void, onShare: (type: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[55px] top-[155.81px] w-[640px]">
      <Frame2 images={images} />
      <Frame onShare={onShare} />
      <IcClosure onClick={onClose} />
    </div>
  );
}

export default function ShareOverlay({ isOpen, onClose, comicPanelImages }: ShareOverlayProps) {
  // 禁用背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleShare = (type: string) => {
    switch (type) {
      case 'weixin':
        alert('微信分享功能开发中');
        break;
      case 'pengyouquan':
        alert('朋友圈分享功能开发中');
        break;
      case 'qq':
        alert('QQ分享功能开发中');
        break;
      case 'qqkongjian':
        alert('QQ空间分享功能开发中');
        break;
      case 'download':
        alert('下载图片功能开发中');
        break;
    }
  };

  // 使用固定设计稿尺寸 750x1624，与其他页面统一
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 w-[750px] h-[1624px] overflow-hidden">
          {/* 高斯模糊背景遮罩 */}
          <motion.div
            className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(0,0,0,0.6)] inset-0"
            data-name="gaosimohu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* 分享内容 */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Frame1 images={comicPanelImages} onClose={onClose} onShare={handleShare} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}