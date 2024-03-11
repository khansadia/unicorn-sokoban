import React, { ReactElement, createContext, useState } from 'react'

interface IContext {
  gamePlan: IGamePlan[]

}

interface IGamePlan {

}
interface IGameContextProvider {
    children: ReactElement
}

export const GameContext = createContext({} as IContext);
export const GameContextProvider = ({children} : IGameContextProvider) => {
 
    const [gamePlan, setGamePlan] = useState<IGamePlan[]>([
      ["w", "w", "w", "w", "w"],
      ["w", "", "", "w", "w"],
    ]);

    const values: IContext = {
      gamePlan
    }

     return <GameContext.Provider value={values}>{children}</GameContext.Provider>;

}

