import React from 'react';
import './App.css';
import PersonalDataForm from './PersonalDataForm';
import EducationForm from './EducationForm';
import JobExpForm from './JobExpForm';

class Forms extends React.Component{
  render(){ return (
    <div className="overview">
      <PersonalDataForm />
      <EducationForm />
      <JobExpForm />
     
    </div>
  );}
 
}

export default Forms;
