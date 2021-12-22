import { useContext } from "react";
import PageContext from "../../context/PageContext";
import * as PAGE from '../../constants/page';

const SideNav = () => {
  const { goto } = useContext(PageContext);

  return (
    <ul className="flex flex-row justify-center space-x-4
     lg:flex-col lg:justify-start lg:space-x-0 lg:space-y-3"
     >
      <li
        className="cursor-pointer"
        onClick={() => goto(PAGE.MONTHLY)}
      >
        Monthly
      </li>
      <li
        className="cursor-pointer"
        onClick={() => goto(PAGE.PREFERENCES)}
      >
        Preferences
      </li>
      <li
        className="cursor-pointer"
        onClick={() => goto(PAGE.ANNUAL)}
      >
        Annual
      </li>
    </ul>
  )
}

export default SideNav
