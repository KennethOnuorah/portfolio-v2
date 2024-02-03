'use client'

import { useState } from "react";
import { Metadata } from "next";
import { useResizeDetector } from "react-resize-detector";
import { Document, Page, pdfjs } from "react-pdf"

import { Typography } from "@mui/material"

import ResumeSkeleton from "./components/ResumeSkeleton";
import useViewportDimensions from "@/lib/hooks/useViewportDimensions";
import getLastModifiedDate from "@/lib/getLastModifiedDate";

import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

import { TbDownload as Download } from "react-icons/tb";

function generateMetadata() : Metadata {
  return {
    title: 'Resume',
    description: "Kenneth Onuorah's resume",
  }
}

export default function ResumePage() {
  const [lastUpdated, setLastUpdated] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const {width: vWidth,} = useViewportDimensions() as {width: number,}

  const { width, ref } = useResizeDetector()

  const updateLastUpdatedDate = async() => {
    const pdf = await pdfjs.getDocument('/docs/resume.pdf').promise
    const data = await pdf.getMetadata()
    setLastUpdated(Object.entries(data.info)[10][1])
  }

  const date = new Date(getLastModifiedDate(lastUpdated)).toLocaleDateString()

  return (
    <main className="flex flex-col justify-center mt-36 mb-24">
      <Typography variant="h3" sx={{fontWeight: 'bold', textAlign: 'center'}}>
        Resume
      </Typography>
      <Typography variant="body1" className="text-center text-gray-500">
        {isLoading ? <em>Loading...</em> : <>Last Updated: {isLoading ? <em>Loading...</em> : date === "Invalid Date" ? <em>Loading...</em> : date}</>}
      </Typography>
      <div className="flex justify-center">
        <a 
          className="transition-all flex items-center gap-1 bg-gray-300 p-2 rounded-md hover:bg-gray-100 my-4"
          href="/docs/resume.pdf" 
          target="_blank"
        >
          <Download/>
          Download
        </a>
      </div>
      {isLoading && <ResumeSkeleton/>}
      <div ref={ref} className={`flex justify-center ${vWidth > 600 ? 'mx-28' : 'm-0'}`}>
        <Document
          file="/docs/resume.pdf" 
          className={'shadow-xl'}
          onLoadSuccess={() => {
            updateLastUpdatedDate()
            setIsLoading(false)
          }}
        >
          <Page pageNumber={1} width={width} renderAnnotationLayer={false}/>
        </Document>
      </div>
    </main>
  )
}
