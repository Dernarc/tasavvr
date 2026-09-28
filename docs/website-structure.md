# TasavVR — Website Structure

Draft v1, September 2026. Based on the TasavVR pitch deck and the project description.

**How to read this doc**

- `[FILL: …]` marks information only your team has.
- `[CONFIRM: …]` marks a proposal. Check it's true before it goes live.
- Copy is drafted in English, with Uzbek for headings and buttons (many Uzbek lines come straight from your deck) and Russian for navigation. The final Uzbek and Russian text needs a native-speaker pass.

**In short:** one long page in three languages (Uzbek, Russian, English), built around one action: **Request a demo**. The page follows your deck's story (problem, solution, proof, price, team, plan) and is carried by one idea: *the floor plan becomes a place you can walk into.*

---

## 1. What the site has to do

**Main job:** get construction companies to request a VR demo.
**Second job:** show investors, grant committees and partners a credible project, and let them request the pitch deck.

| Audience | What they need to see | Their action |
|---|---|---|
| Construction companies (paying customers) | Proof it works, what it does for sales, price, how to start | Request a demo |
| Architects and design studios | Real scale, mistakes caught early, easier client sign-off | Request a demo |
| Home buyers | What walking through a future home feels like | Watch the walkthrough |
| Investors, grant committees, partners | Working prototype, team, roadmap, funding ask | Request the pitch deck |

**How you'll know it works:** count demo requests and deck requests per month.

---

## 2. Site map

### 2.1 Pages at launch

```
tasavvr.uz          [CONFIRM: domain is free]
├── Home            one long page, 12 sections (see 2.2)
└── Privacy policy  /privacy

Every page in three languages: /uz (default), /ru, /en
```

**Why one page first:** it's faster to build and update, it gives every visitor the same clear path to "Request a demo", and you don't have clients or case studies yet to fill separate pages.

### 2.2 Home page, top to bottom

| # | Section | Anchor | The visitor's question it answers |
|---|---|---|---|
| 1 | Hero | `#hero` | What is this? |
| 2 | Problem | `#problem` | Why would I need it? |
| 3 | Solution | `#solution` | How does it fix that? |
| 4 | How it works | `#how-it-works` | What do I have to do? |
| 5 | Who it's for | `#for-whom` | What's in it for me? |
| 6 | Demo | `#demo` | Does it actually work? |
| 7 | Why TasavVR | `#why-us` | Why not just renders or a 3D tour? |
| 8 | Packages | `#packages` | What does it cost? |
| 9 | Team | `#team` | Who's behind it? |
| 10 | Roadmap and investors | `#investors` | Where is this going? |
| 11 | FAQ | `#faq` | What about…? |
| 12 | Request a demo | `#contact` | How do I start? |
|  | Footer |  |  |

### 2.3 Pages to add after the first pilots

- **Projects:** case studies from pilot developers, with photos, results and a quote from the client.
- **Investors:** traction, metrics, and the deck to download.
- **Try it in your browser:** a sample home you can walk through on a laptop, a phone, or in a Quest headset's browser (WebXR).
- **News:** competitions, events, press.

---

## 3. On every page

### Header

- **Left:** the TASAVVR logo (white "TASAV", gradient "VR", as in the deck). Use the logo file; don't retype it in a web font.
- **Middle:** How it works, Demo, Packages, Team, Investors.
- **Right:** language switch (UZ, RU, EN) and the **Request a demo** button.
- Transparent over the hero; turns solid Blueprint night (see §5.2) once the visitor scrolls.

### Navigation labels

| English | O‘zbekcha | Русский |
|---|---|---|
| How it works | Qanday ishlaydi | Как это работает |
| Demo | Demo | Демо |
| Packages | Paketlar | Пакеты |
| Team | Jamoa | Команда |
| Investors | Investorlarga | Инвесторам |
| **Request a demo** (button) | **Demo so‘rash** | **Запросить демо** |

### On phones

- Header: logo, language switch, menu button.
- A bar fixed to the bottom of the screen with **Request a demo** and a Telegram button. Most local clients will want to message you on Telegram rather than fill in a form.

### Footer

- Logo and the line *Tasavvur qilmang — ichida yurib ko‘ring.*
- Links to each section and to the privacy policy.
- Telegram, phone, email. [FILL]
- Telegram channel, Instagram, YouTube, LinkedIn. [FILL]
- Language switch.
- © 2026 TasavVR

---

## 4. Home page, section by section

Each section lists its **job**, **layout**, **copy** and **notes**.

### 4.1 Hero (`#hero`)

**Job:** in five seconds, show what TasavVR is and what to click.

**Layout:** full screen. Text on the left, video on the right; on phones the video sits on top. Wireframes in §5.4.

