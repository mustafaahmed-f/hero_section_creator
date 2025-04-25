import { useEffect, useRef, useState } from "react";

interface EditableInputProps {
  defaultValue: string;
}

function EditableInput({ defaultValue }: EditableInputProps) {
  const { 0: value, 1: setValue } = useState<string>(defaultValue);

  function handleChange(e: React.ChangeEvent<HTMLDivElement>) {
    setValue(e.target.textContent || "");
  }
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onChange={handleChange}
      className="min-w-[13ch] max-w-full text-inherit bg-transparent outline-none border-0 text-center block whitespace-pre-wrap break-words "
      style={{
        // display: "flex",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {value}
    </div>
  );
}

export default EditableInput;
