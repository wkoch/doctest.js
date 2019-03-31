/* doctest sum

# Takes 2 numbers, returns the sum.

## It sums 2 positive numbers.
- The sum of 0 and 1 is 1.
- The sum of 3 and 4 is 7.
- The sum of 5 and 6 is 11.

## It sums 2 negative numbers.
- The sum of -0 and -1 is -1.
- The sum of -3 and -4 is -7.
- The sum of -5 and -6 is -11.

## It sums 2 positive or negative numbers.
- The sum of 0 and -1 is -1.
- The sum of 3 and -4 is -1.
- The sum of -5 and 6 is 1.

*/

// Criar o parser

// Regex Inicial: ^[\/][*]\s?(doctest)\s?(\w+)([^*\/]+)[*\/]+
//  Separada o doctest, o sum e o grupo geral de testes.

// Regex secundário:
//  Separa os cenários.

// Regex terciários:
//  Separa os testes.

// Regex final:
//  Separa os valores de cada teste.

// Regex que lê o texto das regras:
// ^- The [<]([^>]+)[>] of [<]([^>]+)[>] and [<]([^>]+)[>] is [<]([^>]+)[>].$

let parsedTestRules = {
  test: {
    name: "Sum takes 2 numbers, returns the sum.",
    scenarios: [
      {
        name: "It sums 2 positive numbers.",
        tests: [
          {
            id: 1,
            test: "The sum of 0 and 1 is 1.",
            function: sum,
            a: 0,
            b: 1,
            result: 1
          },
          {
            id: 2,
            test: "The sum of 3 and 4 is 7.",
            function: sum,
            a: 3,
            b: 4,
            result: 7
          },
          {
            id: 1,
            test: "The sum of 5 and 6 is 11.",
            function: sum,
            a: 5,
            b: 6,
            result: 11
          }
        ]
      },
      {
        name: "It sums 2 negative numbers.",
        tests: [
          {
            id: 1,
            test: "The sum of -0 and -1 is -1.",
            function: sum,
            a: -0,
            b: -1,
            result: -1
          },
          {
            id: 2,
            test: "The sum of -3 and -4 is -7.",
            function: sum,
            a: -3,
            b: -4,
            result: -7
          },
          {
            id: 1,
            test: "The sum of -5 and -6 is -11.",
            function: sum,
            a: -5,
            b: -6,
            result: -11
          }
        ]
      },
      {
        name: "It sums 2 positive or negative numbers.",
        tests: [
          {
            id: 1,
            test: "The sum of 0 and -1 is -1.",
            function: sum,
            a: 0,
            b: -1,
            result: -1
          },
          {
            id: 2,
            test: "The sum of 3 and -4 is -1.",
            function: sum,
            a: 3,
            b: -4,
            result: -1
          },
          {
            id: 1,
            test: "The sum of -5 and 6 is 1.",
            function: sum,
            a: -5,
            b: 6,
            result: 1
          }
        ]
      }
    ]
  }
};

// doctest
function expectEquals(func, a, b, result) {
  if (func(a, b) == result) {
    return true;
  } else {
    return false;
  }
}

function test(parsedTestRules) {
  console.log(parsedTestRules.test.name);

  for (const scenario of parsedTestRules.test.scenarios) {
    console.log(scenario.name);
    for (const test of scenario.tests) {
      let result = null;
      if (expectEquals(test.function, test.a, test.b, test.result)) {
        result = "P";
      } else {
        result = "F";
      }
      console.log(`- ${test.test}: ${result}`);
    }
  }
}

/*
Testing
*/

//
//
// Code to be tested
function sum(a, b) {
  return a + b;
}
