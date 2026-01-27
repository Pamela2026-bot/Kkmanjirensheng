import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import svgPaths from "@/imports/svg-xmznh0j2fv";
import imgIcDengpao from "figma:asset/b18c8fb4ba87df8e8fc90c9d3e391479ac0aec14.png";
import imgIconEdit from "figma:asset/6d60e8c71c869428f53f6253281ddf04d495a057.png";
import imgBgNeirong from "figma:asset/2a6c9751d81d48708cbfbf2940b80766ac489e2e.png";

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
  style,
  minRows = 1 
}: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
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
      style={style}
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
      {/* Background paper - 750x1284px 完整显示 - 与LoadingPage位置保持一致 */}
      <div className="absolute left-0 top-[-17.43px] w-[750px] h-[1284px]" data-name="Image">
        <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgBgNeirong} />
      </div>

      {/* Header section - 更新位置和布局 */}
      <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1038px] content-stretch flex flex-col gap-[20px] items-center left-[calc(50%+0.5px)] px-[16px] py-[12px] translate-x-[-50%] w-[685px]" data-name="Groups">
        {/* Title and subtitle */}
        <div className="content-stretch flex flex-col gap-[5px] items-center leading-[0] not-italic relative shrink-0 text-center">
          <div className="flex flex-col font-['PingFang_SC'] h-[45.045px] justify-center relative shrink-0 text-[#222] text-[32px] w-full" style={{ fontWeight: 700 }}>
            <p className="leading-[normal]">确认/修改剧本</p>
          </div>
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center opacity-40 relative shrink-0 text-[24px] text-black w-full">
            <p className="leading-[normal]">Ai已经为你设计好了分镜，你可以微调描述和对白。</p>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="h-[3px] relative shrink-0 w-[643px]" data-name="img_line_2">
          <div className="absolute inset-[-51.47%_-0.19%_-44.99%_-0.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.5 5.89402">
              <path d={svgPaths.p32e5d600} fill="var(--stroke-0, #4E4E4E)" id="img_line_2" />
            </svg>
          </div>
        </div>
        
        {/* Lightbulb icon */}
        <div className="absolute bottom-[41.94px] h-[23.649px] right-[617.17px] w-[14.64px]" data-name="ic_dengpao">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcDengpao} />
        </div>
      </div>

      {/* Scrollable content area - 更新位置和尺寸 */}
      <div 
        ref={scrollContainerRef}
        className="absolute bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[40px] h-[1018px] items-start left-[20px] overflow-y-auto overflow-x-hidden scrollbar-hide pl-[16px] pr-[24px] top-[170px] w-[710px]" 
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
              className="content-stretch flex flex-col gap-[16px] items-start shrink-0 w-[666px]" 
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
              <div className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[25.901px] justify-center leading-[0] not-italic shrink-0 text-[#d2a246] text-[24px] w-full">
                <p className="leading-[normal] whitespace-pre-wrap">PANEL{index + 1} 画面描述</p>
              </div>

              {/* Description box */}
              <div className="bg-white relative rounded-[13px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[3px] border-[#d8d8d8] border-dashed inset-0 pointer-events-none rounded-[13px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[20px] items-center pr-[20px] py-[20px] relative w-full">
                    <div className="flex flex-row items-center self-stretch">
                      <div className="bg-[#d9dadc] h-full rounded-[13px] shrink-0 w-[5px]" data-name="Divider" />
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[28px]">
                      <AutoResizeTextarea
                        value={panel.description}
                        onChange={(e) => onUpdatePanel(index, 'description', e.target.value)}
                        className="bg-transparent border-none outline-none resize-none leading-[45px] whitespace-pre-wrap w-full overflow-hidden text-[28px] text-[#222]"
                        style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 500 }}
                        minRows={1}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialogue box */}
              <div className="bg-[#eeeff1] relative rounded-[11.261px] shrink-0 w-full" data-name="Groups">
                <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
                  <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
                      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#989da9] text-[28px] w-[52px]">
                        <p className="leading-[45px] whitespace-pre m-0">对白</p>
                      </div>
                      <div className="flex flex-[1_0_0] min-h-px min-w-px relative">
                        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#464f5d] text-[28px] w-full">
                          <AutoResizeTextarea
                            value={panel.dialogue}
                            onChange={(e) => onUpdatePanel(index, 'dialogue', e.target.value)}
                            className="bg-transparent border-none outline-none resize-none leading-[45px] whitespace-pre-wrap w-full overflow-hidden text-[28px] text-[#464f5d]"
                            style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 500 }}
                            minRows={1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[23.649px] relative shrink-0 w-[25.901px]" data-name="icon_edit">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconEdit} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade - 更新位置和尺寸 */}
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,253,252,0)] h-[37px] left-[29px] to-[#fffdfc] w-[679px] pointer-events-none z-10" />

      {/* Scroll indicator - line_2 - 修复形状变形问题 */}
      <div 
        className="absolute left-[717px] top-[141px] w-[7px] transition-all duration-100 ease-out" 
        data-name="line_2"
        style={{ height: `${scrollIndicator.height}px`, transform: `translateY(${scrollIndicator.top}px)` }}
      >
        <div className="w-full h-full bg-[#D4D4D4] rounded-full" />
      </div>
    </div>
  );
}