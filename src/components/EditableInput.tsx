import { useState } from "react";

interface EditableInputProps {
  defaultValue: string;
}

function EditableInput({ defaultValue }: EditableInputProps) {
  const { 0: value, 1: setValue } = useState<string>(defaultValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="outline-none text-inherit border-0 w-fit text-center bg-transparent focus:ring-0 focus:ring-offset-0"
    />
  );
}

export default EditableInput;
