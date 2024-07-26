import React from 'react'

const DescriptionWritter = ({handleView}) => {
  return (
    <div style={handleView ? {display : "block"} : {display :"none"} } >DescriptionWritter</div>
  )
}

export default DescriptionWritter