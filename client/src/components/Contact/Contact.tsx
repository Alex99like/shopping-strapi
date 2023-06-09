import styles from './Contact.module.scss';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai'

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <span>BE IN TOUCH WITH US:</span>
        <div className={styles.mail}>
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className={styles.icons}>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillGoogleCircle />
        </div>
      </div>
    </div>
  );
};