**The visual: make the reveal a video.** In your 3D tool, render a 10–15 second shot of one of your homes. It starts as a flat, top-down floor plan; the walls rise; the camera drops to eye level and walks into the living room. Loop it, muted. This one shot explains the whole product, and on the web it's just a video, so it's easy to build and quick to load.

| | English | O‘zbekcha |
|---|---|---|
| Headline | Don't imagine it. Walk inside it. | Tasavvur qilmang — ichida yurib ko‘ring. |
| Subheadline | TasavVR turns floor plans into life-size virtual homes. Buyers walk through every room before construction starts. | TasavVR chizmalarni real o‘lchamdagi virtual uyga aylantiradi. Xaridor qurilish boshlanishidan oldin har bir xonani ichidan ko‘radi. |
| Main button | Request a demo | Demo so‘rash |
| Second button | Watch the walkthrough | Videoni ko‘rish |
| Proof line | Working prototype: [FILL: N] house models, tried by [FILL: N] people. | Ishlaydigan prototip: [N] ta uy modeli, [N] kishi sinab ko‘rgan. |

**Notes**

- The headline plays on your name: *tasavvur* (imagination) + VR. Russian: *Не нужно представлять — зайдите внутрь.*
- A more direct alternative aimed at developers: "Let buyers walk through homes that aren't built yet."
- Drop the generic headset image from the deck cover. Your own footage is the strongest proof you have.
- If a visitor has "reduce motion" turned on, show a still frame instead of the video.

### 4.2 Problem (`#problem`)

**Job:** make developers think "yes, that's us."

**Layout:** the only light section on the page. It's "paper", because this is the 2D world. Show the floor plan of one of your homes, marked up like an architect's redlines: three notes pinned to rooms and two in the margin. On phones, the pins become small markers and the notes stack under the plan. Don't turn these into a grid of identical cards.

**Heading:** It's hard to buy a home you can't see yet. / *Hali qurilmagan uyni tasavvur qilish qiyin.*

| Where | Note on the plan | Deck point it comes from |
|---|---|---|
| Bedroom | 14 m² on paper. How big is that when you're standing in it? | Tugallanmagan uylarni tasavvur qilish qiyin |
| Kitchen | The architect pictures one kitchen. The buyer pictures another. | Arxitektor va mijoz o‘rtasida tushunmovchiliklar |
| A wall | Moving this wall on paper takes minutes. After construction, it takes a demolition crew. | Qimmat dizayn o‘zgartirishlar |
| Margin | Buyers hesitate when they can't see what they're paying for. | Uzoq savdo jarayoni |
| Margin | Every project advertises with the same flat plans. | Oddiy 2D marketing vositalari |

**Notes:** use the plan of a home you've actually modelled, so it matches the VR view in the next section. Label rooms in the page's language (the plan in the deck is labelled in Russian).

### 4.3 Solution (`#solution`)

**Job:** the "aha": the same home, from flat plan to a space you can walk through.

**Layout**

1. Heading and two sentences.
2. **Plan/3D slider:** the visitor drags a handle across one image. Left: the floor plan. Right: the same apartment as a finished 3D model, rendered from the same overhead camera so every wall lines up. It works by touch and with the arrow keys.
3. Two plain lists side by side: *Works today* and *In development*.
4. Two or three photos from your test sessions (the ones in the deck work well).

**Heading:** We turn the floor plan into a life-size home. / *Chizmani real o‘lchamdagi uyga aylantiramiz.*

**Text:** We build a 3D model from the architect's plans. Buyers put on a VR headset and walk through it at real 1:1 scale, before construction starts.

**Slider caption:** The same apartment. Left: what buyers get today. Right: what they get with TasavVR.

| Works today (*Hozirda*) | In development (*Keyingi bosqich*) |
|---|---|
| Walk freely through the home at real 1:1 scale | Change materials and colors in real time |
| Several finished 3D house models, ready to show | Adjust the lighting |
| Tested with real users: moving around and the sense of space work | Rearrange the furniture |

**Note:** keep the "In development" label until each feature works in a live demo. A developer who expects to swap floor tiles and only gets a walkthrough will stop trusting the rest of the site. Move items across as they ship.

### 4.4 How it works (`#how-it-works`)

**Job:** show that starting is easy.

**Layout:** four numbered steps in a row, joined by a thin line; a vertical list on phones. Numbers belong here because this really is a sequence.

**Heading:** How it works / *Qanday ishlaydi*

1. **Send us your plans.** Floor plans and elevations are enough to start; CAD or BIM files make it faster. [CONFIRM: formats you accept, e.g., PDF, DWG]
2. **We build the home in 3D.** Real scale, with finishes and furniture. [FILL: usual time per layout]
3. **Buyers walk inside.** At your sales office or showroom. We bring the headset and set it up. [CONFIRM]
4. **Decisions happen before construction.** Buyers and architects agree on layout and finishes early. Live changes to materials, lighting and furniture are in development.

**Button under the steps:** Request a demo

