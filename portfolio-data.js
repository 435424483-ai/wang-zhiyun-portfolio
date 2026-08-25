const portfolioProfile = {
  name: "汪之韵",
  title: "品牌宣传运营 / 企业文化 / 新媒体传播",
  headline: "把复杂内容转化为可传播、可落地的品牌内容",
  intro:
    "围绕政务传播、文博科普、校园文创、组织宣传与新媒体平台运营，完成信息提炼、内容策划、视觉表达、发布复盘与落地转化。",
  contact: {
    phone: "18370161262",
    email: "435424483@qq.com"
  },
  resume: {
    label: "查看简历",
    href: "docs/resume-wang-zhiyun.docx"
  },
  basics: {
    politicalStatus: "中共党员",
    education: [
      {
        school: "厦门大学（985）",
        degree: "硕士",
        major: "美术与书法专业",
        period: "2024.09 - 2027.06",
        highlights: ["GPA 3.87/4", "厦门大学研究生学业奖学金"]
      },
      {
        school: "厦门大学（985）",
        degree: "本科",
        major: "绘画专业",
        period: "2020.09 - 2024.06",
        highlights: [
          "GPA 3.74/4，专业前 2%",
          "优秀毕业生、优秀三好学生等综合荣誉",
          "厦门大学校庆奖学金、学业一等奖学金、社会工作奖学金及其他校级、专项奖学金"
        ]
      }
    ],
    awards: [
      "推送作品入选第七届全国大学生网络文化节其他类网络创新作品征集活动“优秀推荐作品”",
      "第十五届全国大学生电子商务“创新、创意及创业”挑战赛福建省一等奖",
      "第四届全国大学生旅游设计大赛优秀奖",
      "校级奖项：一等奖 2 项、二等奖 2 项、三等奖 6 项、优秀奖 3 项",
      "第三届全国大学生美术作品展初选入选，作品入选省级美术展览 4 次"
    ],
    skills: [
      "公众号、小红书内容规划、选题策划、排期发布及数据复盘",
      "品牌视觉、宣传物料、图文内容、节庆节点与文创产品设计",
      "政策、历史、文化及学术内容的信息提炼与公众化表达",
      "Word、Excel、PPT、Photoshop、Illustrator、Premiere、After Effects、剪映",
      "生成式 AI 辅助资料梳理、创意发散和内容生产",
      "大学英语六级"
    ],
    experienceSummary: [
      "人民日报数字传播（福建）有限公司 内容设计实习生",
      "厦门大学人类博物馆 设计师 / 讲解员",
      "厦屿厦礼校园文创工作室 创办人 / 内容运营与视觉设计",
      "鼓浪屿故宫文创产品设计 项目设计",
      "厦门大学团委青年媒体中心 副主任兼创意设计部部长",
      "厦门大学艺术学院研究生第一党支部 宣传委员"
    ]
  }
};

