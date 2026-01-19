import { motion } from 'motion/react';
import imgBack from "figma:asset/1dcc6cffa51db4af7e261094697c9dd695f1dd7a.png";
import imgButtonB2 from "figma:asset/59e5f22793b657bc21fdbb86a939d00ea239bd36.png";

interface ButtonBackProps {
  onClick: () => void;
}

function ButtonBack({ onClick }: ButtonBackProps) {
  return (
    <motion.button 
      className="absolute h-[90px] left-[36px] top-0 w-[208px] cursor-pointer" 
      data-name="button_back"
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={onClick}
    >
      <div className="absolute h-[90px] left-0 top-0 w-[208px]" data-name="back">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBack} />
      </div>
      <p className="absolute font-['PingFang_SC:Bold',sans-serif] leading-[normal] left-[70px] not-italic text-[32px] text-black top-[24px] uppercase whitespace-pre pointer-events-none z-10" style={{ fontWeight: 700 }}>返回</p>
    </motion.button>
  );
}

interface ButtoGroupsProps {
  onStartDrawing: () => void;
  onBack: () => void;
}

export default function ButtoGroups({ onStartDrawing, onBack }: ButtoGroupsProps) {
  return (
    <div className="relative size-full" data-name="butto_groups">
      <motion.div 
        className="absolute h-[91px] left-[263px] top-0 w-[461px] cursor-pointer" 
        data-name="button_b_2"
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        onClick={onStartDrawing}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonB2} />
        <div className="absolute bottom-[45.17px] flex flex-col font-['PingFang_SC:Bold',sans-serif] h-[42.793px] justify-center leading-[0] not-italic right-[347px] text-[32px] text-white translate-x-[100%] translate-y-[50%] w-[203.829px] pointer-events-none" style={{ fontWeight: 700 }}>
          <p className="leading-[normal] whitespace-pre-wrap" style={{ fontWeight: 700 }}>开始绘制漫画</p>
        </div>
      </motion.div>
      <ButtonBack onClick={onBack} />
    </div>
  );
}