import express from 'express';
import { calculateBMI } from './bmiCalculator';
import { calculateExercises, Arguments } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const bmi = calculateBMI(weight, height);
  res.json({
    weight,
    height,
    bmi
  });
});

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body as Arguments;

  if (!daily_exercises || !target) {
      return res.status(400).json({ error: 'parameters missing' });
  }

  if (!Array.isArray(daily_exercises) || !daily_exercises.every(d => typeof d === 'number') || typeof target !== 'number') {
      return res.status(400).json({ error: 'malformatted parameters' });
  }

  const result = calculateExercises( daily_exercises, target);
  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});