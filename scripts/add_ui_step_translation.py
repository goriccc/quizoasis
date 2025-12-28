import json
import os

# 번역 데이터
translations = {
    'ko': '단계',
    'en': 'Step',
    'ja': 'ステップ',
    'zh-CN': '步骤',
    'zh-TW': '步驟',
    'vi': 'Bước',
    'id': 'Langkah'
}

def update_json_file(file_path, step_text):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # phase2HearingAgeTest.ui.step 추가
        if 'phase2HearingAgeTest' in data and 'ui' in data['phase2HearingAgeTest']:
            if 'step' not in data['phase2HearingAgeTest']['ui']:
                data['phase2HearingAgeTest']['ui']['step'] = step_text
                print(f"Added 'step' to {file_path}")
            else:
                data['phase2HearingAgeTest']['ui']['step'] = step_text
                print(f"Updated 'step' in {file_path}")
        else:
            print(f"phase2HearingAgeTest.ui not found in {file_path}")
            return False
        
        # 파일 저장
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return True
    except Exception as e:
        print(f"Error updating {file_path}: {e}")
        return False

def main():
    messages_dir = 'messages'
    
    for lang, step_text in translations.items():
        file_path = os.path.join(messages_dir, f'{lang}.json')
        update_json_file(file_path, step_text)
    
    print("\nAll translation files updated successfully!")

if __name__ == "__main__":
    main()

