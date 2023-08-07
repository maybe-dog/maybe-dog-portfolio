type Interest = {
  name: string;
  icon: string;
  description: string;
};

const interests: Interest[] = [
  {
    name: 'Webバックエンド',
    icon: 'todo',
    description:
      '保守性の高いAPI設計やDB設計に興味があります. 最近はNest.jsを触っています.',
  },
  {
    name: 'CI/CD',
    icon: 'todo',
    description:
      'CI/CDによる信頼性の担保,開発の促進に対して興味があります. GitHub ActionsやGitLab CIを触っています.',
  },
  {
    name: 'SRE',
    icon: 'todo',
    description: 'ソフトウェアの信頼性の確保に興味があります.',
  },
  {
    name: 'AWS',
    icon: 'todo',
    description: 'クラウドによるスケーラブルなアプリケーションの運用に興味があります.',
  },
];

export function InterestsComponent(): React.JSX.Element {
  return (
    <div className='flex justify-start items-center mt-4'>
      <div>
        <h1 className='text-5xl'>Interests👀</h1>
        <ul className='list-inside'>
          {interests.map((interest) => (
            <>
              <h2 className='text-lg my-2'>{interest.name}</h2>
              {interest.description && (
                <li key={interest.name} className='mt-2 indent-4'>
                  {interest.description}
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
