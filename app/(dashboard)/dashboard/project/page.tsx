
import { getUserSession } from '@/app/helpers/getUserSession'
import CreateProjectPage from '@/components/form/projectCreateForm'


const Project = async () => {
  const session = await getUserSession()
  return (
    <>
      {session?.user?.role === "OWNER" && <CreateProjectPage />}
    </>
  )
}

export default Project