import React from 'react';
import { AboutMeComponent } from './home/aboutMe';
import { EducationComponent } from './home/education';
import { CertificationsComponent } from './home/certifications';
import { SkillsComponent } from './home/skills';
import { InterestsComponent } from './home/interests';

const contents = [
  AboutMeComponent,
  EducationComponent,
  CertificationsComponent,
  SkillsComponent,
  InterestsComponent,
];

export default function Home() {
  return (
    <div className='md:flex-col md:w-1/2 mx-auto px-4'>
      {contents.map((content) => (
        <div key={content.name} className='my-6'>
          {content()}
        </div>
      ))}
    </div>
  );
}
