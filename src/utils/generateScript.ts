// 根据故事内容生成四格漫画分镜脚本

export interface PanelData {
  title: string;
  description: string;
  dialogue: string;
}

export interface ScriptResult {
  title: string; // 漫画标题：快看！xxxx
  panels: PanelData[]; // 四格分镜数据
}

// 生成漫画标题
function generateTitle(story: string, topics?: Set<string>): string {
  // 根据话题生成标题
  if (topics && topics.size > 0) {
    const topicTitles: Record<string, string> = {
      mogui: '快看！我的魔鬼亲戚',
      chunjie: '快看！我的春节名场面',
      shenxian: '快看！我遇到了神仙',
      suliao: '快看！我的塑料友情',
      youdu: '快看！我的有毒父母',
      laoshi: '快看！我的老师',
    };
    
    // 优先使用第一个选中的话题
    const firstTopic = Array.from(topics)[0];
    if (firstTopic && topicTitles[firstTopic]) {
      return topicTitles[firstTopic];
    }
  }
  
  // 从故事内容中提取关键词生成标题
  const keywordTitles: Array<{ keywords: string[], title: string }> = [
    { keywords: ['亲戚', '魔鬼', '大姨', '大姑'], title: '快看！我的奇葩亲戚' },
    { keywords: ['春节', '过年', '年夜饭', '除夕', '大年'], title: '快看！我的春节故事' },
    { keywords: ['神仙', '仙人', '法力', '神话'], title: '快看！我遇见了神仙' },
    { keywords: ['朋友', '闺蜜', '兄弟', '塑料'], title: '快看！我的朋友圈' },
    { keywords: ['父母', '妈妈', '爸爸', '家长'], title: '快看！我的家庭故事' },
    { keywords: ['老师', '学校', '班主任'], title: '快看！我和老师的故事' },
    { keywords: ['爱情', '恋爱', '对象', '喜欢'], title: '快看！我的爱情故事' },
    { keywords: ['工作', '职场', '老板', '同事'], title: '快看！我的职场日常' },
    { keywords: ['猫', '狗', '宠物'], title: '快看！我和宠物的故事' },
    { keywords: ['梦', '梦见', '梦想'], title: '快看！我的奇妙梦境' },
  ];
  
  for (const item of keywordTitles) {
    if (item.keywords.some(kw => story.includes(kw))) {
      return item.title;
    }
  }
  
  // 兜底文案
  return '快看！漫画我的故事';
}

export function generateScript(story: string, style?: string | null, topics?: Set<string>): ScriptResult {
  // 生成标题
  const title = generateTitle(story, topics);
  
  // 如果没有输入故事，返回默认示例
  if (!story || story.trim() === '') {
    return {
      title: '快看！漫画我的故事',
      panels: [
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
          description: '机甲战士脸红了,乖乖坐下被主角摸头。',
          dialogue: "机甲猫：'喵..（害羞）'"
        }
      ]
    };
  }

  // 分析故事内容，生成四格分镜
  const sentences = story.split(/[。！？\\n]/).filter(s => s.trim().length > 0);
  const panels: PanelData[] = [];

  // 根据故事长度决定分镜策略
  if (sentences.length >= 4) {
    // 故事较长，取关键句子
    const keyIndices = [
      0, // 开头
      Math.floor(sentences.length * 0.33), // 发展
      Math.floor(sentences.length * 0.66), // 高潮
      sentences.length - 1 // 结尾
    ];

    keyIndices.forEach((idx, panelNum) => {
      const sentence = sentences[idx] || sentences[0];
      panels.push(createPanel(panelNum + 1, sentence, story, topics));
    });
  } else if (sentences.length === 3) {
    // 三句话：开头、发展、结尾，中间补充一个转折
    panels.push(createPanel(1, sentences[0], story, topics));
    panels.push(createPanel(2, sentences[1], story, topics));
    panels.push(createPanel(3, `${sentences[1]}的转折时刻`, story, topics));
    panels.push(createPanel(4, sentences[2], story, topics));
  } else if (sentences.length === 2) {
    // 两句话：开头、发展、高潮、结尾
    panels.push(createPanel(1, sentences[0], story, topics));
    panels.push(createPanel(2, `${sentences[0]}之后`, story, topics));
    panels.push(createPanel(3, sentences[1], story, topics));
    panels.push(createPanel(4, `${sentences[1]}的结果`, story, topics));
  } else {
    // 只有一句话，拆分成四个阶段
    const mainSentence = sentences[0] || story;
    panels.push(createPanel(1, `${mainSentence}的开始`, story, topics));
    panels.push(createPanel(2, `${mainSentence}的发展`, story, topics));
    panels.push(createPanel(3, `${mainSentence}的高潮`, story, topics));
    panels.push(createPanel(4, `${mainSentence}的结局`, story, topics));
  }

  return { title, panels };
}

