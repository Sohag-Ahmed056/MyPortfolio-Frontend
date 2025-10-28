import ContactPage from '@/components/ui/contactPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact",
  description: "Find A Full Stack Web Developer",
}

const Contact = () => {
  return (
    <ContactPage></ContactPage>
  )
}

export default Contact