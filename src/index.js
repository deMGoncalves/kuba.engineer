/**
 * expr => term oper
 *
 * oper => + term { print('+') } oper
 *      |  - term { print('-') } oper
 *      |  term
 *
 * term => 0 { print('0') }
 *      |  1 { print('1') }
 *      |  ...
 *      |  9 { print('9') }
 */

const Parser = require('@kuba/parser')

console.log(Parser)
