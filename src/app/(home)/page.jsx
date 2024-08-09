import React from 'react';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Hero from '../hero/hero';
import Main from '../main/main';
const Page = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <Main/>
      <Footer />
    </div>
  );
}

export default Page;
