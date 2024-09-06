export interface ModalClass {
  id: string;
  type: 'works' | string;
  pass?: any;
}

export interface InitialState {
  open: boolean;
  active: ModalClass;
}

export type PushAction = ModalClass

export type CloseAction = {
  option?: {}
} | undefined
