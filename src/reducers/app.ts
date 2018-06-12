import { upcastingReducer } from 'typescript-fsa-reducers/dist';
import { State, Scene, SceneType } from '@/declare';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const transitionScene = actionCreator<{
  scene: { type: SceneType; [x: string]: any };
}>('TRANSITION_SCENE');

const createDefaultScene = (type: SceneType): Scene => {
  switch (type) {
    case SceneType.Title:
      return {
        type: SceneType.Title
      };
    case SceneType.Game:
      return {
        type: SceneType.Game,
        width: 100,
        height: 100,
        field: new Array(100 * 100).fill(0)
      };
  }
};

export const transitionSceneHandler = (
  state: State,
  { scene }: { scene: { type: SceneType; [x: string]: any } }
): State => {
  console.log(scene);
  return {
    ...state,
    scene: {
      ...createDefaultScene(scene.type),
      ...scene
    } as Scene
  };
};

const app = upcastingReducer<State, State>().case(
  transitionScene,
  transitionSceneHandler
);

export default app;
