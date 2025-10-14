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

Following this guideline will help avoid the issues encountered during the Attachment Style Test development.
