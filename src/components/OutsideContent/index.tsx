import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useOutsideContentsQueue } from "../../hooks/useOutsideContentsQueue";

export const OutsideContent: FC<{ queueId: string }> = ({
  queueId,
  children,
}) => {
  const [qurrentQueue] = useOutsideContentsQueue();

  return queueId === qurrentQueue ? (
    <OutsideContentPortal>{children}</OutsideContentPortal>
  ) : null;
};

const OutsideContentPortal: FC = ({ children }) => {
  const containerElRef = useRef(document.createElement("div"));
  useEffect(() => {
    const containerEl = containerElRef.current;
    document.body.appendChild(containerEl);
    return () => {
      containerEl.remove();
    };
  }, []);

  return createPortal(children, containerElRef.current);
};
