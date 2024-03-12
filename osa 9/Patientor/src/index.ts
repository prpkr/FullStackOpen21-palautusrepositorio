import express from 'express';
import diagnosesRouter from './routes/diagnosesRoute';
import patientsRouter from './routes/patientsRoute';

const app = express();
app.use(express.json());
const PORT = 3003;

app.use('/api/diagnoses', diagnosesRouter);

app.use('/api/patients', patientsRouter);

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});