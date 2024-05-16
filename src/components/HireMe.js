import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-8 bottom-8 
                    flex items-center justify-center overflow-hidden
    '>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-spin-slow'} />
            <Link href="mailto:rohanmatharu@live.ca"
                    className='flex items-center justify-center 
                            absolute left-1/2 top-1/2
                            -translate-x-1/2 -translate-y-1/2
                            bg-dark text-light shadow-md 
                            border border-solid border-dark
                            w-24 h-24 rounded-full font-semibold
                            hover:bg-light hover:text-dark'
            >
                Email Me!
            </Link>
        </div>
    </div>
  )
}

export default HireMe