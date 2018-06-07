import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const setName = actionCreator<{ amount: number }>('INCREMENT');

const initialState = {
  hoge: 1
};

const reducer = reducerWithInitialState(initialState).case(
  setName,
  (state, { amount }) => ({
    hoge: state.hoge + amount
  })
);

export default reducer;
