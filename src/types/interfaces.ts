import { ReactNode } from 'react';
import { ButtonVariant, Colors, IconDirection, Sizes } from 'types/enums';

export interface ButtonProps {
  to?: string;
  color?: Colors;
  children: ReactNode;
  size?: Sizes;
  icon?: ReactNode;
  iconDirection?: IconDirection;
  variant?: ButtonVariant;
  onClick?: () => void;
}
