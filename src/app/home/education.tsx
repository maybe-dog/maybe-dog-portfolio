import React from 'react';

type Education = {
  name: string;
  period: string;
  description: string;
};

const educations: Education[] = [
  { name: '栄光学園高等学校', period: '2014/04 - 2017/03', description: '' },
  {
    name: '東京工業大学 情報理工学院 情報工学系',
    period: '2017/04 - 2023/03',
    description: '2020/09 - 2022/03 休学',
  },
];

export function EducationComponent(): React.JSX.Element {
  return (
    <div className='flex justify-start items-center mt-4'>
      <div>
        <h1 className='text-5xl'>Education🏫</h1>
        <ul className='list-inside'>
          {educations.map((education) => (
            <li key={education.name} className='mt-2'>
              <h2 className='text-lg'>{education.name}</h2>
              <ul className='list-disc list-inside'>
                <li>{education.period}</li>
                {education.description && <li>{education.description}</li>}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
