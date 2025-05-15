import { cva } from "class-variance-authority";

export const ButtonStyles = cva(
  [
    "rounded-xl",
    "font-sans",
    "font-semibold",
    "transition-all duration-100 ease-in-out",
    "flex items-center justify-center",
  ],
  {
    variants: {
      variant: {
        primary: ["shadow", "w-fit", "px-4", "py-2"],
        secondary: ["shadow", "w-fit", "px-4", "py-2"],
        link: ["p-0 w-fit"],
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "cursor-pointer active:scale-99",
      },
    },
    compoundVariants: [
      {
        disabled: false,
        variant: "primary",
        className: [
          "bg-blue-800",
          "hover:bg-blue-700",
          "active:saturate-[0.75]",
          "text-white",
          "border-blue-800",
          "hover:border-blue-700",
        ],
      },
      {
        disabled: true,
        variant: "primary",
        className: "text-slate-200 bg-slate-400 border-slate-400",
      },

      {
        disabled: false,
        variant: "secondary",
        className: ["bg-white", "text-blue-700", "hover:text-blue-600"],
      },
      {
        disabled: true,
        variant: "secondary",
        className: "text-slate-400 bg-slate-200 border-slate-400",
      },

      {
        disabled: false,
        variant: "link",
        className: ["text-blue-800", "hover:text-blue-700", "group"],
      },
      {
        disabled: true,
        variant: "link",
        className: "text-slate-400 bg-slate-200 border-slate-400",
      },
    ],
    defaultVariants: { variant: "primary", disabled: false },
  }
);
