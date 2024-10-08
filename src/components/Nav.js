import React from 'react';
//this is an icons
import{BiBriefcase, BiHomeAlt,BiSolidContact,BiSquare,BiUser} from 'react-icons/bi';
import{BsClipboardData,BsBriefcase,BsChatSquare, BsChatSquareText} from 'react-icons/bs';
// this is an link

import {Link} from 'react-scroll'


const Nav = () => {
  return <div>
    <div className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      {/* nav linking */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px]
      mx-auto px-5 flex justify-between text-2x1 text-white/50'> 

        <Link
        activeClass='active'
        smooth={true}
        spy={true}
        
        to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt />
        </Link>
        <Link 
         activeClass='active'
         smooth={true}
         spy={true}

        to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser />
        </Link>
        <Link
         activeClass='active'
         smooth={true}
         spy={true}
        to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsClipboardData />
        </Link>
        <Link
         activeClass='active'
         smooth={true}
         spy={true}
        to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiBriefcase/>
        </Link>
        <Link
         activeClass='active'
         smooth={true}
         spy={true}
        to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsChatSquareText/>
        </Link>
        
      </div>
    </div>
  </div>;
};

export default Nav;
