import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import Fireworks from '@/app/components/Fireworks';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import { getLayoutComponent } from '@/app/components/ComicLayouts';
import svgPaths from "@/imports/svg-gye7ots30p";
import imgButtonOne1 from "figma:asset/69de948d7cd03c37f1e947da1dc8143b986f071a.png";
import imgLogo3 from "figma:asset/92dc9658465759a43da7aa00eb06e3555084cc95.png";
import imgImgErweima from "figma:asset/bbf445879bc68e48a13f507f1ea6de17bf17e475.png";
import imgQrCode from "figma:asset/443cd836568e16b3992c8402bd79890daa36c12e.png";
import imgButton from "figma:asset/62b74367e8997eb9fb995e952b61b74ce6350b36.png";
import imgBg from "figma:asset/a414cc1cab9532be936d7017bf7b90b9478bb82f.png";
import imgImgBiaoti1 from "figma:asset/53a7721e9074d13357770789642fa4c12f60cde6.png";
import imgBgNeirong from "figma:asset/34a1c0f54f3f7dfdf8479e34b66f99181ee0e1f2.png";
import imgHuizhiWancheng from "figma:asset/6aef243b87c7016a05f394c93e72c55b3133a22a.png";
import imgLogo from "figma:asset/c301e171aed62395c79f7ef941923a62626a0795.png";
// 默认占位图
import imgImgFenjing1 from "figma:asset/dbb171d2225adde8ae64766bcaab50b15fb769c7.png";
import imgImgFenjing2 from "figma:asset/be41c60c5de6a7413fdc9e12822d66e6c19f9322.png";
import imgImgFenjing3 from "figma:asset/a52ad586e600889efc6d4d13f87843ab9cb840b3.png";
import imgImgFenjing4 from "figma:asset/acfc209956f8207c967483c533b9a98dff56bc68.png";

interface ComicResultPageProps {
  comicTitle?: string; // 动态生成的漫画标题
  comicPanelImages?: string[]; // 4张分镜图片URL数组
  comicLayoutType?: number; // 布局类型 1-5
  onRestart: () => void; // 再画一张按钮
  onShare: () => void; // 分享按钮
  onEdit?: () => void; // 重新编辑按钮
}

