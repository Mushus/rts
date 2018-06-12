export enum SceneType {
  Title = 'title',
  Game = 'game'
}

export interface GameScene {
  type: SceneType.Game;
  camera: GameCamera;
  field: GameField;
}

export interface GameCamera {
  x: number;
  y: number;
}
export interface GameField {
  width: number;
  height: number;
  source: number[];
}

export interface TitleScene {
  type: SceneType.Title;
}

export type Scene = GameScene | TitleScene;

export interface State {
  scene: Scene;
}

export const initialState: State = {
  scene: {
    type: SceneType.Title
  }
};

export interface GameSceneState extends State {
  count: number;
}
