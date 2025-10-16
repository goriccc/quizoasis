# New Test Development Guidelines

This checklist is based on the issues encountered during the Attachment Style Test development process.

## 🚨 Major Issues & Solutions

### 1. Multilingual Data Structure Problem
**Issue**: `AttachmentQuestion`'s `question` and `options` should be `Record<string, string>`, not `string`
```typescript
// ❌ Wrong structure
question: string;
options: { a: string; b: string; c: string; d: string; };

// ✅ Correct structure
question: Record<string, string>;
options: {
  a: Record<string, string>;
  b: Record<string, string>;
  c: Record<string, string>;
  d: Record<string, string>;
};
```
**Check**: Verify all text fields follow `{ko, en, ja, zh, zhTW, vi, id}` structure

### 2. Quote Style Rules
**Rules**: 
- Korean, English: Double quotes `""`
- Other languages: Japanese-style brackets `「」`

```typescript
// ✅ Correct example
ko: '"바쁘겠지" 여유롭게 기다림',
en: '"They must be busy" and wait calmly',
ja: '「忙しいんだろう」と余裕を持って待つ',
zh: '「他们一定很忙」 平静地等待',
```

### 3. localeKey Definition & Type Casting
**Issue**: `localeKey` undefined or type errors

```typescript
// ✅ Define at component top
const getLocaleKey = (locale: string): string => {
  if (locale === 'zh-CN') return 'zh';
  if (locale === 'zh-TW') return 'zhTW';
  return locale;
};
const localeKey = getLocaleKey(locale);

// ✅ Type casting for all usages
result.title[localeKey as keyof typeof result.title]
```

### 4. Missing Translation in Messages Files
**Issue**: Translations not added to some language message files
**Solution**: Add translations to all 7 languages simultaneously

**Required Translation Structure**:
```json
{
  "attachmentTest": {
    "startMessage": {
      "line1": "...",
      "line2": "...",
      "line3": "...",
      "line4": "...",
      "line5": "...",
      "line6": "..."
    },
    "ui": {
      "startTest": "...",
      "participants": "...",
      "progress": "...",
      "shareResult": "...",
      "retake": "...",
      "otherTests": "...",
      "shareWithFriends": "...",
      "similarTests": "...",
      "popularTests": "..."
    },
    "result": {
      "analyzing": "...",
      "completed": "...",
      "showResult": "...",
      "characteristics": "...",
      "relationshipPattern": "...",
      "advice": "...",
      "bestMatch": "...",
      "goodMatch": "...",
      "carefulMatch": "...",
      "difficultMatch": "..."
    }
  }
}
```

### 5. Hardcoded Text i18n Conversion
**Issue**: UI text hardcoded, not translated
```typescript
// ❌ Hardcoded
<h2>Start Test</h2>

// ✅ Use i18n
<h2>{t('ui.startTest')}</h2>
```

### 6. Option Shuffling Logic
**Issue**: Incorrectly treating `options` object as array
```typescript
// ✅ Correct handling
const optionsArray = [
  { key: 'a', text: optionsObj.a[localeKey] || optionsObj.a.ko },
  { key: 'b', text: optionsObj.b[localeKey] || optionsObj.b.ko },
  // ...
];

// Add localeKey to useEffect dependencies
}, [currentQuestion, started, localeKey]);
```

### 7. Supabase Connection & play_count Handling
**Issue**: Field name mismatch between `playCount` vs `play_count`
```typescript
// ✅ Handle both
formatPlayCount(test.playCount || test.play_count || 0, locale)
```

### 8. Tags Field Parsing Error
**Issue**: `test.tags.includes is not a function`
```typescript
// ✅ Safe handling
let tagsArray = test.tags;
if (typeof tagsArray === 'string') {
  try {
    tagsArray = JSON.parse(tagsArray);
  } catch (e) {
    return false;
  }
}
if (!Array.isArray(tagsArray)) {
  return false;
}
```

## 📋 Recommended Development Order

1. **Design Multilingual Interface Structure**
   - Define `AttachmentQuestion`, `AttachmentResult` interfaces

2. **Create Data**
   - Write multilingual data for 12 questions + 4 results
   - Apply quote style rules

3. **Add Translation Files**
   - Add translations to all 7 language message files (ko, en, ja, zh-CN, zh-TW, vi, id)

4. **Implement Component**
   - Convert hardcoded text to i18n
   - Define `localeKey` and type casting
   - Implement option shuffling logic

5. **Connect Supabase**
   - Add test metadata
   - Handle play_count

6. **Error Handling**
   - Handle tags field parsing errors
   - Handle formatPlayCount errors

7. **Test & Validate**
   - Test all languages
   - Verify UI/UX consistency

## 🔍 Checklist

### Before Development
- [ ] Is the interface designed with multilingual structure?
- [ ] Are quote style rules applied?

