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
