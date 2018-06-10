import * as Redux from 'redux';
import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';
import { State, Scene, SceneType } from '@/declare';
import appReducer from '@/reducers/app';
import titleReducer from '@/reducers/titleScene';
import gameSceneReducer from '@/reducers/gameScene';

const actionCreator = actionCreatorFactory();

const selectReducer = (state: State, action: Redux.Action): State => {
  switch (state.scene.type) {
    case SceneType.Title:
      return titleReducer(state, action);
    case SceneType.Game:
      return gameSceneReducer(state, action);
  }
  return state;
};

export default function reducer(state: State, action: Redux.Action): State {
  return appReducer(selectReducer(state, action), action);
}
