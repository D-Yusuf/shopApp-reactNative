import instance from ".";

export const getAllCategories = async () => {
    try {
        const { data } = await instance.get("/mini-project/api/categories");
        return data;
        
    } catch (error) {
        console.log(error)
    }
};

export const getCategoryById = async (id) => {
  const { data } = await instance.get(`/mini-project/api/categories/${id}`);
  return data;
};

export const createCategory = async (category) => {
  const { data } = await instance.post("/mini-project/api/categories", category);
  return data;
};
