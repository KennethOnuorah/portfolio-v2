import { useState, useEffect } from 'react'

// function getViewportDimensions() {
//   if(typeof window !== undefined) {
//     const { innerWidth: width, innerHeight: height } = window
//     return {
//       width,
//       height
//     }
//   }
// }

const useViewportDimensions = () => {
  const [dimensions, setDimensions] = useState({})

  useEffect(() => {
    function handleResize() {
      if(typeof window !== undefined) {
        const { innerWidth: width, innerHeight: height } = window
        setDimensions({width, height})
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}

export default useViewportDimensions