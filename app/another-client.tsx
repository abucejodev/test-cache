"use client";

import useFetch from "@core/hooks/use-fetch";
import getCount from "./get-count";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  count: number;
};

const AnotherClient = ({ count: initialCount }: Props) => {
  const { data: count } = useFetch<number>("count", getCount, {
    fallbackData: initialCount,
    revalidateOnMount: false,
    // revalidateOnFocus: false,
    // revalidateIfStale: false,
  });

  const [load, setLoad] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (initialCount !== count) {
      console.log({ count, initialCount });
      setLoad(true);
    }
  }, [count]);

  return (
    <div>
      Another Client: {count}
      {load ? (
        <div>
          <button onClick={() => router.refresh()}>Reload</button>
        </div>
      ) : null}
    </div>
  );
};

export default AnotherClient;
