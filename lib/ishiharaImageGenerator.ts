// 이시하라 검사표 이미지 생성기

interface IshiharaConfig {
  number: string; // 보여줄 숫자 (또는 'nothing')
  type: 'control' | 'red-green' | 'blue-yellow' | 'intensity';
  backgroundColor: string; // 배경 색상
  numberColor: string; // 숫자 색상
  dotSize: number; // 점 크기
  canvasSize: number; // 캔버스 크기
}

// 숫자 패턴 정의 (5x7 그리드 기반)
const NUMBER_PATTERNS: { [key: string]: boolean[][] } = {
  '12': [
    // 1 (더 굵고 명확하게)
    [false, false, true, false, false],
    [false, true, true, false, false],
    [true, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [true, true, true, true, true],
    // 2 (더 굵고 명확하게)
    [true, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, true, true, true, false],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
  ],
  '21': [
    // 2
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, true, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
    // 1
    [false, false, true, false, false],
    [false, true, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, true, true, true, false],
  ],
  '74': [
    // 7
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    // 4
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
  ],
  '42': [
    // 4
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
    // 2
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, true, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
  ],
  '26': [
    // 2
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, true, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
    // 6
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '16': [
    // 1
    [false, false, true, false, false],
    [false, true, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, true, true, true, false],
    // 6
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '35': [
    // 3
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
    // 5
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '45': [
    // 4
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
    // 5
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '29': [
    // 2
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, true, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
    // 9
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, true],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '70': [
    // 7
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    // 0
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '57': [
    // 5
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
    // 7
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
  ],
  '73': [
    // 7
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    // 3
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '8': [
    // 8 (단일 숫자, 더 크게)
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '6': [
    // 6 (단일 숫자)
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '5': [
    // 5 (단일 숫자)
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
  ],
  '7': [
    // 7 (단일 숫자)
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
  ],
  '2': [
    // 2 (단일 숫자)
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, true, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
  ],
};

// HSL to RGB 변환
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// RGB to Hex
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

export function generateIshiharaImage(
  canvas: HTMLCanvasElement,
  config: IshiharaConfig
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const { number, type, backgroundColor, numberColor, dotSize, canvasSize } = config;
  
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  // 배경 색상으로 채우기 (항상 흰색, 점들로 채워짐)
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  // 점들 생성 (Control의 경우 더 촘촘하게, 모든 영역을 점으로 채움)
  const spacing = type === 'control' ? 0.85 : 0.9; // Control은 더 촘촘하게
  // 점 간격 계산: dotSize * spacing
  const dotSpacing = dotSize * spacing;
  const cols = Math.ceil(canvasSize / dotSpacing) + 1; // 여유있게 계산
  const rows = Math.ceil(canvasSize / dotSpacing) + 1; // 여유있게 계산
  const finalCols = cols;
  const finalRows = rows;

  // 숫자 패턴 가져오기
  const pattern = NUMBER_PATTERNS[number] || [];
  const patternCols = pattern.length > 0 ? pattern[0].length : 5;
  const patternRows = pattern.length;

  // 숫자 중앙 배치를 위한 오프셋 (더 크게 스케일링)
  const scale = type === 'control' ? 2.0 : 1.5; // Control은 크게
  const scaledPatternCols = Math.floor(patternCols * scale);
  const scaledPatternRows = Math.floor(patternRows * scale);
  const startCol = Math.floor((finalCols - scaledPatternCols) / 2);
  const startRow = Math.floor((finalRows - scaledPatternRows) / 2);

  // 모든 영역을 점으로 채우기
  for (let row = 0; row < finalRows; row++) {
    for (let col = 0; col < finalCols; col++) {
      // 점 위치 계산 (spacing 고려)
      const x = col * dotSpacing;
      const y = row * dotSpacing;
      
      // 캔버스 범위를 벗어나면 건너뛰기
      if (x < 0 || x >= canvasSize || y < 0 || y >= canvasSize) continue;

      // 숫자 패턴 영역인지 확인 (스케일링 고려)
      const patternRow = Math.floor((row - startRow) / scale);
      const patternCol = Math.floor((col - startCol) / scale);
      const isNumberDot = 
        patternRow >= 0 && 
        patternRow < patternRows && 
        patternCol >= 0 && 
        patternCol < patternCols &&
        pattern[patternRow] && 
        pattern[patternRow][patternCol];

      // 점 색상 결정
      let dotColor: string;
      if (isNumberDot) {
        // 숫자 점은 numberColor 사용
        dotColor = numberColor;
      } else {
        // 배경 점은 backgroundColor 기반으로 약간 변형
        if (type === 'control') {
          // Control: 다양한 검정/그레이 계열 배경 점들 (처음부터 점들로 채워진 느낌)
          // 검은색부터 어두운 회색까지 다양한 톤
          const grayValue = Math.floor(15 + Math.random() * 70); // 15-85 (어두운 검정부터 어두운 회색까지)
          dotColor = rgbToHex(grayValue, grayValue, grayValue);
        } else if (type === 'red-green') {
          // 적록색약: 초록 계열 배경에 빨강 계열 숫자
          // 배경은 초록 계열의 다양한 색조
          const greenHue = 100 + Math.random() * 30; // 100-130 (초록 범위)
          const saturation = 50 + Math.random() * 30; // 50-80
          const lightness = 55 + Math.random() * 20; // 55-75
          const [r, g, b] = hslToRgb(greenHue, saturation, lightness);
          dotColor = rgbToHex(r, g, b);
        } else if (type === 'blue-yellow') {
          // 청황색약: 파랑 계열 배경에 노랑 계열 숫자
          // 배경은 파랑-보라 계열
          const blueHue = 220 + Math.random() * 40; // 220-260
          const saturation = 40 + Math.random() * 30; // 40-70
          const lightness = 45 + Math.random() * 20; // 45-65
          const [r, g, b] = hslToRgb(blueHue, saturation, lightness);
          dotColor = rgbToHex(r, g, b);
        } else {
          // intensity: 미세한 변형 (초록-빨강 계열이지만 차이가 작음)
          const greenHue = 105 + Math.random() * 25; // 105-130
          const saturation = 45 + Math.random() * 25; // 45-70 (낮은 채도)
          const lightness = 50 + Math.random() * 25; // 50-75
          const [r, g, b] = hslToRgb(greenHue, saturation, lightness);
          dotColor = rgbToHex(r, g, b);
        }
      }

      // 점 그리기 (Control의 경우 더 명확하게)
      let offsetX = 0;
      let offsetY = 0;
      let dotRadius = dotSize / 2 * 0.9; // 기본 점 크기
      
      if (type !== 'control') {
        // Control이 아닌 경우만 랜덤 위치 변형
        offsetX = (Math.random() - 0.5) * dotSize * 0.3;
        offsetY = (Math.random() - 0.5) * dotSize * 0.3;
        dotRadius = dotSize / 2 * 0.85;
      } else {
        // Control의 경우
        if (isNumberDot) {
          // 숫자 점은 흰색으로 명확하게
          dotRadius = dotSize / 2 * 1.2;
        } else {
          // 배경 점은 충분히 크게 (처음부터 채워진 느낌)
          dotRadius = dotSize / 2 * 0.95; // 배경 점 크게
          // 약간의 랜덤 위치로 자연스럽게
          offsetX = (Math.random() - 0.5) * dotSize * 0.1;
          offsetY = (Math.random() - 0.5) * dotSize * 0.1;
        }
      }
      
      const actualX = x + offsetX;
      const actualY = y + offsetY;
      
      ctx.beginPath();
      ctx.arc(actualX, actualY, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
    }
  }
}

// 질문별 설정
export function getIshiharaConfig(questionId: number): IshiharaConfig {
  const configs: { [key: number]: IshiharaConfig } = {
    1: {
      number: '12',
      type: 'control',
      backgroundColor: '#404040', // 그레이 배경 점들 (다양한 톤으로 채워짐)
      numberColor: '#ffffff', // 흰색 숫자 (명확한 대비)
      dotSize: 15,
      canvasSize: 600,
    },
    2: {
      number: '74',
      type: 'red-green',
      backgroundColor: '#a8d8a0', // 초록 계열 배경
      numberColor: '#d86a6a', // 빨강 계열 숫자
      dotSize: 14,
      canvasSize: 600,
    },
    3: {
      number: '42',
      type: 'red-green',
      backgroundColor: '#98c890',
      numberColor: '#d86a6a',
      dotSize: 14,
      canvasSize: 600,
    },
    4: {
      number: '26',
      type: 'red-green',
      backgroundColor: '#88b880',
      numberColor: '#d86a6a',
      dotSize: 14,
      canvasSize: 600,
    },
    5: {
      number: '16',
      type: 'red-green',
      backgroundColor: '#78a870',
      numberColor: '#d86a6a',
      dotSize: 13,
      canvasSize: 600,
    },
    6: {
      number: '35',
      type: 'red-green',
      backgroundColor: '#689860',
      numberColor: '#d86a6a',
      dotSize: 13,
      canvasSize: 600,
    },
    7: {
      number: '26',
      type: 'blue-yellow',
      backgroundColor: '#8a8ad8', // 파랑 계열 배경
      numberColor: '#d8d88a', // 노랑 계열 숫자
      dotSize: 14,
      canvasSize: 600,
    },
    8: {
      number: '45',
      type: 'blue-yellow',
      backgroundColor: '#7a7ac8',
      numberColor: '#d8d88a',
      dotSize: 14,
      canvasSize: 600,
    },
    9: {
      number: '29',
      type: 'blue-yellow',
      backgroundColor: '#6a6ab8',
      numberColor: '#d8d88a',
      dotSize: 13,
      canvasSize: 600,
    },
    10: {
      number: '57',
      type: 'intensity',
      backgroundColor: '#a0c890', // 미세한 초록
      numberColor: '#c87a7a', // 미세한 빨강
      dotSize: 12,
      canvasSize: 600,
    },
    11: {
      number: '73',
      type: 'intensity',
      backgroundColor: '#90b880',
      numberColor: '#c87a7a',
      dotSize: 12,
      canvasSize: 600,
    },
    12: {
      number: '8',
      type: 'intensity',
      backgroundColor: '#80a870',
      numberColor: '#c87a7a',
      dotSize: 11,
      canvasSize: 600,
    },
  };

  return configs[questionId] || configs[1];
}

// Canvas를 Data URL로 변환
export function canvasToDataUrl(canvas: HTMLCanvasElement): string {
  return canvas.toDataURL('image/png');
}

