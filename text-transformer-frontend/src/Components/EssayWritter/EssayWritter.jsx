import React from 'react'

const EssayWritter = ({handleView}) => {
  return (
    <div style={handleView ? {display : "block"} : {display :"none"} } >EssayWritter</div>
  )
}

export default EssayWritter