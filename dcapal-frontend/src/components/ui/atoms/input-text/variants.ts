import { cva } from "class-variance-authority";

export const InputStyles = cva("bg-white px-4 py-2 rounded-xl border shadow", {
  variants: {
    isValid: {
      true: "border-slate-200 text-blue-900 focus-visible:outline-blue-400",
      false: "border-red-300 text-red-900",
    },
  },
  defaultVariants: {
    isValid: true,
  },
});
