import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { getLayoutComponent } from '@/app/components/ComicLayouts';
import svgPaths from "@/imports/svg-i0rw1tk5c6";
import svgPathsGroups from "@/imports/svg-whedmarsyc";
import imgImgFenjing1 from "figma:asset/dbb171d2225adde8ae64766bcaab50b15fb769c7.png";
import imgImgFenjing2 from "figma:asset/be41c60c5de6a7413fdc9e12822d66e6c19f9322.png";
import imgImgFenjing3 from "figma:asset/a52ad586e600889efc6d4d13f87843ab9cb840b3.png";
import imgImgFenjing4 from "figma:asset/acfc209956f8207c967483c533b9a98dff56bc68.png";
import imgLogo3 from "figma:asset/92dc9658465759a43da7aa00eb06e3555084cc95.png";
import imgImgErweima from "figma:asset/bbf445879bc68e48a13f507f1ea6de17bf17e475.png";
import img from "figma:asset/443cd836568e16b3992c8402bd79890daa36c12e.png";
import imgIcWeixin from "figma:asset/5be50b56b7550126314326c2300159aaf3e4baf2.png";
import imgIcPengyouquan from "figma:asset/710ed1c6744864fc91fd99f2e32dc00bf46c2333.png";
import imgIcQq from "figma:asset/d3025ffb8b182b9d38c49552ad2ee3dcfe3779a0.png";
import imgIcQqkongjian from "figma:asset/873effe5288c14bc17b87700602efcbfc93fbbec.png";
import imgIcXiazai from "figma:asset/09ea51ee4a5b64e948cba4e399b588ee5e3c2c0b.png";

interface ShareOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  comicPanelImages?: string[]; // 四格漫画的图片数组
  comicTitle?: string; // 动态生成的漫画标题
  comicLayoutType?: number; // 布局类型 1-5
  script?: string; // 剧本分镜内容（已弃用，改用comicTitle）
}

// 根据剧本内容智能生成标题
function generateTitleFromScript(script?: string): string {
  if (!script || script.trim().length === 0) {
    return "我的奇葩亲戚";
  }

  const scriptLower = script.toLowerCase();
  
  // 1. 检查人物关系关键词
  if (script.includes('亲戚') || script.includes('舅舅') || script.includes('姑姑') || 
      script.includes('叔叔') || script.includes('阿姨') || script.includes('表哥') || 
      script.includes('表姐') || script.includes('堂哥') || script.includes('堂姐')) {
    return "我的奇葩亲戚";
  }
  
  if (script.includes('老板') || script.includes('领导') || script.includes('经理')) {
    return "我的奇葩老板";
  }
  
  if (script.includes('同事') || script.includes('同事们')) {
    return "我的沙雕同事";
  }
  
  if (script.includes('室友') || script.includes('舍友')) {
    return "我的奇葩室友";
  }
  
  if (script.includes('邻居')) {
    return "我的神奇邻居";
  }
  
  if (script.includes('朋友') || script.includes('闺蜜') || script.includes('兄弟')) {
    return "我的沙雕朋友";
  }
  
  if (script.includes('男友') || script.includes('女友') || script.includes('对象') || 
      script.includes('男朋友') || script.includes('女朋友')) {
    return "我的恋爱日常";
  }
  
  if (script.includes('老公') || script.includes('老婆') || script.includes('媳妇')) {
    return "我的婚姻生活";
  }
  
  if (script.includes('爸爸') || script.includes('妈妈') || script.includes('父母') ||
      script.includes('爸') || script.includes('妈')) {
    return "我的搞笑父母";
  }
  
  if (script.includes('孩子') || script.includes('儿子') || script.includes('女儿') || script.includes('宝宝')) {
    return "我的带娃日常";
  }
  
  // 2. 检查场景关键词
  if (script.includes('公司') || script.includes('办公室') || script.includes('工作')) {
    return "我的职场趣事";
  }
  
  if (script.includes('学校') || script.includes('同学') || script.includes('老师') || script.includes('课堂')) {
    return "我的校园生活";
  }
  
  if (script.includes('宠物') || script.includes('猫') || script.includes('狗') || 
      script.includes('猫咪') || script.includes('狗狗')) {
    return "我的宠物日记";
  }
  
  if (script.includes('旅游') || script.includes('旅行') || script.includes('出游')) {
    return "我的旅行趣事";
  }
  
  if (script.includes('相亲') || script.includes('约会')) {
    return "我的相亲经历";
  }
  
  if (script.includes('减肥') || script.includes('健身')) {
    return "我的减肥之路";
  }
  
  if (script.includes('做饭') || script.includes('厨房') || script.includes('烹饪')) {
    return "我的厨房灾难";
  }
  
  // 3. 检查情绪/事件关键词
  if (script.includes('尴尬') || script.includes('社死')) {
    return "我的社死瞬间";
  }
  
  if (script.includes('搞笑') || script.includes('笑死') || script.includes('哈哈')) {
    return "我的搞笑日常";
  }
  
  if (script.includes('倒霉') || script.includes('衰')) {
    return "我的倒霉日常";
  }
  
  if (script.includes('吵架') || script.includes('争吵')) {
    return "我的日常battle";
  }
  
  // 4. 默认根据内容长度和复杂度判断
  if (script.length > 200) {
    return "我的奇葩故事";
  }
  
  // 5. 终极默认值
  return "我的日常生活";
}

