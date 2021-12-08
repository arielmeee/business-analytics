import { createContext, useState } from "react";
import { SALES } from "../constants/page";

// Adding default values for better intellisence
const PageContext = createContext({
  currentPage: SALES,
  goto: (page) => {}
})

export function PageContextProvider ({ children }) {
  const [page, setPage] = useState(SALES);
  // Determine what component to render
  const gotoHandler = (page) => {
    setPage(page)
  }
  // The context
  const context = {
    currentPage: page,
    goto: gotoHandler
  }
  
  return (
    <PageContext.Provider value={context}>
      {children}
    </PageContext.Provider>
  )
}

export default PageContext