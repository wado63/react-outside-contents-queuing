import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export const ContentsQueueContext = createContext<string[]>([]);
export const ContentsQueueControllerContext = createContext<
  Dispatch<SetStateAction<string[]>>
>(() => {
  // please override me
});

export const ContentsQueueProvider: FC = ({ children }) => {
  const [queue, setQueue] = useState<string[]>([]);

  return (
    <ContentsQueueContext.Provider value={queue}>
      <ContentsQueueControllerContext.Provider value={setQueue}>
        {children}
      </ContentsQueueControllerContext.Provider>
    </ContentsQueueContext.Provider>
  );
};
