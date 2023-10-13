import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import cn from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className="light">
    <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
