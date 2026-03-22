import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultChecked: false, 'aria-label': 'Toggle' },
};

export const WithLabel: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-3">
      <Switch defaultChecked aria-label="Chế độ máy bay" />
      <span className="text-sm font-medium text-[#1a1a1a] dark:text-slate-200">Chế độ máy bay</span>
    </label>
  ),
};
