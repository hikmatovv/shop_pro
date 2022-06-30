import React from 'react';

import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Navbar from "../../components/Navbar"
export default () => {
  const content = useRoutes(routes);
  return <>
  <Navbar/>
  <div style={{marginTop:"100px"}}>
{content}
</div>

  </>;
};
