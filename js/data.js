// Lithium-ion battery industry news, aggregated by country.
// Each entry has bilingual (EN/ZH) title + description and a source link.
const NEWS_DATA = [
  {
    id: 1,
    country: "CN",
    date: "2026-07-17",
    title_en: "China to Impose Consumption Tax on Lithium Batteries From September",
    title_zh: "中国将于9月起对锂电池征收消费税",
    desc_en: "Beijing will end an 11-year tax exemption, levying a 2% consumption tax on lithium-ion batteries starting September 1, 2026, rising to 4% in September 2027. Sodium-ion batteries, solid-state batteries, and fuel cells are exempted through 2028, signaling a policy tilt toward next-generation chemistries.",
    desc_zh: "中国将结束长达11年的免税政策,自2026年9月1日起对锂离子电池征收2%的消费税,2027年9月起税率升至4%。钠离子电池、固态电池及燃料电池将获豁免至2028年底,体现出政策向下一代电池技术倾斜。",
    source_name: "CnEVPost",
    source_url: "https://cnevpost.com/2026/07/17/china-to-impose-consumption-tax-lithium-batteries/"
  },
  {
    id: 2,
    country: "CN",
    date: "2026-08",
    title_en: "China's Lithium Battery Output Hits Record as Energy Storage Overtakes EVs",
    title_zh: "中国锂电池产量创新高,储能首次超越动力电池",
    desc_en: "Scheduled lithium battery production in China reached roughly 304 GWh in August 2026, up 7.4% month-on-month and far above earlier forecasts. Energy storage cells hit about 125 GWh — over 40% of total output — officially overtaking automotive batteries as the industry's primary demand driver.",
    desc_zh: "2026年8月中国锂电池排产量约达304GWh,环比增长7.4%,大幅超出此前预测。储能电芯排产约125GWh,占总产量40%以上,首次超过动力电池成为行业主要需求驱动力。",
    source_name: "Tianxia Gongchang Research",
    source_url: "https://faxiangongchang.com/en/reports/china-power-battery-2026"
  },
  {
    id: 3,
    country: "CN",
    date: "2026-08",
    title_en: "CATL's Giant Jianxiawo Lithium Mine Resumes Operations",
    title_zh: "宁德时代枧下窝大型锂矿恢复生产",
    desc_en: "CATL's Jianxiawo mine, among the largest lithium deposits in the world, has cleared security permits and resumed activity after a prolonged suspension, easing supply concerns even as lithium carbonate prices sank to roughly six-month lows near CNY 140,000-152,500 per tonne.",
    desc_zh: "宁德时代枧下窝矿区(全球最大锂矿之一)已通过安全许可,在长期停产后恢复生产,缓解了市场供应担忧。与此同时,碳酸锂价格已跌至近六个月低点,约每吨14万至15.25万元人民币。",
    source_name: "Trading Economics",
    source_url: "https://tradingeconomics.com/commodity/lithium"
  },
  {
    id: 4,
    country: "US",
    date: "2026-08-19",
    title_en: "Forge Nano Breaks Ground on \"America's Battery Gigafactory\" in North Carolina",
    title_zh: "Forge Nano在北卡罗来纳州启动“美国电池超级工厂”建设",
    desc_en: "Forge Nano broke ground on a major lithium-ion battery manufacturing expansion in Morrisville, North Carolina, backed by up to $100 million in non-dilutive U.S. Department of Energy funding. The facility aims to reduce U.S. dependence on foreign-controlled battery supply chains for national-security applications; Samsung SDI has signed a conditional agreement to purchase cells from the new plant.",
    desc_zh: "Forge Nano在北卡罗来纳州莫里斯维尔启动大型锂离子电池制造扩建项目,获得美国能源部最高1亿美元无偿资助支持。该工厂旨在降低美国在国家安全相关应用领域对境外电池供应链的依赖;三星SDI已签署有条件协议,将从新工厂采购电芯。",
    source_name: "GlobeNewswire",
    source_url: "https://www.globenewswire.com/news-release/2026/08/19/3347836/0/en/forge-nano-breaks-ground-on-america-s-battery-gigafactory-to-strengthen-u-s-defense-supply-chains.html"
  },
  {
    id: 5,
    country: "US",
    date: "2026",
    title_en: "Seven U.S. Battery Gigafactories Coming Online in 2025-2026",
    title_zh: "美国七座电池超级工厂将于2025-2026年投产",
    desc_en: "A wave of new battery manufacturing capacity is ramping up across Kansas, Michigan, North Carolina, Ohio, Illinois, and Georgia, as U.S. automakers and battery makers race to localize EV and grid-storage cell production.",
    desc_zh: "美国堪萨斯州、密歇根州、北卡罗来纳州、俄亥俄州、伊利诺伊州和佐治亚州正掀起新一轮电池产能建设热潮,汽车制造商与电池企业竞相实现电动车及电网储能电芯生产本土化。",
    source_name: "Battery Tech Online",
    source_url: "https://www.batterytechonline.com/battery-manufacturing/7-us-battery-gigafactories-coming-online-in-2025-2026-powering-evs-the-grid"
  },
  {
    id: 6,
    country: "KR",
    date: "2026",
    title_en: "Korea's \"Big Three\" Battery Makers Post First-Ever Simultaneous Quarterly Losses",
    title_zh: "韩国电池“三巨头”首现单季度集体亏损",
    desc_en: "LG Energy Solution, Samsung SDI, and SK On posted their first simultaneous quarterly operating losses in Q1 2026, driven by a sharp EV demand drop after the U.S. ended purchase subsidies. Their combined global EV-battery market share fell to just 13.8%, far behind the 72.6% held by China's top seven makers.",
    desc_zh: "LG新能源、三星SDI和SK On在2026年第一季度首次同时出现单季度运营亏损,原因是美国终止购车补贴后电动车需求大幅下滑。三家公司合计全球动力电池市场份额降至仅13.8%,远低于中国七大电池厂商合计72.6%的份额。",
    source_name: "BigGo Finance",
    source_url: "https://finance.biggo.com/news/nW73iJ0BDPbb-ItTaXwq"
  },
  {
    id: 7,
    country: "KR",
    date: "2026",
    title_en: "Korean Battery Giants Pivot to AI Data Centers, Robotics, and ESS",
    title_zh: "韩国电池巨头转向AI数据中心、机器人与储能业务",
    desc_en: "Facing an EV slowdown, LG Energy Solution, Samsung SDI, and SK On are accelerating a strategic shift toward energy storage systems, high-power backup batteries for AI data centers, and batteries for robots and humanoids, unveiling the pivot at InterBattery 2026.",
    desc_zh: "面对电动车市场放缓,LG新能源、三星SDI和SK On正加速战略转型,布局储能系统、AI数据中心高功率备用电源以及机器人与人形机器人电池,并在2026年InterBattery展会上公布相关战略。",
    source_name: "Korea JoongAng Daily",
    source_url: "https://www.koreajoongangdaily.com/business/lg-energy-solution-samsung-sdi-and-sk-on-to-unveil-pivot-at-interbattery-amid-ev-slowdown/12530161"
  },
  {
    id: 8,
    country: "JP",
    date: "2026",
    title_en: "Toyota Targets 2026 Solid-State Battery Factory, Mass Production Slips to 2027",
    title_zh: "丰田计划2026年建成固态电池工厂,量产推迟至2027年",
    desc_en: "Toyota, working with Panasonic and Idemitsu Kosan, plans to build a 10 GWh-capacity solid-state battery factory in Japan in 2026, targeting energy density of 450-500 Wh/kg and 10-minute 0-80% charging. Mass production, however, has slipped repeatedly — from 2020 to 2023 to now 2027.",
    desc_zh: "丰田携手松下与出光兴产,计划于2026年在日本建成年产能10GWh的固态电池工厂,目标能量密度达450-500 Wh/kg,充电10分钟即可从0%充至80%。然而其量产时间表已多次推迟——从最初的2020年,到2023年,如今又推迟至2027年。",
    source_name: "Battery Tech Online",
    source_url: "https://www.batterytechonline.com/industry-outlook/scaling-solid-state-batteries-innovations-and-global-leadership"
  },
  {
    id: 9,
    country: "DE",
    date: "2025-2026",
    title_en: "Northvolt Drei's Fate in Germany Hangs on Lyten Takeover",
    title_zh: "德国Northvolt Drei项目命运系于Lyten收购",
    desc_en: "The planned 60 GWh Northvolt Drei gigafactory in Heide, northern Germany — once backed by a €902 million German government support package — was thrown into doubt after parent company Northvolt's 2025 bankruptcy. U.S. startup Lyten is now negotiating to take over the site, though on a scaled-back footprint versus Northvolt's original plans.",
    desc_zh: "位于德国北部海德(Heide)的Northvolt Drei超级工厂原计划年产能达60GWh,并曾获得德国政府9.02亿欧元的支持,但随着母公司Northvolt于2025年破产,该项目前景陷入不确定。美国初创企业Lyten正就接手该项目进行谈判,但规模将较Northvolt原计划有所缩减。",
    source_name: "electrive.com",
    source_url: "https://www.electrive.com/2025/10/09/what-lyten-plans-to-do-in-heide-after-the-northvolt-takeover/"
  },
  {
    id: 10,
    country: "SE",
    date: "2026-02",
    title_en: "Lyten Completes Takeover of Bankrupt Northvolt's Swedish Plants",
    title_zh: "Lyten完成对破产企业Northvolt瑞典工厂的收购",
    desc_en: "U.S. battery startup Lyten completed its acquisition of Northvolt's main assets in February 2026, taking over the Northvolt Ett and Northvolt Labs facilities in Sweden with plans to restart battery production in the second half of 2026. In March 2026, Lyten also agreed to acquire the Revolt battery recycling plant in Skellefteå.",
    desc_zh: "美国电池初创企业Lyten于2026年2月完成对Northvolt主要资产的收购,接手瑞典的Northvolt Ett和Northvolt Labs工厂,计划于2026年下半年恢复电池生产。2026年3月,Lyten还同意收购谢莱夫特奥(Skellefteå)的Revolt电池回收工厂。",
    source_name: "DLA Piper",
    source_url: "https://ioplus.nl/en/posts/us-firm-lyten-buys-bankrupt-northvolt-eyes-2026-restart"
  },
  {
    id: 11,
    country: "FR",
    date: "2025-2026",
    title_en: "ACC and Envision AESC Ramp Up French Battery Gigafactories",
    title_zh: "ACC与远景AESC加速法国电池超级工厂建设",
    desc_en: "Automotive Cells Company (ACC) opened its first European gigafactory in Billy-Berclau Douvrin, France, part of a €4.4 billion, three-plant plan across France, Germany, and Italy targeting 120 GWh combined capacity. Meanwhile Envision AESC's Douai plant began production in mid-2025 at 10 GWh, with the EU approving a further €48 million for a second French gigafactory supplying Renault.",
    desc_zh: "汽车电芯公司(ACC)在法国比伊-贝尔克洛-杜夫兰(Billy-Berclau Douvrin)开设其在欧洲的首座超级工厂,这是其44亿欧元、覆盖法国、德国和意大利三座工厂、合计产能120GWh计划的一部分。与此同时,远景AESC位于杜埃(Douai)的工厂已于2025年年中投产,年产能10GWh,欧盟还批准再拨款4800万欧元用于建设为雷诺供货的第二座法国超级工厂。",
    source_name: "S&P Global",
    source_url: "https://autotechinsight.spglobal.com/news/5270869/acc-opens-the-first-gigafactory-in-france"
  },
  {
    id: 12,
    country: "GB",
    date: "2025-12-16",
    title_en: "Envision AESC's Sunderland Gigafactory Begins Operations, UK's Largest",
    title_zh: "远景AESC桑德兰超级工厂投产,成英国最大电池基地",
    desc_en: "Envision AESC commenced operations at its new Sunderland gigafactory on December 16, 2025, with initial capacity of 15.8 GWh — enough to supply batteries for more than 200,000 electric vehicles annually, making it the UK's largest operational battery manufacturing base.",
    desc_zh: "远景AESC位于英国桑德兰的新超级工厂已于2025年12月16日投产,初期产能达15.8GWh,足以为超过20万辆电动汽车提供电池,成为英国最大的在运营电池制造基地。",
    source_name: "China Energy Storage Alliance",
    source_url: "http://en.cnesa.org/latest-news/2025/12/17/envision-aescs-sunderland-gigafactory-commences-operations-accelerating-europes-green-energy-transition"
  },
  {
    id: 13,
    country: "IN",
    date: "2026",
    title_en: "Ola Electric and Exide Push India's First Homegrown Battery Cells",
    title_zh: "Ola Electric与Exide推动印度首批国产电芯量产",
    desc_en: "Ola Electric's gigafactory is producing India's first indigenous lithium-ion cells at 5 GWh annual capacity in 2026, aiming for 100 GWh by 2030. Exide Energy Solutions is building a Bengaluru gigafactory starting at 6 GWh, and Tata's Agratas plans a $1.5 billion battery gigafactory. Yet under India's ACC PLI incentive scheme, only about 2.8% of the 50 GWh target capacity has been commissioned so far.",
    desc_zh: "Ola Electric的超级工厂正以年产能5GWh生产印度首批国产锂离子电芯,目标到2030年产能达100GWh。Exide Energy Solutions正在班加罗尔建设一座初期产能6GWh的超级工厂,塔塔集团旗下Agratas则计划投资15亿美元建设电池超级工厂。然而在印度先进化学电池生产挂钩激励(ACC PLI)计划下,50GWh的目标产能中目前仅有约2.8%投产。",
    source_name: "IEEFA",
    source_url: "https://ieefa.org/articles/only-28-target-capacity-delivered-yet-under-indias-battery-manufacturing-incentive-scheme"
  },
  {
    id: 14,
    country: "ID",
    date: "2026",
    title_en: "Indonesia-CATL $6 Billion Battery Project Faces Delays",
    title_zh: "印尼与宁德时代60亿美元电池项目遭遇延期",
    desc_en: "A CATL-linked joint venture's lithium-ion battery plant in Indonesia, part of a $121 billion national EV battery ecosystem push, is now expected to start phase-one production only in late 2026, with full 15 GWh capacity delayed to 2031, as sudden mining-quota cuts and policy reversals rattle foreign investors.",
    desc_zh: "与宁德时代相关的合资企业在印尼建设的锂电池工厂,是印尼1210亿美元国家电动车电池生态系统计划的一部分,目前一期投产时间已推迟至2026年底,15GWh满产能则要等到2031年,原因是采矿配额突然削减及政策反复令外国投资者担忧。",
    source_name: "Mining.com",
    source_url: "https://www.mining.com/web/indonesia-china-lithium-battery-plant-operational-by-end-2026-official-says/"
  },
  {
    id: 15,
    country: "AU",
    date: "2026-08-07",
    title_en: "Australian Lithium Miners Push to Refine Locally, Not Just Export Raw Ore",
    title_zh: "澳大利亚锂矿商力争本土提炼,不再只出口原矿",
    desc_en: "Long content to ship raw spodumene to China for processing, a handful of Australian lithium miners are now building domestic refining capacity, aided by a Western Australia government package waiving roughly A$30 million in fees for lithium hydroxide refineries over two years — even as China's dominance and softer prices squeeze margins.",
    desc_zh: "长期以来,澳大利亚锂矿商多将锂辉石原矿出口至中国加工,如今部分企业开始建设本土提炼产能。西澳大利亚州政府为氢氧化锂精炼厂提供两年内约3000万澳元的费用减免支持,尽管中国的主导地位与价格走软仍持续挤压利润空间。",
    source_name: "ABC News",
    source_url: "https://www.abc.net.au/news/2026-08-07/australian-lithium-miners-domestic-refineries/106619924"
  },
  {
    id: 16,
    country: "CA",
    date: "2026",
    title_en: "Canada Opens First Large-Scale Battery Plant and Lithium Refinery, But Faces Setbacks",
    title_zh: "加拿大首座大型电池工厂及锂精炼厂投产,但也面临挫折",
    desc_en: "NextStar Energy (LG Energy Solution) opened Canada's first large-scale battery cell plant in Windsor, Ontario, now producing at 49.5 GWh annual capacity, while Mangrove Lithium opened North America's first commercial electrochemical lithium refinery in British Columbia. However, E-One Moli paused its $1 billion B.C. factory and Umicore halted its $2.7 billion Ontario project.",
    desc_zh: "NextStar Energy(LG新能源子公司)在安大略省温莎市开设了加拿大首座大型电芯工厂,年产能达49.5GWh;Mangrove Lithium则在不列颠哥伦比亚省开设了北美首座商业化电化学锂精炼厂。不过,E-One Moli暂停了其在卑诗省耗资10亿美元的工厂建设,优美科(Umicore)也叫停了在安大略省投资27亿美元的电池项目。",
    source_name: "National Observer",
    source_url: "https://www.nationalobserver.com/2026/03/05/news/canadas-first-large-scale-battery-plant-opens-windsor"
  }
];

