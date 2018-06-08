import * as Redux from 'redux'
import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';
import { State, Scene, SceneType } from '@/declare';
import appReducer from '@/reducers/app'
import titleReducer from '@/reducers/titleScene'

const actionCreator = actionCreatorFactory();

const selectReducer = (state: State, action: Redux.Action): State => {
  switch(state.scene.type) {
    case SceneType.Title:
    return titleReducer(state, action)
  }
  return state;
}

export default function reducer(state: State, action: Redux.Action): State {
  return appReducer(selectReducer(state, action), action)
};
