import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default HomePage
