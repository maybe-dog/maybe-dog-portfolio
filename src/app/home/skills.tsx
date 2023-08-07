import { Skill, SkillCard } from 'components/elements/SkillCard/SkillCard';

const skills: Skill[] = [
  { name: 'Python', icon: '/icons8-python.svg' },
  { name: 'Typescript', icon: '/icons8-typescript.svg' },
  { name: 'Docker', icon: '/icons8-docker.svg' },
  { name: 'Git', icon: '/icons8-git.svg' },
  { name: 'Java', icon: '/icons8-java.svg' },
];

export function SkillsComponent(): React.JSX.Element {
  return (
    <div className='mt-4'>
      <h1 className='text-5xl'>Skills🔨</h1>
      <div className='flex flex-wrap m-2'>
        {skills.map((skill) => (
          <div className='m-1' key={skill.name}>
            <SkillCard name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
