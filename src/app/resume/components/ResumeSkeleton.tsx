import { Skeleton } from "@mui/material"

export default function ResumeSkeleton() {
  return (
    <div className="flex justify-center m-8">
      <Skeleton variant="rectangular" animation="wave" width={'100%'} height={'1000px'}/>
    </div>
  )
}