**Note:** only promise turnaround times you've actually hit on your own models.

### 4.5 Who it's for (`#for-whom`)

**Job:** let each visitor find their own reason fast.

**Layout:** three tabs: Construction companies (open by default), Architects, Buyers. Each tab has 3–4 short points and one button.

**Heading:** Who it's for / *Kimlar uchun*

**Construction companies** (*Quruvchi kompaniyalar uchun*)

- **Faster sales** (*Tezroq savdo*): buyers see the finished apartment on their first visit, before the foundation is poured.
- **More trust** (*Yuqori mijoz ishonchi*): buyers know what they're paying for, so there are fewer surprises at handover.
- **A sales office people remember** (*Premium marketing imidji*): a VR headset instead of another brochure.
- **Fewer change requests:** layout and finish questions get settled before construction, not during it.
- Button: Request a demo

**Architects and design studios** (*Arxitektorlar uchun*)

- **Catch mistakes early:** a narrow corridor or a door that hits the fridge shows up in VR before it shows up on site.
- **Show, don't explain:** clients walk through the design instead of reading drawings.
- **Clearer sign-off:** clients approve what they've actually seen.
- Button: Request a demo

**Buyers** (*Xaridorlar uchun*)

- **See it before you buy** (*Qurilishdan oldin to‘liq tajriba*): walk through every room of your future home before it's built.
- **Make it yours** (*Dizaynni shaxsiylashtirish*), in development: try other flooring, wall colors and furniture layouts.
- **Less risk** (*Kamroq risk*): know what you're paying for before you sign.
- Button: Watch the walkthrough

**Note:** "faster sales" is what you expect, not something you've measured yet. After the pilots, back it with a real number, such as how many visits buyers needed before deciding.

### 4.6 Demo (`#demo`)

**Job:** prove it works. With no clients yet, this section does most of the selling.

**Layout**

1. Main video, 60–90 seconds, split screen: a person wearing the headset, and what they see.
2. Gallery of your house models: 3–6 images each, swipeable on phones, captioned with the model name, area in m² and rooms. [FILL]
3. Optional, high impact: **"Look around this room"**, a 360° image the visitor drags on a computer or turns their phone to explore. Blender, Unity and Unreal can all export 360° panoramas, and a free viewer such as Pannellum shows them on the page.
4. One line of real numbers, e.g., "[N] house models built, [N] people tested." [FILL]

**Heading:** See the prototype in action / *Prototipni amalda ko‘ring*

**Line under it:** Filmed inside our working prototype.

**Notes**

- Film the headset view and the person at the same time (Meta Quest can record what the wearer sees). Head-mounted footage is shaky, so for the hero video, render a smooth camera path from your 3D tool instead.
- Add subtitles in all three languages; most people watch with the sound off.
- Host the long video on YouTube and load it only when the visitor presses play, so the page stays fast. Cut a 30-second vertical version for Telegram and Instagram.

### 4.7 Why TasavVR (`#why-us`)

**Job:** answer the question every developer will ask: "We already have renders. Why this?"

**Heading:** Why not just renders or a 3D tour? / *Nega oddiy render yoki 3D tur emas?*

| | 2D plans | Renders | 3D scan tours | TasavVR |
|---|---|---|---|---|
| Works before construction | Yes | Yes | No: needs a finished space | Yes |
| Shows real room size and ceiling height | No | No | Partly | Yes, 1:1 in VR |
| Walk anywhere you like | No | No | Jumps between fixed points | Yes |
| Change finishes and furniture on the spot | No | New render each time | No | In development |

Under the table, three short reasons:

- **Built from plans, not scans.** Scan tours need a finished space; we show homes that don't exist yet. This is your sharpest point, so lead with it.
- **Real scale.** In VR, a 2.7 m ceiling feels like 2.7 m. On a screen, it's just a picture.
- **Made for Uzbekistan.** Uzbek and Russian, prices in so‘m, and a team that comes to your sales office. [CONFIRM]

**Notes:** compare against categories, not brand names; keep Matterport on the deck slide, not on the public site. Avoid "first in Uzbekistan" unless you can prove it.

### 4.8 Packages (`#packages`)

**Job:** give a price anchor, so serious leads get in touch.

**Layout:** three columns. This is a genuine side-by-side comparison, so columns make sense here. Highlight **Basic** for now, since it's what you can deliver today; move the highlight to **Interactive** once it ships.

**Heading:** Packages / *Paketlar*

| | Basic VR (*Oddiy VR paket*) | Interactive (*Interaktiv paket*) | Subscription (*Obuna*) |
|---|---|---|---|
| Price (from the deck) | from UZS 4 million per project | from UZS 7 million per project | from UZS 8 million per month |
| Status | Available now | For pilot partners; in development | [CONFIRM: available now?] |
| Includes [CONFIRM] | 3D model of [N] layouts, real-scale VR walkthrough, headset setup for [N] demo days, a walkthrough video for your marketing | Everything in Basic, plus switchable materials and colors, lighting options and furniture layouts | For developers with several projects: [N] new layouts a month, a VR station in your sales office, updates and support |
| Button | Ask for a price | Join the pilot | Ask for a price |

