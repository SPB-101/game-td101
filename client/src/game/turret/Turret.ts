import { Vector } from "../Utils";
import { Game } from "../Game";
import { ITurretState, TurretState } from "./TurretState";
import { Drawable } from "../model/Drawable";

export abstract class Turret implements Drawable {
  name: string;
  rate = 30;
  lastShot = 0;
  radius = 140;
  private _pos: Vector;
  currState: TurretState;

  set pos(value: Vector) {
    this._pos = value;
    this.currState.specifyPos(value);
  }

  get pos() {
    return this._pos;
  }

  constructor(name: string) {
    this.name = name;
  }

  public getState(state: ITurretState): TurretState {
    return new TurretState(state);
  }

  protected drawArc(cx: CanvasRenderingContext2D) {
    cx.beginPath();
    cx.fillStyle = "rgba(255, 255, 255, .3)";
    cx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    cx.fill();
    cx.closePath();
  }

  abstract getStaticState(arc: boolean): TurretState;

  public setState(state: TurretState, pos: Vector = this.pos) {
    this.currState = state;
    this.pos = pos;
  }

  abstract shoot(game: Game): void;

  abstract draw(cx: CanvasRenderingContext2D): void;
}
