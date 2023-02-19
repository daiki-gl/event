import Image from "next/image"
import Link from "next/link"

const HomePage = ({data}) => {
  return (
     <>
        {data.map(ev => 
        <Link style={{width: "100%"}} key={ev.id} href={`/events/${ev.id}`}>
            <Image width={300} height={300} alt={ev.title} src={ev.image} /> 
            <h2> {ev.title} </h2> 
            <p>{ev.description}</p> 
        </Link>
        )}
      </>
  )
}

export default HomePage