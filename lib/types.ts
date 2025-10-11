export interface QuizTest {
  id: number;
  slug: string;
  title: string;
  description?: string;
  thumbnail: string;
  playCount: number;
  tags: string[];
  createdAt: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'binary' | 'multiple' | 'ox' | 'mixed';
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  score?: number;
  resultType?: string;
}

export interface QuizResult {
  type: string;
  title: string;
  description: string;
  image?: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface DBTest {
  id: number;
  slug: string;
  title: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  };
  thumbnail: string;
  play_count: number;
  type: string;
  category: string;
  created_at: string;
  updated_at: string;
  tags: {
    ko: string[];
    en: string[];
    ja: string[];
    'zh-CN': string[];
    'zh-TW': string[];
    id: string[];
    vi: string[];
  };
}


