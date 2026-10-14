/**
 * Single source of truth for every piece of copy on the site.
 *
 * Everything here comes from the live thevaluation.com export
 * (C:\Users\jtaweesethsook\Desktop\S\test\V&C web\thevaluation_export).
 * Nothing is invented: if the source has no statement for something (client counts,
 * project counts, testimonials, listings, opening hours, news articles) it is NOT here
 * and must not be added to a design. Source typos ("อสังหริมทรัพย์", "อุธรณ์") are corrected.
 */

export type Locale = 'th' | 'en';
export type Bi<T = string> = { th: T; en: T };

export const company = {
  name: {
    th: 'บริษัท เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส จำกัด',
    en: 'The Valuation & Consultants Co., Ltd.',
  } as Bi,
  shortName: { th: 'เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส', en: 'The Valuation & Consultants' } as Bi,
  slogan: { th: 'คุณภาพก้าวไกล โปร่งใส ยุติธรรม', en: 'Advanced Quality, Transparency and Fairness' } as Bi,
  /** Founded 1992 (B.E. 2535). */
  founded: { th: '2535', en: '1992' } as Bi,
  foundedYear: 1992,
  /** Facts that can be shown as numbers: derived by counting the lists below. */
  facts: {
    serviceLines: 8,
    executives: 5,
    regionalBranches: 6,
  },
  approvals: {
    th: 'ได้รับความเห็นชอบจากกรมการประกันภัย และสำนักงาน ก.ล.ต.',
    en: 'Approved by the Department of Insurance and the Securities and Exchange Commission (SEC)',
  } as Bi,
  membership: {
    th: 'สมาชิกสมาคมนักประเมินราคาอิสระไทย และสมาคมผู้ประเมินค่าทรัพย์สินแห่งประเทศไทย',
    en: 'Member of the Thai Independent Appraisers Association',
  } as Bi,
};

export const about = {
  title: { th: 'เกี่ยวกับเรา', en: 'About Us' } as Bi,
  paragraphs: {
    th: [
      'บริษัท เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส จำกัด เป็นบริษัทประเมินมูลค่าทรัพย์สินของคนไทย ก่อตั้งเมื่อปี 2535 โดยให้บริการการประเมินมูลค่าทรัพย์สิน ทั้งภาครัฐบาลและเอกชน อาทิเช่น ธนาคาร/สถาบันการเงิน ที่ปรึกษาด้านการเงิน/การลงทุน ผู้ตรวจสอบบัญชี/สำนักงานกฎหมาย กลุ่มโรงงานอุตสาหกรรม โรงแรม สถาบันการศึกษา หน่วยงานของรัฐ ฯลฯ',
      'บริษัท เดอะแวลูเอชั่นฯ สามารถให้บริการด้านการประเมินมูลค่าทรัพย์สิน แก่ลูกค้าที่อยู่ในธุรกิจการเงิน การธนาคาร อสังหาริมทรัพย์ อุตสาหกรรมและลูกค้าทั่วไปได้ ทั้งในระดับชาติและระดับสากล อีกทั้งยังเป็นบริษัทประเมินมูลค่า ที่ได้รับการเห็นชอบจาก กรมการประกันภัย สำนักงานคณะกรรมการกำกับหลักทรัพย์ และตลาดหลักทรัพย์ (กลต.) และเป็นสมาชิก สมาคมนักประเมินราคาอิสระไทย สมาคมผู้ประเมินค่าทรัพย์สินแห่งประเทศไทย',
      'จากความรู้ความสามารถ ประสบการณ์ และความเชี่ยวชาญของบุคลากรที่มีอยู่ ผนวกกับประสิทธิภาพในการจัดการของบริษัท เดอะแวลูเอชั่นฯ ทำให้สามารถให้บริการและตอบสนองความต้องการของลูกค้าได้เป็นอย่างดี',
      'และด้วยประสบการณ์อันยาวนาน และความสำเร็จของบุคลากรของบริษัทฯ รวมกับความมุ่งมั่นที่จะให้บริการที่มีคุณภาพตามมาตรฐานสากล ได้กลายมาเป็น ปรัชญาในการทำงานของบริษัท เดอะ แวลูเอชั่นฯ เพื่อที่จะสามารถให้บริการแก่ลูกค้าได้รวดเร็ว ถูกต้อง และมีประสิทธิภาพ',
    ],
    en: [
      'The Valuation and Consultants Company Limited is provides the properties valuation services which owned by Thai. Established in 1992, providing property valuation services for both the government and private sectors such as Banks/Financial Institutions, Financial Advisor/Investment, Law Firm, Industrial Groups, Hotels, Educational Institutions, Government agencies, etc.',
      'We can providing the properties valuation services to clients in the financial business, banking, real estate, industry business and etc. For both national and international, which have been approved by Department of Insurance, Securities Commission and Stock Exchange (SEC). We are also a member of Thai Independent Appraisers Association from Appraisers Properties Association of Thailand.',
      'With the knowledge, ability, experienced and existing personnel expertise combined with the efficiency of company’s management. The company makes it possible to serve and meet the needs of clients.',
      'The long experience, achievements of the company’s personnel and the commitment to provide quality services according to international standards has become the philosophy of The Company to provide fast, accurate and efficient service to clients.',
    ],
  } as Bi<string[]>,
  /** Clients the company says it serves (from the first paragraph). */
  clientTypes: {
    th: ['ธนาคาร / สถาบันการเงิน', 'ที่ปรึกษาด้านการเงิน / การลงทุน', 'ผู้ตรวจสอบบัญชี / สำนักงานกฎหมาย', 'กลุ่มโรงงานอุตสาหกรรม', 'โรงแรม', 'สถาบันการศึกษา', 'หน่วยงานของรัฐ'],
    en: ['Banks / Financial Institutions', 'Financial Advisors / Investment', 'Law Firms / Auditors', 'Industrial Groups', 'Hotels', 'Educational Institutions', 'Government Agencies'],
  } as Bi<string[]>,
};

