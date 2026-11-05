# Registry-only test onboarding

신규 테스트는 `page.tsx`를 수정하지 않습니다. 레지스트리 + 분할 messages만 사용합니다.

## Quick start

```bash
npm run scaffold:registry-test -- --slug phase3-my-balance-game --ns phase3MyBalanceGameTest --title-ko "내 밸런스 게임"
```

Creates:

- `lib/phase3MyBalanceGameData.ts` (stub)
- `components/Phase3MyBalanceGameTestClient.tsx` (stub — replace with real client)
- registry entry in `lib/testRuntimeRegistry.ts`
- `messages/{locale}/tests/phase3-my-balance-game.json` × 7

## After scaffolding

1. Fill questions/results in the data module
2. Implement the client (copy from an existing balance client; wire `useTranslations(ns)`)
3. Localize split message files (KO first, then others)
4. Add `supabase/insert-phase3-my-balance-game.sql` (do not run from agent)
5. Run `npm run check:budgets`
6. Commit only this test’s files

## Migrating an existing legacy test

1. Register in `lib/testRuntimeRegistry.ts`
2. `node scripts/extract-test-messages.mjs --slug ... --ns ...`
3. Remove META import / `dynamic()` / `if (slug === ...)` from `page.tsx`
4. Keep URL/slug/DB row unchanged

## Why

- Prevents Vercel build OOM from a growing `page.tsx` + monolith messages
- Users download only the test chunk they open
- Start screen can SSR via registry `ssr: true` + `BalanceGameIntroSSR`
