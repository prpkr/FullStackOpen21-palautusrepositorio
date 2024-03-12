export interface Arguments {
  daily_exercises: number[];
  target: number;
}

//odotettu inputti on (process.argv), josta kaksi ekaa itemiä poistetaan, ja ensinmäinen luku on target
const parseCommandLineArguments = (args: Array<string>): Arguments => {
  if (args.length < 4) throw new Error("Not enough arguments");
  const target = Number(args[2]);
  if (isNaN(target)) throw new Error("Target must be a number");

  const daily_exercises = args.slice(3).map((num) => {
    const parsedNum = Number(num);
    if (isNaN(parsedNum)) {
      throw new Error("All daily exercises must be numbers");
    }
    return parsedNum;
  });

  return {
    daily_exercises,
    target,
  };
};

export interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (daily_exercises: number[], target: number ): ExerciseResult => {
  const periodLength = daily_exercises.length;
  const trainingDays = daily_exercises.filter(day => day > 0).length;
  const totalHours = daily_exercises.reduce((acc, cur) => acc + cur, 0);
  const average = totalHours / periodLength;

  const success = average >= target;
  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "Great job, you reached your target!";
  } else if (average >= target * 0.75) {
    rating = 2;
    ratingDescription = "Not bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "You need to work harder";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};


// Command line support
if (require.main === module) {
  try {
    const { daily_exercises, target } = parseCommandLineArguments(process.argv);
    const result = calculateExercises(daily_exercises, target);
    console.log(result);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
}