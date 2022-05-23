import { Link, routes } from '@redwoodjs/router'
type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Home</Link>
        </h1>
        <nav>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
