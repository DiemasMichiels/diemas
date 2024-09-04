import clsx from 'clsx'
import SendSVG from '@assets/icons/send.svg'
import styles from './HeroTitle.module.scss'

const HeroTitle = () => {
  return (
    <>
      <section className={clsx('container', styles.section)}>
        <p className={styles.tag}>Digital Developer</p>
        <h1 className={clsx('header1', styles.title)}>
          Crafting <span className='highlight'>Next-Gen</span> Web Experiences
        </h1>
        <div className={styles.buttonRow}>
          <button className='button primary'>
            <SendSVG /> Send a message
          </button>
          <button className='button secondary'>Discover portfolio</button>
        </div>
        <img
          className={styles.image}
          src='https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Stock photo of a developer'
        />
      </section>
    </>
  )
}

export default HeroTitle
