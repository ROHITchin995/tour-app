import React, { useState } from 'react'
import { Tour } from './Tour';

export const Tours = ({ tours, removeTour }) => {
    
    const [readMore, setReadMore] = useState(false);
  return (
    <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </div>
  </section>
  )
}
