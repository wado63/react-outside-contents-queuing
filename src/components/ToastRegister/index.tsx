import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useOutsideContentsQueueController } from "../../hooks/useOutsideContentsQueue";
import { OutsideContent } from "../OutsideContent";
import "./index.css";

export const ToastRegister: FC = () => {
  const { push, shift } = useOutsideContentsQueueController();
  const [toasts, setToasts] = useState<{ id: string; text: string }[]>([]);
  const [text, setText] = useState("");

  const pushToast = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2); // randomなidの作成
    push(id);
    setToasts((prev) => [...prev, { id, text }]);
    setText("");
  };

  const shiftToast = () => {
    shift();
    setToasts((prev) => [...prev.slice(1)]);
  };

  return (
    <>
      <form onSubmit={pushToast}>
        <input
          type="text"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button type="submit">push Toast</button>
      </form>
      {toasts.map(({ id, text }) => (
        <OutsideContent queueId={id} key={id}>
          <Toast text={text} onAnimationEnd={shiftToast} />
        </OutsideContent>
      ))}
    </>
  );
};

const Toast: FC<{ onAnimationEnd: () => void; text: string }> = ({
  onAnimationEnd,
  text,
}) => {
  return (
    <div className="toast" onAnimationEnd={onAnimationEnd}>
      {text}
    </div>
  );
};
