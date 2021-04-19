import React from 'react';
import { GetStaticProps } from 'next';

import { Home } from '~/components/templates/Home';
import { Head, HeadProps } from '~/components/atoms/Head';

export const getStaticProps: GetStaticProps = async (ctx) => {
    const head: HeadProps = {
        title: 'Home',
    };

    return {
        props: {
            head,
        },
    };
};

const HomePage = ({ head }) => {
  return (
    <div style={{ backgroundColor: 'rgb(140, 117, 255)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', maxWidth: 600, padding: 30 }}>
        <h1 style={{ fontSize: '1.7rem', marginBottom: 30 }}>Website is coming soon !</h1>
        <p>While waiting, come check the latest updates on the blog. <br/>I'll keep you updated.</p>
        <p><b>One follow has a huge impact on the project! Thanks ❤️</b></p>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <a href='https://blog.myopen.market/'  style={{ color: '#f14668', fontWeight: 'bold', fontSize: '1.2rem' }}>Access the blog</a>
        </div>
      </div>
    </div>
  )
    // return (
    //     <div>
    //         <Head {...head} />
    //
    //         <Home />
    //     </div>
    // );
};

export default HomePage;
