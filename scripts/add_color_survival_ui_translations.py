import json
import os

# 추가할 번역 데이터
translations_to_add = {
    "survivalInstinct": {
        "ko": "📊 생존 본능",
        "en": "📊 Survival Instinct",
        "ja": "📊 生存本能",
        "zh-CN": "📊 生存本能",
        "zh-TW": "📊 生存本能",
        "vi": "📊 Bản năng sinh tồn",
        "id": "📊 Insting Bertahan Hidup"
    },
    "recommendation": {
        "ko": "⭐ 추천",
        "en": "⭐ Recommendation",
        "ja": "⭐ おすすめ",
        "zh-CN": "⭐ 推荐",
        "zh-TW": "⭐ 推薦",
        "vi": "⭐ Đề xuất",
        "id": "⭐ Rekomendasi"
    }
}

messages_dir = "messages"
files = {
    "ko": "ko.json",
    "en": "en.json",
    "ja": "ja.json",
    "zh-CN": "zh-CN.json",
    "zh-TW": "zh-TW.json",
    "vi": "vi.json",
    "id": "id.json"
}

key_mapping = {
    "ko": "ko",
    "en": "en",
    "ja": "ja",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW",
    "vi": "vi",
    "id": "id"
}

for lang_code, filename in files.items():
    file_path = os.path.join(messages_dir, filename)
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        trans_key = key_mapping.get(lang_code)
        if trans_key and 'phase2ColorSurvivalTest' in data:
            if 'ui' not in data['phase2ColorSurvivalTest']:
                data['phase2ColorSurvivalTest']['ui'] = {}
            
            # survivalInstinct 추가
            if trans_key in translations_to_add['survivalInstinct']:
                data['phase2ColorSurvivalTest']['ui']['survivalInstinct'] = translations_to_add['survivalInstinct'][trans_key]
            
            # recommendation 추가
            if trans_key in translations_to_add['recommendation']:
                data['phase2ColorSurvivalTest']['ui']['recommendation'] = translations_to_add['recommendation'][trans_key]
            
            print(f"Added translations for {lang_code}")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Translation update complete.")

