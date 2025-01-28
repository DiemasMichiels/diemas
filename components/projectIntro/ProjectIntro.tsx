import clsx from 'clsx'
import Link from 'next/link'
import ArrowLeftSVG from '@assets/icons/arrow-left.svg'
import WorldSVG from '@assets/icons/world.svg'
import Logo from '@components/logo/Logo'
import styles from './ProjectIntro.module.scss'
import type { ProjectDetailsType } from '@components/portfolio/Portfolio'

type Props = {
  title: string
  description: string
  details?: ProjectDetailsType
  link?: string
  blog?: string
}

const ProjectIntro = ({ title, description, details, link, blog }: Props) => {
  return (
    <section className={clsx('container', styles.section)}>
      <Logo className={styles.logo} />
      <Link className={clsx('button', styles.backButton)} href='/#portfolio'>
        <ArrowLeftSVG />
        Back to Home
      </Link>
      <h1 className={clsx('header1', styles.title)}>{title}</h1>
      <p>{description}</p>
      {details && (
        <dl className={styles.details}>
          {Object.entries(details).map(([key, value]) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {(link || blog) && (
        <Link
          className={clsx('button primary', styles.previewButton)}
          href={(link || blog) ?? ''}
          target='_blank'
        >
          <WorldSVG /> {blog ? 'Read more' : 'Live Preview'}
        </Link>
      )}
    </section>
  )
}

export default ProjectIntro
