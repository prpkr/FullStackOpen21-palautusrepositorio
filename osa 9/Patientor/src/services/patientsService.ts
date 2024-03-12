import { Patient } from '../types';
import patients from '../data/patientsData';

//no ssn field
const getPatients = (): Patient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
    getPatients,
};