interface CalculateBMI {
  value1: number;
  value2: number;
}

const parseArguments = (args: string[]): CalculateBMI => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const calculator = (a: number, b: number, printText: string) => {
  if ((10000 * a) / b / b < 18.5) {
    console.log(printText, (10000 * a) / b / b, "Underweight");
  } else if ((10000 * a) / b / b < 25) {
    console.log(printText, (10000 * a) / b / b, "Normal range");
  } else {
    console.log(printText, (10000 * a) / b / b, "Overweight");
  }
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  
  calculator(
    value1,
    value2,
    `Weight ${value1} kg and height ${value2} cm, the result is:`
  );
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
