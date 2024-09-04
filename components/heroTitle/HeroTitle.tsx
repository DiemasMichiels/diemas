import clsx from 'clsx'
import SendSVG from '@assets/icons/send.svg'
import Logo from '@components/logo/Logo'
import styles from './HeroTitle.module.scss'

const HeroTitle = () => {
  return (
    <>
      <section className={clsx('container', styles.section)}>
        <Logo className={styles.logo} />
        <p className={styles.tag}>Digital Developer</p>
        <h1 className={clsx('header1', styles.title)}>
          Crafting <span className='highlight'>Next-Gen</span> Web Experiences
        </h1>
        <div className={styles.buttonRow}>
          <a className='button primary' href='mailto:info@diemas.dev'>
            <SendSVG /> Send a message
          </a>
          <a className='button secondary' href='#portfolio'>
            Discover portfolio
          </a>
        </div>
        <img
          className={styles.image}
          src='https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Photo of a developer'
        />
      </section>
    </>
  )
}

export default HeroTitle