function createPanel(panelNum: number, sentence: string, fullStory: string, topics?: Set<string>): PanelData {
  // 提取关键词
  const keywords = extractKeywords(sentence);
  
  // 生成画面描述
  const description = generateDescription(sentence, keywords, panelNum, topics);
  
  // 生成对白
  const dialogue = generateDialogue(sentence, keywords, panelNum, topics);

  return {
    title: `PANEL${panelNum} 画面描述`,
    description,
    dialogue
  };
}

function extractKeywords(sentence: string): string[] {
  // 简单的关键词提取（实际可以更复杂）
  const keywords: string[] = [];
  
  // 人物关键词
  const characters = ['我', '你', '他', '她', '爷爷', '奶奶', '妈妈', '爸爸', '亲戚', '家人', '朋友', '神仙', '魔鬼', '孩子'];
  characters.forEach(char => {
    if (sentence.includes(char)) keywords.push(char);
  });
  
  // 场景关键词
  const scenes = ['家', '老家', '厨房', '客厅', '街道', '超市', '山里', '饭桌'];
  scenes.forEach(scene => {
    if (sentence.includes(scene)) keywords.push(scene);
  });
  
  // 物品关键词
  const items = ['年夜饭', '饺子', '鞭炮', '红包', '春晚', '手办'];
  items.forEach(item => {
    if (sentence.includes(item)) keywords.push(item);
  });
  
  return keywords;
}

function generateDescription(sentence: string, keywords: string[], panelNum: number, topics?: Set<string>): string {
  // 根据话题调整描述风格
  let stylePrefix = '';
  if (topics?.has('shenxian')) {
    stylePrefix = '画面带有神话氛围，';
  } else if (topics?.has('mogui')) {
    stylePrefix = '画面充满戏剧张力，';
  } else if (topics?.has('chunjie')) {
    stylePrefix = '画面洋溢着春节气氛，';
  }

  // 清理句子（去除例如、或者等提示词）
  let cleanSentence = sentence
    .replace(/^例如：/, '')
    .replace(/^或者/, '')
    .replace(/\.\.\.+$/, '');

  // 根据镜头位置添加描述
  const shots = ['全景展示', '镜头推进', '特写镜头', '全景收尾'];
  const shot = shots[panelNum - 1] || '画面';

  return `${stylePrefix}${shot}：${cleanSentence}。画面中${keywords.slice(0, 2).join('、') || '主角'}清晰可见。`;
}

function generateDialogue(sentence: string, keywords: string[], panelNum: number, topics?: Set<string>): string {
  // 提取引号内的对话
  const directSpeech = sentence.match(/["']([^"']+)["']/);
  if (directSpeech) {
    const speaker = keywords[0] || '主角';
    return `${speaker}：${directSpeech[1]}`;
  }

  // 根据句子内容生成对话
  const dialogues = [
    // 神仙相关
    { keywords: ['神仙', '法力', '愿望'], dialogue: ['这真是太神奇了！', '我的愿望能实现吗？', '仙人，请帮帮我！'] },
    // 魔鬼亲戚相关
    { keywords: ['亲戚', '工资', '对象', '婚'], dialogue: ['这个...我还在考虑', '咳咳，这个话题...', '啊哈哈，天气真好啊'] },
    { keywords: ['熊孩子', '玩具', '手办'], dialogue: ['不行！这个不能碰！', '这是我的宝贝！', '小朋友，我们玩别的好吗？'] },
    // 春节相关
    { keywords: ['年夜饭', '饺子', '包饺子'], dialogue: ['这饺子真香！', '我要多包几个！', '今年的饺子真好吃'] },
    { keywords: ['鞭炮', '放炮'], dialogue: ['快跑！', '嘭！新年快乐！', '太刺激了！'] },
    { keywords: ['红包', '压岁钱'], dialogue: ['谢谢！新年快乐！', '红包拿来！', '恭喜发财！'] },
    { keywords: ['春晚'], dialogue: ['今年的节目不错！', '这个小品太搞笑了', '快看，他来了！'] },
    // 家庭相关
    { keywords: ['爷爷', '奶奶'], dialogue: ['爷爷奶奶，我回来了！', '过年好！', '您身体还好吗？'] },
    { keywords: ['妈妈', '爸爸'], dialogue: ['我回家了！', '爸妈，新年快乐！', '真想你们'] },
  ];

  for (const item of dialogues) {
    if (item.keywords.some(kw => sentence.includes(kw))) {
      const randomDialogue = item.dialogue[Math.floor(Math.random() * item.dialogue.length)];
      const speaker = keywords[0] || '主角';
      return `${speaker}："${randomDialogue}"`;
    }
  }

  // 默认对话
  const defaultDialogues = [
    '这真是意想不到！',
    '接下来会怎样呢？',
    '太有趣了！',
    '这就是结局吗？'
  ];
  
  const speaker = keywords[0] || '主角';
  return `${speaker}："${defaultDialogues[panelNum - 1] || defaultDialogues[0]}"`;
}