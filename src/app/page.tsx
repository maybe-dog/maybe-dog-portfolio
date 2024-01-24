import React from 'react';
import { AboutMeComponent } from './home/aboutMe';
import { EducationComponent } from './home/education';
import { CertificationsComponent } from './home/certifications';
import { SkillsComponent } from './home/skills';
import { InterestsComponent } from './home/interests';

export default function Home() {
  return (
    <div className='lg:flex-col lg:items-center lg:w-1/3 md:w-3/4 md:mx-auto mx-4 my-4'>
      <AboutMeComponent />
      <EducationComponent />
      <CertificationsComponent />
      <SkillsComponent />
      <InterestsComponent />
    </div>
  );
}
