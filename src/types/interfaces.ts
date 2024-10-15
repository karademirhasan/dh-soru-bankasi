import { ReactNode } from 'react';
import { Colors, IconDirection, Sizes } from 'types/enums';

export interface ButtonProps {
  to?: string;
  color?: Colors;
  disabled?: boolean;
  children: ReactNode;
  size?: Sizes;
  icon?: ReactNode;
  iconDirection?: IconDirection;
  onClick?: () => void;
  className?: string;
}

export interface Question {
  id: number;
  question: string;
  options: Record<string, string>;
  correct_answer: string;
}

export interface QuestionID {
  id: number;
}

export interface ExamDetail {
  lesson: string;
  exam_name: string;
}
