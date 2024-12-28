import { auth } from '@/auth';
import { SignOut } from '@/components/sign-out';
import UserAvatar from '@/components/UserAvatar';
import { redirect } from 'next/navigation';

export default async function () {
  const session = await auth();

  if (!session) redirect('/');

  return (
    <>
      <UserAvatar />
      <SignOut />
    </>
  );
}
