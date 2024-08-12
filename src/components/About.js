import React from 'react';
// countup
import CountUp from 'react-countup';
 //intersection observation hook
 import {useInView} from 'react-intersection-observer';
//  motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants'

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
  })
  return(
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-y-0 h-screen'>
      
        {/* img */}
        < motion.div 
        variants={fadeIn('right' ,0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top' >
          </motion.div>
          
        {/* text */}
        <motion.div 
         variants={fadeIn('right' ,0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.3}}

        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4 '>I'm a Freelance Fornt-Developer with over Fresher.</h3>
          <p className='mb-6'>I'm Manlin Roswa, a BE graduate in Computer Science Engineering and a passionate frontend developer. I am eager to find opportunities that allow me to showcase my skills, contribute to a company's growth, and enhance my expertise. I thrive on challenges and am always looking to expand my knowledge and skill set. My goal is to secure a position that launches my career and helps me build a strong foundation for future success.

This highlights your background, aspirations, and commitment to growth in your field.
        </p>
       
        {/* stats */}
        <motion.div 
         variants={fadeIn('right' ,0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.3}}
        className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient'>0
             { inView ? <CountUp start={0} end={1} duration={3} /> 
             :null}
            </div>
            
            <div className='font-primary text-sm tracking-[2px]'>Fresher<br />-Year</div>
          </div>
          {/* 2nd */}
          <div>
            <div className='text-[40px] font-tertiary text-gradient'>0
             { inView ? <CountUp start={0} end={7} duration={3} /> 
             :null }+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Projects <br /> completed</div>
          </div>
          
        </motion.div>
        <motion.div 
         variants={fadeIn('right' ,0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.3}}
        className='flex gap-x-8 items-center'>
            <a href="https://drive.google.com/file/d/1IiIf-0eE3aEUtVn3S1mGulaz-PXoutSc/view?usp=sharing "><button className='btn btn-lg'>My Resume</button></a>
            <p className='text-gradient btn-link'> Download</p>

          </motion.div>

    </motion.div>
    </div> 
    </div>
   
    
  </section>
)};

export default About;
