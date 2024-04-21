import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';
import MessageInput from '@/components/MessageInput';
import NameInput from '@/components/NameInput';
import MessageList from '@/components/MessageList';
import { MessagesProvider } from '@/hooks/useMessages';
import { NameProvider } from '@/hooks/useName';
import styles from '@/styles/app.module.sass';

export default function Home() {
  return (
    <main className={styles.container}>
      <div id='toaster'>
        <Toaster position='top-right' />
      </div>
      <Analytics />
      <MessagesProvider>
        <NameProvider>
          <div className={styles.intro}>
            This is a simple chat interface where you can set your name and send
            messages, which will be displayed on the screen.
          </div>
          <NameInput />
          <MessageInput />
          <MessageList />
        </NameProvider>
      </MessagesProvider>
    </main>
  );
}
