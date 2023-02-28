import React from 'react';
import PersonalDataForm from './PersonalDataForm';
import EducationForm from './EducationForm';
import JobExpForm from './JobExpForm';

class Forms extends React.Component{
  render(){ return (
    <div className="forms bg-white">
      <div className='slider flex-row'>
      <PersonalDataForm />
      <EducationForm />
      <JobExpForm />
      
      </div>
      <div className='nav-buttons'>
      <button className='prev'></button>
      <button className='apply'>Apply</button>
      <button className='next'></button>
      </div>
    </div>
  );}
 
}

export default Forms;
