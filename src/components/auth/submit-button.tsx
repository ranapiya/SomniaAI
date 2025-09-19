'use client';

import { useFormStatus } from 'react-dom';

import { Loader2Icon } from 'lucide-react';

import { Button } from '../ui/button';

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      variant={'fushia'}
      className="rounded-lg border-2 border-sky-500/30 bg-black/30 text-white hover:bg-sky-500/20 hover:border-sky-500 transition shadow-md shadow-sky-500/20"
    >
      {children}
      {pending && (
        <span className="absolute right-4 animate-spin">
          <Loader2Icon />
        </span>
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </Button>
  );
}
