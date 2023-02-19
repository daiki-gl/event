import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllEvents = ({data}) => {
  return (
    <>
      <div>
      <h1>Event Page</h1>
      <div>
        {data.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image width={300} height={300} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
      </div>
    </>
  )
}

export default AllEvents