namespace Types {
  export interface InitialState {
    value: number;
  }

  export interface ChangeAction {
    type: '+' | '-';
    value: number;
  }
}
