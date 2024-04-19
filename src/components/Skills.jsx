import React, { useState } from 'react'
import { skillsList, toolsList } from '../assets/data'
import Card from './Card';
import { nanoid } from 'nanoid';

const Skills = () => {

  const [ID, setID] = useState('')

  const cardDisplay = (skillid) => {
    setID(skillid);
  }
  const mouseOut = () => {
    setID('');
  }

  return (
    <div className='skills-container' id='skills'>
      <p className="title">These are the languages, frameworks, and libraries i am skilled at!</p>
      <div className="skill">
        {skillsList.map((skill, index)=>{
          return(
            <>
              <div className="card" key={skill.id}>
                <img src={skill.image} alt="" id={skill.id} onMouseEnter={()=>{cardDisplay(skill.id)}} onMouseOut={mouseOut} />
              </div>
              <Card key={skill.id} name={skill.name} id={ID} text={skill.text} skillId={skill.id} index={index} />
            </>
          )
        })}
      </div>
      <p className="title">These are the tools i use!</p>
      <div className="skill">
        {toolsList.map((tool, index)=>{
          return(
            <>
              <div className="card" key={tool.id}>
                <img className='tool-img' src={tool.image} alt="" id={tool.id} onMouseEnter={()=>{cardDisplay(tool.id)}} onMouseOut={mouseOut}/>
              </div>
              <Card key={tool.id} name={tool.name} id={ID} text={tool.text} skillId={tool.id} index={index} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