const portfolioCases = [
  {
    id: "people-daily",
    title: "人民日报数字传播：政务内容的视觉策划与热点响应",
    group: "A",
    role: "内容设计实习生",
    period: "2024.06 - 2024.09",
    logic: "政务传播需求 -> 信息拆解 -> 主题策划 -> 系列模板 -> 成稿送审 -> 平台发布",
    oneLine:
      "在主流媒体和政务传播语境中，根据文案提炼视觉重点，完成系列海报、视频号封面、线下大屏和政务 App 开屏等传播物料。",
    responsibility:
      "围绕《闽人智慧》系列及政务传播需求，完成信息拆解、主题策划、视觉风格设定、版式设计与成稿输出；围绕福建各地市以及科技、文旅、经济等主题，确定系列风格、版式结构与图文关系。",
    keyActions: [
      "围绕《闽人智慧》系列及政务传播需求，完成信息拆解、主题策划、视觉风格设定、版式设计与成稿输出。",
      "累计完成海报 40 余张，覆盖 7 个视觉系列，其中独立搭建 4 个系列模板并负责后续制作。",
      "围绕 2024 年巴黎奥运会，提前准备素材和不同宣传方案，结合赛事时差深夜跟进结果，快速完成海报制作、修改与送审。",
      "完成视频号封面、线下大屏宣传图及政务 App 开屏图等传播物料，保障不同平台和场景下的视觉适配。"
    ],
    results: [
      "相关作品经部门及省级宣传部门审核后，发布于人民日报、学习强国、闽政通等平台。",
      "部分作品用于福建政务 App 开屏及线下大屏展示，并获多个政务平台转发。",
      "累计浏览量 40 万+。",
      "实习期间获评“优秀实习生”。"
    ],
    images: [
      { id: "A1", title: "闽式纳凉", src: "assets/a_people_daily/a01_minshi_naliang.jpg", detailLevel: "main", note: "作为总结型图，展示系列视觉调性和地域文化内容整合。" },
      { id: "A2", title: "清凉福地", src: "assets/a_people_daily/a02_qingliang_fudi.jpg", detailLevel: "support", note: "与闽式纳凉形成同主题对比。" },
      { id: "A3", title: "奥运时刻荣耀", src: "assets/a_people_daily/a03_olympic_glory.jpg", detailLevel: "main", note: "展示奥运热点主题下的快速响应与正向传播语气。" },
      { id: "A4", title: "宋词里的福建 0619", src: "assets/a_people_daily/a04_songci_fujian_0619.jpg", detailLevel: "support", note: "文化内容视觉化候选。" },
      { id: "A5", title: "宋词里的福建 0620", src: "assets/a_people_daily/a05_songci_fujian_0620.jpg", detailLevel: "support", note: "文化内容视觉化候选，可与 A4 组成小系列。" },
      { id: "A6", title: "国际禁毒日", src: "assets/a_people_daily/a06_anti_drug_day.jpg", detailLevel: "main", note: "展示严肃公共议题中的设计控制力。" },
      { id: "A7", title: "0710 实用黑科技", src: "assets/a_people_daily/a07_practical_tech_0710.jpg", detailLevel: "main", note: "展示科技信息的可视化传播。" }
    ]
  },
  {
    id: "human-museum",
    title: "人类博物馆：复杂历史知识的公众化表达",
    group: "B",
    role: "设计师 / 讲解员",
    period: "2024.09 - 至今",
    logic: "馆内权威资料 -> 核心信息提取 -> 内容层级梳理 -> 视觉风格规划 -> 图文物料输出",
    oneLine:
      "将文物知识、历史材料和活动传播需求转化为清晰、有层次、适合公众理解和传播的图文物料。",
    responsibility:
      "根据科普展板、线上宣传及活动物料等不同设计需求，在馆内权威资料范围内提取核心信息、梳理内容层级，规划视觉风格、版式结构与图文关系，并参与日常公益及预约讲解。",
    keyActions: [
      "完成日常公益及预约讲解 40 余场，服务游客和来访群体 2000 余人次，负责文物知识讲解与现场答疑。",
      "根据科普展板、线上宣传及活动物料等不同设计需求，在馆内权威资料范围内提取核心信息、梳理内容层级。",
      "规划视觉风格、版式结构与图文关系，将复杂历史知识转化为清晰、有层次、适合传播的图文物料。",
      "围绕馆内线上传播及“5·18 国际博物馆日”等重点节点，完成系列海报、活动物料与文创设计支持。"
    ],
    evidenceLinks: [
      {
        label: "关键动作对应证据",
        action:
          "完成日常公益及预约讲解 40 余场，服务游客和来访群体 2000 余人次，负责文物知识讲解与现场答疑。",
        note:
          "通过讲解场景理解文物、展陈逻辑和观众反应，再转化为后续展板、推文配图、活动物料和文创设计的内容输入。",
        proofLabel: "讲解现场",
        ability: "公众表达",
        skillTag: "公众表达",
        imageIds: ["D7", "D8"]
      }
    ],
    results: ["累计设计主题海报 20 余张、展板 20 余张。", "因工作表现获评“优秀学生助理”。"],
    images: [
      { id: "D0", title: "科普展板主视觉", src: "assets/hero/hero_science_board_main_visual.jpg", detailLevel: "main", note: "用于“科普进校园”活动的主视觉，建立历史主题与公众科普场景的整体视觉基调。" },
      { id: "D0-2", title: "科普展板主题二", src: "assets/hero/hero_science_board_topic_02.jpg", detailLevel: "main", note: "围绕抗战记忆与精神传承进行主题视觉表达，强化史料、地点与叙事线索之间的关系。" },
      { id: "D7", title: "香港国民教育学会文化交流团 48 人", src: "assets/d_museum/d07_guided_tour_hk_cultural_exchange.png", detailLevel: "support", note: "面向香港国民教育学会文化交流团 48 人进行展馆讲解。" },
      { id: "D8", title: "厦门大学社会与人类学院新生 176 人", src: "assets/d_museum/d08_guided_tour_xmu_freshmen.jpg", detailLevel: "support", note: "面向厦门大学社会与人类学院新生 176 人进行展馆讲解。" },
      { id: "D1", title: "吉祥八宝纹", src: "assets/d_museum/d01_jixiang_babao.jpg", detailLevel: "main", note: "作为馆藏文物可视化表达案例。" },
      { id: "D2", title: "八仙过海", src: "assets/d_museum/d02_baxian_guohai_01.jpg", detailLevel: "support", note: "作为纹样系列补充。" },
      { id: "D3", title: "窃曲纹", src: "assets/d_museum/d03_qiequ_wen.jpg", detailLevel: "support", note: "作为纹样系列补充。" },
      { id: "D4", title: "兽面纹 1106", src: "assets/d_museum/d04_shoumian_1106.jpg", detailLevel: "support", note: "作为纹样系列补充。" },
      { id: "D5", title: "云雷纹", src: "assets/d_museum/d05_yunlei_wen.jpg", detailLevel: "support", note: "作为纹样系列补充。" },
      { id: "D6", title: "2026 新年海报", src: "assets/hero/hero_2026_new_year.jpg", detailLevel: "support", note: "以馆藏文物为视觉核心，延展节庆传播语境中的文博视觉表达。" }
    ]
  },
  {
    id: "xiayu-studio",
    title: "厦屿厦礼：MAZOO 妈祖原创 IP 的内容运营与产品转化",
    group: "C-1",
    role: "创办人 / 内容运营与视觉设计",
    period: "2023.09 - 至今",
    logic: "原创 IP -> 内容选题 -> 小红书运营 -> 产品矩阵 -> 市集展销 -> 数据复盘",
    oneLine:
      "围绕自有原创 IP“MAZOO 妈祖”，将角色设定、内容发文、文创产品开发和线下市集销售串联为品牌运营闭环。",
    responsibility:
      "负责自有 IP 的角色视觉、内容选题、图文发文、产品设计、打样沟通、线下陈列与销售反馈复盘，推动原创 IP 从线上内容进入真实消费场景。",
    keyActions: [
      "围绕自有文创 IP 运营小红书账号，结合校园与城市文化策划插画及图文内容，累计发布 50 余篇。",
      "根据点赞、收藏与评论数据持续优化选题和表达形式，账号粉丝 3000+，单篇最高获赞 600+。",
      "围绕自有 IP 开发插画及文创产品，持续参与文创市集及相关展览，与线上账号协同开展品牌宣传和产品展销。",
      "负责供应商询价比价、打样沟通与制作跟进，熟悉文创产品从设计、生产到推广销售的落地流程。"
    ],
    results: [
      "项目获第十五届全国大学生电子商务“创新、创意及创业”挑战赛福建省一等奖。",
      "线上线下累计销售额 5 万余元。"
    ],
    images: [
      { id: "E1", title: "文创 IP 线下市集现场", src: "assets/e_xiayu_studio/e01_market_booth_overview.jpg", detailLevel: "main", note: "线下市集与产品陈列。" },
      { id: "E3", title: "妈祖系列完整陈列", src: "assets/e_xiayu_studio/e03_market_full_display.jpg", detailLevel: "main", note: "主视觉与产品矩阵。" },
      { id: "E8", title: "MAZOO 妈祖产品设计矩阵", src: "assets/e_xiayu_studio/e08_product_design_overview.jpg", detailLevel: "main", note: "多品类产品体系。" },
      { id: "E2", title: "市集互动印章体验", src: "assets/e_xiayu_studio/e02_market_stamp_interaction.jpg", detailLevel: "support", note: "作为线下互动体验与品牌触点补充。" },
      { id: "E4", title: "在地文化产品细节", src: "assets/e_xiayu_studio/e04_local_culture_product_detail.jpg", detailLevel: "support", note: "作为品牌视觉与在地文化融合的产品细节佐证。" },
      { id: "E5", title: "市集产品墙与账号引流", src: "assets/e_xiayu_studio/e05_market_product_wall.jpg", detailLevel: "support", note: "展示产品陈列、扫码关注与销售转化场景。" },
      { id: "E6", title: "创意市集产品桌面陈列", src: "assets/e_xiayu_studio/e06_creative_market_product_table.jpg", detailLevel: "support", note: "呈现布艺产品、挂件等品类的线下销售状态。" },
      { id: "E27", title: "小红书主题内容发文：女性宣言", src: "assets/e_xiayu_studio/e27_xiaohongshu_women_statement.jpg", detailLevel: "support", note: "围绕 IP 角色与女性议题拓展内容表达。" },
      { id: "E28", title: "小红书内容发文：妈祖日常", src: "assets/e_xiayu_studio/e28_xiaohongshu_daily_language.png", detailLevel: "support", note: "展示 MAZOO 妈祖账号中的日常化内容表达。" }
    ]
  },
  {
    id: "xiayu-campus",
    title: "厦屿厦礼：校园主题合作与校园文化文创",
    group: "C-2",
    role: "内容运营与视觉设计 / 校园文创项目设计",
    period: "2023.09 - 至今",
    logic: "校园合作需求 -> 主题提炼 -> 插画与产品设计 -> 实物应用 -> 传播反馈 -> 荣誉沉淀",
    oneLine:
      "面向校园文化和校内组织合作需求，将厦大建筑、嘉庚精神与新生礼包等校园主题转化为可使用、可传播、可被学生主动分享的视觉物料。",
    responsibility:
      "根据校园组织需求完成插画图稿、文创产品和主题视觉设计，并结合真实使用场景与学生端发布反馈，验证设计在校园传播中的落地效果。",
    keyActions: [
      "为 2024 年厦门大学新生录取礼包部分物料提供插画图稿，完成校园建筑与迎新场景的视觉转化。",
      "围绕嘉庚精神与厦大精神进行主题提炼，将校训、建筑意象和校园文化转化为文创产品视觉。",
      "根据不同载体调整构图、色彩和产品信息，使插画能够适配卡套、帆布袋、咖啡杯、书本设计等多种使用场景。",
      "通过小红书等平台上的真实发布内容观察用户反馈，补充作品从设计图到实际使用的传播证据。"
    ],
    results: [
      "为 2024 年厦门大学新生录取礼包部分物料提供插画图稿，并在新生小红书发布内容中形成真实露出。",
      "“时代之新·嘉庚精神”系列文创获厦门大学文创征集一等奖。"
    ],
    images: [
      { id: "E14", title: "2024 级新生录取礼包发布反馈", src: "assets/e_xiayu_studio/e14_xmu_admission_package_xhs_01.jpg", detailLevel: "main", note: "新生主动发布分享，获得良好反馈。" },
      { id: "E15", title: "录取通知书与礼包物料实拍", src: "assets/e_xiayu_studio/e15_xmu_admission_package_xhs_02.jpg", detailLevel: "main", note: "录取礼包实物落地。" },
      { id: "E16", title: "时代之新·嘉庚精神系列文创", src: "assets/e_xiayu_studio/e16_jiageng_series_overview.jpg", detailLevel: "main", note: "获厦门大学文创征集一等奖，展示校园精神主题下的产品化设计能力。" },
      { id: "E19", title: "厦大精神书本设计：以德为行", src: "assets/e_xiayu_studio/e19_book_design_ethics.png", detailLevel: "support", note: "书本设计系列代表图，体现校园精神内容的视觉转译。" },
      { id: "E20", title: "厦大精神书本设计：崇教于行", src: "assets/e_xiayu_studio/e20_book_design_dedication.png", detailLevel: "support", note: "书本设计系列代表图，展示同一主题下的纹样与色彩变体。" },
      { id: "E21", title: "厦大精神书本设计：读书托理", src: "assets/e_xiayu_studio/e21_book_design_reading.png", detailLevel: "support", note: "书本设计系列代表图，体现校园精神内容的系统化延展。" },
      { id: "E22", title: "厦大精神书本设计：学海无涯", src: "assets/e_xiayu_studio/e22_book_design_learning.png", detailLevel: "support", note: "书本设计系列代表图，展示系列中的不同色彩方向。" },
      { id: "E23", title: "厦大精神书本设计：明德于心", src: "assets/e_xiayu_studio/e23_book_design_virtue.png", detailLevel: "support", note: "书本设计系列代表图，展示纹样、色彩与校训精神的统一。" },
      { id: "E24", title: "厦大精神书本设计：博学善思", src: "assets/e_xiayu_studio/e24_book_design_thinking.png", detailLevel: "support", note: "书本设计系列代表图，形成同一主题下的连续视觉语言。" },
      { id: "E25", title: "厦大精神书本设计：学以修身", src: "assets/e_xiayu_studio/e25_book_design_self_cultivation.png", detailLevel: "support", note: "书本设计系列代表图，展示校训精神的产品化表达。" },
      { id: "E26", title: "厦大精神书本设计：勤学创新", src: "assets/e_xiayu_studio/e26_book_design_innovation.png", detailLevel: "support", note: "书本设计系列代表图，控制数量以保留系列感和页面节奏。" }
    ]
  },
  {
    id: "gulangyu",
    title: "鼓浪屿故宫文创：地域文化的产品化落地",
    group: "D",
    role: "项目设计",
    period: "2024.09 - 至今",
    logic: "地域文化提炼 -> 系列主题 -> 主视觉构思 -> 产品信息排版 -> 工艺优化 -> 门店销售",
    oneLine:
      "围绕鼓浪屿地域文化及两处场馆特色，提炼建筑与历史文化元素，推动首批文创商品进入批量生产和销售场景。",
    responsibility:
      "作为外部项目团队成员，围绕鼓浪屿地域文化及美国领事馆、英国领事公馆两处场馆特色，结合首批产品定位确定系列主题和视觉方向。",
    keyActions: [
      "提炼建筑与历史文化元素，结合首批产品定位确定系列主题和视觉方向。",
      "首批产品设计阶段，在四周内独立完成 5 个文创系列、20 余件产品设计。",
      "设计涵盖冰箱贴、丝巾、雨伞、帆布包等品类，负责主视觉构思、图形重构、字体、色彩及产品信息排版。",
      "根据生产工艺、场馆展示及门店销售场景持续优化设计。"
    ],
    results: ["10 余款产品已实现批量生产。", "相关产品作为首批文创商品在两处新场馆及新文创店投入销售。"],
    images: [
      { id: "B1", title: "美浓烧冰箱贴系列主视觉", src: "assets/b_gulangyu/b01_minoyaki.png", detailLevel: "main", note: "提炼鼓浪屿建筑元素，建立系列视觉基调。" },
      { id: "B2", title: "美浓烧冰箱贴包装", src: "assets/b_gulangyu/b02_tile_package_mockup.png", detailLevel: "main", note: "同款产品的包装与尺寸方案。" },
      { id: "B6", title: "美浓烧冰箱贴成品", src: "assets/b_gulangyu/b08_minoyaki_product_set.png", detailLevel: "main", note: "以成品组合呈现同款产品系统。" },
      { id: "B7", title: "鼓浪屿三层旋转手机支架", src: "assets/b_gulangyu/b06_phone_grip.png", detailLevel: "support", note: "将八卦楼与海岛景观转化为可互动产品。" },
      { id: "B8", title: "鼓浪屿地标魔方", src: "assets/b_gulangyu/b07_landmark_magic_cube.png", detailLevel: "support", note: "用六面结构串联岛屿地标。" },
      { id: "B9", title: "厦门地标保温杯系列", src: "assets/b_gulangyu/b09_landmark_thermos.png", detailLevel: "support", note: "面向日常使用的地标图形延展。" },
      { id: "B3", title: "建筑插画帆布包", src: "assets/b_gulangyu/b03_canvas_bag_clean.png", detailLevel: "support", note: "以场馆建筑形成实用周边延展。" },
      { id: "B4", title: "黑金明信片", src: "assets/b_gulangyu/b04_postcard_black_gold_clean.png", detailLevel: "support", note: "以金线描绘建筑细节。" },
      { id: "B5", title: "英美领事馆纪念币", src: "assets/b_gulangyu/b05_coin_mockup.png", detailLevel: "support", note: "场馆建筑的纪念性产品转化。" }
    ]
  },
  {
    id: "xmu-media",
    title: "厦大青媒：校园融媒体的内容策划与视觉统筹",
    group: "E",
    role: "副主任兼创意设计部部长",
    period: "2021.09 - 2023.02",
    logic: "校园热点调研 -> 选题规划 -> 内容制作 -> 视觉审核 -> 流程管理 -> 文创延展",
    oneLine:
      "在校园融媒体组织中统筹选题、排期、设计审核和文创延展，保障多人协作下内容按期发布、风格统一。",
    responsibility:
      "调研校园热点与活动节点，讨论制定公众号及视频号选题规划，统筹内容排期、成员分工与重点宣传项目；参与推文策划，负责封面、配图及海报的创作与审核。",
    keyActions: [
      "调研校园热点与活动节点，讨论制定公众号及视频号选题规划，统筹内容排期、成员分工与重点宣传项目。",
      "参与推文策划，负责封面、配图及海报的创作与审核；协作完成推文 40 余篇。",
      "研究优质公众号的叙事与视觉表达，结合选题完成首版设计和风格定调。",
      "制定图文规范与制作流程，依据成员能力分配任务并把控审核节点。",
      "将成熟的推文视觉内容延展为插画及文创产品，参与青年媒体中心 5 个文创系列开发。"
    ],
    results: [
      "协作完成推文 40 余篇，累计浏览量 10 万+，单篇最高 2.8 万。",
      "负责的 2 项重点推送入选第七届全国大学生网络文化节“优秀推荐作品”。",
      "对接校园文创店推进设计、制作与落地。"
    ],
    references: [
      { id: "C1", title: "述职大会 PPT", path: "E:\\视觉影像\\创意设计部\\主任团工作\\创意设计部ppt+考评表\\创意设计部述职ppt\\【创设 汪之韵】述职大会PPT.pptx", note: "可作为职责、项目流程、数据复盘的文字依据。" },
      { id: "C2", title: "推送数据表", path: "E:\\视觉影像\\创意设计部\\主任团工作\\创意设计部2023述职 汪之韵\\12.15-6.24数据.xls", note: "可作为参与推送数量与传播效果证据。" }
    ],
    images: [
      { id: "C3", title: "青媒回忆录长图", src: "assets/c_xmu_media/c03_media_memory_longform_01.jpg", detailLevel: "main", note: "展示长图叙事和视觉节奏组织。" },
      { id: "C4", title: "毕业礼盒推送封面", src: "assets/c_xmu_media/c04_graduation_gift_cover.png", detailLevel: "main", note: "作为文创项目传播入口。" },
      { id: "C5", title: "毕业礼盒日历本体", src: "assets/c_xmu_media/c05_calendar_body.png", detailLevel: "support", note: "展示产品内容本体。" },
      { id: "C6", title: "毕业礼盒打卡单", src: "assets/c_xmu_media/c06_checkin_card.png", detailLevel: "support", note: "展示配套物料和使用场景。" },
      { id: "C9", title: "吧唧蓝黄款样机", src: "assets/c_xmu_media/c09_badge_blue_yellow_mockup.png", detailLevel: "support", note: "作为校园文创补充，不作为主讲图。" },
      { id: "C11", title: "年度长图开头", src: "assets/c_xmu_media/c11_year_review_opening.png", detailLevel: "main", note: "展示大型内容开场、信息组织和叙事基调。" },
      { id: "C12", title: "年度长图大封面 2", src: "assets/c_xmu_media/c12_year_review_cover_02.png", detailLevel: "main", note: "展示内容运营中的封面判断与传播入口设计。" }
    ]
  },
  {
    id: "party-branch",
    title: "党支部宣传：党建主题与社区服务的图文转化",
    group: "F",
    role: "厦门大学艺术学院研究生第一党支部宣传委员",
    period: "2024.09 - 至今",
    logic: "党建主题 -> 政策内容 -> 项目亮点 -> 宣传文案 -> 图文素材 -> 活动协同",
    oneLine:
      "围绕党建主题与社区服务项目，撰写宣传文案、设计推送内容和活动物料，支撑支部宣传与对外展示。",
    responsibility:
      "围绕党建主题与社区服务项目，结合政策内容与实际案例撰写宣传文案，设计反诈骗漫画及推送内容，并参与高校献血及社区志愿服务项目协同。",
    keyActions: [
      "围绕党建主题与社区服务项目，结合政策内容与实际案例撰写宣传文案，设计反诈骗漫画及推送内容。",
      "梳理“一对一领航课堂”“青春合伙人”等项目流程与亮点，转化为适配校内外合作场景的图文素材。",
      "参与高校献血及社区志愿服务项目，对接演武二小、南华社区等单位，协调活动流程与物料。"
    ],
    results: [
      "支撑支部宣传与对外展示。",
      "基于志愿服务与项目参与表现，获南华社区“优秀志愿者”称号。",
      "参与项目获思明区“青春合伙人”志愿服务铜奖。"
    ],
    images: []
  }
];
