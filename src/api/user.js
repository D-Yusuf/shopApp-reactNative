import instance from ".";

export const getUser = async (id) => {
    const response = await instance.get(`/mini-project/api/users/${id}`)
    return response.data
}


