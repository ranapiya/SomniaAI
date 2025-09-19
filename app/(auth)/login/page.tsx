'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

import { login, LoginActionState } from '@/app/(auth)/actions';
import { Button } from '@/src/components/ui/button';
import { Hexagon } from '@/src/components/globals/hexagon';

export default function Page() {
  const router = useRouter();
 
  const [state] = useActionState<LoginActionState, FormData>(
    login,
    { status: 'idle' }
  );

  useEffect(() => {
    if (state.status === 'failed') {
      toast.error('Invalid credentials!');
    } else if (state.status === 'invalid_data') {
      toast.error('Failed validating your submission!');
    } else if (state.status === 'success') {
      router.refresh();
    }
  }, [state.status, router]);



  return (
    <section className="overflow-clip bg-black min-h-screen relative">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-sky-500 to-teal-500 animate-pulse" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 bg-emerald-800 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Hexagon size={1200} />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-12">
        <div className="w-full max-w-md rounded-2xl bg-gray-900/70 border border-gray-800 p-6 shadow-xl backdrop-blur-lg sm:p-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-2xl font-extrabold ">
              Welcome Back
            </h3>
            <p className="text-sm text-gray-400">
              Login to <span className="t font-semibold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">SomniaAI</span>
            </p>
          </div>

          {/* OAuth buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Button
              onClick={() => signIn('google')}
              className="rounded-xl cursor-pointer border-2 border-sky-500/30 bg-black/30 text-white hover:bg-sky-500/20 hover:border-sky-500 transition shadow-md shadow-sky-500/20"
            >
              Login with Google
            </Button>
            <Button
              onClick={() => signIn('github')}
              className="rounded-xl cursor-pointer border-2 border-fuchsia-500/30 bg-black/30 text-white hover:bg-fuchsia-500/20 hover:border-fuchsia-500 transition shadow-md shadow-fuchsia-500/20"
            >
              Login with GitHub
            </Button>
          </div>
            <p className="mt-4 text-center text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="font-semibold text-sky-400 hover:underline"
              >
                Sign up
              </Link>{' '}
              instead.
            </p>
          
        </div>
      </div>
    </section>
  );
}
