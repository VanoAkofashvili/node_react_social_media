import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/notes`);
  return response.data;
};

const addNote = async (newNote) => {
    const response = await axios.post(`${baseUrl}/notes`, newNote)
    return response.data
}

export default { getAll, addNote };
