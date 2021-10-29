import React from 'react'

const MiniProduct = ({item, count}) => {
  const {titulo, precio} = item

  return (
    <><br />
    <div>
        <br />
          <p>{titulo} | {count}u. x ${precio}</p>
          <br />
      </div><br /></>
  )
}

export default MiniProduct