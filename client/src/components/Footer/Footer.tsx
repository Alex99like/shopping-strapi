import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className={styles.item}>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci placeat soluta officia explicabo beatae eveniet velit minima et reiciendis nostrum molestiae suscipit, mollitia praesentium porro repellendus. Ab, veritatis totam.
          </span>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci placeat soluta officia explicabo beatae eveniet velit minima et reiciendis nostrum molestiae suscipit, mollitia praesentium porro repellendus. Ab, veritatis totam.
          </span>
        </div>
      </div>
      {/* <div className={styles.bottom}>
        <div className={styles.left}>
          <span></span>
        </div>
        <div className={styles.right}></div>
      </div> */}
    </footer>
  )
}
