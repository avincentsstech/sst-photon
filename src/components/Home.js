import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"
import LeftNav from "../components/Admin/LeftNav";

const Home = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile">
    <LeftNav />
      <p>Welcome back, {name}!</p>
    </View>
  )
}

export default Home