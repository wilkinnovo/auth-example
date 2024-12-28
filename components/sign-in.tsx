import { signIn } from '@/auth';

export default function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('coinbase');
      }}
    >
      <button className="bg-black text-white p-2" type="submit">
        Continue with Coinbase
      </button>
    </form>
  );
}
