import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"
import MemoryGame from "./Memory/Memory";

const Memory = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Let's play, {name}!</p>
      <MemoryGame />
    </View>
  )
}

export default Memory
