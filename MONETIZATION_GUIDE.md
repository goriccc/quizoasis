# QuizOasis monetization and ads (current)

Last updated: 2026-04-14

## Overview

- Primary revenue in the test UX is **Google AdSense**.
- Coupang iframe and related one-off scripts have been removed.
- There is **no** AliExpress-specific automation under `scripts/`.

## AdSense

### Global script

- Loaded in `app/layout.tsx` from `pagead2.googlesyndication.com`.
- Publisher ID: `ca-pub-3192752766652582` (keep in sync with code).

### Slot IDs

All slots are defined in `lib/adsense.tsx` under `ADSENSE_CONFIG.SLOTS`.

| Key | Placement |
|-----|-----------|
| `START_SCREEN` | Start screen: between title and description |
| `START_BELOW_TEST_BUTTON` | Start screen: below the main start CTA |
| `PROGRESS_SCREEN` | During the quiz: below the last answer row |
| `LOADING_TOP` | Loading screen: top |
| `LOADING_BOTTOM` | Loading screen: bottom |
| `RESULT_SCREEN` | Result screen: between result block and retake / home actions |
| `TEST_COMPLETE_POPUP` | Test completion modal |
| `RESULT_ABOVE_POPULAR_TOP5` | Result screen: **immediately above** the “popular tests” section title |

### Component

- `AdSensePlaceholder` in `lib/adsense.tsx` renders `ins.adsbygoogle` and runs the standard `(adsbygoogle = window.adsbygoogle || []).push({})` flow.
- Toggle `ADSENSE_CONFIG.ENABLED` for placeholder-only mode while developing.

### Footer

- Korean `footer.disclaimer` no longer contains the old Coupang notice. `Footer.tsx` omits the disclaimer paragraph when the string is empty.

---

## AliExpress affiliate (legacy)

Some `*TestClient.tsx` files still use:

- `lib/aliexpress.ts` — client helpers and keyword maps
- `app/api/aliexpress/search/route.ts` — search API route
- `components/ProductRecommendations.tsx` — product carousel on results (non-KO locales in many flows)

### Environment variables (names only)

- `ALIEXPRESS_APP_KEY`
- `ALIEXPRESS_APP_SECRET`

**Never commit secrets.** Configure only in local or deployment env (e.g. `.env.local`).

### Docs cleanup

- `ALIEXPRESS_AFFILIATE_GUIDE.md` and `ALIEXPRESS_SETUP.md` were **deleted** (they contained outdated copy and example secrets).
- To retire AliExpress entirely, remove imports/usages per test client, then delete `lib/aliexpress.ts` and `app/api/aliexpress/search/route.ts` when nothing references them.

---

## Removed artifacts

- `components/CoupangAffiliateIframe.tsx`
- `scripts/replace-aliexpress-with-coupang.mjs`
- `scripts/bulk_coupang_to_adsense.py`
