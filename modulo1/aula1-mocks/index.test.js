const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expect = [
      {
        "name": "Erick Wendel",
        "id": 13,
        "profession": "JS Instructor",
        "birthDay": 1998
      },
      {
        "name": "Rodrigo Barbosa",
        "id": 545,
        "profession": "Dev",
        "birthDay": 1993
      },
      {
        "name": "Xuxa da Silva",
        "id": 999,
        "profession": "Speaker",
        "birthDay": 1943
      }
    ]
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expect))
  }
})();