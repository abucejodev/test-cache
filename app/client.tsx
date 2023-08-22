"use client";

import useFetch from "@core/hooks/use-fetch";
import { useRouter } from "next/navigation";
import getCount from "./get-count";

type Props = {
  count: number;
};

const Client = ({ count: initialCount }: Props) => {
  const { data: count, mutate } = useFetch<number>("count", getCount, {
    fallbackData: initialCount,
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const router = useRouter();

  const handleCountIncrement = async () => {
    if (!count) return;
    mutate(count + 1, { revalidate: false });
    await fetch("/api/count", {
      method: "POST",
    });
    mutate();
    router.refresh()
  };

  return (
    <div>
      Client: {count}{" "}
      <div>
        <button onClick={handleCountIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default Client;
