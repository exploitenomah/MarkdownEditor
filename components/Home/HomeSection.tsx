

import { homeSectionClasses } from './Home.classes'

const HomeSection = (
  { children,
    extraClasses
  }: {
    children: JSX.Element,
    extraClasses?: string
  }) => {

  return (
    <section className={homeSectionClasses(extraClasses)}>
      {children}
    </section>
  )
}

export default HomeSection