import { useState } from 'react';
import { motion } from 'motion/react';
import ButtoGroups from '@/imports/ButtoGroups';
import TopHeader from '@/app/components/TopHeader';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import ScriptEditor from '@/app/components/ScriptEditor';
import type { PanelData } from '@/utils/generateScript';
import imgBg from "figma:asset/5a0ac0a879b18c754e27b297ce3c5de07caee829.png";
import imgImage13 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";

interface ScriptPageProps {
  initialPanels?: PanelData[];
  onStartDrawing: (editedPanels: PanelData[]) => void;
  onBack: () => void;
}

export default function ScriptPage({ initialPanels = [], onStartDrawing, onBack }: ScriptPageProps) {
  const [panels, setPanels] = useState<PanelData[]>(initialPanels.length > 0 ? initialPanels : [
    {
      title: 'PANEL1 画面描述',
      description: '主角走在阳光明媚的街道上，突然发现脚下有一只发光的猫咪。',
      dialogue: "主角：'咦？这是什么？'"
    },
    {
      title: 'PANEL2 画面描述',
      description: '猫咪突然变成了一个巨大的机甲战士，路人惊恐万分。',
      dialogue: "路人：'啊啊啊！怪兽！'"
    },
    {
      title: 'PANEL3 画面描述',
      description: '主角不仅没有害怕，反而兴奋地拿出了逗猫棒。',
      dialogue: "主角：'乖，来玩呀！'"
    },
    {
      title: 'PANEL4 画面描述',
      description: '机甲战士脸红了，乖乖坐下被主角摸头。',
      dialogue: "机甲猫：'喵..（害羞）'"
    }
  ]);

  const updatePanel = (index: number, field: 'description' | 'dialogue', value: string) => {
    const newPanels = [...panels];
    newPanels[index][field] = value;
    setPanels(newPanels);
  };

  return (
    <div className="bg-[rgba(0,0,0,0)] relative w-[750px] h-[1624px]" data-name="Figma design - 生成剧本.png">
      {/* Root */}
      <div className="absolute bg-[rgba(0,0,0,0)] h-[1621.622px] left-[-0.45px] right-[0.45px] top-[0.19px]" data-name="Root">
        {/* Background */}
        <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px]" data-name="bg">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
        </div>

        {/* Side border */}
        <div className="absolute bottom-0 h-[1621.622px] right-0 w-[1.126px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
        </div>

        {/* Groups - Main content */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[266.89px] h-[1354.73px] right-0 w-[750px] overflow-visible" data-name="Groups">
          {/* 使用ScriptEditor组件 */}
          <ScriptEditor panels={panels} onUpdatePanel={updatePanel} />

          {/* Top logo section */}
          <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1004.5px] h-[350.225px] right-0 w-[750px]" data-name="Groups">
            {/* 春节光点粒子效果 */}
            <GuangDianLiZi width={750} height={350} />
            
            {/* 顶部Logo和装饰 - 使用TopHeader组件 */}
            <TopHeader />
          </div>
        </div>

        {/* Bottom button */}
        <div className="absolute h-[91px] left-[-0.1px] top-[1404.62px] w-[750px]" data-name="Groups">
          <ButtoGroups onStartDrawing={() => onStartDrawing(panels)} onBack={onBack} />
        </div>
      </div>
    </div>
  );
}