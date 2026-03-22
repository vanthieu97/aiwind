import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Supporting description for this block.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#6b6b6b] dark:text-slate-400">
          Content area — use for forms, lists, or body copy.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="secondary" size="sm">
          Cancel
        </Button>
        <Button size="sm">Continue</Button>
      </CardFooter>
    </Card>
  ),
};
