import clsx from 'clsx'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import LinkedInSVG from '@assets/icons/linked-in.svg'
import { useGlobalStore } from '@store/useGlobalStore'
import styles from './Contact.module.scss'

const TALLY_DARK = 'mRBaX9'
const TALLY_LIGHT = '3j9Y1J'

const Contact = () => {
  const theme = useGlobalStore((state) => state.theme)

  return (
    <div className={styles.background} id='contact'>
      <section className={clsx('container', styles.section)}>
        <div className={styles.title}>
          <h2 className='header2'>
            <span className='focus'>
              Become <span className='highlight blue'>Connected</span>
            </span>
          </h2>
          <p>
            We&apos;re here to answer your questions and discuss how we can help
            you achieve your goals.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <h3>We look forward to connecting with you!</h3>
            <iframe
              data-tally-src={`https://tally.so/embed/${theme === 'dark' ? TALLY_DARK : TALLY_LIGHT}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
              loading='lazy'
              width='100%'
              height='447'
              frameBorder='0'
              title='null'
            />
            <Script
              src='https://tally.so/widgets/embed.js'
              onReady={() => {
                window.Tally.loadEmbeds()
              }}
            />
          </div>
          <div className={styles.contactAvailability}>
            <img src='/images/contact-bg.jpg' alt='Contact availability' />
            <h3>Contact me through LinkedIn to discuss your next project</h3>
            <a
              className={clsx(
                'button',
                theme === 'dark' ? 'primary' : 'secondary',
              )}
              href='https://www.linkedin.com/in/diemas/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInSVG />
              Connect with me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false })
