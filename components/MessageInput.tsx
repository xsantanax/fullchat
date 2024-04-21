'use client';
import { FormEvent, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';
import { useMessages } from '@/hooks/useMessages';
import styles from '@/styles/input.module.sass';

export default function MessageInput() {
  const [prompt, setPrompt] = useState('');
  const { messages, setMessages } = useMessages();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt.trim() == '') {
      toast.error('Message field empty');
    } else {
      setMessages([...messages, prompt]);
      setPrompt('');
    }
  };

  return (
    <>
      <div className={styles.label}>Here you can type messages</div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type='text'
          value={prompt}
          placeholder='Type your message here...'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          aria-label='sendMessageButton'
          data-testid='sendMessageButton'
          type='submit'
          className={styles.button}
        >
          <PaperAirplaneIcon className={styles.icon} />
        </button>
      </form>
    </>
  );
}
