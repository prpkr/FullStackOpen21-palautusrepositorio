export interface CalculateBMI {
  weight: number;
  height: number;
}

export const calculateBMI = (weight: number, height: number): string => {
  const bmi = (10000 * weight) / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal range";
  } else {
    return "Overweight";
  }
};


// Command line support
const parseArguments = (args: Array<string>): CalculateBMI => {
  if (args.length !== 2) throw new Error("Incorrect number of arguments. Please provide two numbers: weight (kg) and height (cm).");

  const weight = Number(args[0]);
  const height = Number(args[1]);

  if (isNaN(weight) || isNaN(height)) {
    throw new Error("Provided values were not numbers!");
  }

  return {
    weight,
    height,
  };
};

if (require.main === module) {
  try {
    const { weight, height } = parseArguments(process.argv.slice(2));
    const result = calculateBMI(weight, height);
    console.log(`For weight ${weight} kg and height ${height} cm, the BMI category is: ${result}`);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    console.log(errorMessage);
  }
}
