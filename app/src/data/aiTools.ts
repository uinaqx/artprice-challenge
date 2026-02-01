export interface AITool {
  id: number;
  name: string;
  url: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  tools: AITool[];
}

export const categories: Category[] = [
  {
    id: 'chat',
    name: 'AI对话',
    icon: 'MessageSquare',
    color: 'from-blue-500 to-cyan-400',
    tools: [
      { id: 1, name: 'ChatGPT', url: 'https://chatgpt.com', description: 'OpenAI旗舰，全能对话', category: 'chat' },
      { id: 2, name: 'Claude', url: 'https://claude.ai', description: 'Anthropic，擅长长文本分析', category: 'chat' },
      { id: 3, name: 'Google Gemini', url: 'https://gemini.google.com', description: 'Google多模态，支持图像/视频', category: 'chat' },
      { id: 4, name: 'Grok', url: 'https://grok.x.ai', description: 'xAI，实时搜索+幽默风格', category: 'chat' },
      { id: 5, name: 'Perplexity AI', url: 'https://perplexity.ai', description: 'AI搜索引擎，带来源引用', category: 'chat' },
      { id: 6, name: '文心一言', url: 'https://wenxin.baidu.com', description: '百度旗舰，中国最成熟大模型', category: 'chat' },
      { id: 7, name: '通义千问', url: 'https://tongyi.aliyun.com', description: '阿里顶级开源模型，多模态强', category: 'chat' },
      { id: 8, name: '豆包', url: 'https://doubao.com', description: '字节跳动，月活超4000万', category: 'chat' },
      { id: 9, name: 'Kimi', url: 'https://kimi.moonshot.cn', description: '月之暗面，长上下文王者', category: 'chat' },
      { id: 10, name: '智谱清言', url: 'https://chatglm.cn', description: '智谱AI，开源领先', category: 'chat' },
      { id: 11, name: 'DeepSeek', url: 'https://chat.deepseek.com', description: '深度求索，开源coding神器', category: 'chat' },
      { id: 12, name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', description: '科大讯飞，多语言/语音集成强', category: 'chat' },
      { id: 13, name: '腾讯元宝', url: 'https://yuanbao.tencent.com', description: '腾讯，集成生态，实用工具多', category: 'chat' },
      { id: 14, name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', description: '集成Office生态', category: 'chat' },
      { id: 15, name: 'Meta AI', url: 'https://meta.ai', description: '基于Llama的免费助手', category: 'chat' },
      { id: 16, name: 'Mistral Chat', url: 'https://chat.mistral.ai', description: '欧洲高效模型', category: 'chat' },
      { id: 17, name: 'Character.AI', url: 'https://character.ai', description: '角色扮演式对话', category: 'chat' },
      { id: 18, name: 'Notion AI', url: 'https://notion.so', description: '集成笔记工具', category: 'chat' },
    ]
  },
  {
    id: 'image',
    name: '图像生成',
    icon: 'Image',
    color: 'from-purple-500 to-pink-500',
    tools: [
      { id: 19, name: 'Midjourney', url: 'https://midjourney.com', description: '艺术风格顶级', category: 'image' },
      { id: 20, name: 'DALL-E', url: 'https://openai.com/dall-e', description: 'OpenAI图像生成', category: 'image' },
      { id: 21, name: '通义万相', url: 'https://tongyi.aliyun.com/wanxiang', description: '阿里多模态视觉模型，文生图顶级', category: 'image' },
      { id: 22, name: '可灵图像', url: 'https://klingai.com', description: '快手，集成视频，动态图像强', category: 'image' },
      { id: 23, name: 'Leonardo.AI', url: 'https://leonardo.ai', description: '高自定义艺术', category: 'image' },
      { id: 24, name: 'Ideogram', url: 'https://ideogram.ai', description: '文字+图像融合', category: 'image' },
      { id: 25, name: 'Playground AI', url: 'https://playground.com', description: '免费高质编辑', category: 'image' },
      { id: 26, name: 'Adobe Firefly', url: 'https://firefly.adobe.com', description: '专业Photoshop集成', category: 'image' },
      { id: 27, name: 'Stability AI', url: 'https://stability.ai', description: '开源底层模型', category: 'image' },
      { id: 28, name: 'Canva Magic', url: 'https://canva.com', description: '设计平台内置', category: 'image' },
      { id: 29, name: 'Bing Image', url: 'https://bing.com/images/create', description: '免费DALL-E驱动', category: 'image' },
      { id: 30, name: 'Gencraft', url: 'https://gencraft.com', description: '快速艺术风格', category: 'image' },
    ]
  },
  {
    id: 'video',
    name: '视频生成',
    icon: 'Video',
    color: 'from-red-500 to-orange-500',
    tools: [
      { id: 31, name: '可灵AI', url: 'https://klingai.com', description: '快手，中国视频生成王者', category: 'video' },
      { id: 32, name: '通义万相视频', url: 'https://tongyi.aliyun.com/wanxiang', description: '阿里，支持多镜头/声音驱动', category: 'video' },
      { id: 33, name: 'Vidu', url: 'https://vidu.ai', description: '生数科技，高清动漫/真实视频', category: 'video' },
      { id: 34, name: 'Runway ML', url: 'https://runwayml.com', description: '专业文本到视频', category: 'video' },
      { id: 35, name: 'Pika Labs', url: 'https://pika.art', description: '简单短视频', category: 'video' },
      { id: 36, name: 'Luma Dream', url: 'https://lumalabs.ai', description: '高质量长视频', category: 'video' },
      { id: 37, name: 'Synthesia', url: 'https://synthesia.io', description: 'AI虚拟人视频', category: 'video' },
      { id: 38, name: 'HeyGen', url: 'https://heygen.com', description: '商业虚拟主播', category: 'video' },
      { id: 39, name: 'PixVerse', url: 'https://pixverse.ai', description: '多风格视频', category: 'video' },
    ]
  },
  {
    id: 'audio',
    name: '音频工具',
    icon: 'Music',
    color: 'from-green-500 to-emerald-400',
    tools: [
      { id: 40, name: 'ElevenLabs', url: 'https://elevenlabs.io', description: '最自然语音克隆', category: 'audio' },
      { id: 41, name: 'Suno', url: 'https://suno.com', description: '文本到歌曲', category: 'audio' },
      { id: 42, name: 'Udio', url: 'https://udio.com', description: '高质量音乐生成', category: 'audio' },
      { id: 43, name: 'Uberduck', url: 'https://uberduck.ai', description: '趣味语音', category: 'audio' },
      { id: 44, name: 'MusicFX', url: 'https://musicfx.google', description: '实验性音乐', category: 'audio' },
      { id: 45, name: 'Voicemaker', url: 'https://voicemaker.in', description: '多语言转语音', category: 'audio' },
      { id: 46, name: 'Riverside', url: 'https://riverside.fm', description: '音频增强/转录', category: 'audio' },
    ]
  },
  {
    id: 'writing',
    name: '写作代码',
    icon: 'Code',
    color: 'from-yellow-500 to-amber-400',
    tools: [
      { id: 47, name: 'Grammarly', url: 'https://grammarly.com', description: '写作润色', category: 'writing' },
      { id: 48, name: 'Jasper', url: 'https://jasper.ai', description: '营销文案', category: 'writing' },
      { id: 49, name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: '代码补全', category: 'writing' },
      { id: 50, name: 'DeepSeek Coder', url: 'https://chat.deepseek.com', description: '中国coding顶级', category: 'writing' },
      { id: 51, name: 'Cursor', url: 'https://cursor.sh', description: 'AI代码编辑器', category: 'writing' },
      { id: 52, name: 'Blackbox AI', url: 'https://blackbox.ai', description: '代码生成', category: 'writing' },
      { id: 53, name: 'Gamma', url: 'https://gamma.app', description: 'AI幻灯片', category: 'writing' },
      { id: 54, name: 'Fireflies', url: 'https://fireflies.ai', description: '会议总结', category: 'writing' },
      { id: 55, name: 'Remove.bg', url: 'https://remove.bg', description: '背景移除', category: 'writing' },
    ]
  },
  {
    id: 'productivity',
    name: '自动化',
    icon: 'Zap',
    color: 'from-indigo-500 to-violet-400',
    tools: [
      { id: 56, name: '飞书AI', url: 'https://feishu.cn', description: '字节企业协作平台内置AI', category: 'productivity' },
      { id: 57, name: '钉钉AI', url: 'https://dingtalk.com', description: '阿里企业级AI', category: 'productivity' },
      { id: 58, name: 'WPS AI', url: 'https://wps.cn', description: '金山办公AI，智能写作', category: 'productivity' },
      { id: 59, name: 'Notion AI', url: 'https://notion.so', description: '智能笔记、项目管理', category: 'productivity' },
      { id: 60, name: 'Zapier', url: 'https://zapier.com', description: '无代码自动化工作流', category: 'productivity' },
      { id: 61, name: 'Otter.ai', url: 'https://otter.ai', description: '实时会议录音转文字', category: 'productivity' },
      { id: 62, name: 'Mem.ai', url: 'https://mem.ai', description: 'AI驱动个人知识管理', category: 'productivity' },
      { id: 63, name: 'Reclaim.ai', url: 'https://reclaim.ai', description: '智能日程防护', category: 'productivity' },
    ]
  }
];

// Get random tool for homepage display
export function getRandomTool(): AITool {
  const allTools = categories.flatMap(c => c.tools);
  return allTools[Math.floor(Math.random() * allTools.length)];
}

// Get category by ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

// Get all tools
export function getAllTools(): AITool[] {
  return categories.flatMap(c => c.tools);
}
