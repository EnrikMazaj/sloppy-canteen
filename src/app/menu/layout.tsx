import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Sloppy Canteen',
  description: 'Browse our delicious selection of burgers, sandwiches, sides, and drinks at Sloppy Canteen.',
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
