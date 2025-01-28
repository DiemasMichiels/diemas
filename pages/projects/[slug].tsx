import Footer from '@components/footer/Footer'
import Page from '@components/page/Page'
import { PROJECTS, type Project } from '@components/portfolio/Portfolio'
import ProjectImages from '@components/projectImages/ProjectImages'
import ProjectIntro from '@components/projectIntro/ProjectIntro'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  project: Project
}

const Projects: NextPage<Props> = ({ project }) => {
  return (
    <Page>
      <ProjectIntro
        title={project.title}
        description={project.description}
        details={project.details}
        link={project.link}
        blog={project.blog}
      />
      <ProjectImages images={project.images} />
      <Footer />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = PROJECTS.find((project) => project.slug === params?.slug)

  return {
    props: {
      project,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = PROJECTS.map((project) => `/projects/${project.slug}`)

  return {
    paths: slugs,
    fallback: false,
  }
}

export default Projects
