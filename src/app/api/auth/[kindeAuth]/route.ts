import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export const GET = async (request: NextRequest, { params }: any) => {
  const endpoint = params.kindeAuth;
  return handleAuth(request, endpoint);
};