// 小标题组件
function XiaoBiaoti({ title }: { title: string }) {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-[20px] pt-[32px] top-0 w-[700px]" data-name="小标题">
      <p className="font-['PingFang_SC'] leading-[normal] not-italic relative shrink-0 text-[36px] text-black tracking-[1.5px]" style={{ fontWeight: 700 }}>《{title}》</p>
    </div>
  );
}

// 四格漫画组件 - 使用动态布局
function Manhua({ images, layoutType }: { images?: string[], layoutType: number }) {
  const fallbackImages = [imgImgFenjing1, imgImgFenjing2, imgImgFenjing3, imgImgFenjing4];
  const LayoutComponent = getLayoutComponent(layoutType);
  
  return (
    <div className="absolute left-1/2 pointer-events-none top-[102.92px] translate-x-[-50%] w-[668px]" data-name="manhua">
      <LayoutComponent images={images} fallbackImages={fallbackImages} />
    </div>
  );
}

// 快看Logo组件
function KuaiKanLogo() {
  return (
    <div className="content-stretch flex gap-[4.789px] items-center relative shrink-0">
      <div className="h-[38px] relative shrink-0 w-[37.463px]" data-name="快看LOGO_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[322.86%]" src={imgLogo3} />
        </div>
      </div>
      <div className="h-[31px] relative shrink-0 w-[96px]" data-name="快看LOGO_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.71%] left-[-55.38%] max-w-none top-[-25.88%] w-[155.27%]" src={imgLogo3} />
        </div>
      </div>
    </div>
  );
}

// 底部Logo和文案
function Frame3({ }: {}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.305px] items-start left-[35.34px] overflow-clip top-[808.98px] w-[248.452px]">
      <KuaiKanLogo />
      <div className="flex h-[29.441px] items-center justify-center min-w-full relative shrink-0 w-[min-content]">
        <div className="flex-none rotate-[-0.33deg] skew-x-[-0.01deg] w-full">
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-30 relative text-[20px] text-black tracking-[1.1016px] w-full">长按扫描二维码可体验</p>
        </div>
      </div>
    </div>
  );
}

