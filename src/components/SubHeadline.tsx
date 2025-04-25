import EditableInput from "./EditableInput";

interface SubHeadlineProps {
  text: string;
  textColor: string;
}

function SubHeadline({ text, textColor }: SubHeadlineProps) {
  return (
    <div
      className=" text-xl whitespace-break-spaces px-2 py-4"
      style={{ color: textColor }}
    >
      <EditableInput defaultValue={text} />
    </div>
  );
}

export default SubHeadline;
