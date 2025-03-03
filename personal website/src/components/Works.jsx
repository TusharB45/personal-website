import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className='relative w-100 h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
        <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 '>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="bg-white rounded-2xl min-h-[1200px] pt-12 ">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-black text-[17px] max-w-s leading-[30px] text-center '
        >
          The following projects demonstrate my skills and experience through real-world examples of my work. Each project includes a brief description along with links to both the code repositories and live demos. These projects highlight my ability to tackle complex challenges, work with diverse technologies, and manage projects efficiently
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 scale-90'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
          
        ))}
        
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
