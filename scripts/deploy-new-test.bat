@echo off
REM 새 테스트 배포 자동화 스크립트 (Windows용)
REM 
REM 사용법: scripts\deploy-new-test.bat [test-name]
REM 예시: scripts\deploy-new-test.bat planner-vs-spontaneous-test

setlocal enabledelayedexpansion

set TEST_NAME=%~1

if "%TEST_NAME%"=="" (
    echo ❌ 테스트 이름을 입력하세요.
    echo.
    echo 사용법: scripts\deploy-new-test.bat [test-name]
    echo 예시: scripts\deploy-new-test.bat my-new-test
    exit /b 1
)

echo 🎯 새 테스트 배포 프로세스 시작...
echo.
echo 📋 테스트 이름: %TEST_NAME%
echo.

REM 1. 빌드 테스트
echo 📦 빌드 테스트 중...
call npm run build

if errorlevel 1 (
    echo.
    echo ❌ 빌드 실패! 코드 오류를 먼저 수정하세요.
    pause
    exit /b 1
)

echo.
echo ✅ 빌드 성공!
echo.

REM 2. Git 상태 확인
echo 📊 Git 상태 확인 중...
git status --porcelain >nul 2>&1

if errorlevel 1 (
    echo   ❌ Git 저장소 오류
    pause
    exit /b 1
)

REM 3. 배포 여부 확인
echo 🚀 배포를 진행할까요?
echo.
echo ⚠️  주의: 이 작업은 Vercel에 자동 배포를 트리거합니다.
echo.
set /p CONFIRM="배포 진행? (y/N): "

if /i not "%CONFIRM%"=="y" (
    echo.
    echo ❌ 배포 취소됨.
    pause
    exit /b 0
)

REM 4. Git 커밋 & 푸시
echo.
echo 📤 Git 푸시 중...
call git add .
call git commit -m "feat: Add %TEST_NAME% test"
call git push origin main

if errorlevel 1 (
    echo.
    echo ❌ Git 푸시 실패!
    pause
    exit /b 1
)

echo.
echo ✅ Git 푸시 완료!
echo.
echo ⏳ Vercel 배포 대기 중...
echo.
echo 📍 다음 단계:
echo   1. Vercel 배포 완료 확인 (3-5분 소요)
echo      → https://vercel.com 대시보드 확인
echo.
echo   2. 배포 완료 후 Supabase에서 SQL 실행
echo      → supabase\insert-%TEST_NAME%.sql
echo.
echo   3. 실제 사이트에서 테스트 확인
echo      → https://myquizoasis.com/ko/test/%TEST_NAME%
echo.
echo ✅ 스크립트 완료!
echo.
pause

