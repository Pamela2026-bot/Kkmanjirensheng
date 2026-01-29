/**
 * ImgTuanzi2 组件 - 团子GIF动图
 *
 * 使用外部URL方案：Imgur托管
 */

// 团子GIF URL
const TUANZI_GIF_URL = "https://i.imgur.com/9qezoDu.gif";

export default function ImgTuanzi() {
  return (
    <div className="relative size-full" data-name="img_tuanzi2">
      {/* 阴影 */}
      <div
        className="absolute flex h-[44.947px] items-center justify-center left-[51px] top-[104px] w-[139.336px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[4.83deg]">
          <div
            className="h-[33.537px] relative w-[137px]"
            data-name="阴影"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 137 33.5372"
            >
              <ellipse
                cx="68.5"
                cy="16.7686"
                fill="var(--fill-0, #343536)"
                fillOpacity="0.14"
                rx="68.5"
                ry="16.7686"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 团子 GIF 动图 */}
      <div
        className="absolute h-[150px] left-0 top-0 w-[210px]"
        data-name="img_tuanzi2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="团子动画"
            className="absolute h-[79.33%] left-[3.24%] max-w-none top-[20.67%] w-[96.85%]"
            src={TUANZI_GIF_URL}
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </div>
  );
}