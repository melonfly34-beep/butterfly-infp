export const personalityTests = [
  {
    name: '中文人格测试合集',
    type: '测试合集 / 自我探索入口',
    audience: '想集中查看中文测试入口的人',
    description:
      '一个便于快速进入人格测试的中文入口，适合作为网站里的主要测试导航链接。',
    url: 'https://www.kdocs.cn/l/cfgPBtsOBbr0',
  },
  {
    name: 'Totypes 荣格八维测试',
    type: '荣格八维 / 认知功能测试',
    audience: '想了解 Fi、Ne、Si、Te 等认知功能倾向的人',
    description:
      '偏向认知功能分析，适合已经知道 MBTI 类型、想进一步理解自己思维模式的人。',
    url: 'https://totypes.com/xinggeceshi.php',
  },
  {
    name: '荣格斯认知功能测试',
    type: '荣格认知功能测试',
    audience: '想进行更深入人格功能探索的人',
    description:
      '适合想进一步比较不同认知功能强弱、理解自身人格结构的人。',
    url: 'https://www.jungus.cn/zh-hans/test/',
  },
];

export const stateQuestions = [
  {
    id: 'social',
    question: '今天你更想独处还是交流？',
    options: [
      { label: '安静独处', value: 'forest' },
      { label: '温和交流', value: 'empathy' },
      { label: '找人分享想法', value: 'spark' },
    ],
  },
  {
    id: 'energy',
    question: '今天你是灵感很多，还是执行力更强？',
    options: [
      { label: '灵感很多', value: 'spark' },
      { label: '能开始做事', value: 'burning' },
      { label: '有点想躲起来', value: 'avoid' },
    ],
  },
  {
    id: 'mind',
    question: '你现在更接近“想太多”还是“开始做”？',
    options: [
      { label: '想法绕了几圈', value: 'empathy' },
      { label: '已经迈出一点', value: 'burning' },
      { label: '先缓一缓', value: 'forest' },
    ],
  },
  {
    id: 'sensitivity',
    question: '最近有没有因为别人的一句话反复回想？',
    options: [
      { label: '有，而且停不下来', value: 'empathy' },
      { label: '有，但我在消化', value: 'forest' },
      { label: '不太有，我更想行动', value: 'burning' },
    ],
  },
];

export const stateResults = {
  forest: {
    title: '森林隐居型 INFP',
    text: '你今天可能更需要低噪音的空间。不是不在乎外界，而是内心正在整理太多细微的感受。',
    advice: '今日建议：给自己留一段不解释的独处时间，做一件能让身体慢下来的小事。',
  },
  spark: {
    title: '灵感喷泉型 INFP',
    text: '你的脑海里可能正在冒出很多画面、句子和可能性。它们不一定要马上完整，但值得被记录下来。',
    advice: '今日建议：先写下三个最想尝试的点，再选一个用十分钟做出雏形。',
  },
  empathy: {
    title: '过载共情型 INFP',
    text: '你今天可能接收了太多别人的情绪和暗示。敏感本身不是问题，边界不够清晰时才会让人疲惫。',
    advice: '今日建议：把“别人的感受”和“我的责任”分开写下来，先照顾自己的真实状态。',
  },
  burning: {
    title: '理想燃烧型 INFP',
    text: '你正在靠近某个真正重要的方向。理想感不是空想，它可以成为你持续行动的燃料。',
    advice: '今日建议：把目标缩小到今天能完成的一步，完成后立刻标记下来。',
  },
  avoid: {
    title: '现实逃避型 INFP',
    text: '你可能不是懒，而是面对任务时感到压力、混乱或害怕不够好。逃开只是大脑在请求喘息。',
    advice: '今日建议：不要要求自己进入完美状态，只打开任务五分钟，允许结果很粗糙。',
  },
};
