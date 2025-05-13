const Skills = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript',
    'HTML', 'CSS', 'Tailwind CSS', 'Node.js',
    'C#', '.NET', 'Azure', 'REST APIs'
  ];

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-zinc-200 dark:bg-zinc-700 text-sm px-3 py-1 rounded-full text-zinc-800 dark:text-white">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
