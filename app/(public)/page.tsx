import Hero from '@/components/ui/Hero'
import TechMarquee from '@/components/ui/marquee'
import React from 'react'
import ProjectPage from './projects/page'
import SkillsSection from '@/components/ui/skill'
import ContactPage from './contact/page'

const page = () => {
  return (
   
   <main>
     <Hero />
     <TechMarquee />
    <div className=''>
         <h1 className='text-4xl md:text-5xl font-bold text-center mb-6 mt-3'> What I’ve Built</h1>
       <ProjectPage />
      
    </div>
     <SkillsSection></SkillsSection>

    <ContactPage></ContactPage>
   </main>
  )
}

export default page