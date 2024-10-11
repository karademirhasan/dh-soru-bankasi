import { ReactNode } from 'react';
import { Backgrounds, ButtonVariant, Colors, IconDirection, Sizes } from 'types/enums';

export interface ButtonProps {
  to?: string;
  color?: Colors;
  background?: Backgrounds;
  children: ReactNode;
  size?: Sizes;
  icon?: ReactNode;
  iconDirection?: IconDirection;
  variant?: ButtonVariant;
  onClick?: () => void;
}
