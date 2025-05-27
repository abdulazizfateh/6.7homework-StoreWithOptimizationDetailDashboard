import React from 'react'
// Components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// Outlet
import { Outlet } from 'react-router-dom';
// Lazy Loading (Custom)
import Suspense from '../../utils';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='site_main'>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default React.memo(Layout);