import React from 'react';
import Image from '../assets/avatar3 copy.svg'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
// animation
import {TypeAnimation} from 'react-type-animation';
 import {motion} from 'framer-motion';
//  variants
import {fadeIn} from '../variants'

const Banner = () => {
  return( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='contianer mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
      lg:gap-x-12'> 


        {/* Text fields */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[60px]'>Manlin <span>Roswa</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up',0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
          className='mb-6 text-[36px] lg:text[60px] font-secondary 
          font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a </span>
            <TypeAnimation sequence={[
              'Web Developer',
              2000,
              'Designer',
              2000, 
            ]} 
            speed={50} 
            className='text-accent' wrapper='span' repeat={Infinity}
            />
            
          </motion.div>
          <motion.p 
          variants={fadeIn('up',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
          className='mb-8 mx-w-lg mx-auto lg:mx-0'>BE Computer Science Engineering,
            <br />
            From Madurai.

            </motion.p>
            <motion.div 
            variants={fadeIn('up',0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="mailto:manlinroswa115@gmail.com?body=My Hello,
              My name is **** from *** /your content/ "><button className='btn btn-lg'>Contact me</button></a>
               <p  className='text-gradient btn-link'> Mail</p>
            </motion.div>
            {/* socials */}
            <motion.div 
            variants={fadeIn('up',0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='flex text[30px] gap-x-6 max-w-max mx-auto lg:mx-0'> 
              <a href='https://github.com/Manlin115'>
                <FaGithub />
              </a> 
              <a href='https://www.instagram.com/pieces__of_mind11/'>
                <FaInstagram />
              </a> 
              <a href='https://www.linkedin.com/in/manlin-roswa-r-592261278/'>
                 <FaLinkedinIn />
              </a> 
            </motion.div>
        </div>
        {/* images */}
        <motion.div 
        variants={fadeIn('down',0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
    
    </section>

  )};

export default Banner;
