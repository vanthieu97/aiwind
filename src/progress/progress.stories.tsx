import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Progress } from './progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FortyPercent: Story = {
  args: { value: 40, className: 'max-w-md' },
};

export const AnimatedDemo: Story = {
  render: function Animated() {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = window.setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 5));
      }, 400);
      return () => window.clearInterval(id);
    }, []);
    return (
      <div className="w-full max-w-md space-y-2">
        <Progress value={value} />
        <p className="text-xs text-[#6b6b6b] dark:text-slate-400">{value}%</p>
      </div>
    );
  },
};
