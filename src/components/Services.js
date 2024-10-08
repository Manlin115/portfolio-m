import React from 'react';
// icons 
import { BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

const services=[
  {
    name: 'UI/UX Design',
    description:
    "I'm a UI/UX developer, I has successfully completed a course at CQnetworks, earning my certification with distinction in a remarkably short time.",
    link:"learn more"
  },
  {
    name: 'Web-Developer',
    description:
    "I'm a web developer,I completed my course. I have developed numerous websites and completed projects using HTML, CSS, and JavaScript. Below are some samples of my work.",
    link:"learn more"
  },
  {
    name: 'React ',
    description:
    "I'm a React developer, and I've completed several projects using React. These projects are uploaded on GitHub, with some examples provided below. ",
    link:"learn more"
  }
]
const Services = () => {
  return( 
        <section className='section' id='services'>
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
              {/* text & image */}
              <motion.div 
              variants={fadeIn('right' ,0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
              mix-blend-lighten mb-12lg:mb-0 '>
                <h2 className='h2 text-accent mb-6'>What I Do.</h2>
                <h3 className='h3 max-w-[455px] mb-16'> 
                  I'm a Freelance Fornt-Developer with over Fresher.
                </h3>
                <a href='https://github.com/Manlin115'><button className='btn btn-sm'>See my works </button></a>
              </motion.div>
              {/* services */}
              <motion.div 
              variants={fadeIn('left' ,0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='flex-1'>
                {/* services list  */}
                <div>
                  {services.map((services,index)=>{
                    // destructure service
                    const {name, description, link} = services;
                    return( <div className='border-b border-white/20 h-[146px] mb-[38px]
                    flex' key={index}>
                        <div className='max-w-[476px]'>
                          <h4 className='text-[20px] tracking-wider
                          font-primary font-semibold mb-6'>{name}</h4>
                          <p className='font-secondary leading-tight'>{description}</p>
                        </div>
                        <div className='flex flex-col flex-1 items-end '>
                          <a href='https://github.com/Manlin115' className='btn w-9 h-9 mb-[42px]
                          flex justify-center
                          items-center'> <BsArrowUpRight/> </a>
                          <a href='https://github.com/Manlin115' className='text-gradient text-sm'> {link}</a>
                        </div>

                        
                       </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
  )};

export default Services;
