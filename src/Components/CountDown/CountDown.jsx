import React from "react"
import { useEffect, useState } from "react"
export default function CountDown() {
  //mounting
  const [count, setCount] = useState(10)
  useEffect(() => {
    //console.log("Mounting")
    const clearValue = setInterval(() => {
      setCount(pre => {
        //console.log("Updating")
        if (pre === 0) {
          clearInterval(clearValue)
          return 0
        }
        return pre - 1
      })
    }, 1000)
    return function () {
      clearInterval(clearValue)
     // console.log("demounting")
    }
  }, [])
  return (
    <>
      <h1>Counter : {count}</h1>
    </>
  )
}