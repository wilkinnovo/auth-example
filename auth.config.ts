import Coinbase from 'next-auth/providers/coinbase';
import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [Coinbase],
} satisfies NextAuthConfig;
