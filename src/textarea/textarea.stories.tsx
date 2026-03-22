import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../label/label';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Nội dung tin nhắn…', rows: 4 },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <Label htmlFor="msg">Ghi chú</Label>
      <Textarea id="msg" placeholder="Mô tả ngắn…" rows={5} />
    </div>
  ),
};
