import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Now | Sloppy Canteen',
  description: 'Order your favorite Sloppy Canteen items online for pickup or delivery.',
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
