import type { PanelData } from './generateScript';
import { searchUnsplashImage } from '@/services/unsplashService';

// Nanobanana Pro 模拟效果 - 各种漫画风格的图片池（备用方案）
const styleImagePools: Record<string, string[]> = {
  // 日式漫画
  japanese: [
    'https://images.unsplash.com/photo-1767454679926-c0c507ad14ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hbmdhJTIwYW5pbWUlMjBzdHlsZXxlbnwxfHx8fDE3Njk1MDE4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767390771847-b0e047ee30e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGxhbmRzY2FwZSUyMHNjZW5lfGVufDF8fHx8MTc2OTUwMTgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768677738925-a30954fa1dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3Njk1MDE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762178819495-8d89241b1de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG5hdHVyZSUyMHNjZW5lcnl8ZW58MXx8fHwxNzY5NTAxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 彩色动漫
  colorful: [
    'https://images.unsplash.com/photo-1764520408437-95890a95db4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFuaW1lJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2OTUwMTgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1741705407719-511609581dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwYW5pbWUlMjBhcnR3b3JrfGVufDF8fHx8MTc2OTUwMTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1613336116818-b83da0180161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhcnRvb24lMjBhcnR8ZW58MXx8fHwxNzY5NTAxODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1741705407719-511609581dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBhbmltZSUyMHN0eWxlfGVufDF8fHx8MTc2OTUwMTgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 吉卜力风格
  ghibli: [
    'https://images.unsplash.com/photo-1656215706608-4adcf6c8391f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2OTUwMTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1610114586897-20495783e96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBhbmltZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NTAxODIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1725711028475-99a333268847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVhbXklMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY5NTAxODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1769203823064-71f722b1a2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZhbnRhc3klMjB3b3JsZHxlbnwxfHx8fDE3Njk1MDE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 新海诚风格
  shinkai: [
    'https://images.unsplash.com/photo-1610114586897-20495783e96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBhbmltZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NTAxODIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1725711028475-99a333268847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVhbXklMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY5NTAxODI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762356201958-d8ece711e4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNpdHklMjBzY2VuZXxlbnwxfHx8fDE3Njk1MDE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767390771847-b0e047ee30e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGxhbmRzY2FwZSUyMHNjZW5lfGVufDF8fHx8MTc2OTUwMTgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // Q版可爱
  qversion: [
    'https://images.unsplash.com/photo-1764083680353-0de3e959a375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2hpYmklMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY5NTAxODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1756388961620-5838b2299714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhaWklMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY5NTAxODIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758094651716-c353aafda66b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc2OTUwMTgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767557125491-b3483567d843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2OTUwMTgzNHww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 热血少年漫
  shonen: [
    'https://images.unsplash.com/photo-1764730282820-f9cdd430b1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9uZW4lMjBtYW5nYSUyMGFjdGlvbnxlbnwxfHx8fDE3Njk1MDE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760113671986-63ccb46ae202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3Njk1MDE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763315371311-f59468cc2ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtYW5nYSUyMHN0eWxlfGVufDF8fHx8MTc2OTUwMTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768142206948-fbbb321aac4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkeW5hbWljJTIwbWFuZ2ElMjBwYW5lbHxlbnwxfHx8fDE3Njk1MDE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 港漫风格
  hongkong: [
    'https://images.unsplash.com/photo-1688287633787-5f019794e9c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25nJTIwa29uZyUyMG1hbmh1YSUyMGNvbWljfGVufDF8fHx8MTc2OTUwMTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759162995263-6a7b78a5b1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbWljJTIwYXJ0fGVufDF8fHx8MTc2OTUwMTgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1598669266646-9480908dbf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNvbWljfGVufDF8fHx8MTc2OTUwMTgzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760113671986-63ccb46ae202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3Njk1MDE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 美式漫画
  american: [
    'https://images.unsplash.com/photo-1684086974613-7784a14e56cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBhcnR3b3JrfGVufDF8fHx8MTc2OTUwMTgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763315371311-f59468cc2ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjb21pYyUyMHN0eWxlfGVufDF8fHx8MTc2OTUwMTgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759863738666-7584248cdf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBhcnQlMjBjb21pY3xlbnwxfHx8fDE3Njk1MDE4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1711035976484-91d943750256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwbm92ZWwlMjBhcnR8ZW58MXx8fHwxNzY5NTAxODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 水彩插画
  watercolor: [
    'https://images.unsplash.com/photo-1734548775981-a1add95a5a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwaWxsdXN0cmF0aW9uJTIwYXJ0fGVufDF8fHx8MTc2OTUwMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1705599773422-c1066356f801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTAxODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1652523229219-fde2f25a0e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwd2F0ZXJjb2xvciUyMGFydHxlbnwxfHx8fDE3Njk1MDE4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1713813878836-bb3afee98247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjB3YXRlcmNvbG9yfGVufDF8fHx8MTc2OTUwMTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // 铅笔素描
  sketch: [
    'https://images.unsplash.com/photo-1720248090619-95d555f01bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBza2V0Y2glMjBkcmF3aW5nfGVufDF8fHx8MTc2OTQ5Nzk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1725299249146-ee7e76af658d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHNrZXRjaHxlbnwxfHx8fDE3Njk1MDE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1708551865963-ddb935d96128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBhcnQlMjBkcmF3aW5nfGVufDF8fHx8MTc2OTUwMTgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765029582782-8b53b4ae41bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY29hbCUyMHNrZXRjaCUyMGFydHxlbnwxfHx8fDE3Njk1MDE4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
};

// 漫画风格到提示词的映射（保留用于后续真实API调用）
const stylePrompts: Record<string, string> = {
  japanese: 'Japanese manga style, traditional anime aesthetic, detailed line art',
  colorful: 'Colorful anime style, vibrant colors, modern animation aesthetic',
  ghibli: 'Studio Ghibli style, hand-drawn animation, whimsical atmosphere',
  shinkai: 'Makoto Shinkai style, beautiful scenery, cinematic lighting',
  qversion: 'Chibi Q-version style, cute characters, simplified proportions',
  shonen: 'Shonen manga style, dynamic action, energetic composition',
  hongkong: 'Hong Kong manhua style, martial arts aesthetic, bold lines',
  american: 'American comic book style, superhero aesthetic, bold colors',
  watercolor: 'Watercolor illustration style, soft colors, artistic brush strokes',
  sketch: 'Pencil sketch style, hand-drawn line art, artistic shading',
};

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
  
  console.log(`生成第${panelIndex + 1}格分镜 (${style}风格):`, prompt);
  console.log(`分镜描述: ${panel.description}`);
  
  try {
    // TODO: 这里应该调用真实的AI图片生成API (例如 Nanobanana Pro)
    // const response = await fetch('YOUR_AI_API_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ prompt, style })
    // });
    // const data = await response.json();
    // return data.imageUrl;
    
    // 模拟阶段：使用 Unsplash 根据分镜描述搜索对应内容的图片
    const imageUrl = await searchUnsplashImage(panel.description, panelIndex);
    console.log(`第${panelIndex + 1}格图片URL:`, imageUrl);
    return imageUrl;
    
  } catch (error) {
    console.error(`第${panelIndex + 1}格图片生成失败，使用备用图片池:`, error);
    
    // 如果 Unsplash 搜索失败，回退到固定图片池
    const imagePool = styleImagePools[style] || styleImagePools.japanese;
    const hash = (panel.description + style + panelIndex)
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const imageIndex = Math.abs(hash) % imagePool.length;
    return imagePool[imageIndex];
  }
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