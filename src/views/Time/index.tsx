import { useState } from "react"

import Button from "$components/Button"
import useStartedTime from "$hooks/useStartedTime"

const Time = () => {
  const time = useStartedTime()

  const [isShowingStartTime, setIsShowingStartTime] = useState(false)

  return (
    <div>
      <h1>Home</h1>
      <p>{isShowingStartTime && new Date(time).toLocaleDateString()}</p>
      <div>
        <Button onClick={() => {
          setIsShowingStartTime(prev => !prev)
        }}/>
      </div>
    </div>
  )
}

export default Time