import clsx from 'clsx'
import styles from './ProjectImages.module.scss'
import type { ProjectImageType } from '@components/portfolio/Portfolio'

type Props = {
  images: ProjectImageType[]
}

const ProjectImages = ({ images }: Props) => {
  return (
    <section className={clsx('container', styles.section)}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={styles.image}
        />
      ))}
    </section>
  )
}

export default ProjectImages
