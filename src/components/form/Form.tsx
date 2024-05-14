import React from 'react';

import styles from './form.module.css';
import Button from '../button/Button';

export default function Form() {
  return (
    <div className={styles.container}>
      <form
        action="mailto:nogovitz00@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <div className={styles.emailAndSubject}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="subject">Temat</label>
            <input type="text" id="subject" name="subject" />
          </div>
        </div>
        <label htmlFor="message">Wiadomość</label>
        <textarea id="message" name="message"></textarea>
        <Button isBlack text="Wyślij wiadomość" type="submit" />
      </form>
    </div>
  );
}
