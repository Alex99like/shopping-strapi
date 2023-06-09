import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { AiOutlineDown } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { RxAvatar } from 'react-icons/rx'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <span>EN</span>
            <AiOutlineDown />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <AiOutlineDown />
          </div>
          <div className={styles.item}>
            <Link to={'/products/1'}>Women</Link>
          </div>
          <div className={styles.item}>
            <Link to={'/products/2'}>Men</Link>
          </div>
          <div className={styles.item}>
            <Link to={'/products/3'}>Children</Link>
          </div>
        </div>
        <div className={styles.center}>
            <Link to={'/'}>SHOPPING</Link>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link to={'/'}>Homepage</Link>
          </div>
          <div className={styles.item}>
            <Link to={'/'}>About</Link>
          </div>
          <div className={styles.item}>
            <Link to={'/'}>Contact</Link>
          </div>
          <div className={styles.item}>
            <Link to={'/'}>Stores</Link>
          </div>
          <div className={styles.icons}>
            <FiSearch />
            <RxAvatar />
            <MdFavoriteBorder />
            <div className={styles.cartIcon}>
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
