import styles from './Page.module.scss'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Page
