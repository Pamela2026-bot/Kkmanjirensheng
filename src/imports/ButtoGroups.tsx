import { motion } from 'motion/react';
import imgButtonBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";
import imgFrame1321317227 from "figma:asset/59e5f70a382aa82b5e87fe96cd77271ca53c6cca.png";

interface ButtonBackProps {
  onClick: () => void;
}

function ButtonBack({ onClick }: ButtonBackProps) {
  return (
    <motion.button
      className="content-stretch flex h-[90px] items-center justify-center overflow-clip px-[70px] py-[21px] relative shrink-0 w-[208px] cursor-pointer bg-transparent border-none outline-none" 
      data-name="button_back"
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonBack} />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black uppercase pointer-events-none z-10">返回</p>
    </motion.button>
  );
}

function FreeBadge() {
  return (
    <div className="absolute bg-[#ff6868] content-stretch flex flex-col items-start left-[336.5px] px-[8px] py-[4px] rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] top-[-8.5px]" data-name="气泡">
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">免费一次</p>
    </div>
  );
}

interface FrameProps {
  onClick: () => void;
}

function Frame({ onClick }: FrameProps) {
  return (
    <motion.button
      className="content-stretch flex gap-[10px] h-[91px] items-center justify-center px-[129px] py-[23px] relative shrink-0 w-[461px] cursor-pointer bg-transparent border-none outline-none"
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1321317227} />
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white pointer-events-none z-10">
        <p className="leading-[normal]">开始绘制漫画</p>
      </div>
      <FreeBadge />
    </motion.button>
  );
}

interface ButtoGroupsProps {
  onStartDrawing: () => void;
  onBack: () => void;
}

export default function ButtoGroups({ onStartDrawing, onBack }: ButtoGroupsProps) {
  return (
    <div className="content-stretch flex gap-[19px] items-start justify-center pb-[90px] pt-[20px] relative size-full" data-name="butto_groups">
      <ButtonBack onClick={onBack} />
      <Frame onClick={onStartDrawing} />
    </div>
  );
}