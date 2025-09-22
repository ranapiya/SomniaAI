'use client';

import { useRouter } from 'next/navigation';
import { useSidebar } from '../../ui/sidebar';
import { Button } from '../../ui/button';

const NewChatButton = () => {
  const { setOpenMobile } = useSidebar();
  const router = useRouter();
  return (
    <div className="m-3 w-full rounded-2xl bg-white/10 p-1 outline-2 outline-fuchsia-500">
      <Button
        variant={'fushia'}
        size={'default'}
        onClick={() => {
          setOpenMobile(false);
          router.push('/chat');
          router.refresh();
        }}
        className="w-full border-2 border-sky-500/30 bg-black/30 text-white hover:bg-sky-500/20 hover:border-sky-500 transition shadow-md shadow-sky-500/20"
      >
        New Chat
      </Button>
    </div>
  );
};

export { NewChatButton };
