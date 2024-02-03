import { useState, useEffect } from 'react'

function getViewportDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const useViewportDimensions = () => {
  const [dimensions, setDimensions] = useState<{width: number, height: number}>({width: 0, height: 0})

  useEffect(() => {
    function handleResize() {
      setDimensions(getViewportDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setDimensions(getViewportDimensions())
  }, [])

  return dimensions
}

export default useViewportDimensions