import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScriptPageContent from '@/app/components/ScriptPageContent';
import LoadingPageContent from '@/app/components/LoadingPageContent';
import HomePageContent from '@/app/components/HomePageContent';
import StyleButton from '@/app/components/StyleButton';
import Fireworks from '@/app/components/Fireworks';
import TopHeader from '@/app/components/TopHeader';
import imgBg from "figma:asset/4a5ce5711b4e15a0cc00c8740153329eb6eeadb8.png";
import imgImage12 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'script' | 'loading'>('home');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [storyText, setStoryText] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [moguiRotation, setMoguiRotation] = useState(0);
  const [chunjieRotation, setChunjieRotation] = useState(0);

  // Loading页面自动跳转逻辑
  useEffect(() => {
    if (currentPage === 'loading') {
      const timer = setTimeout(() => {
        setCurrentPage('script');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  return (
    <div className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]">
      {/* Root */}
      <div className="absolute bg-[rgba(0,0,0,0)] h-[1621.622px] left-[-0.45px] right-[0.45px] top-[0.19px]">
        
        {/* 全局背景 - 所有页面共享 */}
        <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
        </div>

        {/* 侧边框 - 所有页面共享 */}
        <div className="absolute bottom-0 h-[1621.622px] right-0 w-[1.126px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
        </div>

        {/* 顶部模块 - 所有页面共享 */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1271.4px] h-[350.225px] right-0 w-[750px]">
          {/* 春节烟花粒子效果 */}
          <Fireworks />
          
          {/* 顶部Logo和装饰 */}
          <TopHeader />
        </div>

        {/* 内容区域 - 根据状态切换 */}
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomePageContent
              key="home"
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              storyText={storyText}
              setStoryText={setStoryText}
              uploadedImages={uploadedImages}
              setUploadedImages={setUploadedImages}
              moguiRotation={moguiRotation}
              setMoguiRotation={setMoguiRotation}
              chunjieRotation={chunjieRotation}
              setChunjieRotation={setChunjieRotation}
              onGenerateScript={() => setCurrentPage('loading')}
            />
          )}

          {currentPage === 'loading' && (
            <LoadingPageContent key="loading" />
          )}

          {currentPage === 'script' && (
            <ScriptPageContent
              key="script"
              onStartDrawing={() => console.log('Start drawing comic')}
              onBack={() => setCurrentPage('home')}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
