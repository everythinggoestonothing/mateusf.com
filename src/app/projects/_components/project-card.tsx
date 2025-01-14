import Image from 'next/image'
import { FiFolder, FiGithub, FiGlobe } from 'react-icons/fi'
import { BsDot } from 'react-icons/bs'
import { techIcons } from './tech-icons'
import { Project } from '#content'

interface Props {
  data: Project
  variant?: 'full' | 'compact'
}

export function ProjectCard({ data, variant = 'full' }: Props) {
  const isFull = variant === 'full'

  const Title = () => (
    <div
      data-variant={variant}
      className="mb-10 flex flex-col items-center gap-2 data-[variant='full']:gap-5 dark:text-neutral-50 md:mb-4 md:data-[variant='full']:flex-row"
    >
      <h2
        data-variant={variant}
        className="text-center text-lg font-bold data-[variant='full']:text-2xl data-[variant='full']:md:text-left"
      >
        {data.title}
      </h2>
      {isFull && (
        <span className="hidden md:inline">
          <BsDot />
        </span>
      )}
      <span className="flex gap-3 data-[variant='compact']:text-base">
        {data.core_techs.map(coreTech => {
          const TechIcon = techIcons[coreTech]
          return (
            <span key={coreTech} className="hover:cursor-pointer">
              <TechIcon />
            </span>
          )
        })}
      </span>
    </div>
  )
  const Tags = () => (
    <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
      {data.tags.map(tag => (
        <span
          key={tag}
          className="rounded-xl bg-neutral-700/10 px-2 py-1 text-sm text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200"
        >
          {tag}
        </span>
      ))}
    </div>
  )

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
      {data.image && (
        <div className="h-56 w-full">
          <Image
            src={data.image}
            width={2700}
            height={2025}
            alt="Project image"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <Title />
          <p className="text-justify md:text-left">{data.description}</p>
          {isFull && <Tags />}
        </div>
        <div
          data-variant={variant}
          className="mt-9 flex flex-1 items-end justify-center gap-2 data-[variant='full']:gap-6"
        >
          {data.repository && (
            <>
              <a
                href={data.repository}
                target="_blank"
                rel="noreferrer"
                data-variant={variant}
                className="flex items-center gap-2 rounded-2xl border border-[#181717] p-2 text-[#181717] data-[variant='full']:p-4 hover:bg-[#181717] hover:text-[#F6F8FA] dark:border-[#F6F8FA] dark:text-[#F6F8FA] dark:hover:bg-[#F6F8FA] hover:dark:text-[#181717]"
              >
                Repository <FiGithub />
              </a>
            </>
          )}
          {data.files && (
            <>
              <a
                href={data.files}
                target="_blank"
                rel="noreferrer"
                data-variant={variant}
                className="flex items-center gap-2 rounded-2xl border border-blue-500 p-2 text-blue-500 data-[variant='full']:p-4 hover:bg-blue-500 hover:text-neutral-50"
              >
                Arquivos <FiFolder />
              </a>
            </>
          )}
          {data.website && (
            <>
              <a
                href={data.website}
                target="_blank"
                rel="noreferrer"
                data-variant={variant}
                className="flex items-center gap-2 rounded-2xl border border-blue-700 bg-blue-700/10 p-2 text-blue-700 data-[variant='full']:p-4 hover:bg-blue-700 hover:text-neutral-50 dark:border-blue-600 dark:bg-blue-600/5 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-neutral-50"
              >
                Website <FiGlobe />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
