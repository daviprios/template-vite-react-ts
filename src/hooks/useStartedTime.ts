import { useState } from "react"

const useStartedTime = () => {
  const [startedTime] = useState(new Date().getTime())

  return startedTime
}

export default useStartedTime