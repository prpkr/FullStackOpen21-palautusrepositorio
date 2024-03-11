//exerciseCalculator.ts
interface Values {
  values: number[];
}

//Parsitaan argumentit.
//odotettu inputti on (process.argv), josta kaksi ekaa itemiä poistetaan
const parseArgs = (args: string[]): Values => {
  const numbers = args.slice(2).map((arg) => Number(arg));
  if (numbers.some((num) => isNaN(num))) {
    throw new Error("Provided values were not numbers!");
  }
  return { values: numbers };
};


//Varsinaiset laskutoimitukset
const calculateExercises = (data: number[]) => {
  const target: number = data[0];
  const periodLength: number = data.slice(1).length;
  const filteredData = data.slice(1).filter((value) => value !== 0);
  const trainingDays: number = filteredData.length;
  const sum = data
    .splice(1)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  const average: number = sum / periodLength;
  let success: boolean;
  if (average >= target) {
    success = true;
  } else {
    success = false;
  }
  const rating: number = average / target;
  let ratingDescription: string;
  if (rating > 2) {
    ratingDescription = "overtraining";
  } else if (rating > 1.5) {
    ratingDescription = "heavy training";
  } else if (rating > 0.75) {
    ratingDescription = "training";
  } else {
    ratingDescription = "not training";
  }

  console.log("periodLength: ", periodLength);
  console.log("trainingDays: ", trainingDays);
  console.log("success: ", success);
  console.log("rating: ", rating);
  console.log("ratingDescription: ", ratingDescription);
  console.log("target: ", target);
  console.log("average: ", average);
};

try {
  const { values } = parseArgs(process.argv);
  calculateExercises(values);
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
