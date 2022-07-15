import { Shared } from '@domirs/shared';
import styles from './api.module.css';

/* eslint-disable-next-line */
export interface ApiProps {}

export function Api(props: ApiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to api!</h1>
      <Shared />
    </div>
  );
}

export default Api;
