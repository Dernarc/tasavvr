/**
 * English copy. English is for investors, grant committees and programs abroad.
 *
 * Writing rules (docs §6): plain words, one name per thing, sentence case,
 * facts instead of adjectives, anything not in a live demo marked
 * "In development". {tokens} are filled from src/data/site.ts; [FILL: …]
 * renders as a visible marker.
 */
export const en = {
  meta: {
    title: 'TasavVR: walk through homes before they’re built',
    description:
      'TasavVR turns floor plans into life-size virtual homes. Buyers walk through every room in VR before construction starts.',
    privacyTitle: 'Privacy policy — TasavVR',
  },

  a11y: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close menu',
    language: 'Language',
    mainNav: 'Main',
    logo: 'TasavVR — home',
  },

  nav: {
    howItWorks: 'How it works',
    demo: 'Demo',
    packages: 'Packages',
    team: 'Team',
    investors: 'Investors',
  },

  cta: {
    requestDemo: 'Request a demo',
    watchWalkthrough: 'Watch the walkthrough',
    telegram: 'Telegram',
  },

  status: {
    today: 'Works today',
    next: 'In development',
  },

  hero: {
    headline: ['Don’t imagine it.', 'Walk inside it.'],
    sub: 'TasavVR turns floor plans into life-size virtual homes. Buyers walk through every room before construction starts.',
    proof: 'Working prototype: {models} house models, tried by {testers} people.',
    visualLabel: 'A floor plan that turns into a home you can walk through',
    videoPending: '[FILL: hero video — flat plan, walls rise, walk into the living room]',
  },

  rooms: {
    bedroom: 'Bedroom',
    living: 'Living room',
    kitchen: 'Kitchen',
    bathroom: 'Bathroom',
    hall: 'Hall',
    kids: 'Kids’ room',
  },

  problem: {
    heading: 'It’s hard to buy a home you can’t see yet.',
    planLabel: 'Floor plan of an apartment, marked up with notes',
    pinned: [
      { room: 'Bedroom', text: '14 m² on paper. How big is that when you’re standing in it?' },
      { room: 'Kitchen', text: 'The architect pictures one kitchen. The buyer pictures another.' },
      {
        room: 'Wall',
        text: 'Moving this wall on paper takes minutes. After construction, it takes a demolition crew.',
      },
    ],
    margin: [
      'Buyers hesitate when they can’t see what they’re paying for.',
      'Every project advertises with the same flat plans.',
    ],
  },

  solution: {
    heading: 'We turn the floor plan into a life-size home.',
    text: 'We build a 3D model from the architect’s plans. Buyers put on a VR headset and walk through it at real 1:1 scale, before construction starts.',
    sliderLabel: 'Drag to compare the floor plan with the 3D model',
    planTag: 'Floor plan',
    renderTag: 'TasavVR',
    caption: 'The same apartment. Left: what buyers get today. Right: what they get with TasavVR.',
    sampleNote: 'Sample drawing. [FILL: plan and render of one of your homes, same overhead camera]',
    today: [
      'Walk freely through the home at real 1:1 scale',
      'Several finished 3D house models, ready to show',
      'Tested with real users: moving around and the sense of space work',
    ],
    next: ['Change materials and colors in real time', 'Adjust the lighting', 'Rearrange the furniture'],
    photosLabel: 'From our test sessions',
    photoPending: '[FILL: test-session photo]',
  },

  how: {
    heading: 'How it works',
    steps: [
      {
        title: 'Send us your plans.',
        // [CONFIRM: formats you accept, e.g., PDF, DWG]
        text: 'Floor plans and elevations are enough to start; CAD or BIM files make it faster.',
      },
      {
        title: 'We build the home in 3D.',
        text: 'Real scale, with finishes and furniture. [FILL: usual time per layout]',
      },
      {
        title: 'Buyers walk inside.',
        // [CONFIRM: we bring the headset]
        text: 'At your sales office or showroom. We bring the headset and set it up.',
      },
      {
        title: 'Decisions happen before construction.',
        text: 'Buyers and architects agree on layout and finishes early. Live changes to materials, lighting and furniture are in development.',
      },
    ],
  },

  forWhom: {
    heading: 'Who it’s for',
    tabs: [
      {
        id: 'developers',
        label: 'Construction companies',
        points: [
          { title: 'Faster sales', text: 'Buyers see the finished apartment on their first visit, before the foundation is poured.' },
          { title: 'More trust', text: 'Buyers know what they’re paying for, so there are fewer surprises at handover.' },
          { title: 'A sales office people remember', text: 'A VR headset instead of another brochure.' },
          { title: 'Fewer change requests', text: 'Layout and finish questions get settled before construction, not during it.' },
        ],
        action: 'demo',
      },
      {
        id: 'architects',
        label: 'Architects',
        points: [
          { title: 'Catch mistakes early', text: 'A narrow corridor or a door that hits the fridge shows up in VR before it shows up on site.' },
          { title: 'Show, don’t explain', text: 'Clients walk through the design instead of reading drawings.' },
          { title: 'Clearer sign-off', text: 'Clients approve what they’ve actually seen.' },
        ],
        action: 'demo',
      },
      {
        id: 'buyers',
        label: 'Buyers',
        points: [
          { title: 'See it before you buy', text: 'Walk through every room of your future home before it’s built.' },
          { title: 'Make it yours', text: 'Try other flooring, wall colors and furniture layouts.', inDevelopment: true },
          { title: 'Less risk', text: 'Know what you’re paying for before you sign.' },
        ],
        action: 'video',
      },
    ] as { id: string; label: string; points: { title: string; text: string; inDevelopment?: boolean }[]; action: 'demo' | 'video' }[],
  },

  demo: {
    heading: 'See the prototype in action',
    sub: 'Filmed inside our working prototype.',
    play: 'Play the walkthrough video',
    videoPending: '[FILL: 60–90 s split-screen demo video]',
    consentNote: 'The video loads from YouTube when you press play.',
    galleryLabel: 'Our house models',
    modelCaption: '{name} · {area} m² · {rooms} rooms',
    imagePending: '[FILL: model image]',
    panoramaHeading: 'Look around this room',
    panoramaOpen: 'Open the 360° view',
    panoramaHint: 'Drag to look around. On a phone, you can also turn the phone.',
    stats: '{models} house models built, {testers} people tested.',
  },

  why: {
    heading: 'Why not just renders or a 3D tour?',
    tableLabel: 'TasavVR compared with 2D plans, renders and 3D scan tours',
    columns: ['2D plans', 'Renders', '3D scan tours', 'TasavVR'],
    rows: [
      { label: 'Works before construction', cells: ['Yes', 'Yes', 'No: needs a finished space', 'Yes'] },
      { label: 'Shows real room size and ceiling height', cells: ['No', 'No', 'Partly', 'Yes, 1:1 in VR'] },
      { label: 'Walk anywhere you like', cells: ['No', 'No', 'Jumps between fixed points', 'Yes'] },
      { label: 'Change finishes and furniture on the spot', cells: ['No', 'New render each time', 'No', 'In development'] },
    ],
    reasons: [
      { title: 'Built from plans, not scans.', text: 'Scan tours need a finished space; we show homes that don’t exist yet.' },
      { title: 'Real scale.', text: 'In VR, a 2.7 m ceiling feels like 2.7 m. On a screen, it’s just a picture.' },
      // [CONFIRM: team comes to the sales office]
      { title: 'Made for Uzbekistan.', text: 'Uzbek and Russian, prices in so‘m, and a team that comes to your sales office.' },
    ],
  },

  packages: {
    heading: 'Packages',
    // [CONFIRM: define "project" — one layout, one building or a whole complex?]
    note: 'Prices are per project. The final price depends on how many layouts you have.',
    plans: [
      {
        id: 'basic',
        name: 'Basic VR',
        price: 'from UZS 4 million',
        per: 'per project',
        status: 'Available now',
        // [CONFIRM: what's included]
        includes: [
          '3D model of [FILL: N] layouts',
          'Real-scale VR walkthrough',
          'Headset setup for [FILL: N] demo days',
          'A walkthrough video for your marketing',
        ],
        button: 'Ask for a price',
      },
      {
        id: 'interactive',
        name: 'Interactive',
        price: 'from UZS 7 million',
        per: 'per project',
        status: 'For pilot partners · In development',
        includes: [
          'Everything in Basic, plus:',
          'Switchable materials and colors',
          'Lighting options',
          'Furniture layouts',
        ],
        button: 'Join the pilot',
      },
      {
        id: 'subscription',
        name: 'Subscription',
        price: 'from UZS 8 million',
        per: 'per month',
        // [CONFIRM: available now?]
        status: 'For developers with several projects',
        includes: [
          '[FILL: N] new layouts a month',
          'A VR station in your sales office',
          'Updates and support',
        ],
        button: 'Ask for a price',
      },
    ],
    highlight: 'basic',
  },

  team: {
    heading: 'The team behind TasavVR',
    sub: 'All of us build the product, and all of us make the decisions.',
    members: [
      { role: 'VR development and system architecture', line: '[FILL: one line]' },
      { role: '3D modeling and environment design', line: '[FILL: one line]' },
      { role: 'Research, documentation and client communication', line: '[FILL: one line]' },
    ],
    namePending: '[FILL: name]',
    photoPending: '[FILL: photo]',
  },

  investors: {
    heading: 'Where we’re going',
    timeline: [
      {
        when: 'Done',
        items: ['Working VR prototype', 'Several 3D house models', 'Successful walkthrough tests'],
      },
      {
        when: 'Next 4 months',
        items: [
          'Interactive customization: materials, colors, furniture',
          'Better lighting and environment effects',
          'Smoother VR performance',
          'Pilot demos with developers and architects',
        ],
      },
      { when: 'Phase 1', items: ['Uzbekistan'] },
      { when: 'Phase 2', items: ['Central Asia'] },
      { when: 'Phase 3', items: ['AI-based design recommendations'] },
    ],
    goal: 'Reduce the risk before construction starts.',
    raising: 'We’re raising UZS 60 million to turn the prototype into a client-ready product in 4 months.',
    splitLabel: 'Use of funds',
    uses: [
      { label: 'GPU workstations (3)', share: 75 },
      { label: 'VR headset (Meta Quest 3) and accessories', share: 14.5 },
      { label: 'Marketing and user acquisition', share: 4.7 },
      { label: 'Backend and servers', share: 3.3 },
      { label: 'Pilot tests and reserve', share: 2.5 },
    ],
    cta: 'Request the pitch deck',
    closing: '',
  },

  faq: {
    heading: 'Questions developers ask',
    items: [
      // [CONFIRM]
      { q: 'Do buyers need their own VR headset?', a: 'No. We bring the headset to your sales office or showroom.' },
      // [CONFIRM: formats]
      { q: 'What do you need from us to start?', a: 'Floor plans and elevations, plus CAD or BIM files if you have them.' },
      { q: 'How long does one project take?', a: '[FILL: usual days per layout]' },
      // [CONFIRM: model]
      { q: 'Which headset do you use?', a: 'Meta Quest.' },
      { q: 'Can buyers change finishes and furniture?', a: 'It’s in development, and pilot partners get it first. [FILL: expected month]' },
      { q: 'Can we use the visuals in our own ads?', a: '[FILL: videos, screenshots, 360° images]' },
      { q: 'Where do you work?', a: '[FILL: your city, your region, or all of Uzbekistan]' },
      { q: 'How much does it cost?', a: 'See Packages. The final price depends on how many layouts you have.' },
    ],
  },

  contact: {
    heading: 'Request a demo',
    // [CONFIRM: at your office or online]
    text: 'Tell us about your project, and we’ll show you a walkthrough of one of our homes.',
    direct: 'Or message us directly',
    fields: {
      name: 'Name',
      phone: 'Phone',
      company: 'Company',
      role: 'I am a…',
      package: 'Interested in',
      size: 'Project size',
      sizeHint: 'For example, number of apartment layouts or buildings',
      message: 'Message',
      channel: 'Best way to reach you',
      optional: 'optional',
    },
    roles: {
      developer: 'Construction company',
      architect: 'Architect',
      buyer: 'Buyer',
      investor: 'Investor',
      other: 'Other',
    },
    choose: 'Choose one',
    packageOptions: {
      basic: 'Basic',
      interactive: 'Interactive',
      subscription: 'Subscription',
      unsure: 'Not sure yet',
    },
    channels: { telegram: 'Telegram', call: 'Phone call', email: 'Email' },
    consent: 'I agree to TasavVR processing my data to answer this request.',
    privacyLink: 'Privacy policy',
    submit: 'Request a demo',
    sending: 'Sending…',
    success: 'Demo requested. We’ll message you within {hours} hours.',
    errors: {
      name: 'Enter your name.',
      phone: 'Enter your phone number: 9 digits after +998.',
      role: 'Choose who you are.',
      consent: 'Tick the box to let us answer your request.',
      server: 'The request didn’t send. Check your connection and press “Request a demo” again, or message us on Telegram.',
    },
  },

  footer: {
    tagline: 'Don’t imagine it. Walk inside it.',
    sections: 'On this page',
    contacts: 'Contacts',
    follow: 'Follow us',
    privacy: 'Privacy policy',
    copyright: '© 2026 TasavVR',
  },

  privacy: {
    heading: 'Privacy policy',
    // [CONFIRM: check with a lawyer or your program's legal adviser]
    updated: 'Draft, September 2026',
    back: 'Back to the home page',
    sections: [
      {
        h: 'What we collect',
        p: [
          'When you send the demo request form, we receive your name, phone number and role, plus anything you choose to add: company, project size, message and the best way to reach you.',
          'If analytics is turned on, we also collect anonymous visit data, such as pages viewed and buttons pressed. [FILL: Yandex Metrica or Google Analytics 4]',
        ],
      },
      {
        h: 'Why we collect it',
        p: ['Only to answer your request: to contact you, arrange a demo and send the materials you asked for.'],
      },
      {
        h: 'Where it is stored',
        p: [
          'Each request is sent to our team’s Telegram group and to our email. [FILL: website host, form service, email provider, and the countries where they store data]',
        ],
      },
      {
        h: 'How long we keep it',
        p: ['[FILL: e.g., 12 months after our last conversation], then we delete it.'],
      },
      {
        h: 'Your rights',
        p: [
          'You can ask us what data we hold about you, and ask us to correct or delete it. Write to [FILL: email] or message us on Telegram, and we’ll answer within [FILL: N] days.',
        ],
      },
    ],
  },
};

export type Dict = typeof en;
