import { InputStyles } from "./variants";

export const InputText = ({ value, handleChange, isValid }) => (
  <input
    type="text"
    // className={classNames({
    //   "border-destructive focus-visible:outline-destructive": !isValid,
    //   "leading-none": leadingNone,
    //   "leading-normal": !leadingNone,
    // })}
    className={InputStyles({ isValid })}
    value={value}
    onChange={handleChange}
  />
);
