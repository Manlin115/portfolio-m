import React from 'react';
//images

import logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='contianer mx-auto'>
      <div className=' flex justify-between items-center'>
        <a href='#'>
          <img src={logo} alt='' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Web developer</button>
      </div>
    </div>
    </header>;
};

export default Header;