export const executives: Array<{ name: Bi; role: Bi }> = [
  { name: { th: 'นายมานพ วรรณะเอี่ยมพิกุล', en: 'Mr. Manop Wanna Iamphikul' }, role: { th: 'กรรมการผู้จัดการ', en: 'Managing Director' } },
  { name: { th: 'นายยงยุทธ ศรีตุลานนท์', en: 'Mr. Yongyuth Sritulanont' }, role: { th: 'กรรมการฝ่ายบริหาร', en: 'Executive Director' } },
  { name: { th: 'นายกิตติคุณ ศิริไชยยากุล', en: 'Mr. Kittikhun Sirichayayakul' }, role: { th: 'รองกรรมการผู้จัดการ', en: 'Deputy Managing Director' } },
  {
    name: { th: 'นายศุภฤกษ์ อัครกิจกุลชัย', en: 'Mr. Supalert Akarakijkulchai' },
    role: { th: 'รองกรรมการผู้จัดการ · ผู้อำนวยการฝ่ายประเมินมูลค่าเครื่องจักรและอุปกรณ์', en: 'Deputy Managing Director · Machinery and Equipment Director' },
  },
  {
    name: { th: 'นางสาวพวงเพ็ญ สุมิพันธ์', en: 'Ms. Puangpen Sumiphan' },
    role: { th: 'รองกรรมการผู้จัดการ · ผู้อำนวยการฝ่ายการตลาด', en: 'Deputy Managing Director · Marketing Director' },
  },
];

