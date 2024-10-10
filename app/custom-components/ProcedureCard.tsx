import Image from 'next/image'
import React from 'react'

type ProdureListProp = {
    image: string
    instructions: string
}

const ProcedureCard = ({image, instructions}: ProdureListProp) => {
  return (
    <div>
      <Image src={image} alt='animation' />
      <div>
        {instructions}
      </div>
    </div>
  )
}

export default ProcedureCard
