import Banner from '@/Components/Banner/Banner';
import Contact from '@/Components/contact/contact';
import IntroSection from '@/Components/IntroSection/IntroSection';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-10'>
      <Banner />
      <IntroSection />
      <Contact/>
    </div>
  );
};

export default page;