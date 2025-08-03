import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout | Sloppy Canteen',
  description: 'Complete your order at Sloppy Canteen. Enter your details and confirm your pickup.',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
