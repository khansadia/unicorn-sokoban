import { useContext } from "react"
import { GameContext } from "./context/GameContextProvider"



function App() {
  const {gamePlan} = useContext(GameContext);

console.log(gamePlan);
  return (
    <>
   
    </>
  )
}

export default App
