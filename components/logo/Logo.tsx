import Link from 'next/link'
import clsx from 'clsx'
import LogoSVG from '@assets/icons/logo.svg'
import styles from './Logo.module.scss'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <div className={clsx(styles.logo, className)}>
      <Link href='/'>
        <LogoSVG />
        <span>Diemas</span>
      </Link>
    </div>
  )
}

export default Logo
