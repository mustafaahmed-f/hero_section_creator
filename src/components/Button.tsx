import EditableInput from "./EditableInput";

interface ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
}

function Button({ text, textColor, bgColor }: ButtonProps) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
      className="py-1 px-2 rounded-md"
    >
      <EditableInput defaultValue={text} />
    </button>
  );
}

export default Button;
