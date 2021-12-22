import { useContext } from 'react';
import * as PAGE from '../constants/page';
import PageContext from '../context/PageContext';
import Preferences from './Preferences';
import Annual from './Annual';
import Monthly from './Monthly';

const Pages = () => {
  const { currentPage } = useContext(PageContext);
  
  switch (currentPage) {
    case PAGE.PREFERENCES: return (<Preferences />)
    case PAGE.ANNUAL: return (<Annual />)
    default: return (<Monthly />)
  }
}

export default Pages
