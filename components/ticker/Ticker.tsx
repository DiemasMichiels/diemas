import clsx from 'clsx'
import styles from './Ticker.module.scss'

type Props = {
  itemsRow1: string[]
  itemsRow2: string[]
}

const Ticker = ({ itemsRow1, itemsRow2 }: Props) => {
  return (
    <section className={styles.section}>
      <div>
        <div className={clsx(styles.ticker, styles.reverse)}>
          <span className={styles.itemCollection}>
            {itemsRow1.map((item, index) => (
              <span
                key={index}
                className={clsx('header1 highlight', styles.item)}
              >
                {item}
              </span>
            ))}
          </span>
          <span className={styles.itemCollection2}>
            {itemsRow1.map((item, index) => (
              <span
                key={index}
                className={clsx('header1 highlight', styles.item)}
              >
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div>
        <div className={styles.ticker}>
          <span className={styles.itemCollection}>
            {itemsRow2.map((item, index) => (
              <span
                key={index}
                className={clsx('header1 highlight', styles.item)}
              >
                {item}
              </span>
            ))}
          </span>
          <span className={styles.itemCollectio2}>
            {itemsRow2.map((item, index) => (
              <span
                key={index}
                className={clsx('header1 highlight', styles.item)}
              >
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Ticker
