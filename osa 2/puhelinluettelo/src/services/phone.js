import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
};

const sendPerson = personObject => {
  const request = axios.post(baseUrl, personObject);
  return request.then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
};

const deletePerson = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
};

const updatePerson = (updatedPerson) => {
  return axios
    .put(`${baseUrl}/${updatedPerson.id}`, updatedPerson)
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export default { getAll, sendPerson, deletePerson, updatePerson };
