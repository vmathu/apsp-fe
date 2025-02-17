import { Button } from "@/components/ui";
import { formatTime } from "@/lib/utils";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import { useUpdateTask } from "@/hooks/react-query/useTasks";
import { Task } from "@/lib/types";

type FocusTimerCountDownProps = {
  info: Task;
  isRunning: boolean | undefined;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  onClose: () => void;
};

const DurationTimer = 3600;

export function FocusTimerCountDown({
  info,
  isRunning,
  setIsRunning,
  onClose,
}: FocusTimerCountDownProps) {
  const [timeLeft, setTimeLeft] = useState(DurationTimer);
  const [showTick, setShowTick] = useState<boolean | undefined>();

  const [startAt, setStartAt] = useState<Date>();

  const { mutate: updateMutate, isPending: updatePending, isSuccess } = useUpdateTask();

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
        if (timeLeft === 0) {
          setTimeLeft(DurationTimer);
          setIsRunning(undefined);
          setShowTick(true);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [timeLeft, isRunning]);

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  const handleStart = () => {
    if (isRunning === undefined) {
      setStartAt(new Date());
    }
    setIsRunning((prev) => !prev);
    setShowTick(isRunning);
  };

  const handleReset = () => {
    setTimeLeft(DurationTimer);
    setIsRunning(undefined);
    setShowTick(false);
    setStartAt(undefined);
  };

  const onSubmit = () => {
    updateMutate({
      id: info.id,
      payload: {
        ...info,
        focusDurations: [
          ...(info.focusDurations || []),
          {
            start: startAt!.toISOString(),
            duration: DurationTimer - timeLeft,
          },
        ],
      },
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-8 text-6xl font-bold">{formatTime(timeLeft)}</div>
      <div className="flex space-x-4">
        <Button
          onClick={handleStart}
          disabled={updatePending}
          className="rounded-lg px-4 text-white"
        >
          {isRunning === undefined ? "Start" : isRunning ? "Pause" : "Resume"}
        </Button>
        <Button
          variant="ghost"
          onClick={handleReset}
          disabled={updatePending}
          className="rounded-lg px-4"
        >
          Reset
        </Button>
      </div>
      {(!isRunning || timeLeft === 0) && showTick && (
        <div className="mt-8">
          <Button
            variant="ghost"
            className="rounded-full bg-primary p-4 text-white"
            onClick={onSubmit}
            disabled={updatePending}
          >
            <Check className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}