export const services = {
  title: { th: 'บริการของเรา', en: 'Our Services' } as Bi,
  intro: {
    th: 'นอกจากบริษัทเดอะแวลูเอชั่นฯ จะให้บริการด้านการประเมินมูลค่าทรัพย์สิน บริษัทฯ ยังให้บริการด้านต่างๆ ดังนี้',
    en: 'In addition of provide property valuation services, the company also provides services as follows:',
  } as Bi,
  scopeTitle: { th: 'ขอบเขตการทำงาน', en: 'Scope of work' } as Bi,
  /** The eight lines of work. `icon` is a hint only (building | cog | chart | search | handshake | briefcase | shield | file). */
  scope: [
    { icon: 'building', title: { th: 'งานประเมินมูลค่าอสังหาริมทรัพย์', en: 'Property valuation' } },
    { icon: 'cog', title: { th: 'งานประเมินเครื่องจักรและอุปกรณ์', en: 'Machinery and Equipment Evaluation' } },
    { icon: 'chart', title: { th: 'งานประเมินมูลค่าธุรกิจ', en: 'Business valuation' } },
    { icon: 'search', title: { th: 'งานสำรวจและวิจัย&ศึกษาความเป็นไปได้', en: 'Survey and Research & Feasibility Study' } },
    { icon: 'handshake', title: { th: 'งานขายอสังหาริมทรัพย์', en: 'Real Estate Sales' } },
    { icon: 'briefcase', title: { th: 'งานที่ปรึกษาการลงทุน', en: 'Investment Advisory Jobs' } },
    { icon: 'shield', title: { th: 'งานบริหารและจัดการทรัพย์สิน', en: 'Property and management' } },
    { icon: 'file', title: { th: 'งานตรวจสอบอาคาร', en: 'Building inspection' } },
  ] as Array<{ icon: string; title: Bi }>,
  objectivesTitle: { th: 'วัตถุประสงค์ของการประเมินมูลค่าทรัพย์สิน', en: 'Objectives of property valuation' } as Bi,
  objectives: {
    th: [
      'เพื่อเป็นหลักทรัพย์ในการกู้ยืม / จดจำนอง',
      'เพื่อใช้ในการซื้อ – ขาย / เช่าทรัพย์สิน',
      'เพื่อใช้เป็นข้อมูลทางด้านบัญชี',
      'เพื่อใช้เป็นทุนทรัพย์ / กำหนดมูลค่าหุ้น',
      'เพื่อร่วมกิจการ / แลกเปลี่ยนมูลค่าหุ้น',
      'เพื่อใช้ประกอบการอุทธรณ์กรณีเวนคืนของทางราชการ',
      'เพื่อการจัดการมรดกและอื่นๆ',
    ],
    en: [
      'For borrowing and mortgage',
      'For buy, sell and rent properties',
      'For accounting information',
      'For use as capital and determining share value',
      'For venture and exchange of share value',
      'For use in the case of government expropriation',
      'For inheritance and other management',
    ],
  } as Bi<string[]>,
  typesTitle: { th: 'ประเภทของทรัพย์สินที่ประเมินมูลค่า', en: 'The type of property appraised' } as Bi,
  types: {
    th: [
      'ที่ดิน อาคารพักอาศัย โครงการพัฒนาต่างๆ',
      'อาคารชุดพักอาศัย อาคารสำนักงาน',
      'โรงแรม รีสอร์ท อพาร์ทเมนท์ ห้างสรรพสินค้า',
      'โรงงานอุตสาหกรรม โกดัง คลังสินค้า และเหมืองแร่',
      'เครื่องจักรและอุปกรณ์ที่ใช้ในอุตสาหกรรมผลิตต่างๆ',
      'โรงไฟฟ้าหลักและพลังงานทดแทน',
      'การขนส่งต่างๆ เช่น รถ เรือ และเครื่องบิน',
      'เครื่องจักรกลหนัก',
    ],
    en: [
      'Land, Residential building, and Various development projects',
      'Condominium and Office building',
      'Hotel, Resort, Apartment and Mall',
      'Industrial factories, warehouses, warehouses and mines',
      'Machinery & Equipment in various industrial production',
      'Main power plant and renewable energy',
      'Transportations such as, vehicle, ship, boat, barge and aircraft',
      'Heavy Equipment',
    ],
  } as Bi<string[]>,
};

