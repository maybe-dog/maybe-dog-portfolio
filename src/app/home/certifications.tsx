import React from 'react';

type Certification = {
  name: string;
  get_date: string;
};

const certifications: Certification[] = [
  { name: '応用情報技術者', get_date: '2019/05 取得' },
  { name: 'TOEIC(R) L&R 675', get_date: '2019 取得' },
  { name: 'AWS Partner: Accreditation (Technical)', get_date: '2023/06 取得' },
];

export function CertificationsComponent(): React.JSX.Element {
  return (
    <div className='flex justify-start items-center mt-4'>
      <div>
        <h1 className='text-5xl'>Certifications✅</h1>
        <ul className='list-inside'>
          {certifications.map((certification) => (
            <li key={certification.name} className='mt-2'>
              {certification.name}
              <ul className='list-disc list-inside'>
                <li className='text-lg'>{certification.get_date}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
