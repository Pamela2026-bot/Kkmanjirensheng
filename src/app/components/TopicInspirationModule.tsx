import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import imgXunhuan1 from "figma:asset/1d8785d386faefce2995b19e9dc624bda0f0a905.png";
import imgDenglong from "figma:asset/c429b6ee4e33878fd1233ec4aab222b7ba651367.png";
import imgEmo from "figma:asset/d11bae0c4a990af9f311de74cb74ba8942251105.png";
import imgXunhuan21 from "figma:asset/5d2e010a9242d6ecaf27e08c4cd77a95fc635c5f.png";

export interface TopicItem {
  id: string;
  text: string;
  type: 'hot' | 'normal';
  icon?: 'denglong' | 'emo';
}

interface TopicInspirationModuleProps {
  topics: TopicItem[];
  selectedTopics?: string[];
  onTopicClick?: (topicId: string) => void;
  topicRotations?: Record<string, number>;
}

export default function TopicInspirationModule({ 
  topics, 
  selectedTopics = [],
  onTopicClick,
  topicRotations = {}
}: TopicInspirationModuleProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showGradient, setShowGradient] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationRef = useRef<number>();

  // Check if content is scrollable
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowGradient(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [topics]);

  // 清理动画
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    // 取消之前的动画
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    
    const currentX = e.pageX - scrollContainerRef.current.offsetLeft;
    const currentTime = Date.now();
    const walk = currentX - startX;
    
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    
    // 计算速度（增加倍数使惯性更明显）
    const timeDelta = currentTime - lastTimeRef.current;
    if (timeDelta > 0) {
      const xDelta = e.pageX - lastXRef.current;
      velocityRef.current = (xDelta / timeDelta) * 2.5; // 速度倍数从1增加到2.5
    }
    
    lastXRef.current = e.pageX;
    lastTimeRef.current = currentTime;
    
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
  };

  const applyMomentum = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    let currentVelocity = velocityRef.current;
    
    const step = () => {
      if (Math.abs(currentVelocity) < 0.05) { // 降低停止阈值，从0.1到0.05
        velocityRef.current = 0;
        return;
      }
      
      container.scrollLeft -= currentVelocity * 16; // 16ms per frame
      currentVelocity *= 0.95; // 降低衰减速度，从0.92到0.95
      velocityRef.current = currentVelocity;
      
      animationRef.current = requestAnimationFrame(step);
    };
    
    if (Math.abs(currentVelocity) > 0.05) { // 降低启动阈值
      animationRef.current = requestAnimationFrame(step);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    
    // 应用惯性滚动
    applyMomentum();
    
    // 重置hasMoved标志
    setTimeout(() => setHasMoved(false), 150);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    
    // 取消之前的动画
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setHasMoved(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    lastXRef.current = e.touches[0].pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    
    const currentX = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const currentTime = Date.now();
    const walk = currentX - startX;
    
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    
    // 计算速度（增加倍数使惯性更明显）
    const timeDelta = currentTime - lastTimeRef.current;
    if (timeDelta > 0) {
      const xDelta = e.touches[0].pageX - lastXRef.current;
      velocityRef.current = (xDelta / timeDelta) * 2.5; // 与鼠标端保持一致的速度倍数
    }
    
    lastXRef.current = e.touches[0].pageX;
    lastTimeRef.current = currentTime;
    
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
  };

  const handleTouchEnd = () => {
    // 应用惯性滚动
    applyMomentum();
    
    // 重置hasMoved标志
    setTimeout(() => setHasMoved(false), 150);
  };

  const handleButtonClick = (topicId: string) => {
    // 如果刚刚拖动过，不触发点击
    if (hasMoved) return;
    onTopicClick?.(topicId);
  };

  return (
    <div className="relative w-full h-full">
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-[13px] items-center overflow-x-auto overflow-y-hidden h-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '2px', // 防止阴影被裁剪
          paddingRight: '90px', // 防止最后一个button被渐变遮挡
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {topics.map((topic) => {
          const isSelected = selectedTopics.includes(topic.id);
          
          if (topic.type === 'hot') {
            const isDenglong = topic.icon === 'denglong';
            const isEmo = topic.icon === 'emo';
            const rotation = topicRotations[topic.id] || 0;
            
            return (
              <motion.button
                key={topic.id}
                onClick={() => handleButtonClick(topic.id)}
                className="bg-[#fefefe] content-stretch flex gap-[4px] h-[51px] items-center pl-[8px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0"
                data-name="Button_hot"
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Icon Component */}
                <div className="relative shrink-0 size-[26px]" data-name="Component 7">
                  {isDenglong && (
                    <div className="absolute h-[22.523px] left-[23.08%] right-[16.29%] top-[2px]" data-name="denglong">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDenglong} />
                    </div>
                  )}
                  {isEmo && (
                    <div className="absolute inset-[7.69%_2.59%_5.68%_2.12%]" data-name="emo">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmo} />
                    </div>
                  )}
                </div>
                
                {/* Text and refresh icon */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="flex flex-col font-['PingFang_SC:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d57940] text-[23.649px] whitespace-nowrap">
                    <p className="leading-[normal] whitespace-pre">{topic.text}</p>
                  </div>
                  <motion.div 
                    className="relative shrink-0 size-[16.892px]" 
                    data-name="xunhuan1"
                    animate={{ rotate: rotation }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan1} />
                  </motion.div>
                </div>
              </motion.button>
            );
          }
          
          // Normal button
          const rotation = topicRotations[topic.id] || 0;
          
          return (
            <motion.button
              key={topic.id}
              onClick={() => handleButtonClick(topic.id)}
              className="bg-[#fefefe] content-stretch flex h-[51px] items-center pl-[16px] pr-[12px] py-[2px] relative rounded-[16px] shrink-0"
              data-name="Button"
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="flex flex-col font-['PingFang_SC:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.649px] text-black whitespace-nowrap">
                  <p className="leading-[normal] whitespace-pre">{topic.text}</p>
                </div>
                <motion.div 
                  className="relative shrink-0 size-[17px]" 
                  data-name="xunhuan2 1"
                  animate={{ rotate: rotation }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXunhuan21} />
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Right gradient overlay */}
      {showGradient && (
        <div 
          className="absolute right-0 top-0 h-full w-[80px] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255, 240, 186, 0) 0%, rgba(255, 240, 186, 0.8) 50%, rgba(255, 240, 186, 1) 100%)'
          }}
        />
      )}

      {/* Hide scrollbar CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          div::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </div>
  );
}