/** Buy / Sell / Rent. The live site posts these forms to peakidea.net. */
export const buySellRent = {
  title: { th: 'ต้องการ ซื้อ / ขาย / เช่า', en: 'Buy / Sell / Rent' } as Bi,
  tabs: { buy: { th: 'ซื้อ', en: 'Buy' }, sell: { th: 'ขาย', en: 'Sell' }, rent: { th: 'เช่า', en: 'Rent' } } as Record<'buy' | 'sell' | 'rent', Bi>,
  entries: [
    { key: 'buy', label: { th: 'ต้องการซื้อ', en: 'Want to Buy' } },
    { key: 'rent', label: { th: 'ต้องการเช่า', en: 'Want to Rent' } },
    { key: 'sell', label: { th: 'ต้องการฝากขาย', en: 'Want to Sell' } },
    { key: 'agent', label: { th: 'สนใจเป็นตัวแทนขาย', en: 'Join as Sales Representative' } },
  ] as Array<{ key: 'buy' | 'rent' | 'sell' | 'agent'; label: Bi }>,
  externalFormUrl:
    'https://www.peakidea.net/public/thevaluation/%e0%b8%95%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3-%e0%b8%8b%e0%b8%b7%e0%b9%89%e0%b8%ad-%e0%b8%82%e0%b8%b2%e0%b8%a2-%e0%b9%80%e0%b8%8a%e0%b9%88%e0%b8%b2/',
  agentUrl:
    'https://www.peakidea.net/public/thevaluation/%e0%b8%95%e0%b8%b4%e0%b8%94%e0%b8%95%e0%b9%88%e0%b8%ad%e0%b9%80%e0%b8%a3%e0%b8%b2/',
};

export type Branch = {
  id: string;
  name: Bi;
  address: Bi;
  phones: string;
  mobile?: string;
  email: string;
  /** Image under /public/images/real/ that is a street map for the branch (not all branches have one). */
  map?: string;
};

