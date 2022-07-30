const inquirer = require('inquirer');

const request = require('request')





// const country = process.argv[2];
// const number = process.argv[3];

const getCode = (country,number) => {
  const url = "https://jsonmock.hackerrank.com/api/countries?name=" + country;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      return console.log(error);
    } else if (!response.body.data[0]) {
      return console.log(-1);
    } else {
  
      const codes = response.body.data[0].callingCodes;
      const len = codes.length;
      console.log(
        "+" + response.body.data[0].callingCodes[len - 1] + " " + number
      );
    }
  });
};

const questions = [
  {
    type: 'input',
    name: 'country',
    // message: 'Please enter country name!'
  }, {
    type: 'input',
    name: 'number',
    // message: 'Please enter phone number!',
    default: function(){
      return "";
    }
  }
]

inquirer.prompt(questions).then(answers=> {
  getCode(answers.country,answers.number)
})

