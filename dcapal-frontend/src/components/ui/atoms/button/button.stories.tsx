import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "components/core/Button",
  component: Button,
  argTypes: {
    children: { defaultValue: "This is some text.", control: { type: "text" } },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    content: "This is some text.",
    disabled: false,
  },
};
