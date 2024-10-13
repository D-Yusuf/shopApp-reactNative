import instance from ".";
export const getAllItems = async () => {
  const { data } = await instance.get("/mini-project/api/items");
  return data;
};
export const getItemById = async (id) => {
  const { data } = await instance.get(`/mini-project/api/items/${id}`);
  return data;
};
export const createItem = async ({ categoryId, item }) => {
  const { data } = await instance.post(`/mini-project/api/items/${categoryId}`, item);
  return data;
};
