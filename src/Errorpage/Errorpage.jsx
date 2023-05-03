import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Header from '../pages/sharedPages/Header/Header';
import Footer from '../pages/sharedPages/Footer/Footer';

const Errorpage = () => {
    const {status, error} = useRouteError()
    return (
        <section>
          <Header></Header>
          <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <div>
        <img src="https://www.computerhope.com/jargon/e/error.png" alt="ErrorImage" />
      </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || "400"}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
           {error.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-blue-400 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
    <Footer></Footer>
        </section>
    );
};

export default Errorpage;
