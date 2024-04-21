'use client';
import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useName } from '@/hooks/useName';
import styles from '@/styles/input.module.sass';

function NameInput() {
  const [prompt, setPrompt] = useState('');
  const { name, setName } = useName();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt.trim() == '') {
      toast.error('Name field empty');
    } else {
      setName(prompt);
      setPrompt('');
    }
  };

  return (
    <>
      <div className={styles.label}>
        Your name is: <u>{name == '' ? 'not informed' : name}</u>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          id='nameInput'
          className={styles.input}
          type='text'
          value={prompt}
          placeholder='Update name here...'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          id='updateNameButton'
          data-testid='updateNameButton'
          type='submit'
          className={styles.button}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default NameInput;
