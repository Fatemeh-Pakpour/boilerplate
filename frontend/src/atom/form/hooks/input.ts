import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { BindField } from "./models";

export function useFields<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);
  const bind = useBindFields(value, setValue);
  // useEffect(() => {}, [value]);

  return {
    bind,
    // form,
    value,
    setValue,
  };
}

function useBindFields<T>(
  value: T,
  setValue: Dispatch<SetStateAction<T>>
): BindField<T> {
  const onChange = useCallback((value: T) => setValue(value), [setValue]);
  return { _onChange: onChange, _value: value };
}
