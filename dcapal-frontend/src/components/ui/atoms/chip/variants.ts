import { cva } from "class-variance-authority";

export const ChipStyles = cva(
  "px-4 py-2 rounded-xl shadow font-semibold ease-in-out duration-100 transition-all",
  {
    variants: {
      isSelected: {
        true: "bg-blue-500 text-white",
        false: "bg-white hover:bg-blue-200 cursor-pointer text-blue-700",
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  }
);
