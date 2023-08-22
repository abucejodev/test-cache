const getCount = async () => {
  const response = await fetch("http://localhost:3000/api/count", {
    next: { tags: ["count"] },
  });
  const data: number = await response.json();

  return data;
};

export default getCount;
