import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';
import { State, Scene } from '@/declare';

const actionCreator = actionCreatorFactory();

export const setName = actionCreator<{ amount: number }>('INCREMENT');
export const transitionScene = actionCreator<{ scene: Scene }>(
  'TRANSITION_SCENE'
);

const reducer = reducerWithoutInitialState<State>()
  .case(setName, (state, { amount }) => ({
    ...state,
    hoge: state.hoge + amount
  }))
  .case(transitionScene, (state, { scene }) => ({
    ...state,
    scene
  }));

export default reducer;
