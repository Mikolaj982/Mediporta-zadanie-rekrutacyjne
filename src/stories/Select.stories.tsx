import SelectComponent from "../components/Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectComponent> = {
  component: SelectComponent,
  title: 'TagsListComponents/Select',
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base = {
  args: {
    items: ['Option 1', 'Opttion 2', 'Option 3'],
    value: 'item',
    id: 'item',
    onChange: () => { },
    labelName: 'item',
  },
} satisfies Story

