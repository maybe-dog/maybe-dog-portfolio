import SimpleTimeline from 'components/elements/Timeline/SimpleTimeline';
import dayjs from 'dayjs';
import { sortByDateDescending } from 'utils/dayjs_util';
import { TimelineProps } from 'components/elements/Timeline/TimelineCard';
import { Article, ZennResponse } from 'types/zenn';

const zenn_url = 'https://zenn.dev';
const zenn_api_url = zenn_url + '/api/articles?username=maybe_dog&order=latest';

const fetchZennArticles = async (): Promise<ZennResponse> => {
  const response = await fetch(zenn_api_url, { next: { revalidate: 3600 } });
  return response.json();
};

export default async function Timeline() {
  // ZennのAPIから自分の書いた技術記事を取得する関数
  const response = await fetchZennArticles();
  const dynamic_events = response.articles.map((article: Article) =>
    zenn2timeline(article),
  );
  const all_events = [...static_events, ...dynamic_events];

  const sorted_events = all_events.sort((a, b) => {
    const a_dayjs = dayjs().year(a.date.year).month(a.date.month);
    if (a.date.day) a_dayjs.day(a.date.day);
    const b_dayjs = dayjs().year(b.date.year).month(b.date.month);
    if (b.date.day) b_dayjs.day(b.date.day);
    return sortByDateDescending(a_dayjs, b_dayjs);
  });

  return (
    <div className='md:flex-col md:w-2/3 mx-auto px-4'>
      <h1 className='text-4xl text-center my-4'>maybe-dog Timeline⌚</h1>
      <SimpleTimeline events={sorted_events}></SimpleTimeline>
    </div>
  );
}

const zenn2timeline = (article: Article): TimelineProps => {
  const readableCharPerMin = 500;
  const date = dayjs(article.published_at);
  const time2read_min = Math.ceil(article.body_letters_count / readableCharPerMin);
  return {
    title: article.title,
    description: `約${time2read_min}分で読めます(${article.body_letters_count}字)`,
    date: {
      year: date.year(),
      month: date.month() + 1,
      day: date.date(),
    },
    tags: ['Zenn'],
    link: {
      url: zenn_url + article.path,
      text: 'read more',
    },
    logo: (
      <svg
        role='img'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className='my-2 mx-2'
        fill='#3EA8FF'
      >
        <path d='M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z' />
      </svg>
    ),
  };
};

const static_events: TimelineProps[] = [
  // 学業関係
  {
    title: '栄光学園高等学校 入学',
    date: {
      year: 2014,
      month: 4,
    },
  },
  {
    title: '栄光学園高等学校 卒業',
    date: {
      year: 2017,
      month: 3,
    },
  },
  {
    title: '東京工業大学 第5類 入学',
    date: {
      year: 2017,
      month: 4,
    },
  },
  {
    title: '東京工業大学 休学',
    description: '精神的な理由により休学しました。',
    date: {
      year: 2020,
      month: 9,
    },
  },
  {
    title: '東京工業大学 復学',
    description: '復学し、別の研究室へと移りました。',
    date: {
      year: 2022,
      month: 4,
    },
  },
  {
    title: '東京工業大学 情報理工学院 情報工学系 卒業',
    description: 'リファクタリング検出に関する研究で学位を取得し、卒業しました。',
    date: {
      year: 2023,
      month: 3,
    },
  },
  // Workに記載していること
  {
    title: 'ポートフォリオサイト作成',
    description:
      'next.jsを利用したmaybe-dogのポートフォリオサイトを作成しました。' +
      'GitHubにソースコードを公開しています。使用技術スタック等も確認できます。',
    date: {
      year: 2023,
      month: 5,
      day: 20,
    },
    tags: ['next.js', 'TypeScript'],
    link: {
      url: 'https://github.com/maybe-dog/maybe-dog-portfolio',
      text: 'GitHub',
    },
  },
];