Each button opens the demo form with that package already selected. Button text in Uzbek: *Narxini so‘rash*, *Pilotga qo‘shilish*.

**Notes**

- Define "project" before prices go online: one apartment layout, one building, or a whole residential complex?
- Decide whether to show "from" prices (they filter out time-wasters) or only "Ask for a price". Both are normal for business clients.
- Currency by language: so‘m (UZ), сум (RU), UZS (EN).

### 4.9 Team (`#team`)

**Job:** show the real people who built a working product.

**Layout:** a row of photos, all shot the same way (same background, same framing), each with a name, role and one line.

**Heading:** The team behind TasavVR / *TasavVR jamoasi*

**Line under it:** All of us build the product, and all of us make the decisions.

| Photo | Name | Role |
|---|---|---|
| [FILL] | [FILL] | VR development and system architecture |
| [FILL] | [FILL] | 3D modeling and environment design |
| [FILL] | [FILL] | Research, documentation and client communication |

Optional, below the row: mentors, programs or competitions you've taken part in, partner logos. [FILL]

**Note:** the description says 3 members in one place and "4 co-founders" in another. See §8.

### 4.10 Roadmap and investors (`#investors`)

**Job:** show momentum, and give investors and grant committees a clear ask.

**Layout:** a timeline (horizontal on computers, vertical on phones), then one funding panel with a single bar split by use of funds, and a button.

**Heading:** Where we're going / *Rivojlanish rejasi*

**Timeline**

1. **Done:** working VR prototype, several 3D house models, successful walkthrough tests.
2. **Next 4 months:** interactive customization (materials, colors, furniture), better lighting and environment effects, smoother VR performance, pilot demos with developers and architects.
3. **Phase 1:** Uzbekistan.
4. **Phase 2:** Central Asia.
5. **Phase 3:** AI-based design recommendations.

**Goal line:** Reduce the risk before construction starts. / *Maqsad: qurilishdan oldingi riskni kamaytirish.*

**Funding panel**

- **We're raising UZS 60 million** to turn the prototype into a client-ready product in 4 months. / *Prototipni 4 oy ichida mijozlarga tayyor mahsulotga aylantirish uchun 60 000 000 so‘m jalb qilmoqdamiz.*
- Use of funds (from the deck, grouped):

| Use | Share |
|---|---|
| GPU workstations (3) | 75% |
| VR headset (Meta Quest 3) and accessories | 14.5% |
| Marketing and user acquisition | 4.7% |
| Backend and servers | 3.3% |
| Pilot tests and reserve | 2.5% |

- Button: **Request the pitch deck** (*Taqdimotni so‘rash*). It opens the form with "Investor" selected.
- Optional closing line from the deck: *Ushbu loyiha sarmoyasi – xalqimiz farovonligi va hududimiz rivojlanishidir.*

**Note:** keep the full budget and the revenue forecast in the deck and send it on request. The public page only needs the ask and the split.

### 4.11 FAQ (`#faq`)

**Job:** answer the last questions before someone requests a demo.

**Layout:** accordion; one answer open at a time.

**Heading:** Questions developers ask / *Ko‘p so‘raladigan savollar*

| Question | Draft answer |
|---|---|
| Do buyers need their own VR headset? | No. We bring the headset to your sales office or showroom. [CONFIRM] |
| What do you need from us to start? | Floor plans and elevations, plus CAD or BIM files if you have them. [CONFIRM: formats] |
| How long does one project take? | [FILL: usual days per layout] |
| Which headset do you use? | Meta Quest. [CONFIRM: model] |
| Can buyers change finishes and furniture? | It's in development, and pilot partners get it first. [FILL: expected month] |
| Can we use the visuals in our own ads? | [CONFIRM: videos, screenshots, 360° images] |
| Where do you work? | [CONFIRM: your city, your region, or all of Uzbekistan] |
| How much does it cost? | See Packages. The final price depends on how many layouts you have. |

### 4.12 Request a demo (`#contact`)

**Job:** turn interest into a conversation.

**Layout:** short text and direct contacts on the left, the form on the right; stacked on phones.

**Heading:** Request a demo / *Demo so‘rash* / *Запросить демо*

**Text:** Tell us about your project, and we'll show you a walkthrough of one of our homes. [CONFIRM: at your office or online]

| Field | Type | Required |
|---|---|---|
| Name | text | yes |
| Phone | +998 with an input mask | yes |
| Company | text | no |
| I am a… | Construction company, Architect, Buyer, Investor, Other | yes |
| Interested in | Basic, Interactive, Subscription, Not sure yet (pre-filled from Packages) | no |
| Project size | e.g., number of apartment layouts or buildings | no |
| Message | long text | no |
| Best way to reach you | Telegram, phone call, email | no |

