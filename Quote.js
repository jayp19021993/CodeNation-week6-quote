import React from 'react'

function Quote({Quote}) {
    return (
        <div className='Quote'>
          <div className='anime' title={Quote.anime}>{Quote.anime}</div>  

          <blockquote>
          {Quote.quote}
          </blockquote>
          
          <div className='character' title={Quote.character}>{Quote.character}</div>  
        </div>
    )
}

export default Quote
