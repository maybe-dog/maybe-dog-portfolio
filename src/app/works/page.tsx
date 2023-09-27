import WorkCard, { WorkCardProps } from 'components/elements/WorkCard/WorkCard';

export default function Works() {
  return (
    <div className='md:w-2/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Works</h1>
      <div className='grid md:grid-cols-3 gap-4'>
        {works.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </div>
  );
}

const works: WorkCardProps[] = [
  {
    image: '/maybe-dog-logo.png',
    fit: 'contain',
    alt: 'maybe-dog-portfolio',
    title: 'maybe-dog-portfolio',
    description:
      'このサイトです。Next.jsやTypescript, Tailwind CSSを使って作成しました。',
    link: {
      url: 'https://github.com/maybe-dog/maybe-dog-portfolio',
      text: 'GitHub',
    },
  },
];
