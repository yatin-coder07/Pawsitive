import { Dog, DogIcon } from 'lucide-react'
import React from 'react'

const Dogface = () => {
  return (
    <>
     <div className="fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full bg-white flex justify-center items-center">
      <Dog />
    
    </div>
    </>
  )
}

export default Dogface