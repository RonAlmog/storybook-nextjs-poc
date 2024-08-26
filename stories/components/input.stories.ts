import { Input } from "@/components/ui/input";

export default {
  title: "Shadcn/Input",
  component: Input,
  tags: ["autodocs"],
};

export const Primary = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const File = {
  args: {
    type: "file",
  },
};
