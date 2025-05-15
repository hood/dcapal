import type { ButtonHTMLAttributes, FC,  ReactNode } from "react";
import { ButtonStyles } from "./variants";

type Props = {
  handleClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "link";
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ handleClick, variant,children, disabled, ...rest }) => (
  <button
    onClick={handleClick}
    disabled={disabled}
    className={ButtonStyles({ variant,disabled, className: rest.className })}
    {...rest}
  >
    {children}
  </button>
);
