import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import svgPaths from "@/imports/svg-xslpdw4fmh";
import imgImgLine from "figma:asset/c0762e2474149013581116f4ef06f1142dba6d65.png";
import imgIcDengpao from "figma:asset/b18c8fb4ba87df8e8fc90c9d3e391479ac0aec14.png";
import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";
import imgImage from "figma:asset/fd46d01768300b3baaf91df1c6f5d0fd5ede2656.png";

interface PanelData {
  title: string;
  description: string;
  dialogue: string;
}

interface ScriptEditorProps {
  panels: PanelData[];
  onUpdatePanel: (index: number, field: 'description' | 'dialogue', value: string) => void;
}

// Auto-resize textarea component
function AutoResizeTextarea({ 
  value, 
  onChange, 
  placeholder, 
  className,
  minRows = 1 
}: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  minRows?: number;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    // Set height to scrollHeight
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      rows={minRows}
    />
  );
}

export default function ScriptEditor({ panels, onUpdatePanel }: ScriptEditorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollIndicator, setScrollIndicator] = useState({ top: 0, height: 159 });

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !contentRef.current) return;

      const container = scrollContainerRef.current;
      const content = contentRef.current;

      // 容器可见高度
      const containerHeight = container.clientHeight;
      // 内容总高度
      const contentHeight = content.scrollHeight;
      // 当前滚动位置
      const scrollTop = container.scrollTop;

      // 可滚动区域高度
      const scrollableHeight = contentHeight - containerHeight;

      if (scrollableHeight <= 0) {
        // 内容不需要滚动
        setScrollIndicator({ top: 0, height: 159 });
        return;
      }

      // 滚动进度 (0-1)
      const scrollProgress = scrollTop / scrollableHeight;

      // 指示器轨道的总高度（基于容器高度）
      const trackHeight = containerHeight;
      
      // 指示器的高度（根据内容占比计算，最小60px）
      const indicatorHeight = Math.max(60, (containerHeight / contentHeight) * trackHeight);
      
      // 指示器可移动的距离
      const maxIndicatorTop = trackHeight - indicatorHeight;
      
      // 计算指示器的top位置
      const indicatorTop = scrollProgress * maxIndicatorTop;

      setScrollIndicator({
        top: indicatorTop,
        height: indicatorHeight
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // 初始化
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [panels]);

  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full overflow-visible" data-name="Groups">
      {/* Background paper */}
      <div className="absolute bottom-0 h-[1013.514px] right-[19.14px] w-[709.459px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>

      {/* Header section */}
      <div className="absolute bg-[rgba(0,0,0,0)] bottom-[852.48px] h-[149.775px] right-[25.9px] w-[695.946px] overflow-visible" data-name="Groups">
        <div className="absolute bottom-[5.63px] h-[18.018px] right-[64.19px] w-[579.955px]" data-name="img_line">
          <img alt="" className="absolute inset-0 w-full h-full pointer-events-none" src={imgImgLine} style={{ objectFit: 'fill' }} />
        </div>
        <div className="absolute bottom-[51.57px] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic right-[612.61px] text-[#b2b2b2] text-[24px] translate-x-[100%] translate-y-[50%] whitespace-nowrap z-10">
          <p className="leading-[normal] whitespace-pre">Ai已经为你设计好了分镜，你可以微调描述和对白。</p>
        </div>
        <div className="absolute bottom-[41.67px] h-[23.649px] right-[617.12px] w-[14.64px] z-10" data-name="ic_dengpao">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcDengpao} />
        </div>
        <div className="absolute bottom-[95.72px] flex flex-col font-['PingFang_SC:Bold',sans-serif] h-[45.045px] justify-center leading-[0] not-italic right-[459.46px] text-[#222] text-[32px] translate-x-[100%] translate-y-[50%] w-[236.486px] z-10" style={{ fontWeight: 700 }}>
          <p className="leading-[normal] whitespace-pre-wrap" style={{ fontWeight: 700 }}>确认/修改剧本</p>
        </div>
      </div>

      {/* Scrollable content area */}
      <div 
        ref={scrollContainerRef}
        className="absolute bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[40px] h-[761px] items-start left-[32.45px] px-[31px] py-0 top-[521.62px] w-[685px] overflow-y-auto overflow-x-hidden scrollbar-hide" 
        data-name="Groups"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div ref={contentRef} className="content-stretch flex flex-col gap-[40px] items-start w-full pb-[100px]">
          {panels.map((panel, index) => (
            <motion.div 
              key={index} 
              className="content-stretch flex flex-col gap-[16px] items-start shrink-0 w-full" 
              data-name="miaoshu"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {/* Title */}
              <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic shrink-0 text-[#d2a246] text-[23.649px] w-full">
                <p className="leading-[normal] whitespace-pre-wrap">PANEL{index + 1} 画面描述</p>
              </div>

              {/* Description box */}
              <div className="bg-white flex gap-[20px] items-start pl-0 pr-[20px] py-[20px] relative rounded-[13px] w-[612px]">
                <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[3px] border-dashed inset-0 pointer-events-none rounded-[13px]" />
                <div className="flex flex-row self-stretch">
                  <div className="bg-[#d9dadc] rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
                </div>
                <div className="flex-1 font-['PingFang_SC:Bold',sans-serif] not-italic text-[24px] text-black">
                  <AutoResizeTextarea
                    value={panel.description}
                    onChange={(e) => onUpdatePanel(index, 'description', e.target.value)}
                    className="bg-transparent border-none outline-none resize-none leading-[38px] whitespace-pre-wrap w-full overflow-hidden font-['PingFang_SC:Bold',sans-serif] text-[24px] text-black"
                    minRows={1}
                  />
                </div>
              </div>

              {/* Dialogue box */}
              <div className="bg-[#eeeff1] flex flex-col items-start p-[20px] relative rounded-[11.261px] w-[617.117px]" data-name="Groups">
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 gap-[12px] items-start">
                    <div className="font-['PingFang_SC:Medium',sans-serif] not-italic shrink-0 text-[#989da9] text-[20px] w-[52px]">
                      <p className="leading-[normal] whitespace-pre m-0">对白</p>
                    </div>
                    <div className="flex-1">
                      <AutoResizeTextarea
                        value={panel.dialogue}
                        onChange={(e) => onUpdatePanel(index, 'dialogue', e.target.value)}
                        className="bg-transparent border-none outline-none resize-none leading-[normal] whitespace-pre-wrap w-full overflow-hidden font-['PingFang_SC:Bold',sans-serif] text-[22px] text-[#464f5d]"
                        minRows={1}
                      />
                    </div>
                  </div>
                  <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade - fixed at container bottom, doesn't scroll */}
      <div className="absolute left-[37.45px] top-[1202.62px] h-[80px] w-[675px] bg-gradient-to-b from-transparent to-[#fbfbfa] pointer-events-none z-10" />

      {/* Scroll indicator - line_2 */}
      <div 
        className="absolute left-[696.45px] top-[490.62px] w-[7px] transition-all duration-100 ease-out rounded-full overflow-hidden" 
        data-name="line_2"
        style={{ height: `${scrollIndicator.height}px`, transform: `translateY(${scrollIndicator.top}px)` }}
      >
        <div className="w-full h-full bg-[#D4D4D4] rounded-full" />
      </div>
    </div>
  );
}