import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation | Sloppy Canteen',
  description: 'Your order has been confirmed! Check your order details and pickup information.',
};

export default function OrderConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
