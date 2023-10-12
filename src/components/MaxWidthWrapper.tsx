import React, { ReactNode } from 'react';

import cn from '@/lib/utils';

const MaxWidthWrapper: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => (
  <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>{children}</div>
);

export default MaxWidthWrapper;
