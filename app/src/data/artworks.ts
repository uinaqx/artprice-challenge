export interface Artwork {
  id: number;
  title: string;
  titleEn: string;
  artist: string;
  artistEn: string;
  year: string;
  price: number;
  type: string;
  image: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "伊丽莎白·莱德勒肖像",
    titleEn: "Portrait of Elisabeth Lederer",
    artist: "古斯塔夫·克林姆特",
    artistEn: "Gustav Klimt",
    year: "1914-1916",
    price: 236400000,
    type: "油画",
    image: "https://kimi-web-img.moonshot.cn/img/www.caproasia.com/6c5b07eaa3abc0c1fb0087c0181e29394b6d4dbf.jpg",
    description: "维也纳分离派黄金时代的巅峰之作，克林姆特晚期肖像画的代表作。"
  },
  {
    id: 2,
    title: "繁花草甸",
    titleEn: "Flower Garden",
    artist: "古斯塔夫·克林姆特",
    artistEn: "Gustav Klimt",
    year: "1907",
    price: 86000000,
    type: "油画",
    image: "https://kimi-web-img.moonshot.cn/img/e3.365dm.com/edb1a9d4804932a90fb888e08078ff23f222d2db.jpg",
    description: "克林姆特风景画第二高价，创作于艺术家与缪斯埃米莉·芙洛格共度的夏日之旅。"
  },
  {
    id: 3,
    title: "成叠的巴黎小说与玻璃杯中的玫瑰",
    titleEn: "Parisian Novels with Rose",
    artist: "文森特·梵高",
    artistEn: "Vincent van Gogh",
    year: "1887",
    price: 62700000,
    type: "油画",
    image: "https://kimi-web-img.moonshot.cn/img/s.turbifycdn.com/7599f165f682aec866e75d299442ff548bba2636.png",
    description: "梵高静物画拍卖纪录，深受日本版画影响，预示了梵高成熟时期的独特风格。"
  },
  {
    id: 4,
    title: "第31号（黄条）",
    titleEn: "No. 31 (Yellow Stripe)",
    artist: "马克·罗斯科",
    artistEn: "Mark Rothko",
    year: "1958",
    price: 62160000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/No._61_%28Rust_and_Blue%29.jpg",
    description: "罗斯科艺术生涯关键转折期代表作，刷新佳士得线上出价纪录。"
  },
  {
    id: 5,
    title: "梦（床）",
    titleEn: "The Dream (The Bed)",
    artist: "弗里达·卡罗",
    artistEn: "Frida Kahlo",
    year: "1940",
    price: 54660000,
    type: "油画",
    image: "https://kimi-web-img.moonshot.cn/img/www.fridakahlo.org/fa26300f975715d33a465ea56b79494d7c3103e7.jpg",
    description: "创下女性艺术家、拉丁美洲艺术家作品全球最高拍卖纪录。"
  },
  {
    id: 6,
    title: "皇冠（Peso Neto）",
    titleEn: "Crowns (Peso Neto)",
    artist: "让-米歇尔·巴斯奎特",
    artistEn: "Jean-Michel Basquiat",
    year: "1981",
    price: 48335000,
    type: "油画",
    image: "https://kimi-web-img.moonshot.cn/img/news.artnet.com/c408fe9ed71826a4967e95afbe0f3a62ffa8beab.jpg",
    description: "巴斯奎特里程碑个展作品，皇冠与骷髅头两大标志皆呈现于此。"
  },
  {
    id: 7,
    title: "构成：大红色平面",
    titleEn: "Composition with Large Red Plane",
    artist: "彼埃·蒙德里安",
    artistEn: "Piet Mondrian",
    year: "1922",
    price: 47560000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan_-_Composition_A_-_Google_Art_Project.jpg/800px-Piet_Mondriaan_-_Composition_A_-_Google_Art_Project.jpg",
    description: "新造型主义代表作，以精密的黑色网格分隔画布，构建动态平衡。"
  },
  {
    id: 8,
    title: "阅读（玛丽·特雷斯）",
    titleEn: "Reading (Marie-Thérèse)",
    artist: "巴布罗·毕加索",
    artistEn: "Pablo Picasso",
    year: "1932",
    price: 45485000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoWeepingWoman.jpg",
    description: "毕加索重回古典'阅读中的女人'主题的代表作，缪斯玛丽·特雷斯为灵感源泉。"
  },
  {
    id: 9,
    title: "睡莲",
    titleEn: "Water Lilies",
    artist: "克劳德·莫奈",
    artistEn: "Claude Monet",
    year: "1907",
    price: 45485000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    description: "莫奈晚年对光影与色彩进行艺术实验的巅峰探索，尽显大师创作成熟期的艺术造诣。"
  },
  {
    id: 10,
    title: "克里斯多福·伊舍伍德与唐·巴查迪",
    titleEn: "Christopher Isherwood and Don Bachardy",
    artist: "大卫·霍克尼",
    artistEn: "David Hockney",
    year: "1968",
    price: 44335000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/A_Bigger_Splash.jpg",
    description: "霍克尼笔下仅存的七幅大型双人肖像画作之一，极具戏剧张力的罕见力作。"
  },
  {
    id: 11,
    title: "松峰晓霭图",
    titleEn: "Misty Pines at Dawn",
    artist: "张大千",
    artistEn: "Zhang Daqian",
    year: "1969",
    price: 14230000,
    type: "国画",
    image: "https://kimi-web-img.moonshot.cn/img/img2.chinadaily.com.cn/8cb0b172f0e19eacef5c820062eb662a51571da7.jpeg",
    description: "张大千泼墨泼彩山水代表作，展现了艺术家晚年泼墨泼彩的成熟技法。"
  },
  {
    id: 12,
    title: "广豳风图",
    titleEn: "Guangbin Feng Tu",
    artist: "齐白石",
    artistEn: "Qi Baishi",
    year: "1940s",
    price: 14230000,
    type: "国画",
    image: "https://kimi-web-img.moonshot.cn/img/video.cgtn.com/ce38f700d6478805df798b745ed72c58c737736b.jpg",
    description: "齐白石册页精品，融合了民间艺术与传统文人画的精髓。"
  },
  {
    id: 13,
    title: "柏鹿图",
    titleEn: "Deer and Cypress",
    artist: "八大山人",
    artistEn: "Bada Shanren",
    year: "1690s",
    price: 7100000,
    type: "国画",
    image: "https://kimi-web-img.moonshot.cn/img/www.chinaonlinemuseum.com/5451cbdcc88f9ae84da6b6af3d971c396455095d.jpg",
    description: "八大山人晚年精品，画面简洁空灵，寄托了画家孤傲清高的情怀。"
  },
  {
    id: 14,
    title: "救世主",
    titleEn: "Salvator Mundi",
    artist: "列奥纳多·达·芬奇",
    artistEn: "Leonardo da Vinci",
    year: "c.1500",
    price: 450300000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Leonardo_da_Vinci%2C_Salvator_Mundi%2C_c.1500.jpg",
    description: "拍卖史上最昂贵的艺术品之一，被誉为'男版蒙娜丽莎'。"
  },
  {
    id: 15,
    title: "玩纸牌者",
    titleEn: "The Card Players",
    artist: "保罗·塞尚",
    artistEn: "Paul Cézanne",
    year: "1892-1893",
    price: 250000000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg",
    description: "塞尚系列作品中最著名的一幅，画面构图严谨，色彩沉稳。"
  },
  {
    id: 16,
    title: "你何时结婚？",
    titleEn: "When Will You Marry?",
    artist: "保罗·高更",
    artistEn: "Paul Gauguin",
    year: "1892",
    price: 210000000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Paul_Gauguin_-_Nafea_Faa_Ipoipo%3F_%28When_Will_You_Marry%3F%29_-_Google_Art_Project.jpg",
    description: "高更大溪地时期的代表作，描绘了南太平洋岛国的风土人情。"
  },
  {
    id: 17,
    title: "帕丁顿的球",
    titleEn: "Balloon Dog (Orange)",
    artist: "杰夫·昆斯",
    artistEn: "Jeff Koons",
    year: "1994-2000",
    price: 58400000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Balloon_Dog_%28Orange%29_by_Jeff_Koons.jpg/800px-Balloon_Dog_%28Orange%29_by_Jeff_Koons.jpg",
    description: "杰夫·昆斯标志性气球动物系列，以不锈钢材质呈现童年记忆。"
  },
  {
    id: 18,
    title: "行走的人I",
    titleEn: "Walking Man I",
    artist: "阿尔贝托·贾科梅蒂",
    artistEn: "Alberto Giacometti",
    year: "1961",
    price: 104300000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Alberto_Giacometti_-_Walking_Man_I.jpg/800px-Alberto_Giacometti_-_Walking_Man_I.jpg",
    description: "贾科梅蒂细长人形雕塑的代表作，表现了人类生存的孤独与脆弱。"
  },
  {
    id: 19,
    title: "呐喊",
    titleEn: "The Scream",
    artist: "爱德华·蒙克",
    artistEn: "Edvard Munch",
    year: "1895",
    price: 119900000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    description: "表现主义最具标志性的作品，描绘了人类面对存在焦虑时的呐喊。"
  },
  {
    id: 20,
    title: "荷花",
    titleEn: "Lotus",
    artist: "张大千",
    artistEn: "Zhang Daqian",
    year: "1965",
    price: 8500000,
    type: "国画",
    image: "https://kimi-web-img.moonshot.cn/img/collectionapi.metmuseum.org/429d5428d8c3328e9ce9a769c9b42eaa03c9dce4",
    description: "张大千泼墨荷花精品，现藏于大都会艺术博物馆。"
  },
  {
    id: 21,
    title: "指示者",
    titleEn: "L'homme au doigt",
    artist: "阿尔贝托·贾科梅蒂",
    artistEn: "Alberto Giacometti",
    year: "1947",
    price: 141000000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Alberto_Giacometti_-_Walking_Man_I.jpg/800px-Alberto_Giacometti_-_Walking_Man_I.jpg",
    description: "全球雕塑拍卖最高纪录保持者，手指指向前方的瘦长人形，充满存在主义张力。"
  },
  {
    id: 22,
    title: "兔子",
    titleEn: "Rabbit",
    artist: "杰夫·昆斯",
    artistEn: "Jeff Koons",
    year: "1986",
    price: 91075000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jeff_Koons_Rabbit.jpg/800px-Jeff_Koons_Rabbit.jpg",
    description: "不锈钢镜面气球兔，杰夫·昆斯庆典系列代表作，创下在世艺术家拍卖世界纪录。"
  },
  {
    id: 23,
    title: "郁金香",
    titleEn: "Tulips",
    artist: "杰夫·昆斯",
    artistEn: "Jeff Koons",
    year: "1995-2004",
    price: 33682500,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jeff_Koons_Tulips.jpg/800px-Jeff_Koons_Tulips.jpg",
    description: "重达3吨的不锈钢镜面气球花束，糖果色系金属质感，庆典系列最复杂的作品之一。"
  },
  {
    id: 24,
    title: "喜剧演员",
    titleEn: "Comedian",
    artist: "莫瑞吉奥·卡特兰",
    artistEn: "Maurizio Cattelan",
    year: "2019",
    price: 6240000,
    type: "装置",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Maurizio_Cattelan_Comedian.jpg/800px-Maurizio_Cattelan_Comedian.jpg",
    description: "一根用胶带贴在墙上的香蕉，概念艺术代表作，买家获得真实性证书和更换香蕉的权利。"
  },
  {
    id: 25,
    title: "美国",
    titleEn: "America",
    artist: "莫瑞吉奥·卡特兰",
    artistEn: "Maurizio Cattelan",
    year: "2016",
    price: 12100000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Maurizio_Cattelan_America.jpg/800px-Maurizio_Cattelan_America.jpg",
    description: "18克拉黄金打造的功能性马桶，重达220磅，使用者可直接在上面如厕。"
  },
  {
    id: 26,
    title: "生者对死者无动于衷",
    titleEn: "The Physical Impossibility of Death in the Mind of Someone Living",
    artist: "达明安·赫斯特",
    artistEn: "Damien Hirst",
    year: "1991",
    price: 12000000,
    type: "装置",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Damien_Hirst_Shark_1991.jpg",
    description: "4米长虎鲨浸泡在甲醛溶液中，YBA年轻英国艺术家运动最具标志性的作品。"
  },
  {
    id: 27,
    title: "献给上帝的爱",
    titleEn: "For the Love of God",
    artist: "达明安·赫斯特",
    artistEn: "Damien Hirst",
    year: "2007",
    price: 100000000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/For_the_Love_of_God.jpg",
    description: "真人大小铂金骷髅，镶嵌8601颗钻石，既是死亡警示也是对过度消费的批判。"
  },
  {
    id: 28,
    title: "南瓜（L）",
    titleEn: "Pumpkin (L)",
    artist: "草间弥生",
    artistEn: "Yayoi Kusama",
    year: "2014",
    price: 8000000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Yayoi_Kusama_Pumpkin.jpg/800px-Yayoi_Kusama_Pumpkin.jpg",
    description: "逾2米高的青铜南瓜雕塑，草间弥生最具标志性的波点南瓜巨型版本。"
  },
  {
    id: 29,
    title: "我心飞向宇宙",
    titleEn: "My Heart Flies to the Universe",
    artist: "草间弥生",
    artistEn: "Yayoi Kusama",
    year: "2018",
    price: 3300000,
    type: "装置",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Yayoi_Kusama_Infinity_Mirror_Room.jpg/800px-Yayoi_Kusama_Infinity_Mirror_Room.jpg",
    description: "高达2米的无限镜屋装置，LED光影与镜面创造出无限延伸的宇宙空间。"
  },
  {
    id: 30,
    title: "爱在垃圾桶里",
    titleEn: "Love is in the Bin",
    artist: "班克西",
    artistEn: "Banksy",
    year: "2018/2021",
    price: 25450000,
    type: "油画",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Love_is_in_the_Bin.jpg",
    description: "《气球女孩》原作在拍卖落槌后被画框内隐藏碎纸机切碎，成为新的艺术作品。"
  },
  {
    id: 31,
    title: "河马酒吧",
    titleEn: "Hippopotame Bar",
    artist: "弗朗索瓦·沙维尔·莱兰",
    artistEn: "François-Xavier Lalanne",
    year: "1968-1969",
    price: 31400000,
    type: "雕塑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Francois_Xavier_Lalanne_Hippopotame_Bar.jpg/800px-Francois_Xavier_Lalanne_Hippopotame_Bar.jpg",
    description: "等身大铜制河马雕塑，打开后露出内部酒吧空间，功能性与雕塑艺术的完美结合。"
  }
];

