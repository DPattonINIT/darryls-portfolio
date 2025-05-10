'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const codeProjects = [
  {
    title: 'WeatherBite',
    description:
      'Smart meal recommendations based on your local weather. Uses OpenWeatherMap API and suggests meals based on temperature.',
    image: '/images/weatherbite.png',
    stack: 'Next.js • TypeScript • OpenWeatherMap API',
    url: 'https://weatherbite-one.vercel.app/',
  },
  {
    title: 'BeachParty',
    description:
      'A DJ-focused music platform for sharing and discovering mixes. JSON-driven catalog, mailing list system, and optimized for performance.',
    image: '/images/beachparty.png',
    stack: 'Next.js • JavaScript • TypeScript • Tailwind CSS',
    url: 'https://ezellbrown.vercel.app',
  },
  {
    title: 'Budget App',
    description:
      'A simple budgeting app built with vanilla JS. Dynamic DOM manipulation, local storage, and responsive UI without frameworks.',
    image: '/images/budgetapp.png',
    stack: 'Vanilla JavaScript • HTML • CSS',
    url: 'https://budget-app-six-beta.vercel.app',
  },
  {
    title: 'Pokemon Index',
    description:
      'A Pokémon app that pulls data from the PokeAPI. Shows abilities, evolution chains, types, and more for Gen 1–5 Pokémon.',
    image: '/images/pokemonindex.png',
    stack: 'Next.js • TypeScript • Tailwind • PokeAPI',
    url: 'https://pokedex-five-pearl.vercel.app',
  },
  {
    title: 'ShearGenius ',
    description:
      'A full-stack platform for barbers and clients with booking, reviews, galleries, and a style directory. Built with Next.js, C#, and Azure Blob Storage.',
    image: '/images/sheargenius.png',
    stack: 'Next.js • TypeScript • C# • Azure Blob Storage',
    url: 'https://sheargenius.vercel.app/',
  },
];

const CodeProjects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {codeProjects.map((project, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden"
        >
          <Link href={project.url} target="_blank">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
          </Link>

          <div className="p-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{project.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{project.stack}</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-200 mt-2">{project.description}</p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-500 hover:underline"
            >
              Visit App ↗
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CodeProjects;