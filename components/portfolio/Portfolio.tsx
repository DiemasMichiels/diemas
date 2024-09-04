import clsx from 'clsx'
import ArrowUpRightSVG from '@assets/icons/arrow-up-right.svg'
import styles from './Portfolio.module.scss'

const PROJECTS = [
  {
    title: '2CV Club Huppel',
    image: '/images/2cv-huppel.jpg',
  },
  {
    title: 'Salon Zuiver',
    image: '/images/salon-zuiver.jpg',
  },
  {
    title: 'Kot Geel',
    image: '/images/kot-geel.jpg',
  },
  {
    title: 'Kempisch licht en geluid',
    image: '/images/kempisch-licht-en-geluid.jpg',
  },
  {
    title: 'Garage Michiels',
    image: '/images/garage-michiels.jpg',
  },
]

const Portfolio = () => {
  return (
    <section className={clsx('container', styles.section)} id='portfolio'>
      <div className={styles.title}>
        <h2 className='header2'>
          <span className='focus'>Showcase</span> of Excellence
        </h2>
        <p>
          Explore my portfolio of innovative digital solutions, showcasing our
          creativity and expertise in delivering exceptional results.
        </p>
      </div>
      <div className={styles.projects}>
        {PROJECTS.map((project) => (
          <a className={styles.project} key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className={styles.content}>
              <h4 className='header4'>{project.title}</h4>
              <span>View Project</span>
              <ArrowUpRightSVG />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
