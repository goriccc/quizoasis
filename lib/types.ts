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


