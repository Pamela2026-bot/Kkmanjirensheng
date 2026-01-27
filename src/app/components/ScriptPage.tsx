import { useState } from 'react';
import { motion } from 'motion/react';
import ButtoGroups from '@/imports/ButtoGroups';
import GuangDianLiZi from '@/app/components/GuangDianLiZi';
import ScriptEditor from '@/app/components/ScriptEditor';
import type { PanelData } from '@/utils/generateScript';
import imgBg from "figma:asset/a414cc1cab9532be936d7017bf7b90b9478bb82f.png";
import imgImage13 from "figma:asset/43192f93114af8b9a5406264c1649eef98b2df77.png";
import imgLogo from "figma:asset/c301e171aed62395c79f7ef941923a62626a0795.png";

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
        {/* Background - z-0 */}
        <div className="absolute h-[1624px] left-[-0.1px] top-[-0.38px] w-[750px] z-0" data-name="bg">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
        </div>

        {/* 烟花粒子效果 - z-5 在背景之上，内容之下 */}
        <div className="absolute bg-[rgba(0,0,0,0)] h-[350.225px] left-0 top-0 w-[750px] z-5" data-name="Fireworks">
          <GuangDianLiZi width={750} height={350} />
        </div>

        {/* Groups - Main content - z-10 */}
        <div className="absolute bg-[rgba(0,0,0,0)] bottom-[276.19px] h-[1188px] right-0 w-[750px] overflow-visible z-10" data-name="Groups">
          {/* 使用ScriptEditor组件 */}
          <ScriptEditor panels={panels} onUpdatePanel={updatePanel} />
        </div>

        {/* Bottom button - z-20 */}
        <div className="absolute bottom-0 h-[201px] left-0 w-[750px] z-20" data-name="Groups">
          <ButtoGroups onStartDrawing={() => onStartDrawing(panels)} onBack={onBack} />
        </div>

        {/* Bottom Logo - z-20 */}
        <div className="absolute h-[38px] left-[313.66px] top-[1562.18px] w-[123px] z-20" data-name="logo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}