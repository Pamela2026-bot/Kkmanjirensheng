/**
 * Unsplash 图片搜索服务
 * 根据分镜描述内容搜索相关图片
 */

/**
 * 从描述中提取关键词用于搜索
 */
function extractSearchKeywords(description: string): string {
  // 移除常见的无用词
  const cleanedDesc = description
    .replace(/画面/g, '')
    .replace(/镜头/g, '')
    .replace(/清晰可见/g, '')
    .replace(/展示/g, '')
    .replace(/特写/g, '')
    .replace(/全景/g, '')
    .replace(/推进/g, '')
    .replace(/收尾/g, '')
    .replace(/带有/g, '')
    .replace(/氛围/g, '')
    .replace(/充满/g, '')
    .replace(/洋溢着/g, '')
    .replace(/：/g, ' ')
    .replace(/、/g, ' ')
    .replace(/。/g, ' ');
  
  // 提取关键名词
  const keywords: string[] = [];
  
  // 场景关键词
  const sceneKeywords: Record<string, string> = {
    '春节': 'chinese new year celebration',
    '过年': 'chinese new year',
    '除夕': 'chinese new year eve',
    '年夜饭': 'family dinner reunion',
    '饺子': 'chinese dumplings',
    '鞭炮': 'fireworks festival',
    '红包': 'red envelope chinese',
    '春晚': 'chinese celebration',
    '家': 'cozy home interior',
    '厨房': 'kitchen cooking',
    '客厅': 'living room family',
    '街道': 'city street scene',
    '超市': 'supermarket shopping',
    '山里': 'mountain landscape',
    '神仙': 'mystical fantasy character',
    '魔鬼': 'dramatic expression',
    '亲戚': 'family gathering',
    '朋友': 'friends together',
    '爷爷': 'elderly grandfather',
    '奶奶': 'elderly grandmother',
    '妈妈': 'mother parent',
    '爸爸': 'father parent',
    '孩子': 'child playing',
    '猫': 'cute cat',
    '狗': 'dog pet',
  };
  
  // 匹配关键词
  for (const [cn, en] of Object.entries(sceneKeywords)) {
    if (cleanedDesc.includes(cn)) {
      keywords.push(en);
    }
  }
  
  // 如果没有匹配到关键词，使用通用关键词
  if (keywords.length === 0) {
    keywords.push('illustration art scene');
  }
  
  return keywords.slice(0, 2).join(' ');
}

/**
 * 搜索图片
 * @param description 分镜描述
 * @param panelIndex 分镜索引 (0-3)
 * @returns 图片 URL
 */
export async function searchUnsplashImage(
  description: string,
  panelIndex: number
): Promise<string> {
  try {
    const searchQuery = extractSearchKeywords(description);
    console.log(`Panel ${panelIndex + 1} 搜索关键词:`, searchQuery);
    
    // 模拟环境：使用 Picsum Photos（可靠的占位图服务）
    // 使用搜索关键词的哈希值和分镜索引生成唯一的图片ID
    const hash = searchQuery.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const imageId = (Math.abs(hash) + panelIndex * 100) % 1000 + 1; // 1-1000范围的图片ID
    
    // Picsum Photos API - 返回固定尺寸的随机图片
    const imageUrl = `https://picsum.photos/seed/${imageId}/800/600`;
    console.log(`Panel ${panelIndex + 1} 图片URL:`, imageUrl);
    
    return imageUrl;
    
  } catch (error) {
    console.error('图片搜索失败:', error);
    // 返回备用占位图
    const fallbackId = 100 + panelIndex;
    return `https://picsum.photos/seed/${fallbackId}/800/600`;
  }
}

/**
 * 批量搜索图片（用于四格漫画）
 */
export async function searchImagesForPanels(
  descriptions: string[]
): Promise<string[]> {
  const imagePromises = descriptions.map((desc, index) => 
    searchUnsplashImage(desc, index)
  );
  
  return Promise.all(imagePromises);
}
