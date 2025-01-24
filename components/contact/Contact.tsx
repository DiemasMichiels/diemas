import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import LinkedInSVG from '@assets/icons/linked-in.svg'
import { useGlobalStore } from '@store/useGlobalStore'
import styles from './Contact.module.scss'
const EMAIL_REGEX =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i

type FormField = {
  value: string
  error: boolean
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  setError: (error: boolean) => void
  clear: () => void
  hasValue: boolean
}

type Status = {
  message: string
  isError: boolean
}

const useFormField = (initialValue: string = ''): FormField => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)

  return {
    value,
    error,
    onChange: (e) => {
      setValue(e.target.value)
      setError(false)
    },
    setError,
    clear: () => setValue(''),
    hasValue: value.trim().length > 0,
  }
}

const Contact = () => {
  const theme = useGlobalStore((state) => state.theme)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [status, setStatus] = useState<Status>({ message: '', isError: false })
  const [isLoading, setIsLoading] = useState(false)

  const name = useFormField()
  const email = useFormField()
  const message = useFormField()

  const validateField = (
    field: FormField,
    fieldName: string,
    validator?: (value: string) => boolean,
  ): boolean => {
    if (!field.hasValue || (validator && !validator(field.value))) {
      field.setError(true)
      return false
    }
    return true
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setStatus({ message: '', isError: false })

    const validations = [
      validateField(name, 'name'),
      validateField(email, 'email', (value) => EMAIL_REGEX.test(value)),
      validateField(message, 'message', (value) => value.length > 10),
    ]

    if (validations.includes(false)) {
      setIsLoading(false)
      return
    } else if (!executeRecaptcha) {
      setStatus({
        message: 'Recaptcha not available. Try again later...',
        isError: true,
      })
      setIsLoading(false)
      return
    }

    try {
      const token = await executeRecaptcha('contact')
      const response = await fetch('/api/mail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          from: email.value,
          subject: 'Contact Form Submission',
          title: 'Contact Form Submission',
          preheader: 'Contact Form Submission',
          content: `
            <h2 style="text-align: center">Message to Diemas.dev.</h2>
            <h4 style="margin-bottom: 10px; font-weight: 800">From:</h4>
            <p>${name.value}</p>
            <h4 style="margin-bottom: 10px; font-weight: 800">Email:</h4>
            <p>${email.value}</p>
            <h4 style="margin-bottom: 10px; font-weight: 800">Message:</h4>
            <p>${message.value}</p>
          `,
        }),
      })

      if (response.ok) {
        ;[name, email, message].forEach((field) => field.clear())
        setStatus({ message: 'Mail sent.', isError: false })
      } else {
        throw new Error()
      }
    } catch (error) {
      setStatus({
        message: 'Something went wrong. Try again later...',
        isError: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

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
            <form onSubmit={handleSubmit}>
              <input
                className={clsx('input', name.error && styles.errorInput)}
                type='text'
                value={name.value}
                onChange={name.onChange}
                placeholder='Name'
              />
              <input
                className={clsx('input', email.error && styles.errorInput)}
                type='email'
                value={email.value}
                onChange={email.onChange}
                placeholder='Email'
              />
              <textarea
                className={clsx('input', message.error && styles.errorInput)}
                value={message.value}
                onChange={message.onChange}
                placeholder='Message'
                rows={4}
              />
              <div className={styles.formActions}>
                <button
                  className='button primary'
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </button>
                <div className={styles.status}>
                  {(name.error || email.error || message.error) && (
                    <p className={styles.error}>
                      Almost there! Just need a valid{' '}
                      {[
                        name.error && 'name',
                        email.error && 'email',
                        message.error && 'message',
                      ]
                        .filter(Boolean)
                        .join(', ')
                        .replace(/,([^,]*)$/, ' &$1')}
                      .
                    </p>
                  )}
                  {status.message && (
                    <p className={styles.message}>{status.message}</p>
                  )}
                </div>
              </div>
            </form>
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
