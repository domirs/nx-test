import { Shared } from '@domirs/shared';
import styles from './ui.module.css';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UI!</h1>
      <p>Thats awesome!</p>
      <Shared />
    </div>
  );
}

export default Ui;
