import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 32 },
};

export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm">
      <Spinner size={20} />
      <span>Đang tải…</span>
    </div>
  ),
};
