import type { PanelData } from './generateScript';

// 漫画风格到提示词的映射
const stylePrompts: Record<string, string> = {
  '水墨画': 'Chinese ink painting style, traditional brush strokes, monochrome with subtle colors',
  '赛博朋克': 'Cyberpunk style, neon lights, futuristic, high-tech',
  '浮世绘': 'Japanese Ukiyo-e style, traditional woodblock print aesthetic',
  '3D卡通': '3D cartoon style, Pixar-like rendering, cute characters',
  '像素风': 'Pixel art style, retro 8-bit or 16-bit game aesthetic',
  '水彩': 'Watercolor painting style, soft colors, artistic brush strokes',
  '波普艺术': 'Pop art style, bold colors, comic book aesthetic',
  '素描': 'Sketch style, pencil drawing, black and white line art',
  '油画': 'Oil painting style, classical art, rich textures',
  '极简主义': 'Minimalist style, simple shapes, clean lines, limited colors',
};

// 模拟阶段使用的占位图片URL池 - 春节主题相关的图片
const mockPanelImages = [
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
  'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800',
  'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
  'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800',
  'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800',
  'https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?w=800',
  'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800',
];

/**
 * 根据单个分镜和漫画风格生成图片
 * @param panel 分镜数据
 * @param panelIndex 分镜索引（0-3）
 * @param style 选择的漫画风格
 * @returns 生成的图片URL
 */
async function generateSinglePanelImage(
  panel: PanelData,
  panelIndex: number,
  style: string
): Promise<string> {
  const stylePrompt = stylePrompts[style] || 'cartoon style';
  
  const prompt = `Single comic panel in ${stylePrompt}. Scene: ${panel.description}. Dialogue: "${panel.dialogue}". Chinese New Year theme, festive atmosphere.`;
  
  console.log(`生成第${panelIndex + 1}格分镜:`, prompt);
  
  // TODO: 这里应该调用真实的AI图片生成API
  // const response = await fetch('YOUR_AI_API_ENDPOINT', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ prompt })
  // });
  // const data = await response.json();
  // return data.imageUrl;
  
  // 模拟阶段：根据分镜描述和索引选择占位图
  const hash = panel.description + style + panelIndex;
  const index = Math.abs(hash.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % mockPanelImages.length;
  
  return mockPanelImages[index];
}

/**
 * 根据剧本分镜和漫画风格生成四格漫画的所有图片
 * @param panels 四个分镜数据
 * @param style 选择的漫画风格
 * @returns 4张图片URL的数组
 */
export async function generateComicImages(
  panels: PanelData[],
  style: string
): Promise<string[]> {
  console.log('开始生成四格漫画，风格:', style);
  console.log('剧本分镜:', panels);

  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 1500));

  // 为每个分镜生成独立的图片
  const imagePromises = panels.map((panel, index) => 
    generateSinglePanelImage(panel, index, style)
  );
  
  const images = await Promise.all(imagePromises);
  
  console.log('生成完成，图片URLs:', images);
  
  return images;
}

/**
 * 构建用于AI生成的详细提示词
 * @param panel 单个分镜数据
 * @param panelIndex 分镜索引
 * @param style 漫画风格
 * @returns 格式化的提示词
 */
export function buildPromptForAI(panel: PanelData, panelIndex: number, style: string): string {
  const stylePrompt = stylePrompts[style] || 'cartoon style';
  
  let prompt = `Create a single comic panel (Panel ${panelIndex + 1}/4) in ${stylePrompt}.\n\n`;
  prompt += `Scene Description: ${panel.description}\n`;
  prompt += `Dialogue: "${panel.dialogue}"\n\n`;
  prompt += 'Requirements:\n';
  prompt += '- Chinese New Year festive theme\n';
  prompt += '- Include speech bubble with dialogue text\n';
  prompt += '- High quality illustration\n';
  prompt += '- Consistent character design for series\n';
  
  return prompt;
}