export function getRandomArtworks(count: number = 10): Artwork[] {
  const shuffled = [...artworks].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generatePriceOptions(correctPrice: number): number[] {
  const options = [correctPrice];

  // Generate 3 wrong options with larger differences
  // Minimum 50% difference, up to 500% difference
  const variations = [0.5, 0.8, 1.2, 1.8, 2.5, 3.5, 5];

  while (options.length < 4) {
    const variation = variations[Math.floor(Math.random() * variations.length)];
    const isHigher = Math.random() > 0.5;
    const wrongPrice = Math.round(correctPrice * (isHigher ? (1 + variation) : (1 - variation)));

    // Ensure unique, positive, and at least 50% different from correct
    const minDiff = correctPrice * 0.5;
    const actualDiff = Math.abs(wrongPrice - correctPrice);
    if (wrongPrice > 0 && !options.includes(wrongPrice) && actualDiff >= minDiff) {
      options.push(wrongPrice);
    }
  }

  return options.sort(() => Math.random() - 0.5);
}

export function calculateAccuracy(selectedPrice: number, correctPrice: number): number {
  const diff = Math.abs(selectedPrice - correctPrice);
  const ratio = diff / correctPrice;
  
  if (ratio === 0) return 100;
  if (ratio <= 0.1) return 90;
  if (ratio <= 0.2) return 80;
  if (ratio <= 0.3) return 70;
  if (ratio <= 0.4) return 60;
  if (ratio <= 0.5) return 50;
  if (ratio <= 0.7) return 40;
  if (ratio <= 1) return 30;
  return 20;
}

export function formatPrice(price: number): string {
  if (price >= 100000000) {
    return `$${(price / 100000000).toFixed(2)}亿`;
  } else if (price >= 10000) {
    return `$${(price / 10000).toFixed(0)}万`;
  }
  return `$${price.toLocaleString()}`;
}
