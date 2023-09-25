import SimpleTimeline from 'components/elements/Timeline/SimpleTimeline';
import dayjs from 'dayjs';
import { sortByDateDescending } from 'utils/dayjs_util';
import { Props as TimelineEvent } from 'components/elements/Timeline/TimelineCard';
import { Article, ZennResponse } from 'types/zenn';

const zenn_url = 'https://zenn.dev';
const zenn_api_url = zenn_url + '/api/articles?username=maybe_dog&order=latest';

export default async function Timeline() {
  // ZennのAPIから自分の書いた技術記事を取得する関数
  const fetchZennArticles = async (): Promise<ZennResponse> => {
    const response = await fetch(zenn_api_url);
    return response.json();
  };
  const response = await fetchZennArticles();
  const dynamic_events = response.articles.map((article: Article) => {
    const date = dayjs(article.published_at);
    return {
      title: article.title,
      description: 'Zennの記事です。',
      date: {
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
      },
      tags: ['Zenn'],
      link: {
        url: zenn_url + article.path,
        text: 'Zenn',
      },
    };
  });
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
      <h1 className='text-4xl text-center'>maybe-dog Timeline⌚</h1>
      <SimpleTimeline events={sorted_events}></SimpleTimeline>
    </div>
  );
}

const static_events: TimelineEvent[] = [
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
    date: {
      year: 2020,
      month: 9,
    },
  },
  {
    title: '東京工業大学 復学',
    date: {
      year: 2022,
      month: 4,
    },
  },
  {
    title: '東京工業大学 情報理工学院 情報工学系 卒業',
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
