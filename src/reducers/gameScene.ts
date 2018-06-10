import { upcastingReducer } from 'typescript-fsa-reducers/dist';
import { State, Scene, GameSceneState } from '@/declare';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const nextTick = actionCreator<{ count: number }>('NEXT_TICK');

export const nextTickHandler = (
  state: State,
  { count }: { count: number }
) => ({
  ...state,
  scene: {
    ...state.scene,
    count: count
  }
});

const gameScene = upcastingReducer<State, State>().case(
  nextTick,
  nextTickHandler
);

export default gameScene;
