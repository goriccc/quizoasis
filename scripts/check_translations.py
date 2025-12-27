import json
import os

files = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id']

for f in files:
    file_path = f"messages/{f}.json" if f != 'zh-CN' else "messages/zh-CN.json"
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            test_data = data.get('phase2ColorSurvivalTest', {})
            ui_data = test_data.get('ui', {})
            has_survival = 'survivalInstinct' in ui_data
            has_recommendation = 'recommendation' in ui_data
            print(f'{f}: survivalInstinct={has_survival}, recommendation={has_recommendation}')
            if has_survival:
                print(f'  -> survivalInstinct value: {ui_data["survivalInstinct"]}')
            if has_recommendation:
                print(f'  -> recommendation value: {ui_data["recommendation"]}')
    except Exception as e:
        print(f'{f}: Error - {e}')

