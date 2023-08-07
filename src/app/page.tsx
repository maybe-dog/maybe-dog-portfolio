import React from 'react';
import { AboutMe } from './home/aboutMe';
import { EducationComponent } from './home/education';
import { CertificationsComponent } from './home/certifications';
import { SkillsComponent } from './home/skills';
import { InterestsComponent } from './home/interests';

export default function Home() {
  return (
    <div className='md:flex-col md:w-1/2 mx-auto px-4'>
      <div className='my-10'>
        <AboutMe />
      </div>
      <div className='my-10'>
        <EducationComponent />
      </div>
      <div className='my-10'>
        <CertificationsComponent />
      </div>
      <div className='my-10'>
        <SkillsComponent />
      </div>
      <div className='my-10'>
        <InterestsComponent />
      </div>
    </div>
  );
}
