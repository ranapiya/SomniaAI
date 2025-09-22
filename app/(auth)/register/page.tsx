'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

import { AuthForm } from '@/src/components/auth/auth-form';
import { SubmitButton } from '@/src/components/auth/submit-button';

import { register, RegisterActionState } from '@/app/(auth)/actions';
import { Button } from '@/src/components/ui/button';

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: 'idle',
    },
  );

  useEffect(() => {
    if (state.status === 'user_exists') {
      toast.error('Account already exists');
    } else if (state.status === 'failed') {
      toast.error('Failed to create account');
    } else if (state.status === 'invalid_data') {
      toast.error('Failed validating your submission!');
    } else if (state.status === 'success') {
      toast.success('Account created successfully');
      router.refresh();
    }
  }, [state.status, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get('email') as string);
    formAction(formData);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background accents (removed Hexagon) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-sky-500 to-teal-500 animate-pulse" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-18 bg-fuchsia-500/40 animate-pulse" />
      </div>

      {/* Foreground content (sign-up box) */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-12">
        <div className="w-full max-w-md rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-2xl backdrop-blur-xl sm:p-8 transition-colors">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400">
              Create your SomniaAI account
            </h3>
            <p className="text-sm text-gray-400">
              Sign up to access SomniaAI — your AI blockchain assistant
            </p>
          </div>

          {/* OAuth buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Button
              onClick={() => signIn('google')}
              className="rounded-xl border-2 border-sky-500/20 bg-black/30 text-white hover:bg-sky-500/10 hover:border-sky-500 transition shadow-md shadow-sky-500/10"
            >
              Sign up with Google
            </Button>
            <Button
              onClick={() => signIn('github')}
              className="rounded-xl border-2 border-fuchsia-500/20 bg-black/30 text-white hover:bg-fuchsia-500/10 hover:border-fuchsia-500 transition shadow-md shadow-fuchsia-500/10"
            >
              Sign up with GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-sm text-white/60">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Auth form */}
          <AuthForm action={handleSubmit} defaultEmail={email}>
            <SubmitButton>Sign Up</SubmitButton>

            <p className="mt-4 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-semibold text-sky-400 hover:underline"
              >
                Sign in
              </Link>{' '}
              instead.
            </p>
          </AuthForm>
        </div>
      </div>
    </section>
  );
}
