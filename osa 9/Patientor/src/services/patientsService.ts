import { NonSensitivePatient } from '../types';
import patients from '../data/patientsData';

//no ssn field
const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
    getNonSensitivePatients,
};