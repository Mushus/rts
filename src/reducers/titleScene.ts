import { upcastingReducer } from 'typescript-fsa-reducers/dist';
import { State, Scene } from '@/declare';
import { actionCreatorFactory } from 'typescript-fsa';

const titleScene = upcastingReducer<State, State>();

export default titleScene;
