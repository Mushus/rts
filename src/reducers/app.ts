import { upcastingReducer } from 'typescript-fsa-reducers/dist';
import { State, Scene } from '@/declare';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const transitionScene = actionCreator<{ scene: Scene }>(
  'TRANSITION_SCENE'
);

export const transitionSceneHandler = (
  state: State,
  { scene }: { scene: Scene }
) => ({
  ...state,
  scene: {
    ...scene,
    count: 0
  }
});

const app = upcastingReducer<State, State>().case(
  transitionScene,
  transitionSceneHandler
);

export default app;
