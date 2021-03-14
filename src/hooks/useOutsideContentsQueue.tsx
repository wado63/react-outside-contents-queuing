import { useContext, useMemo } from "react";
import {
  ContentsQueueContext,
  ContentsQueueControllerContext,
} from "../contexts/OutsideContentsQueueContext";

export const useOutsideContentsQueue = () => useContext(ContentsQueueContext);

type QueueController = {
  push: (queueId: string) => void;
  unshift: (queueId: string) => void;
  shift: () => void;
};
export const useOutsideContentsQueueController = () => {
  const setQueue = useContext(ContentsQueueControllerContext);
  const controller = useMemo<QueueController>(
    () => ({
      push: (queueId) => {
        setQueue((prev) => [...prev, queueId]);
      },
      unshift: (queueId) => {
        setQueue((prev) => [queueId, ...prev]);
      },
      shift: () => {
        setQueue((prev) => [...prev.slice(1)]);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return controller;
};
