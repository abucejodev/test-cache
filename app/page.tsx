import AnotherClient from "./another-client";
import Client from "./client";
import getCount from "./get-count";

const Home: Page = async () => {
  const count = await getCount();

  return (
    <main>
      {count}
      <AnotherClient count={count} />
      <Client count={count} />
    </main>
  );
};

export default Home;