// Country metadata: flag emoji + bilingual names, in a sensible display order.
const COUNTRIES = [
  { code: "CN", flag: "🇨🇳", name_en: "China", name_zh: "中国" },
  { code: "US", flag: "🇺🇸", name_en: "United States", name_zh: "美国" },
  { code: "KR", flag: "🇰🇷", name_en: "South Korea", name_zh: "韩国" },
  { code: "JP", flag: "🇯🇵", name_en: "Japan", name_zh: "日本" },
  { code: "DE", flag: "🇩🇪", name_en: "Germany", name_zh: "德国" },
  { code: "SE", flag: "🇸🇪", name_en: "Sweden", name_zh: "瑞典" },
  { code: "FR", flag: "🇫🇷", name_en: "France", name_zh: "法国" },
  { code: "GB", flag: "🇬🇧", name_en: "United Kingdom", name_zh: "英国" },
  { code: "IN", flag: "🇮🇳", name_en: "India", name_zh: "印度" },
  { code: "ID", flag: "🇮🇩", name_en: "Indonesia", name_zh: "印度尼西亚" },
  { code: "AU", flag: "🇦🇺", name_en: "Australia", name_zh: "澳大利亚" },
  { code: "CA", flag: "🇨🇦", name_en: "Canada", name_zh: "加拿大" }
];
