import { createTRPCReact } from '@trpc/react-query';

import { AppRouter } from '@/trpc';

const trpc = createTRPCReact<AppRouter>({});

export default trpc;
