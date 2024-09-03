import clsx from 'clsx'
import SparklesSVG from '@assets/icons/sparkles.svg'
import styles from './Description.module.scss'

const Description = () => {
  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.icon}>
        <SparklesSVG />
      </div>
      <p className='header3'>
        Diemas specializes in{' '}
        <strong className='focus'>crafting next-gen web experiences</strong>{' '}
        that blends performance with cutting-edge technology.
      </p>
      <p className='header3'>
        <strong className='focus'>He delivers tailored solutions</strong> for
        upgrading your site or creating a new digital platform.
      </p>
      <button className='button secondary'>His work</button>
    </section>
  )
}

export default Description
