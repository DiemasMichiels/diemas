import clsx from 'clsx'
import Link from 'next/link'
import ArrowUpRightSVG from '@assets/icons/arrow-up-right.svg'
import styles from './Portfolio.module.scss'

export type ProjectImageType = {
  src: string
  alt: string
}

export type ProjectDetailsType = {
  client: string
  industry: string
  services: string
  stack: string
  year: string
}

export type Project = {
  slug: string
  title: string
  description: string
  thumbnail: string
  images: ProjectImageType[]
  details?: ProjectDetailsType
  link: string
}

export const PROJECTS: Project[] = [
  {
    slug: '2cv-huppel',
    title: '2CV Club Huppel',
    description:
      'The 2CV Club Huppel is a Belgian car club that organizes events and gatherings for Citroen 2CV enthusiasts. The website provides information about the club, upcoming events, and a gallery of photos.',
    thumbnail: '/images/2cv-huppel.jpg',
    images: [
      {
        src: '/images/2cv-huppel.jpg',
        alt: '2CV Club Huppel',
      },
    ],
    details: {
      client: '2CV Club Huppel',
      industry: 'Automotive',
      services: 'Web Design, Development',
      stack: 'WebFlow',
      year: '2024',
    },
    link: 'https://2cvhuppel.be',
  },
  {
    slug: 'salon-zuiver',
    title: 'Salon Zuiver',
    description:
      'Salon Zuiver is a beauty salon in Belgium. The website provides information about the salon, services, pricing and contact details. Customers can book appointments online.',
    thumbnail: '/images/salon-zuiver.jpg',
    images: [
      {
        src: '/images/salon-zuiver.jpg',
        alt: 'Salon Zuiver',
      },
    ],
    details: {
      client: 'Salon Zuiver',
      industry: 'Beauty & Wellness',
      services: 'Web Design, Development',
      stack: 'Next.js, Prismic, React, TypeScript',
      year: '2023',
    },
    link: 'https://salonzuiver.be',
  },
  {
    slug: 'kot-geel',
    title: 'Kot Geel',
    description:
      'Kot Geel is a student housing provider in Belgium. The website provides information about the available rooms, pricing, and contact details.',
    thumbnail: '/images/kot-geel.jpg',
    images: [
      {
        src: '/images/kot-geel.jpg',
        alt: 'Kot Geel',
      },
    ],
    details: {
      client: 'Kot Geel',
      industry: 'Real Estate',
      services: 'Web Design, Development',
      stack: 'Next.js, React, Typescript',
      year: '2022',
    },
    link: 'https://kotgeel.be',
  },
  {
    slug: 'kempisch-licht-en-geluid',
    title: 'Kempisch licht en geluid',
    description:
      'Kempisch Licht en Geluid is a Belgian company that provides lighting and sound equipment for events. The website showcases the products and services offered by the company. You can also view photos of past events.',
    thumbnail: '/images/kempisch-licht-en-geluid.jpg',
    images: [
      {
        src: '/images/kempisch-licht-en-geluid.jpg',
        alt: 'Kempisch Licht en Geluid',
      },
    ],
    details: {
      client: 'Kempisch Licht en Geluid',
      industry: 'Events',
      services: 'Web Design, Development',
      stack: 'Next.js, Prismic, React, TypeScript',
      year: '2021',
    },
    link: 'https://kempischlichtengeluid.be',
  },
  {
    slug: 'garage-michiels',
    title: 'Garage Michiels',
    description:
      'Garage Michiels is a car dealership in Belgium. The website provides information about the cars available for sale, pricing, and contact details. They also offer car repair and maintenance services.',
    thumbnail: '/images/garage-michiels.jpg',
    images: [
      {
        src: '/images/garage-michiels.jpg',
        alt: 'Garage Michiels',
      },
    ],
    details: {
      client: 'Garage Michiels',
      industry: 'Automotive',
      services: 'Web Design, Development',
      stack: 'Next.js, React, TypeScript',
      year: '2021',
    },
    link: 'https://garagemichiels.com',
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
          <Link
            className={styles.project}
            key={project.title}
            href={`/projects/${project.slug}`}
          >
            <img src={project.thumbnail} alt={project.title} />
            <div className={styles.content}>
              <h4 className='header4'>{project.title}</h4>
              <span>View Project</span>
              <ArrowUpRightSVG />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
