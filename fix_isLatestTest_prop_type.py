import re
import os
import glob

# 컴포넌트 파일 목록
component_files = glob.glob('components/*TestClient.tsx')

fixed_count = 0

for file_path in component_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Props 인터페이스에 isLatestTest 추가
    # 패턴: interface 또는 type으로 시작하는 Props 정의
    patterns = [
        # interface TestNameTestClientProps { ... }
        r"(interface\s+\w+TestClientProps\s*\{[\s\S]*?)(\s*\}\s*;)",
        # type TestNameTestClientProps = { ... }
        r"(type\s+\w+TestClientProps\s*=\s*\{[\s\S]*?)(\s*\}\s*;)"
    ]
    
    for pattern in patterns:
        def add_isLatestTest(match):
            props_start = match.group(1)
            props_end = match.group(2)
            
            # 이미 isLatestTest가 있으면 스킵
            if 'isLatestTest' in props_start:
                return match.group(0)
            
            # similarTests 다음이나 마지막에 isLatestTest 추가
            if 'similarTests' in props_start:
                props_start = re.sub(
                    r"(similarTests\?\s*:\s*Array<\{[\s\S]*?\}>;\s*)",
                    r"\1  isLatestTest?: boolean;\n",
                    props_start
                )
            else:
                # similarTests가 없으면 적절한 위치에 추가
                # playCount나 thumbnail 다음에 추가
                props_start = re.sub(
                    r"(playCount\??\s*:\s*number;?\s*)",
                    r"\1  isLatestTest?: boolean;\n",
                    props_start
                )
            
            return props_start + props_end
        
        new_content = re.sub(pattern, add_isLatestTest, content, flags=re.MULTILINE)
        if new_content != content:
            content = new_content
            break
    
    if new_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        fixed_count += 1
        print(f'[OK] {os.path.basename(file_path)}')

print(f'\n[SUCCESS] {fixed_count}개 파일 수정 완료')