- **Button:** Request a demo (the same words as everywhere else).
- **After sending:** "Demo requested. We'll message you within [FILL: 24 hours]." / *So‘rovingiz qabul qilindi. [24 soat] ichida bog‘lanamiz.*
- **Error example:** "Enter your phone number: 9 digits after +998." Say what to fix; don't apologize.
- **Next to the form:** Telegram @[FILL], +998 [FILL], [FILL]@tasavvr.uz, Instagram @[FILL].

**Notes:** send each request to your team's Telegram group through a bot (instant), with email as a backup. Add a hidden "honeypot" field to stop spam bots.

---

## 5. Design direction

### 5.1 From the deck to the website

Keep what makes the deck recognizable: the dark background, the teal accent and the gradient "VR". Change what doesn't work on a screen or in Russian.

| In the deck | On the website | Why |
|---|---|---|
| League Spartan and Poppins | Unbounded and Manrope (§5.3) | The deck fonts have no Cyrillic letters, so the Russian version would fall back to whatever font the phone has. |
| ALL-CAPS headings | Sentence case | Easier to read, especially long Uzbek and Russian words. |
| Hexagon line art and teal glows | Thin floor-plan linework | Plans are your subject; hexagons could belong to any tech company. |
| Stock images: the headset on the cover, the cranes, the AI chip | Your own renders, recordings and test photos | Your footage is proof. Stock images could be anyone's. |
| Near-black background | Blueprint night (§5.2) | The same dark mood, tinted blue-green like a blueprint. |
| "START NOW" button | "Request a demo" | The button says what happens next. |
| Search icon and slide dots | Removed | A one-page site has nothing to search, and the dots are left over from the slide template. |
| Gradient "VR" | Kept, in the logo only | It's your signature. Spread across buttons and backgrounds, it becomes decoration. |

### 5.2 Colors

| Name | Hex | Use | Contrast |
|---|---|---|---|
| Blueprint night | `#0D1B20` | Page background | — |
| Graphite | `#172A31` | Panels, tabs, table rows, form fields | Drafting paper text on it: 13.5:1 |
| Plan teal | `#7DD6DE` | Linework, main buttons, links and focus outlines on dark | 10.5:1 on Blueprint night |
| Drafting paper | `#F3F4F1` | Text on dark, and the background of the Problem section | 15.9:1 on Blueprint night |
| Deep teal | `#1F6F78` | Links and buttons in the Problem section | 5.3:1 on Drafting paper |
| Concrete | `#A9B5B8` | Captions, secondary text and dimension lines on dark | 8.4:1 on Blueprint night |
| Logo gradient | `#6B6BF6` → `#F064C0` | The "VR" in the logo, nowhere else | — |

- **Buttons:** Plan teal with Blueprint night text (10.5:1). White text on Plan teal is only 1.7:1, too faint to read.
- **Never:** Concrete text on Drafting paper (1.9:1), or Deep teal text on dark (3.0:1).
- Every text color pair above passes WCAG AA, which asks for 4.5:1 for body text.
- "Works today" and "In development" are marked by their words, never by color alone.

### 5.3 Type

| Role | Font | Weights |
|---|---|---|
| Headings | Unbounded | Bold (700) |
| Body text, buttons, forms | Manrope | Regular (400), SemiBold (600) |
| Backup for headings | Manrope | ExtraBold (800) |

Both fonts are free on Google Fonts and include Latin and Cyrillic, so one set of files covers all three languages.

| Style | Computer | Phone | Line height |
|---|---|---|---|
| H1, hero headline | 60 px | 36 px; 30 px on screens narrower than 390 px | 1.1 |
| H2, section headings | 36 px | 24 px | 1.2 |
| H3 | 24 px | 18 px | 1.3 |
| Body | 18 px | 16 px | 1.6 |
| Captions and form labels | 14 px | 14 px | 1.5 |

- All sizes come from the classic type scale (14, 16, 18, 24, 30, 36, 60).
- Keep body text to about 65 characters per line.
- **Test long words on a phone.** Unbounded is wide. *Shaxsiylashtirish* set at 36 px is 392 px wide, more than most phone screens. The Russian headline's *представлять* is 330 px at 36 px, while a 360 px wide phone leaves about 320 px for text; that's why the phone H1 drops to 30 px on narrow screens. If headings still break badly, switch them to Manrope ExtraBold, which is about 22% narrower.
- **Uzbek apostrophes:** use ‘ (U+2018) in o‘ and g‘, and ’ (U+2019) for the tutuq belgisi (*e’tibor*, *ma’lumot*). Skip the official modifier letter ʻ (U+02BB): Manrope doesn't include it, so body text would show it in a fallback font. Never type a straight apostrophe or a backtick instead.
- The logo is an image file. Never retype it in a web font.

