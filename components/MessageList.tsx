'use client';
import { useMessages } from '@/hooks/useMessages';
import { useName } from '@/hooks/useName';
import styles from '@/styles/app.module.sass';

function MessageList() {
  const { messages } = useMessages();
  const { name } = useName();

  return (
    <div data-testid='messageList' className={styles.list}>
      {messages.map((msg: string, index: number) => {
        return (
          <div key={index}>
            {name == '' ? '(No name)' : name}: {msg}
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
