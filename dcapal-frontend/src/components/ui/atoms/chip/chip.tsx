import { ChipStyles } from "./variants";

export const Chip = ({ children, handleClick, isSelected }) => (
  <button className={ChipStyles({ isSelected })} onClick={handleClick}>
    {children}
  </button>
);