/** Head office first, then six regional branches (Chiang Mai, Nakhon Ratchasima, Udon Thani, Sakon Nakhon, Buriram, Chaiyaphum). */
export const branches: Branch[] = [
  {
    id: 'hq',
    name: { th: 'สำนักงานใหญ่ กรุงเทพฯ', en: 'Head Office, Bangkok' },
    address: {
      th: '719 เคพีเอ็น ทาวเวอร์ ชั้น 12 ถนนพระราม 9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310',
      en: '719 KPN Tower, 12th Floor, Rama 9 Rd, Huaykwang, Bangkok 10310',
    },
    phones: '0-2717-0801-8',
    mobile: '081-512-9411, 084-692-8851',
    email: 'info@thevaluation.com',
    map: '/images/real/office-map.jpg',
  },
  {
    id: 'chiangmai',
    name: { th: 'สาขาเชียงใหม่', en: 'Chiang Mai Branch' },
    address: {
      th: 'เลขที่ 29/13 หมู่ที่ 6 ถ.สมโภชเชียงใหม่ 700 ปี ต.สันทรายน้อย อ.สันทราย จ.เชียงใหม่ 50210',
      en: 'No. 29/13 Moo 6, Somphot Chiang Mai 700 Years Road, Sansai Noi, Sansai, Chiang Mai 50210',
    },
    phones: '053-380777, 053-380861',
    email: 'chiangmai@thevaluation.com',
    map: '/images/real/chiangmai.jpg',
  },
  {
    id: 'korat',
    name: { th: 'สาขานครราชสีมา', en: 'Nakhon Ratchasima Branch' },
    address: {
      th: 'เลขที่ 443/2 ถ.ยมราช ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000',
      en: '443/2 Yommarat Road, Nai Mueang, Mueang, Nakhon Ratchasima 30000',
    },
    phones: '044-244088',
    mobile: '086-815-7226',
    email: 'korat@thevaluation.com',
    map: '/images/real/korat.jpg',
  },
  {
    id: 'udon',
    name: { th: 'สาขาอุดรธานี', en: 'Udon Thani Branch' },
    address: {
      th: 'เลขที่ 99/97 หมู่บ้านสวนพฤกษา 2 ถ.รอบเมือง ต.หมากแข้ง อ.เมือง จ.อุดรธานี 41000',
      en: 'No. 99/97 Baan Suan Pruksa 2, Rob Mueang Road, Mak Khaeng, Mueang, Udon Thani 41000',
    },
    phones: '042-113468',
    mobile: '089-418-0034',
    email: 'udon@thevaluation.com',
    map: '/images/real/udon.jpg',
  },
  {
    id: 'sakon',
    name: { th: 'สาขาสกลนคร', en: 'Sakon Nakhon Branch' },
    address: {
      th: 'เลขที่ 387/160 หมู่บ้านสกลรุ่งเรือง ถ.ไอ ที ยู ต.ธาตุเชิงชุม อ.เมือง จ.สกลนคร 47000',
      en: 'No. 387/160 Sakon Roong Rueng, ITU Road, Tart Choeng Mum, Mueang, Sakon Nakhon 47000',
    },
    phones: '042-716569',
    mobile: '089-711-5015',
    email: 'sakonnakhon@thevaluation.com',
    map: '/images/real/sakon.jpg',
  },
  {
    id: 'buriram',
    name: { th: 'สาขาบุรีรัมย์', en: 'Buriram Branch' },
    address: {
      th: 'เลขที่ 8/19 ถ.ปลัดเมือง ต.ในเมือง อ.เมือง จ.บุรีรัมย์ 31000',
      en: 'No. 8/19 Pladmuang Road, Nai Mueang, Mueang, Buriram 31000',
    },
    phones: '044-620074',
    mobile: '089-478-9331',
    email: 'buriram@thevaluation.com',
  },
  {
    id: 'chaiyaphum',
    name: { th: 'สาขาชัยภูมิ', en: 'Chaiyaphum Branch' },
    // The English page labels this "Surin Branch" but the address/email are Chaiyaphum's; the Thai page says Chaiyaphum.
    address: {
      th: 'เลขที่ 522/4ก ถ.บรรณาการ ต.ในเมือง อ.เมือง จ.ชัยภูมิ 36000',
      en: 'No. 522/4 Kor Bannakan Rd, Nai Mueang, Mueang, Chaiyaphum 36000',
    },
    phones: '094-241-2587',
    email: 'chaiyaphum@thevaluation.com',
  },
];

export const careers = {
  title: { th: 'ร่วมงานกับเรา', en: 'Careers' } as Bi,
  subtitle: { th: 'ตำแหน่งงานว่าง', en: 'Available positions' } as Bi,
  /** All based at the Bangkok head office. Source: Thai careers page. */
  positions: [
    { title: { th: 'เจ้าหน้าที่ประเมินมูลค่าทรัพย์สิน - อสังหาริมทรัพย์', en: 'Property Valuation Officer (Real Estate)' }, openings: 3 },
    { title: { th: 'เจ้าหน้าที่ประเมินราคาทรัพย์สิน - วิธีรายได้', en: 'Property Valuation Officer (Income Approach)' }, openings: 2 },
    { title: { th: 'เจ้าหน้าที่ประเมินมูลค่าทรัพย์สิน - เครื่องจักร', en: 'Property Valuation Officer (Machinery)' }, openings: 3 },
    { title: { th: 'เจ้าหน้าที่ฝ่ายการตลาด', en: 'Marketing Officer' }, openings: 3 },
    { title: { th: 'เจ้าหน้าที่ฝ่ายพิมพ์', en: 'Typist' }, openings: 5 },
  ] as Array<{ title: Bi; openings: number }>,
  howToApply: {
    th: 'ส่งอีเมลมาที่ job@thevaluation.com หรือส่งจดหมายสมัครงาน',
    en: 'Send an email to job@thevaluation.com or send a cover letter.',
  } as Bi,
  email: 'job@thevaluation.com',
  tel: '0-2717-080-8',
  fax: '0-2717-080-0',
  applicationFormUrl: 'https://www.thevaluation.com/wp-content/uploads/2021/05/ใบสมัครVC-64.v2.pdf',
};

