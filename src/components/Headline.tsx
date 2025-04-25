import EditableInput from "./EditableInput";

interface HeadlineProps {
  text: string;
  textColor: string;
}

function Headline({ text, textColor = "black" }: HeadlineProps) {
  return (
    <div
      className=" text-3xl whitespace-break-spaces px-2 py-4"
      style={{ color: textColor }}
    >
      <EditableInput defaultValue={text} />
    </div>
  );
}

export default Headline;
