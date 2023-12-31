import React from 'react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Page: React.FC = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  console.log('🚀 ~ file: page.tsx:9 ~ user:', user);

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');
  return <div>{user.email}</div>;
};

export default Page;