export const contact = {
  title: { th: 'ติดต่อเรา', en: 'Contact Us' } as Bi,
  address: {
    th: '719 เคพีเอ็น ทาวเวอร์ ชั้น 12 ถนนพระราม 9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310',
    en: '719 KPN Tower, 12th Floor, Rama 9 Rd, Huaykwang, Bangkok 10310',
  } as Bi,
  tel: '0-2717-0801-8',
  telHref: 'tel:027170801',
  mobiles: ['081-512-9411', '084-692-8851'],
  fax: '0-2717-0800',
  email: 'info@thevaluation.com',
  /** There is NO documented opening-hours statement on the source site; do not show any. */
};

export const links = {
  researchArticles: 'https://www.thevaluation.com/%e0%b8%9a%e0%b8%97%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2/',
  privacyPolicyTh: 'https://www.thevaluation.com/privacy-policy-th/',
  /** The live site has NO research articles in the export; link out only, never invent article cards. */
};

/** "Related links" page of the live site (English names). */
export const relatedLinks: Array<{ group: Bi; items: Array<{ name: string; url: string }> }> = [
  {
    group: { th: 'ธนาคาร', en: 'Bank' },
    items: [
      { name: 'Bangkok Bank', url: 'http://www.bangkokbank.com/' },
      { name: 'Bank of Ayudhya', url: 'http://www.krungsri.com/' },
      { name: 'Kasikorn Bank', url: 'https://www.kasikornbank.com/th/personal' },
      { name: 'Siam Commercial Bank', url: 'http://www.scb.co.th/' },
      { name: 'Krung Thai Bank', url: 'http://www.ktb.co.th/' },
      { name: 'Bank of Thailand', url: 'http://www.bot.or.th/' },
      { name: 'Government Savings Bank', url: 'http://www.gsb.or.th/' },
      { name: 'Government Housing Bank', url: 'https://www.ghbank.co.th/' },
    ],
  },
  {
    group: { th: 'กระทรวง', en: 'Ministry' },
    items: [
      { name: 'Ministry of Finance – Treasury Department', url: 'http://asean.treasury.go.th/index.php?lang=en' },
      { name: 'Ministry of Finance – The Revenue Department', url: 'http://www.rd.go.th/' },
      { name: 'Ministry of Interior – Land Department', url: 'http://www.dol.go.th/' },
      { name: 'Ministry of Interior – Department of Public Works and Town & Country Planning', url: 'https://www.dpt.go.th/th/' },
    ],
  },
  {
    group: { th: 'หน่วยงานที่เกี่ยวข้อง', en: 'Related departments' },
    items: [
      { name: 'The Stock Exchange of Thailand', url: 'https://www.set.or.th/set/mainpage.do?language=en&country=US' },
      { name: 'Office of the Securities and Exchange Commission', url: 'https://www.sec.or.th/EN/Pages/Home.aspx' },
      { name: 'Kasikorn Research Center Co., Ltd.', url: 'https://kasikornresearch.com/EN/Pages/index.aspx' },
    ],
  },
];

/**
 * Real photographs available under /public/images/real/ (all from the live site except city.jpg,
 * which is the site's own city_2.jpg from its 2018 theme):
 *  about.jpg (people in a glass-walled office, 1280x853), workers-of-real-estate-agency-PNLKS22.jpg (team at plans),
 *  2222.jpg (handshake + model house + keys), stock.jpg (market screen), city.jpg (skyline at dusk),
 *  office-building.jpg (KPN Tower area), slide3-1920-768.jpg, hero-slide.jpg is in /images/.
 * Branch street maps: office-map, chiangmai, korat, udon, sakon (.jpg).
 * Video: /videos/hero-bangkok.mp4 (Bangkok skyline at sunrise, 7 MB, made by the client).
 */
