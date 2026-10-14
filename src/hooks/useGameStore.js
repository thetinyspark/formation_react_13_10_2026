import { useContext } from "react";
import GameContext from "../contexts/GameContext";

export default function useGameStore() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameStore: GameContext is null");
  }
  return context;
}
