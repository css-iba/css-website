import React from 'react'

const stats = [
  { id: 1, name: 'Active Members', value: '200+' },
  { id: 2, name: 'Something\'s Coming', value: 'Ongoing' },
  { id: 3, name: 'Resources Created', value: '3+' }
]

const Stats: React.FC = () => {
  return (
    <div className="colour-box-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="font-heading font-semibold text-base/7 colour-primary">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold font-text tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Stats;