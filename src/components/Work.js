import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10'>
          <motion.div 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='text-center lg:text-left mb-10 lg:mb-16'
          >
            {/* text */}
            <h2 className='h2 leading-tight text-accent'>
              My latest <br /> work.
            </h2>
            <p className='max-w-sm mx-auto lg:mx-0 mb-16'>
            I am developing a web application using React with a Node.js database.
            </p>
            <a href='https://github.com/Manlin115'><button className='btn btn-sm'>View all Projects</button></a>
          </motion.div>

          {/* Image Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {/* image 1 */}
            <motion.div 
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='group relative overflow-hidden border-2 
                border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='Project 1' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Random Joke</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Laugh out loud</span>
              </div>
            </motion.div>

            {/* image 2 */}
            <motion.div 
              variants={fadeIn('left', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='group relative overflow-hidden border-2 
                border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='Project 2' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Random chat application</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Connect with new people</span>
              </div>
            </motion.div>

            {/* image 3 */}
            <motion.div 
              variants={fadeIn('left', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='group relative overflow-hidden border-2 
                border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='Project 3' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>To-do List</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Complete your work</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
