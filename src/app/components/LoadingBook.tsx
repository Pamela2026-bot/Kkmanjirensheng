import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import imgLoadingBook from "figma:asset/33ae3cf62c96a616b57dd550da0ddbfceccae9db.png";

interface LoadingBookProps {
  text: string;
}

export default function LoadingBook({ text }: LoadingBookProps) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4); // 0, 1, 2, 3 循环
    }, 250); // 每0.25秒增加一个点，1秒完成一个循环

    return () => clearInterval(interval);
  }, []);

  // 分离文本和省略号
  const textWithoutDots = text.replace(/\.+$/, ''); // 移除末尾的点
  const dots = '.'.repeat(dotCount);

  return (
    <>
      {/* Loading text with animation - 居中对齐 */}
      <p className="absolute font-['PingFang_SC:Bold',sans-serif] leading-[normal] left-[50%] translate-x-[-50%] not-italic text-[32px] text-black top-[812.62px] whitespace-pre text-center" style={{ fontWeight: 700 }}>
        {textWithoutDots}{dots}
      </p>

      {/* Loading book with animation */}
      <motion.div 
        className="absolute left-[calc(50%-0.05px)] size-[139px] top-[673.81px] translate-x-[-50%]" 
        data-name="loading_book"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLoadingBook} />
      </motion.div>
    </>
  );
}