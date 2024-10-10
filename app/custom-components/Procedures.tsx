import React from 'react'
import { procedureList } from '../assets/data/ProdecureList'
import ProcedureCard from './ProcedureCard'

const Procedures = () => {
  return (
    <div>
      {
        procedureList.map((procedure) => {
          return (
            <ProcedureCard 
              image={procedure.image}
              instructions={procedure.instruction}
            />
          )
        })
      }
    </div>
  )
}

export default Procedures
