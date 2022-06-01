export interface UseFields<T> {
  value: T;
  bind: BindField<T>;
  setValue: (v: T) => void;
  // form: BindForm<T>;
}

export interface BindField<T> {
  _onChange: (v: T) => void;
  _value: T;
}

// interface BindForm<T> {
//   change: (value: T) => void;
// }
