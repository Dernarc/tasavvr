import type { Dict } from './en';

/**
 * O‘zbekcha — default language.
 *
 * Apostrophes (docs §5.3): ‘ (U+2018) in o‘ and g‘, ’ (U+2019) for the tutuq
 * belgisi (ma’lumot, sun’iy). Never a straight apostrophe or a backtick.
 * Needs a native-speaker pass before launch.
 */
export const uz: Dict = {
  meta: {
    title: 'TasavVR: uyni qurilishdan oldin ichidan ko‘ring',
    description:
      'TasavVR chizmalarni real o‘lchamdagi virtual uyga aylantiradi. Xaridor qurilish boshlanishidan oldin har bir xonani VR orqali ichidan ko‘radi.',
    privacyTitle: 'Maxfiylik siyosati — TasavVR',
  },

  a11y: {
    skip: 'Asosiy qismga o‘tish',
    menu: 'Menyu',
    close: 'Menyuni yopish',
    language: 'Til',
    mainNav: 'Asosiy menyu',
    logo: 'TasavVR — bosh sahifa',
  },

  nav: {
    howItWorks: 'Qanday ishlaydi',
    demo: 'Demo',
    packages: 'Paketlar',
    team: 'Jamoa',
    investors: 'Investorlarga',
  },

  cta: {
    requestDemo: 'Demo so‘rash',
    watchWalkthrough: 'Videoni ko‘rish',
    telegram: 'Telegram',
  },

  status: {
    today: 'Hozirda',
    next: 'Keyingi bosqich',
  },

  hero: {
    headline: ['Tasavvur qilmang —', 'ichida yurib ko‘ring.'],
    sub: 'TasavVR chizmalarni real o‘lchamdagi virtual uyga aylantiradi. Xaridor qurilish boshlanishidan oldin har bir xonani ichidan ko‘radi.',
    proof: 'Ishlaydigan prototip: {models} ta uy modeli, {testers} kishi sinab ko‘rgan.',
    visualLabel: 'Chizma ichida yurish mumkin bo‘lgan uyga aylanadi',
    videoPending: '[FILL: hero video — flat plan, walls rise, walk into the living room]',
  },

  rooms: {
    bedroom: 'Yotoqxona',
    living: 'Mehmonxona',
    kitchen: 'Oshxona',
    bathroom: 'Hammom',
    hall: 'Dahliz',
    kids: 'Bolalar xonasi',
  },

  problem: {
    heading: 'Hali qurilmagan uyni tasavvur qilish qiyin.',
    planLabel: 'Izohlar yozilgan xonadon chizmasi',
    pinned: [
      { room: 'Yotoqxona', text: 'Qog‘ozda 14 m². Ichida turganingizda bu qanchalik katta?' },
      { room: 'Oshxona', text: 'Arxitektor bir oshxonani tasavvur qiladi, xaridor esa boshqasini.' },
      {
        room: 'Devor',
        text: 'Bu devorni qog‘ozda surish bir necha daqiqa oladi. Qurilishdan keyin esa buzish brigadasi kerak bo‘ladi.',
      },
    ],
    margin: [
      'Xaridor nima uchun pul to‘layotganini ko‘rmasa, ikkilanadi.',
      'Har bir loyiha bir xil tekis chizmalar bilan reklama qilinadi.',
    ],
  },

  solution: {
    heading: 'Chizmani real o‘lchamdagi uyga aylantiramiz.',
    text: 'Arxitektor chizmalari asosida 3D model yaratamiz. Xaridor VR ko‘zoynakni taqib, qurilish boshlanishidan oldin uy ichida real 1:1 o‘lchamda yuradi.',
    sliderLabel: 'Chizma va 3D modelni solishtirish uchun suring',
    planTag: 'Chizma',
    renderTag: 'TasavVR',
    caption: 'Bitta xonadon. Chapda: xaridor bugun ko‘radigan narsa. O‘ngda: TasavVR bilan ko‘radigani.',
    sampleNote: 'Namuna chizma. [FILL: plan and render of one of your homes, same overhead camera]',
    today: [
      'Uy ichida real 1:1 o‘lchamda erkin yurish',
      'Namoyishga tayyor bir nechta 3D uy modellari',
      'Real foydalanuvchilar bilan sinovdan o‘tgan: harakat va makon hissi ishlaydi',
    ],
    next: [
      'Materiallar va ranglarni real vaqtda o‘zgartirish',
      'Yoritishni sozlash',
      'Mebel joylashuvini o‘zgartirish',
    ],
    photosLabel: 'Sinov mashg‘ulotlarimizdan',
    photoPending: '[FILL: test-session photo]',
  },

  how: {
    heading: 'Qanday ishlaydi',
    steps: [
      {
        title: 'Chizmalaringizni yuboring.',
        text: 'Boshlash uchun reja va fasad chizmalari yetarli; CAD yoki BIM fayllar ishni tezlashtiradi.',
      },
      {
        title: 'Uyni 3D formatda quramiz.',
        text: 'Real o‘lchamda, pardozlash va mebellar bilan. [FILL: usual time per layout]',
      },
      {
        title: 'Xaridorlar uy ichida yuradi.',
        text: 'Savdo ofisingiz yoki shou-rumingizda. VR ko‘zoynakni o‘zimiz olib kelamiz va sozlaymiz.',
      },
      {
        title: 'Qarorlar qurilishdan oldin qabul qilinadi.',
        text: 'Xaridor va arxitektor reja va pardozlash bo‘yicha oldindan kelishib oladi. Materiallar, yoritish va mebelni jonli o‘zgartirish — keyingi bosqichda.',
      },
    ],
  },

  forWhom: {
    heading: 'Kimlar uchun',
    tabs: [
      {
        id: 'developers',
        label: 'Quruvchi kompaniyalar',
        points: [
          { title: 'Tezroq savdo', text: 'Xaridor birinchi tashrifdayoq tayyor xonadonni ko‘radi — poydevor quyilmasdan oldin.' },
          { title: 'Yuqori mijoz ishonchi', text: 'Xaridor nima uchun to‘layotganini biladi, shuning uchun uy topshirilganda kutilmagan holatlar kamroq bo‘ladi.' },
          { title: 'Premium marketing imidji', text: 'Yana bir buklet o‘rniga — VR ko‘zoynak.' },
          { title: 'O‘zgartirish so‘rovlari kamroq', text: 'Reja va pardozlash masalalari qurilish davomida emas, undan oldin hal bo‘ladi.' },
        ],
        action: 'demo',
      },
      {
        id: 'architects',
        label: 'Arxitektorlar',
        points: [
          { title: 'Xatolarni erta aniqlash', text: 'Tor yo‘lak yoki muzlatgichga tegib qoladigan eshik qurilish maydonida emas, VR ichida ko‘rinadi.' },
          { title: 'Tushuntirmang — ko‘rsating', text: 'Mijoz chizmalarni o‘qish o‘rniga loyiha ichida yuradi.' },
          { title: 'Aniqroq tasdiqlash', text: 'Mijoz o‘zi ko‘rgan narsani tasdiqlaydi.' },
        ],
        action: 'demo',
      },
      {
        id: 'buyers',
        label: 'Xaridorlar',
        points: [
          { title: 'Qurilishdan oldin to‘liq tajriba', text: 'Kelajakdagi uyingizning har bir xonasini u qurilmasdan oldin aylanib chiqing.' },
          { title: 'Dizaynni shaxsiylashtirish', text: 'Boshqa pol qoplamasi, devor ranglari va mebel joylashuvini sinab ko‘ring.', inDevelopment: true },
          { title: 'Kamroq risk', text: 'Shartnoma imzolashdan oldin nima uchun to‘layotganingizni biling.' },
        ],
        action: 'video',
      },
    ],
  },

  demo: {
    heading: 'Prototipni amalda ko‘ring',
    sub: 'Ishlaydigan prototipimiz ichida suratga olingan.',
    play: 'Videoni ijro etish',
    videoPending: '[FILL: 60–90 s split-screen demo video]',
    consentNote: 'Video ijro tugmasini bosganingizda YouTube’dan yuklanadi.',
    galleryLabel: 'Uy modellarimiz',
    modelCaption: '{name} · {area} m² · {rooms} xona',
    imagePending: '[FILL: model image]',
    panoramaHeading: 'Xona ichini aylanib ko‘ring',
    panoramaOpen: '360° ko‘rinishni ochish',
    panoramaHint: 'Atrofga qarash uchun suring. Telefonda telefonni burish ham mumkin.',
    stats: '{models} ta uy modeli yaratilgan, {testers} kishi sinab ko‘rgan.',
  },

  why: {
    heading: 'Nega oddiy render yoki 3D tur emas?',
    tableLabel: 'TasavVR 2D chizmalar, renderlar va 3D skan-turlar bilan taqqoslaganda',
    columns: ['2D chizmalar', 'Renderlar', '3D skan-turlar', 'TasavVR'],
    rows: [
      { label: 'Qurilishdan oldin ishlaydi', cells: ['Ha', 'Ha', 'Yo‘q: tayyor bino kerak', 'Ha'] },
      { label: 'Xonaning real o‘lchami va ship balandligini ko‘rsatadi', cells: ['Yo‘q', 'Yo‘q', 'Qisman', 'Ha, VR ichida 1:1'] },
      { label: 'Istalgan joyga yurish mumkin', cells: ['Yo‘q', 'Yo‘q', 'Belgilangan nuqtalar orasida sakraydi', 'Ha'] },
      { label: 'Pardozlash va mebelni joyida o‘zgartirish', cells: ['Yo‘q', 'Har safar yangi render', 'Yo‘q', 'Keyingi bosqich'] },
    ],
    reasons: [
      { title: 'Skan emas, chizma asosida.', text: 'Skan-turlar uchun tayyor bino kerak; biz hali mavjud bo‘lmagan uylarni ko‘rsatamiz.' },
      { title: 'Real o‘lcham.', text: 'VR ichida 2,7 m ship haqiqatan 2,7 m bo‘lib seziladi. Ekranda esa bu shunchaki rasm.' },
      { title: 'O‘zbekiston uchun yaratilgan.', text: 'O‘zbek va rus tillarida, narxlar so‘mda, jamoamiz esa savdo ofisingizga o‘zi keladi.' },
    ],
  },

  packages: {
    heading: 'Paketlar',
    note: 'Narxlar bitta loyiha uchun. Yakuniy narx xonadon rejalari soniga bog‘liq.',
    plans: [
      {
        id: 'basic',
        name: 'Oddiy VR paket',
        price: '4 000 000 so‘mdan',
        per: 'loyiha uchun',
        status: 'Hozir mavjud',
        includes: [
          '[FILL: N] ta reja uchun 3D model',
          'Real o‘lchamda VR orqali uy bo‘ylab sayr',
          '[FILL: N] kunlik namoyish uchun VR ko‘zoynakni sozlash',
          'Marketingingiz uchun uy bo‘ylab sayr videosi',
        ],
        button: 'Narxini so‘rash',
      },
      {
        id: 'interactive',
        name: 'Interaktiv paket',
        price: '7 000 000 so‘mdan',
        per: 'loyiha uchun',
        status: 'Pilot hamkorlar uchun · Keyingi bosqich',
        includes: [
          'Oddiy paketdagi hammasi, qo‘shimcha ravishda:',
          'Almashtiriladigan materiallar va ranglar',
          'Yoritish variantlari',
          'Mebel joylashuvi variantlari',
        ],
        button: 'Pilotga qo‘shilish',
      },
      {
        id: 'subscription',
        name: 'Obuna',
        price: '8 000 000 so‘mdan',
        per: 'oyiga',
        status: 'Bir nechta loyihasi bor quruvchilar uchun',
        includes: [
          'Oyiga [FILL: N] ta yangi reja',
          'Savdo ofisingizda VR stansiya',
          'Yangilanishlar va qo‘llab-quvvatlash',
        ],
        button: 'Narxini so‘rash',
      },
    ],
    highlight: 'basic',
  },

  team: {
    heading: 'TasavVR jamoasi',
    sub: 'Mahsulotni hammamiz birga yaratamiz va qarorlarni ham birga qabul qilamiz.',
    members: [
      { role: 'VR ishlab chiqish va tizim arxitekturasi', line: '[FILL: one line]' },
      { role: '3D modellashtirish va muhit dizayni', line: '[FILL: one line]' },
      { role: 'Tadqiqot, hujjatlar va mijozlar bilan aloqa', line: '[FILL: one line]' },
    ],
    namePending: '[FILL: name]',
    photoPending: '[FILL: photo]',
  },

  investors: {
    heading: 'Rivojlanish rejasi',
    timeline: [
      {
        when: 'Bajarildi',
        items: ['Ishlaydigan VR prototip', 'Bir nechta 3D uy modellari', 'Muvaffaqiyatli sinovlar'],
      },
      {
        when: 'Keyingi 4 oy',
        items: [
          'Interaktiv sozlash: materiallar, ranglar, mebel',
          'Yaxshilangan yoritish va muhit effektlari',
          'Silliqroq VR ishlashi',
          'Quruvchi va arxitektorlar bilan pilot namoyishlar',
        ],
      },
      { when: '1-bosqich', items: ['O‘zbekiston'] },
      { when: '2-bosqich', items: ['Markaziy Osiyo'] },
      { when: '3-bosqich', items: ['Sun’iy intellekt asosidagi dizayn tavsiyalari'] },
    ],
    goal: 'Maqsad: qurilishdan oldingi riskni kamaytirish.',
    raising:
      'Prototipni 4 oy ichida mijozlarga tayyor mahsulotga aylantirish uchun 60 000 000 so‘m jalb qilmoqdamiz.',
    splitLabel: 'Mablag‘lar taqsimoti',
    uses: [
      { label: 'GPU ish stansiyalari (3 ta)', share: 75 },
      { label: 'VR ko‘zoynak (Meta Quest 3) va aksessuarlar', share: 14.5 },
      { label: 'Marketing va mijozlarni jalb qilish', share: 4.7 },
      { label: 'Backend va serverlar', share: 3.3 },
      { label: 'Pilot sinovlar va zaxira', share: 2.5 },
    ],
    cta: 'Taqdimotni so‘rash',
    closing: 'Ushbu loyiha sarmoyasi – xalqimiz farovonligi va hududimiz rivojlanishidir.',
  },

  faq: {
    heading: 'Ko‘p so‘raladigan savollar',
    items: [
      { q: 'Xaridorlarga o‘z VR ko‘zoynagi kerakmi?', a: 'Yo‘q. VR ko‘zoynakni savdo ofisingiz yoki shou-rumingizga o‘zimiz olib kelamiz.' },
      { q: 'Boshlash uchun bizdan nima kerak?', a: 'Reja va fasad chizmalari, bo‘lsa CAD yoki BIM fayllar ham.' },
      { q: 'Bitta loyiha qancha vaqt oladi?', a: '[FILL: usual days per layout]' },
      { q: 'Qaysi VR ko‘zoynakdan foydalanasiz?', a: 'Meta Quest.' },
      { q: 'Xaridorlar pardozlash va mebelni o‘zgartira oladimi?', a: 'Bu keyingi bosqichda, pilot hamkorlar uni birinchi bo‘lib oladi. [FILL: expected month]' },
      { q: 'Vizual materiallardan o‘z reklamamizda foydalansak bo‘ladimi?', a: '[FILL: videos, screenshots, 360° images]' },
      { q: 'Qayerlarda ishlaysiz?', a: '[FILL: your city, your region, or all of Uzbekistan]' },
      { q: 'Narxi qancha?', a: '“Paketlar” bo‘limiga qarang. Yakuniy narx xonadon rejalari soniga bog‘liq.' },
    ],
  },

  contact: {
    heading: 'Demo so‘rash',
    text: 'Loyihangiz haqida yozing — sizga uylarimizdan birining ichida sayr qilishni ko‘rsatamiz.',
    direct: 'Yoki bizga to‘g‘ridan-to‘g‘ri yozing',
    fields: {
      name: 'Ism',
      phone: 'Telefon',
      company: 'Kompaniya',
      role: 'Men…',
      package: 'Qaysi paket qiziqtiradi',
      size: 'Loyiha hajmi',
      sizeHint: 'Masalan, xonadon rejalari yoki binolar soni',
      message: 'Xabar',
      channel: 'Siz bilan qanday bog‘lanaylik',
      optional: 'ixtiyoriy',
    },
    roles: {
      developer: 'Quruvchi kompaniya',
      architect: 'Arxitektor',
      buyer: 'Xaridor',
      investor: 'Investor',
      other: 'Boshqa',
    },
    choose: 'Tanlang',
    packageOptions: {
      basic: 'Oddiy VR',
      interactive: 'Interaktiv',
      subscription: 'Obuna',
      unsure: 'Hali bilmayman',
    },
    channels: { telegram: 'Telegram', call: 'Telefon qo‘ng‘irog‘i', email: 'Elektron pochta' },
    consent: 'TasavVR ushbu so‘rovga javob berish uchun ma’lumotlarimni qayta ishlashiga roziman.',
    privacyLink: 'Maxfiylik siyosati',
    submit: 'Demo so‘rash',
    sending: 'Yuborilmoqda…',
    success: 'So‘rovingiz qabul qilindi. {hours} soat ichida bog‘lanamiz.',
    errors: {
      name: 'Ismingizni kiriting.',
      phone: 'Telefon raqamingizni kiriting: +998 dan keyin 9 ta raqam.',
      role: 'Kim ekaningizni tanlang.',
      consent: 'So‘rovingizga javob berishimiz uchun belgini qo‘ying.',
      server: 'So‘rov yuborilmadi. Internet aloqasini tekshirib, “Demo so‘rash” tugmasini yana bosing yoki bizga Telegram’da yozing.',
    },
  },

  footer: {
    tagline: 'Tasavvur qilmang — ichida yurib ko‘ring.',
    sections: 'Sahifada',
    contacts: 'Aloqa',
    follow: 'Bizni kuzating',
    privacy: 'Maxfiylik siyosati',
    copyright: '© 2026 TasavVR',
  },

  privacy: {
    heading: 'Maxfiylik siyosati',
    updated: 'Loyiha, 2026-yil sentabr',
    back: 'Bosh sahifaga qaytish',
    sections: [
      {
        h: 'Qanday ma’lumot yig‘amiz',
        p: [
          'Demo so‘rash shaklini yuborganingizda ismingiz, telefon raqamingiz va kim ekaningiz, shuningdek o‘zingiz qo‘shgan ma’lumotlar bizga keladi: kompaniya, loyiha hajmi, xabar va siz bilan bog‘lanish usuli.',
          'Analitika yoqilgan bo‘lsa, tashriflar haqida anonim ma’lumot ham yig‘iladi: ko‘rilgan sahifalar va bosilgan tugmalar. [FILL: Yandex Metrica or Google Analytics 4]',
        ],
      },
      {
        h: 'Nima uchun yig‘amiz',
        p: ['Faqat so‘rovingizga javob berish uchun: siz bilan bog‘lanish, demo tashkil qilish va so‘ragan materiallaringizni yuborish.'],
      },
      {
        h: 'Qayerda saqlanadi',
        p: [
          'Har bir so‘rov jamoamizning Telegram guruhiga va elektron pochtamizga yuboriladi. [FILL: website host, form service, email provider, and the countries where they store data]',
        ],
      },
      {
        h: 'Qancha vaqt saqlaymiz',
        p: ['[FILL: e.g., 12 months after our last conversation], so‘ng o‘chirib tashlaymiz.'],
      },
      {
        h: 'Sizning huquqlaringiz',
        p: [
          'Siz haqingizda qanday ma’lumot saqlayotganimizni so‘rashingiz, uni tuzatish yoki o‘chirishni talab qilishingiz mumkin. [FILL: email] manziliga yoki Telegram’da yozing — [FILL: N] kun ichida javob beramiz.',
        ],
      },
    ],
  },
};
