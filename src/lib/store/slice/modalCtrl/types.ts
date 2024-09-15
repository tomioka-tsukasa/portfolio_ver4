export interface ModalClass {
  id: string;
  pass?: Record<string, any>;
}

export interface InitialState {
  open: boolean;
  active: ModalClass;
}

export type PushAction = ModalClass

export type CloseAction = {
  option?: {}
} | undefined