### 5.4 Layout

- **Grid:** 12 columns on computers, with content up to 1200 px wide; one column on phones, with 20 px side margins.
- **Alignment:** left-align all text, headings included. Centered paragraphs are hard to read, and your three languages will run to different lengths.
- **Corners:** videos, plans and photos have square corners, like drawings on a sheet. Buttons are pills, as in the deck, so the only rounded shapes on the page are the ones you can press.
- **Linework:** 1 px Plan teal lines at low opacity, traced from the floor plan in the hero video: wall outlines, door swings, dimension lines. Use them in the hero, behind the roadmap timeline and as section dividers. They replace the deck's hexagons.
- **Rhythm:** every section sits on Blueprint night except Problem, the only Drafting paper section. Panels, table rows and form fields use Graphite.

In the sketches below, (…) marks a button.

**Hero on a computer**

```
┌──────────────────────────────────────────────────────────────────────┐
│ TASAVVR    Menu: 5 links                  UZ RU EN  (Request a demo) │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Don't imagine it.                   ┌──────────────────────────────┐ │
│ Walk inside it.                     │                              │ │
│                                     │                              │ │
│ TasavVR turns floor plans into      │  Hero video (muted loop)     │ │
│ life-size virtual homes. Buyers     │                              │ │
│ walk through every room before      │  Starts as a flat floor      │ │
│ construction starts.                │  plan, the walls rise,       │ │
│                                     │  the camera walks into       │ │
│ (Request a demo)                    │  the living room.            │ │
│ (Watch the walkthrough)             │                              │ │
│                                     │                              │ │
│ Working prototype: [N] house        │                              │ │
│ models, tried by [N] people.        └──────────────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Hero on a phone**

```
┌────────────────────────────┐
│ TASAVVR          UZ (Menu) │
├────────────────────────────┤
│┌──────────────────────────┐│
││                          ││
││ Hero video, square crop: ││
││ flat plan, walls rise,   ││
││ walk into the room       ││
││                          ││
│└──────────────────────────┘│
│                            │
│ Don't imagine it.          │
│ Walk inside it.            │
│                            │
│ TasavVR turns floor plans  │
│ into life-size virtual     │
│ homes. Buyers walk through │
│ every room before          │
│ construction starts.       │
│                            │
│ (Watch the walkthrough)    │
│                            │
│ Working prototype: [N]     │
│ house models, tried by [N] │
│ people.                    │
│                            │
├────────────────────────────┤
│ (Request a demo) (Telegram)│
└────────────────────────────┘
```

On phones the bottom bar is always on screen, so the hero itself only needs the "Watch the walkthrough" button.

### 5.5 Principles

- **The plan becomes a place.** Use one home you've really modelled all the way down the page: flat in the first frame of the hero video, marked up in Problem, revealed by the Solution slider, walked through in the Demo video. Visitors watch one apartment go from paper to a place they can stand in.
- **Your footage is the decoration.** Every image is your own render, recording or photo. No stock headsets, no stock skylines, no hexagons.
- **Say what works today.** "Works today" and "In development" labels stay honest, and every number is real or still marked [FILL]. A developer who catches one overclaim stops trusting the rest.
- **One action, one name.** "Request a demo" in the header, hero, packages and form, and "Demo requested" after it's sent. The button always looks the same: a Plan teal pill.
- **Quiet everywhere else.** Motion only in the hero video and in what visitors do themselves: the slider, tabs, FAQ and 360° view. No fade-ins on scroll and no hover effects on every card.

---

## 6. Writing rules

- **Plain words.** "Walk through", "floor plan", "sales office". Not "immersive digital twin ecosystem".
- **One name for each thing.** A *demo* is the live session a developer books; the *walkthrough* is the video anyone can watch. The button is always **Request a demo** / *Demo so‘rash* / *Запросить демо*, never "Contact us" or "Start now".
- **Sentence case** for headings and buttons, in all three languages: "Keyingi bosqich", not "Keyingi Bosqich".
- **Facts instead of adjectives.** Replace "innovative" (*innovatsion*, *инновационный*) and "unique" with something checkable: "[N] house models", "tested by [N] people".
- **Label the future.** Anything that doesn't work in a live demo yet is marked "In development" / *Keyingi bosqich* / *В разработке*.
- **Short, active sentences.** "We build the model from your plans", not "The model is created on the basis of the provided plans".
- **Write each language for its reader.** Uzbek is the default. Russian is for developers and buyers who prefer it. English is for investors, grant committees and programs abroad. Adapt rather than translate word for word, and have native speakers check the Uzbek and Russian.
- **Local formats.** Money: *60 000 000 so‘m* (UZ), *60 000 000 сум* (RU), *UZS 60 million* (EN), with non-breaking spaces so a number never splits across lines. Phone numbers: +998 XX XXX XX XX. In Russian, address the reader as «вы» with a small в, the usual choice for websites.
- **Errors say what to fix.** "Enter your phone number: 9 digits after +998." No apologies, and no "Something went wrong."

---

## 7. Build and technical notes

### 7.1 Phones first

Most people will open the link from Telegram on a phone. Design the phone layout first, and test on a mid-range Android phone over mobile data, not only on laptop Wi-Fi.

### 7.2 Speed

| Item | Target |
|---|---|
| Hero video | 10–15 s, muted MP4 (H.264): about 1.5 MB at 720p for phones and 3 MB at 1080p for computers. Show a still frame until it plays. |
| Images | WebP or AVIF, sized for their slot. Everything below the first screen loads as the visitor scrolls to it. |
| Demo video | Hosted on YouTube, loaded only when the visitor presses play. |
| 360° view | Loads only when the visitor opens it. |
| Fonts | Self-hosted WOFF2 files, only the weights in §5.3, Latin and Cyrillic subsets. |
| Whole page | Main content visible within 2.5 s on 4G; Lighthouse mobile performance score of 90 or more. |

### 7.3 Languages and search

- **Addresses:** `/uz/`, `/ru/` and `/en/`; the bare domain opens `/uz/`. Remember a visitor's language choice, but don't redirect by location.
- **Tags:** set `lang="uz"`, `lang="ru"` or `lang="en"` on each version, and link the three with `hreflang` tags, plus `x-default` pointing to `/uz/`.
- **Page titles,** written for each language:

| Language | Page title (example) |
|---|---|
| UZ | TasavVR: uyni qurilishdan oldin ichidan ko‘ring |
| RU | TasavVR: пройдитесь по дому до начала строительства |
| EN | TasavVR: walk through homes before they're built |

- **Search engines:** register the site in Google Search Console and Yandex Webmaster, and submit the sitemap to both.

### 7.4 Link previews

Most links to the site will be shared in Telegram, so the preview card matters as much as the page. Give each language version its own Open Graph title, description and a 1200 × 630 px image: an eye-level frame from the hero video, with the logo. Telegram caches previews, so after changing one, send the link to @WebpageBot to refresh it.

### 7.5 Analytics

Pick one free tool: Yandex Metrica, which is widely used in the region, or Google Analytics 4. Track six events: demo request sent, deck request sent, Telegram button or phone number tapped, demo video played, package button pressed (with the package name), and language switched. Each month, compare demo and deck requests with the month before (§1), and mention analytics in the privacy policy.

### 7.6 Accessibility

- Every text color pair meets WCAG AA (§5.2).
- Keyboard focus is always visible: a 2 px Plan teal outline on everything clickable.
- The plan/3D slider works by finger, mouse and arrow keys; the tabs and FAQ work from the keyboard too.
- Every image has alt text in all three languages, every video has subtitles, and nothing plays sound by itself.
- If "reduce motion" is on, the hero shows a still frame instead of the video.
- Tap targets are at least 44 × 44 px. Form labels sit above the fields, not inside them as placeholders, and each error message appears next to its field.

### 7.7 Privacy and personal data

- **Privacy page** (`/privacy`) in all three languages: what you collect (name, phone, company, message), why (to answer the request), where it's stored, for how long, and how someone can ask you to delete it.
- **Consent:** a checkbox under the form, such as "I agree to TasavVR processing my data to answer this request", linked to the privacy page. [CONFIRM: wording]
- **Where the data may be stored:** older advice says Uzbek citizens' personal data must stay on servers in Uzbekistan. Since amendments in March 2026, that applies only to biometric data, genetic data and telecom subscriber data. Other data, like the names and phone numbers from your form, may be stored abroad if a condition is met. One condition is that the country is on the government's list of countries with adequate protection, which since July 2026 has 49 countries, including Germany, the Netherlands and the United States. Check every place a request passes through: the website host, the form service, email and Telegram. This isn't legal advice, and the rules are new. [CONFIRM: check with a lawyer or your program's legal adviser]

### 7.8 How to build it

| Option | Good if | Watch out for |
|---|---|---|
| Tilda | Nobody on the team wants to code. Many local businesses use it, and it can send form requests straight to Telegram. | The plan/3D slider and the 360° view need custom code blocks, and your own domain needs a paid plan. |
| Framer or Webflow | You want a visual editor with finer design control. | Extra languages cost more on most plans. [CONFIRM: current prices] |
| Astro and Tailwind CSS, hosted on Cloudflare Pages, Netlify or Vercel | One of you codes. | You build the form handler yourselves: a small serverless function that sends each request to Telegram and email. |

If one of you codes, choose Astro: it's fast by default, has built-in routing for `/uz/`, `/ru/` and `/en/`, and the free hosting plans easily cover a site this size. Otherwise, start with Tilda.

### 7.9 Domain and email

- **Domain:** `tasavvr.uz` from an accredited .uz registrar. [CONFIRM: available] If `tasavvr.com` is also available, buy it and point it to the .uz site.
- **Email on your domain,** such as hello@tasavvr.uz. Construction companies take it more seriously than a Gmail address.
- **HTTPS everywhere.** Every option in §7.8 includes a free certificate.

---

## 8. Fix before publishing

These come from reading the deck and the project description side by side. The first group shows up on the website. The second is in the deck that investors will request through the site.

**On the website**

- **Team size.** The description says "3 Members" in one place and "4 co-founders" in another. Choose the true number and show the same people on the site, in the deck and in every application. [FILL]
- **What a "project" is.** One apartment layout, one building or a whole residential complex? Package prices mean little until this is defined.
- **Now versus next.** The description's opening paragraph presents live changes to materials, colors, lighting and furniture as part of the system. If you reuse that text, keep those features marked "In development" until they work in a live demo.
- **"First in Uzbekistan."** Slide 3's "chance to be first" is fine as a plan. Don't turn it into "the first VR platform in Uzbekistan" unless you've checked; a developer who knows a local 3D-tour studio will doubt everything else on the page.
- **Typos and apostrophes.** Slide 3's "O’zbekistonda Qurulish sektori" should read "O‘zbekistonda qurilish sektori". Slides 2 and 3 use ’ in some o‘ words (*o’rtasida*, *bo’lish*), while the rest of the deck uses ‘ (*ko‘paymoqda*); use ‘ everywhere (§5.3). Headings like "Keyingi Bosqich" and "Daromad Modeli" go to sentence case.

**In the deck**

- **Subscription versus forecast.** One subscription client at 8–12 mln so‘m a month brings in 96–144 mln a year. That alone matches or beats the whole annual forecast of 80–120 mln. Either the forecast counts no subscriptions, or the subscription price doesn't fit the project prices. Show projects and subscriptions as separate lines.
- **Break-even in 9 months.** First say which you mean: break-even (the month revenue covers monthly costs) or payback (the month the 60 mln is earned back). For payback: 80–120 mln a year is 6.7–10 mln a month. If paid projects start after the 4-month development period, 9 months leaves 5 months of sales, 33–50 mln so‘m, which is less than the 60 mln invested even with zero costs. Either way, list monthly costs (transport, electricity, internet, software, any pay) next to revenue.
- **The 8 mln average.** "10 projects × 8 mln" puts the average project at the Interactive price, and Interactive is still in development. Early sales are more likely to be Basic, at 4–5 mln.

---

## 9. What to prepare

**Video and images**

- [ ] Hero video: a 10–15 s render of one home (flat plan, walls rise, walk into the living room), in 16:9 for computers and a square crop for phones, plus a still frame of each.
- [ ] Floor plan of the same home, clean, with room labels in Uzbek, Russian and English.
- [ ] An image pair for the plan/3D slider: the floor plan and the finished 3D model, rendered from the same overhead camera at the same size.
- [ ] Demo video, 60–90 s, split screen (the person in the headset and what they see), with subtitles in all three languages, plus a 30 s vertical cut for Telegram and Instagram.
- [ ] Gallery: 3–6 images per house model, each with the model's name, area in m² and number of rooms.
- [ ] One 360° panorama of a room: equirectangular, 2:1, about 4096 × 2048 px. Larger files may not load on phones.
- [ ] Test-session photos, with permission from everyone in them.
- [ ] Team photos, all with the same background, light and framing.
- [ ] Logo as SVG, in a light version for dark backgrounds and a dark one for paper, plus a square icon for the favicon and social profiles.
- [ ] Link preview images, 1200 × 630 px, one per language.

**Text and numbers**

- [ ] Real numbers: house models built, people who tested them, test sessions held.
- [ ] Name, role and one line for each team member.
- [ ] What each package includes, and what counts as one "project".
- [ ] Answers for every [FILL] and [CONFIRM] in this doc.
- [ ] Native-speaker check of the Uzbek and Russian text.
- [ ] Privacy policy in three languages.

**Accounts**

- [ ] Domain and email (§7.9).
- [ ] Telegram: a public username for the contact button, a team group for form alerts, and a bot that posts into it.
- [ ] Analytics (§7.5), Google Search Console and Yandex Webmaster.
- [ ] Telegram channel, Instagram, YouTube and LinkedIn, or only the ones you'll keep updating.

**Final checks**

- [ ] Send a test request in each language from a phone and check that it reaches Telegram and email.
- [ ] Paste the link into a Telegram chat and check the preview in each language.
- [ ] Open each language version on a 360 px wide phone and look for headings that overflow.
- [ ] Turn on "reduce motion" and check that the hero shows a still frame.
