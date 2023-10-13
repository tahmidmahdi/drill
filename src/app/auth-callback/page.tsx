import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');
  console.log('🚀 ~ file: page.tsx:9 ~ origin:', origin);
  return <div />;
};

export default Page;
