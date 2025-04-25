import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Financial Dashboard',
    default: 'Financial Dashboard',
  },
  description: 'Demo NextJs Project',
  metadataBase: new URL('https://nextjs-dashboard-sable-seven-44.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
