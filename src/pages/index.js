import { useContext } from 'react';
import * as ROUTE from '../constants/page';
import PageContext from '../context/PageContext';
import Promotions from './Promotions';
import Purchases from './Purchases';
import Sales from './Sales';

const Pages = () => {
  const { currentPage } = useContext(PageContext);
  
  switch (currentPage) {
    case ROUTE.PROMOTION: return (<Promotions />)
    case ROUTE.PURCHASES: return (<Purchases />)
    default: return (<Sales />)
  }
}

export default Pages
