import { useEffect, useState } from 'react';
import  { projectsList }  from '../assets/data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [projects, setProjects] = useState(projectsList);
  const [currentProject, setCurrentProject] = useState(0);

  const prevSlide = () => {
    setCurrentProject((oldProject) => {
      const result = (oldProject - 1 + projects.length) % projects.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentProject((oldProject) => {
      const result = (oldProject + 1) % projects.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentProject]);

  return (
    <section className='slider-container'>
      {projects.map((project, projectIndex) => {
        const { id, image, name, title } = project;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (projectIndex - currentProject)}%)`,
              opacity: projectIndex === currentProject ? 1 : 0,
              visibility: projectIndex === currentProject ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='project-img' />
            <h5 className='project-name'>{name}</h5>
            <p className='project-title'>{title}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