// Groups - 700×915 卡片主体（完全按照Figma设计）
function Groups({ images, comicTitle, comicLayoutType, script }: { images?: string[], comicTitle?: string, comicLayoutType?: number, script?: string }) {
  // 优先使用传入的 comicTitle，否则从script生成，最后使用默认值
  const title = comicTitle || (script ? generateTitleFromScript(script) : "快看！漫画我的故事");
  return (
    <div id="share-content" className="h-[915px] overflow-clip relative shrink-0 w-[700px]" data-name="Groups">
      {/* 白色背景SVG */}
      <div className="absolute h-[915px] left-0 top-0 w-[700px]" data-name="image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 915">
          <path d={svgPathsGroups.p1fa47780} fill="#FBFBFB" id="image" />
        </svg>
      </div>

      {/* 小标题 */}
      <XiaoBiaoti title={title} />

      {/* 四格漫画 */}
      <Manhua images={images} layoutType={comicLayoutType || 1} />

      {/* 二维码装饰框 */}
      <div className="absolute left-[563.52px] size-[103.547px] top-[795.47px]" data-name="img_erweima">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgErweima} />
      </div>

      {/* 二维码 */}
      <div className="absolute h-[87.796px] left-[572.33px] top-[803.18px] w-[85.754px]" data-name="二维码">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      </div>

      {/* 底部Logo和文案 */}
      <Frame3 />
    </div>
  );
}

export default function ShareOverlay({ isOpen, onClose, comicPanelImages, comicTitle, comicLayoutType, script }: ShareOverlayProps) {
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
        const element = document.getElementById('share-content');
        if (element) {
          html2canvas(element, {
            backgroundColor: '#FBFBFB',
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false,
            ignoreElements: (el) => {
              // 忽略可能有问题的元素
              return false;
            },
            onclone: (clonedDoc) => {
              // 获取克隆文档中的目标元素
              const clonedElement = clonedDoc.getElementById('share-content');
              if (clonedElement) {
                // 遍历所有元素并强制使用内联样式
                const allElements = clonedElement.querySelectorAll('*');
                allElements.forEach((el) => {
                  const htmlEl = el as HTMLElement;
                  
                  // 强制设置黑色文本
                  if (htmlEl.classList.contains('text-black')) {
                    htmlEl.style.color = '#000000';
                  }
                  
                  // 强制设置黑色边框
                  if (htmlEl.classList.contains('border-black')) {
                    htmlEl.style.borderColor = '#000000';
                  }
                  
                  // 移除所有Tailwind color类，使用内联样式
                  const style = htmlEl.getAttribute('style') || '';
                  if (!style.includes('color')) {
                    const tagName = htmlEl.tagName.toLowerCase();
                    if (tagName === 'p' || tagName === 'span' || tagName === 'div') {
                      htmlEl.style.color = '#000000';
                    }
                  }
                });
              }
            }
          }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `快看漫画-${Date.now()}.png`;
            link.click();
          }).catch(error => {
            console.error('下载失败:', error);
            alert('下载失败，请重试');
          });
        }
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
            className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(0,0,0,0.6)] inset-0 cursor-pointer"
            data-name="gaosimohu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* 分享内容 */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <div className="pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <Frame1 images={comicPanelImages} onClose={onClose} onShare={handleShare} comicTitle={comicTitle} comicLayoutType={comicLayoutType} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
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
        <g>
          <g>
            <rect fill="white" fillOpacity="0.1" height="48" rx="24" width="48" />
            <rect height="45" rx="22.5" stroke="white" strokeOpacity="0.4" strokeWidth="3" width="45" x="1.5" y="1.5" />
          </g>
          <path d="M31.5 16.5L16.5 31.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M16.5 16.5L31.5 31.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

// Frame1 - 完整的分享弹窗内容
function Frame1({ images, onClose, onShare, comicTitle, comicLayoutType }: { images?: string[], onClose: () => void, onShare: (type: string) => void, comicTitle?: string, comicLayoutType?: number }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Groups images={images} comicTitle={comicTitle} comicLayoutType={comicLayoutType} />
      <Frame onShare={onShare} />
      <IcClosure onClick={onClose} />
    </div>
  );
}