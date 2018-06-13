import { upcastingReducer } from 'typescript-fsa-reducers/dist';
import { State, Scene, GameSceneState, GameScene } from '@/declare';
import { actionCreatorFactory } from 'typescript-fsa';
import { KeyboardStatus } from '@/components/gameScene/gameScreen';

const actionCreator = actionCreatorFactory();

interface NextTickParam {
  count: number;
  keyboard: KeyboardStatus;
}
export const nextTick = actionCreator<NextTickParam>('NEXT_TICK');

export const nextTickHandler = (
  state: State,
  { count, keyboard }: NextTickParam
) => {
  const scene = state.scene as GameScene;
  const camera = { ...scene.camera };
  if (keyboard.up) camera.y -= 5;
  if (keyboard.down) camera.y += 5;
  if (keyboard.left) camera.x -= 5;
  if (keyboard.right) camera.x += 5;
  return {
    ...state,
    scene: {
      ...state.scene,
      camera
    }
  };
};

const gameScene = upcastingReducer<State, State>().case(
  nextTick,
  nextTickHandler
);

export default gameScene;
