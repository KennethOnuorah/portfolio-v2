'use client'

import { Skeleton } from "@mui/material"
import useViewportDimensions from "@/lib/hooks/useViewportDimensions"

export default function ResumeSkeleton() {
  const {width,} = useViewportDimensions() as {width: number,}

  return (
    <div className={`${width > 600 ? 'mx-28' : 'm-0'}`}>
      <Skeleton variant="rounded" animation="wave" width={'100%'} height={'1000px'}/>
    </div>
  )
}
