const getCount = async () => {
  const URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.URL;
  const response = await fetch(`${URL}/api/count`, {
    next: { tags: ["count"] },
  });
  const data: number = await response.json();

  return data;
};

export default getCount;
