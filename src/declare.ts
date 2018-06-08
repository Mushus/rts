export enum SceneType {
  Title = 'title',
  Game = 'game',
}

export interface Scene {
  type: SceneType;
}

export interface State {
  scene: Scene;
  hoge: number;
}

export const initialState: State = {
  scene: {
    type: SceneType.Title
  },
  hoge: 1
};