### During Development
- [ ] Are all hardcoded texts converted to i18n?
- [ ] Is localeKey properly defined with type casting?
- [ ] Is option shuffling logic correctly implemented?

### After Development
- [ ] Are translations added to all 7 languages?
- [ ] Does the test work normally in all languages?
- [ ] Is UI/UX consistent with existing tests?
- [ ] Is Supabase connection working properly?

## 🚨 Additional Critical Issues (Based on Recent Development)

### 9. Translation Namespace Issues (CRITICAL)
**Issue**: Using specific namespace `useTranslations('testName')` for global keys causes variable name display
```typescript
// ❌ Wrong - causes 'recommendations.similarTests' to display
const t = useTranslations('friendTest');
{t('recommendations.similarTests')} // Shows variable name instead of translation

// ✅ Correct - add global translation hook
const t = useTranslations('friendTest');
const tGlobal = useTranslations();
{tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}
```
**Rule**: Always add `const tGlobal = useTranslations();` when using specific namespace

### 10. Fallback Translation Strategy
**Issue**: Translation failures show variable names like 'recommendations.similarTests'
```typescript
// ❌ Wrong - no fallback
{t('recommendations.similarTests')}

// ✅ Correct - always add fallback
{tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}
```
**Rule**: Every translation call must have `|| 'fallback'` to prevent variable name display

### 11. Tag Translation Implementation
**Issue**: Korean tags like '소통', '심리', '관계' not translated properly
```typescript
// ❌ Wrong - t() function fails for Korean tags
{t(`tags.${tag.name}`)} // Shows 'tags.소통' instead of 'Communication'

// ✅ Correct - manual translation mapping
const tagTranslations: Record<string, Record<string, string>> = {
  '소통': {
    ko: '소통', en: 'Communication', ja: 'コミュニケーション',
    'zh-CN': '沟通', 'zh-TW': '溝通', id: 'Komunikasi', vi: 'Giao tiếp'
  },
  // ... other tags
};
const translatedTag = tagTranslations[tag.name]?.[locale] || tag.name;
```
**Rule**: Implement manual translation mapping with `useLocale()` hook for Korean tags

### 12. Recommendation Section Translation
**Issue**: 'Similar Other Tests', 'Top 5 Similar Tests', 'Top 5 Popular Tests' not translated
```typescript
// ❌ Wrong - hardcoded text
<h2>유사한 다른 테스트</h2>
<h2>🎯 유사한 다른 테스트 추천 톱5</h2>
<h2>🔥 요즘 인기 테스트 추천 톱5</h2>

// ✅ Correct - use global translation with fallback
<h2>{tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}</h2>
<h2>{tGlobal('recommendations.similarTestsTop5') || '🎯 유사한 다른 테스트 추천 톱5'}</h2>
<h2>{tGlobal('recommendations.popularTestsTop5') || '🔥 요즘 인기 테스트 추천 톱5'}</h2>
```
**Rule**: Add 'recommendations' object to all 7 language files and use `tGlobal()` with fallbacks

### 13. Cache Clearing Protocol (Updated)
**Issue**: Code changes don't reflect due to Next.js caching
```bash
# Complete cache clearing sequence
taskkill /F /IM node.exe
Remove-Item -Path .next -Recurse -Force
npm run dev
# Browser: Ctrl+Shift+R (hard refresh)
```
**Rule**: Always clear cache when translation issues persist

### 14. Component Import Path Issues
**Issue**: Relative import paths cause module resolution errors
```typescript
// ❌ Wrong - relative path
import { ConflictQuestion } from '../lib/conflictData';

// ✅ Correct - absolute path
import { ConflictQuestion } from '@/lib/conflictData';
```
**Rule**: Always use `@/` prefix for lib imports

## 📋 Updated Development Checklist

### Before Development
- [ ] Is the interface designed with multilingual structure?
- [ ] Are quote style rules applied?
- [ ] Are all 7 language message files ready with complete translation structure?

### During Development
- [ ] Are all hardcoded texts converted to i18n?
- [ ] Is localeKey properly defined with type casting?
- [ ] Is option shuffling logic correctly implemented?
- [ ] Is global translation hook added for cross-namespace keys?
- [ ] Do all translation calls have fallbacks?
- [ ] Is tag translation mapping implemented?
- [ ] Are recommendation sections using tGlobal() with fallbacks?

### After Development
- [ ] Are translations added to all 7 languages?
- [ ] Is 'recommendations' object added to all 7 language files?
- [ ] Does the test work normally in all languages?
- [ ] Are variable names not displaying instead of translations?
- [ ] Is UI/UX consistent with existing tests?
- [ ] Is Supabase connection working properly?
- [ ] Have you cleared cache and tested with hard refresh?

Following this guideline will help avoid the issues encountered during the Attachment Style Test development and recent multilingual implementation issues.
