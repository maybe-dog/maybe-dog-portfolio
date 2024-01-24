import WorkCard, { WorkCardProps } from 'components/elements/WorkCard/WorkCard';

export default function Works() {
  return (
    <div className='md:w-2/3 mx-auto'>
      <h1 className='text-5xl text-center my-4'>maybe-dog&apos;s Works</h1>
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
  {
    image: 'github-icon.svg',
    fit: 'contain',
    alt: 'trend-tech-api',
    title: 'WIP: trend-tech-api',
    description:
      'QiitaやZennのAPIを使ってトレンド記事を取得したり、後で読むものリストをまとめたりできるAPIです。',
    link: {
      url: 'https://github.com/maybe-dog/trend-tech-api',
      text: 'GitHub',
    },
  },
];
