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
  link?: string
  blog?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'tomorrowland',
    title: 'Tomorrowland',
    description: `Tomorrowland, one of the largest electronic dance music festivals globally, required a comprehensive digital ecosystem to support its operations. The project extended beyond a single website, encompassing the development of multiple applications tailored to the festival's needs. This included the main website, a ticketing system, and a mobile application, among others.
    
The frontend development was led by a dedicated team, which utilized a varied tech stack depending on the project requirements. For the majority of the applications, Next.js and TypeScript served as the primary technologies, ensuring robust, scalable, and maintainable solutions. Each application was designed to enhance the user experience and streamline festival operations, reflecting the high standards associated with the Tomorrowland brand.`,
    thumbnail: '/images/tomorrowland.jpg',
    images: [
      {
        src: '/images/tomorrowland.jpg',
        alt: 'Tomorrowland',
      },
      {
        src: '/images/tomorrowland-nft.jpg',
        alt: 'Tomorrowland NFT',
      },
    ],
    details: {
      client: 'Tomorrowland',
      industry: 'Entertainment',
      services: 'Frontend Development',
      stack: 'NextJS, Typescript, Web Components, React Native',
      year: '2022 - 2024',
    },
    link: 'https://tomorrowland.com',
  },
  {
    slug: 'telenet-yugo',
    title: 'Telenet YUGO',
    description: `Telenet YUGO was a comprehensive over-the-top (OTT) streaming platform developed for Telenet, enabling users to watch, record, and playback the latest TV shows. The web application was built using React and seamlessly integrated with ChromeCast, Tizen, and WebOS to ensure a smooth and versatile user experience across multiple devices.`,
    thumbnail: '/images/telenet-yugo.jpg',
    images: [
      {
        src: '/images/telenet-yugo.jpg',
        alt: 'Telenet YUGO',
      },
    ],
    details: {
      client: 'Telenet - icapps',
      industry: 'Entertainment',
      services: 'Web App Development',
      stack: 'React, Typescript, ChromeCast, Tizen, WebOS',
      year: '2019 - 2022',
    },
    blog: 'https://icapps.com/cases/telenet-yugo',
  },
  {
    slug: 'telenet-play-sports',
    title: 'Telenet Play Sports',
    description:
      'The Play Sports app serves as the premier destination for sports enthusiasts in Belgium, offering live streaming of sports events, highlights, and news. The application is available on iOS, Android, and Web, providing a consistent and engaging experience across platforms.',
    thumbnail: '/images/telenet-play-sports.jpg',
    images: [
      {
        src: '/images/telenet-play-sports.jpg',
        alt: 'Telenet Play Sports',
      },
    ],
    details: {
      client: 'Telenet - icapps',
      industry: 'Entertainment',
      services: 'Web App Development',
      stack: 'React, Typescript, Styled Components, Redux Sagas',
      year: '2019',
    },
    blog: 'https://icapps.com/cases/telenet-play-sports',
  },
  {
    slug: 'keytrade-bank',
    title: 'Keytrade bank',
    description: `Keytrade Bank introduced Belgium's first React Native banking and trading app, revolutionizing the digital banking experience. The project involved the development of both mobile and web applications, leveraging React and React Native to deliver a seamless and user-friendly interface.`,
    thumbnail: '/images/keytrade.jpg',
    images: [
      {
        src: '/images/keytrade.jpg',
        alt: 'Keytrade bank',
      },
    ],
    details: {
      client: 'Keytrade bank - icapps',
      industry: 'Finance',
      services: 'Web App / React Native Development',
      stack: 'React, React Native, TypeScript',
      year: '2018 - 2019',
    },
    blog: 'https://icapps.com/cases/keytrade-bank',
  },
  {
    slug: '2cv-huppel',
    title: '2CV Club Huppel',
    description:
      '2CV Club Huppel, a Belgian car club dedicated to Citroen 2CV enthusiasts, required a website to showcase club information, upcoming events, and a gallery of photos. The project focused on delivering a visually appealing and informative platform using WebFlow.',
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
      'Salon Zuiver, a beauty salon in Belgium, needed a website to display its services, pricing, and contact details while enabling customers to book appointments online. The platform was developed using Next.js, Prismic, React, and TypeScript to ensure a modern and efficient user experience.',
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
    slug: 'sdworx',
    title: 'SD Worx',
    description:
      'To address a shortage of parking spaces, SD Worx required an internal application for staff to share parking spots. The solution was developed as a web and mobile app using React and React Native, ensuring ease of use and accessibility.',
    thumbnail: '/images/sdworx.jpg',
    images: [
      {
        src: '/images/sdworx.jpg',
        alt: 'SD Worx',
      },
    ],
    details: {
      client: 'SD Worx - icapps',
      industry: 'Automotive',
      services: 'React Native Development',
      stack: 'React, React Native, Javascript',
      year: '2018',
    },
    blog: 'https://icapps.com/cases/sd-worx',
  },
  {
    slug: 'kot-geel',
    title: 'Kot Geel',
    description:
      'Kot Geel, a student housing provider in Belgium, sought a website to showcase available rooms, pricing, and contact details. The platform was built using Next.js, React, and TypeScript, offering a clean and intuitive interface for prospective tenants.',
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
      'Kempisch Licht en Geluid, a Belgian company specializing in lighting and sound equipment for events, required a website to showcase its products, services, and past event photos. The project utilized Next.js, Prismic, React, and TypeScript to deliver a dynamic and visually engaging platform.',
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
      'Garage Michiels, a car dealership in Belgium, needed a website to display its inventory of cars for sale, pricing, and contact details, as well as information about its car repair and maintenance services. The platform was developed using Next.js, React, and TypeScript, ensuring a professional and user-friendly experience.',
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
