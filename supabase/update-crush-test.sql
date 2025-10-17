-- 짝사랑 성공률 테스트 썸네일 업데이트
UPDATE tests 
SET 
  thumbnail = 'test_033_crush_success_rate.jpg',
  updated_at = NOW()
WHERE slug = 'crush-success-test';
