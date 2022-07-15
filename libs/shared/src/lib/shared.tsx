import styles from './shared.module.css';

/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(props: SharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to shared library!</h1>
    </div>
  );
}

export default Shared;
