import { State, Action } from '@ngxs/store';

export class AddPositive {
  static readonly type = 'AddPositive';
}

export class AddNegative {
  static readonly type = 'AddNegative';
}

export interface Count {
  positive: number,
  negative: number
}

@State<Count>({
  name: 'count',
  defaults: {
    positive: 0,
    negative: 0
  }
})

export class CountState {
  @Action(AddPositive)
  addPositive(ctx: any) {
    const state = ctx.getState();
    let statePositive = state.positive;
    statePositive++;
    ctx.setState({
      ...state,
      positive: statePositive
    });
  }

  @Action(AddNegative)
  addNegative(ctx: any) {
    const state = ctx.getState();
    let stateNegative = state.negative;
    stateNegative++;
    ctx.setState({
      ...state,
      negative: stateNegative
    });
  }
}