// 四格漫画组件 - 使用动态布局
function Manhua({ images, layoutType }: { 
  images?: string[];
  layoutType: number;
}) {
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

export default function ComicResultPage({ comicTitle, comicPanelImages, comicLayoutType, onRestart, onShare, onEdit }: ComicResultPageProps) {
  // 使用时间戳作为key来确保每次进入结果页都重新触发礼花
  const [fireworksKey, setFireworksKey] = useState(Date.now());

  useEffect(() => {
    // 每次组件挂载时更新key，触发礼花重新播放
    setFireworksKey(Date.now());
  }, []);

  // 下载四格漫画图片的功能
  const handleDownloadComic = () => {
    const element = document.getElementById('comic-download-area');
    if (element) {
      html2canvas(element, {
        backgroundColor: '#FFFDE9',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        onclone: (clonedDoc) => {
          // 获取克隆文档中的目标元素
          const clonedElement = clonedDoc.getElementById('comic-download-area');
          if (clonedElement) {
            // 遍历所有元素并强制使用内联样式
            const allElements = clonedElement.querySelectorAll('*');
            allElements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              
              // 获取计算样式
              const computedStyle = window.getComputedStyle(el);
              
              // 转换所有可能包含 oklch 的颜色属性
              const colorProperties = [
                'color',
                'backgroundColor', 
                'borderColor',
                'borderTopColor',
                'borderRightColor',
                'borderBottomColor',
                'borderLeftColor',
                'fill',
                'stroke'
              ];
              
              colorProperties.forEach(prop => {
                const value = computedStyle.getPropertyValue(prop);
                if (value && value.includes('oklch')) {
                  // 移除包含 oklch 的样式，使用默认值
                  htmlEl.style.setProperty(prop, '');
                }
              });
              
              // 强制设置黑色文本
              if (htmlEl.classList.contains('text-black')) {
                htmlEl.style.color = '#000000';
              }
              
              // 强制设置黑色边框
              if (htmlEl.classList.contains('border-black')) {
                htmlEl.style.borderColor = '#000000';
              }
              
              // 设置默认文本颜色
              const tagName = htmlEl.tagName.toLowerCase();
              if (tagName === 'p' || tagName === 'span' || tagName === 'div') {
                if (!htmlEl.style.color || htmlEl.style.color.includes('oklch')) {
                  htmlEl.style.color = '#000000';
                }
              }
              
              // SVG 特殊处理
              if (tagName === 'svg' || tagName === 'path') {
                const fill = htmlEl.getAttribute('fill');
                if (fill && fill.includes('oklch')) {
                  htmlEl.setAttribute('fill', '#000000');
                }
              }
            });
          }
        }
      }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `快看漫画-${comicTitle || '我的故事'}-${Date.now()}.png`;
        link.click();
      }).catch(error => {
        console.error('下载失败:', error);
        alert('下载失败，请重试');
      });
    }
  };

  return (
    <div className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]" data-name="Figma design - 绘制完成.png">
      {/* 春节烟花粒子效果 - 保留原本动画 */}
      <Fireworks key={fireworksKey} />
      
      {/* Background - z-0 */}
      <div className="absolute h-[1624px] left-0 top-0 w-[750px] z-0" data-name="bg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      </div>

      {/* 烟花粒子效果 - z-5 在背景之上，内容之下 */}
      <div className="absolute bg-[rgba(0,0,0,0)] h-[350.225px] left-0 top-0 w-[750px] z-5" data-name="Fireworks">
        <GuangDianLiZi width={750} height={350} />
      </div>

      {/* 汤圆装饰 - 右上角 */}
      <div className="absolute h-[142px] left-[calc(50%+179px)] top-[167px] translate-x-[-50%] w-[246px] z-10" data-name="img_biaoti1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgBiaoti1} />
      </div>

      {/* 纸张背景 - z-10 */}
      <div className="absolute h-[1284px] left-0 top-[140px] w-[750px] z-10" data-name="bg_neirong">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgNeirong} />
      </div>

      {/* 绘制完成标题 */}
      <div className="absolute h-[103px] left-[calc(50%+7.5px)] top-[145px] translate-x-[-50%] w-[411px] z-20" data-name="绘制完成 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHuizhiWancheng} />
      </div>

      {/* 内容区Groups - z-15 - 包含放大动画 */}
      <motion.div 
        id="comic-download-area"
        className="absolute h-[915px] left-[25px] overflow-clip top-[280px] w-[700px] z-15" 
        data-name="Groups"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {/* 小标题 */}
        <div className="absolute content-stretch flex items-center justify-center left-0 pb-[20px] pt-[32px] top-0 w-[700px]" data-name="小标题">
          <p className="font-['PingFang_SC'] leading-[normal] not-italic relative shrink-0 text-[36px] text-black tracking-[1.5px]" style={{ fontWeight: 700 }}>《{comicTitle || "快看！漫画我的故事"}》</p>
        </div>

        {/* 四格漫画 */}
        <Manhua 
          images={comicPanelImages}
          layoutType={comicLayoutType || 1}
        />

        {/* 二维码装饰框 */}
        <div className="absolute left-[563.52px] size-[103.547px] top-[795.47px]" data-name="img_erweima">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgErweima} />
        </div>

        {/* 二维码 */}
        <div className="absolute h-[87.796px] left-[572.33px] top-[803.18px] w-[85.754px]" data-name="二维码">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQrCode} />
        </div>

        {/* 快看Logo和提示文字 */}
        <div className="absolute content-stretch flex flex-col gap-[3.305px] items-start left-[35.34px] top-[808.98px] w-[248.452px]">
          <KuaiKanLogo />
          <div className="flex h-[29.441px] items-center justify-center min-w-full relative shrink-0 w-[min-content]">
            <div className="flex-none rotate-[-0.33deg] skew-x-[-0.01deg] w-full">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-30 relative text-[20px] text-black tracking-[1.1016px] w-full">长按扫描二维码可体验</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 底部渐变+操作区 - z-25 */}
      <motion.div 
        className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%+2.5px)] pt-[60px] top-[1117px] translate-x-[-50%] w-[705px] z-25" 
        style={{ backgroundImage: "linear-gradient(178.009deg, rgba(255, 255, 255, 0) 7.2242%, rgba(255, 255, 255, 0.9) 21.361%, rgb(255, 255, 255) 39.933%)" }}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          delay: 0.3,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {/* 下载提示 */}
        <motion.button
          className="content-stretch flex gap-[9px] items-center relative shrink-0 cursor-pointer bg-transparent border-none outline-none" 
          data-name="下载"
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={handleDownloadComic}
        >
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Frame 1321317232">
                <path d={svgPaths.p3f87aff2} fill="var(--fill-0, #222222)" id="Union" />
              </g>
            </svg>
          </div>
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[61.538px] not-italic opacity-40 relative shrink-0 text-[#222] text-[24px] pointer-events-none">点击下载或长按图片保存</p>
        </motion.button>

        {/* 分享按钮 */}
        <motion.button
          className="content-stretch flex h-[91px] items-center justify-center px-[246px] relative shrink-0 w-[652px] cursor-pointer bg-transparent border-none outline-none"
          data-name="button_分享"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={onShare}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButton} />
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white pointer-events-none z-10">
            <p className="leading-[normal]">分享</p>
          </div>
        </motion.button>
      </motion.div>

      {/* 底部按钮组 - z-30 */}
      <motion.div 
        className="absolute bottom-[2px] content-stretch flex gap-[19px] items-start justify-center left-[-1px] pb-[90px] w-[750px] z-30" 
        data-name="butto_groups"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          delay: 0.7,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {/* 重新编辑按钮 */}
        <motion.button
          className="h-[90px] relative shrink-0 w-[332px] cursor-pointer bg-transparent border-none outline-none"
          data-name="重新编辑"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={onEdit || onRestart}
        >
          <div className="absolute h-[90px] left-[-0.5px] top-0 w-[332px]" data-name="button_one 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonOne1} />
          </div>
          <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[calc(50%-64px)] not-italic text-[32px] text-black top-[calc(50%-22px)] uppercase pointer-events-none z-10">重新编辑</p>
        </motion.button>

        {/* 再画一张按钮 */}
        <motion.button
          className="h-[90px] relative shrink-0 w-[332px] cursor-pointer bg-transparent border-none outline-none"
          data-name="再画一张"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={onRestart}
        >
          <div className="absolute h-[90px] left-[-0.5px] top-0 w-[332px]" data-name="button_one 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonOne1} />
          </div>
          <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[calc(50%-64px)] not-italic text-[32px] text-black top-[calc(50%-22px)] uppercase pointer-events-none z-10">再画一张</p>
        </motion.button>
      </motion.div>

      {/* Bottom Logo - z-30 */}
      <div className="absolute h-[38px] left-[313.66px] top-[1562.18px] w-[123px] z-30" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}