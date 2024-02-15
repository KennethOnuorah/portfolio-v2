import { Skeleton } from "@mui/material"

export default function ResumeSkeleton() {
  return (
    <div className="flex justify-center m-8">
      <Skeleton variant="rounded" animation="wave" width={'80%'} height={'1000px'}/>
    </div>
  )
}
