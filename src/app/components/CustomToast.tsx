import { motion, AnimatePresence } from 'motion/react';

interface CustomToastProps {
  message: string;
  isVisible: boolean;
}

export default function CustomToast({ message, isVisible }: CustomToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] min-w-[240px] max-w-[552px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div 
            className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center px-[24px] py-[20px] rounded-[16px]" 
            data-name="toast"
          >
            <div className="font-['PingFang_SC:Regular',sans-serif] leading-[34px] not-italic text-[28px] text-center text-white whitespace-pre-wrap">
              {message}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
