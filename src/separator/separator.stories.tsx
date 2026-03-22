import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-3">
      <p className="text-sm">Phần trên</p>
      <Separator />
      <p className="text-sm">Phần dưới</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-stretch gap-3">
      <span className="flex items-center text-sm">Trái</span>
      <Separator orientation="vertical" decorative />
      <span className="flex items-center text-sm">Phải</span>
    </div>
  ),
};
