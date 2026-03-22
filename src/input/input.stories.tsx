import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from '../label/label';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Type something…' },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};

export const FormRow: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Họ tên</Label>
        <Input id="name" placeholder="Nguyễn Văn A" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="pwd">Mật khẩu</Label>
        <Input id="pwd" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
};
