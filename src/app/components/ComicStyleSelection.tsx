import ComicStyleButton from '@/app/components/ComicStyleButton';

interface ComicStyleSelectionProps {
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
}

const styles = [
  // Row 1
  [
    { id: 'japanese', label: '日式漫画' },
    { id: 'colorful', label: '彩色动漫' },
    { id: 'ghibli', label: '吉卜力风格' },
  ],
  // Row 2
  [
    { id: 'shinkai', label: '新海诚风格' },
    { id: 'qversion', label: 'Q版可爱' },
    { id: 'shonen', label: '热血少年漫' },
  ],
  // Row 3
  [
    { id: 'hongkong', label: '港漫风格' },
    { id: 'american', label: '美式漫画' },
    { id: 'watercolor', label: '水彩插画' },
  ],
  // Row 4
  [
    { id: 'sketch', label: '铅笔素描' },
  ],
];

export default function ComicStyleSelection({ selectedStyle, onStyleSelect }: ComicStyleSelectionProps) {
  return (
    <>
      {styles.map((row, rowIndex) => {
        // 判断当前行是否所有按钮都是5个字
        const allFiveChars = row.every(style => style.label.length === 5);
        // 如果都是5字，间距为0；否则为8px
        const gapSize = allFiveChars ? '0' : '8px';
        
        return (
          <div 
            key={rowIndex} 
            className="content-stretch flex items-center relative shrink-0 w-full"
            style={{ gap: gapSize }}
          >
            {row.map((style) => (
              <ComicStyleButton
                key={style.id}
                id={style.id}
                label={style.label}
                isSelected={selectedStyle === style.id}
                onClick={() => onStyleSelect(style.id)}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}