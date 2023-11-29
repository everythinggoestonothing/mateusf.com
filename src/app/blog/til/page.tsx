import { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { allTILs, TIL } from 'contentlayer/generated'

import { Title } from '@/shared/components/title'
import { Date as DateUI } from '@/shared/components/date'

import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'Today I Learned',
  description: 'Some notes with things that I learned on last days',
  keywords: ['learn', 'study', 'skills']
}

const TILComponent = ({ til }: { til: TIL }) => {
  const MDXContent = useMDXComponent(til.body.code)
  return (
    <div className="relative flex flex-col gap-6 border-b border-b-neutral-200 py-12 last:border-none dark:border-b-neutral-800 md:flex-row md:gap-1">
      <div className="top-24 h-fit flex-1 space-y-2 md:sticky md:space-y-5">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">{til.title}</h2>
          <p>{til.description}</p>
          <span className="text-sm">
            <DateUI dateString={til.date} />
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {til.tags.map(tag => (
            <span
              className="rounded-lg bg-neutral-400/10 p-1 text-sm leading-none"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="post-content til-content md:w-2/3">
        <MDXContent />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="content-container m-auto space-y-4">
      <Title text="Today I Learned" />
      <div className="flex flex-col gap-3">
        {allTILs
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map(til => (
            <TILComponent til={til} key={til.date} />
          ))}
      </div>
    </div>
  )
}
