import React from "react"

import ThemeToggleButton from "../ui/theme-toggle-button"

const ThemeToggleAnimationsDemo = () => {
  return (
    <div className="h-full w-full flex items-center justify-center ">

      <ThemeToggleButton
        showLabel
        variant="gif"
        url="https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s"
      />



      <ThemeToggleButton showLabel />
      <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start="top-left" />
      <ThemeToggleButton showLabel variant="circle" start="top-right" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start="center" />
    </div>
  )
}

export default ThemeToggleAnimationsDemo
