import { AnimatedText } from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"

const about = () => {
  return (
    <>
        <Head>
            <title>CodeBucks | About page</title>
            <meta name='description' content='any description' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Beyond the Code!" className='mb-16' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            Welcome to my website! My name is Rohan Matharu. I am an in training software developer and a student at Northern Alberta Institute of Technology. I learned coding as a second language when I was 6 years old by watching my dad code in the early years of computers in the year 2000. You can find my whole story on my <a href="https://www.linkedin.com/in/rohanmatharu" target="_blank">linkedin</a>.
                        </p>
                        <p className='font-medium mt-4'>
                            Outside of coding, I am an avid gamer who has a bad habit of never finishing games; A huge Manchester United fan and a wide variety of interests that is probably too wide to list without taking up a whole paragraph. But thanks to me having a wide range of interests, it is extremely easy for people to connect with me. So feel free to <a href="#contact-link">contact me</a>!
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt="Crazyturtles" className='w-full h-auto rounded-2xl' />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default about