import React from 'react'

const EmailWritter = ({handleView}) => {
  return (
    <div style={handleView ? {display : "block"} : {display :"none"} } >EmailWritter</div>
  )
}

export default EmailWritter