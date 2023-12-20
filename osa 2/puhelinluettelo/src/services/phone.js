import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
};

const sendPerson = personObject => {
  const request = axios.post(baseUrl, personObject);
  return request
  .then(response => response.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};

const deletePerson = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
      .catch((error) => {
       return Promise.reject(error);
    });
};

const updatePerson = (updatedPerson) => {
  return axios
    .put(`${baseUrl}/${updatedPerson.id}`, updatedPerson)
    .then(response => response.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default { getAll, sendPerson, deletePerson, updatePerson };
