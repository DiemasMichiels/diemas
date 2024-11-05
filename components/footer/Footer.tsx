import clsx from 'clsx'
import Link from 'next/link'
import Logo from '@components/logo/Logo'
import LogoSVG from '@assets/icons/logo.svg'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoSVG className={styles.absLogo} />
      <div className={clsx('container', styles.content)}>
        <Logo className={styles.logo} />
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <span>Menu</span>
            <ul>
              <li>
                <Link className='link' href='/'>
                  Home
                </Link>
              </li>
              <li>
                <a className='link' href='#portfolio'>
                  Works
                </a>
              </li>
              <li>
                <a className='link' href='mailto:info@diemas.dev'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.menuItem}>
            <span>Socials</span>
            <ul>
              <li>
                <a
                  className='link'
                  href='https://www.linkedin.com/in/diemas/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className='link'
                  href='https://github.com/DiemasMichiels'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='container'>
        © Diemas {new Date().getFullYear()}, All rights reserved
      </p>
    </footer>
  )
}

export default Footer
