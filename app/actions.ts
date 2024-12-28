'use server';

import { signOut } from '@/auth';

export async function handleClick() {
  signOut();
}
