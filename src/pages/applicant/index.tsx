import PageContainer from "@/components/containers/PageContainer"
import TableApplicant from "@/components/features/applicants/table"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ApplicantPage = () => {
  return (
    <PageContainer
      title="Applicant"
      subtitle="List Of Applicants"
      actions={
        <Button asChild>
          <Link to={"create"}>New Applicant</Link>
        </Button>
      }
    >
      <TableApplicant />
    </PageContainer >
  )
}

export default ApplicantPage