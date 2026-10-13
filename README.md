# UltraPay — launch site

Next.js 14 + TypeScript + Tailwind CSS + shadcn-style structure. The hero is the home page (`/`).
Design: "taxi rank board" — white page, black ink, one taxi-yellow accent, heavy condensed capitals, illustrated animated scenes.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. (Fonts load from Google Fonts, so you need to be online the first time.)

## Structure

```
app/
  layout.tsx          Root layout: Inter (body) + Barlow Condensed (display)
  page.tsx            Home page: composes all sections
  globals.css         Theme tokens (--taxi is the yellow), checker pattern
  api/notify/route.ts Validates and logs Notify Me sign-ups (see below)
components/
  ui/                 shadcn-style primitives: button, card, badge
  hero.tsx            Headline, countdown, form, QR sticker + phone
  countdown.tsx       Departure-board countdown to 31 Oct 2026 00:00 SAST
  notify-form.tsx     Role + email/phone form, posts to /api/notify
  audiences.tsx       Tabbed "who it's for" (keyboard accessible)
  how-it-works.tsx    Scroll-driven phone story: scan, confirm, paid, receipt
  unbanked.tsx  features.tsx  why.tsx  partners.tsx  footer.tsx  navbar.tsx
  hero-scene.tsx      Animated hero (about 10s loop): commuter scans the taxi's QR sticker, fare paid, driver paid
  vendor-scene.tsx    Animated spaza shop (about 9s loop): cash-in tops up a phone-number wallet
  taxi.tsx  scene-parts.tsx   Shared SVG taxi, people and chips used by the scenes
  taxi-road.tsx       Small taxi that drives along the top of the footer
  phone.tsx           Phone frame + the four illustrative screens
  qr-sticker.tsx      Decorative QR sticker (not a scannable code)
  route-lines.tsx     Animated dashed route lines (light SVG, no WebGL)
  checker-strip.tsx   Black/yellow taxi check divider
lib/roles.ts          Role list + contact validation shared by form and API
lib/utils.ts          cn() helper
components.json       shadcn config (`npx shadcn@latest add <component>`)
```

## Customising

- Accent colour: `--taxi` and `--primary` in `app/globals.css` (one line each)
- Launch date: `LAUNCH_AT` in `components/countdown.tsx`
- Copy: the section components; hero text is in `components/hero.tsx`
- Scene timings: the `.s-*`, `.s2-*` and `.taxi-drive` keyframes in `app/globals.css` (scenes show a still frame if the visitor prefers reduced motion)
- Phone screen values (route, fare, taxi registration) are illustrative: edit them in `components/phone.tsx`

## Notify Me sign-ups

`app/api/notify/route.ts` validates the submission and currently only `console.log`s it.
Before launch, replace that line with a real store (database, Google Sheet, Mailchimp, Resend, etc.),
otherwise sign-ups are lost.
