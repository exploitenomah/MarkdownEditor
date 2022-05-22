
import { headingProps } from '../../types/headings.types'
import { homeHeaderDesktopStyles, homeHeaderMobileStyles} from './Home.classes'

export const HomeHeaderMobile = ({
  headingText,
  children,
  extraClasses
}: headingProps) => {

  return (
    <h2 className={homeHeaderMobileStyles(extraClasses)}>
      <span>{headingText}</span>
      {children}
    </h2>
  )
}

export const SectionHeaderDesktop = ({
  headingText,
  children,
  extraClasses
}: headingProps) => {


  return (
    <h2 className={homeHeaderDesktopStyles(extraClasses)}>
      <span>{headingText}</span>
      {children}
    </h2>
  )
}
