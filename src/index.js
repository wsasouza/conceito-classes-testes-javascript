const assert = require('assert');
const Employee = require('./employee');
const Manager = require('./manager');
const Util = require('./util');

const GENDER = {
  male: 'male',
  female: 'female',
};

{
  const employee = new Employee({
    name: 'Priscilla Souza',
    gender: GENDER.female,
  });

  assert.throws(() => employee.birthYear, {
    message: 'You must define age first!',
  });
}

const CURRENTY_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENTY_YEAR;

{
  const employee = new Employee({
    name: 'Walter Souza',
    gender: GENDER.male,
    age: 20,
  });

  assert.deepStrictEqual(employee.name, 'Mr. Walter Souza');
  assert.deepStrictEqual(employee.age, undefined);
  assert.deepStrictEqual(employee.gender, undefined);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

  const expectedBirthYear = 2001;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  // não tem set, não vai mudar!!
  employee.birthYear = new Date().getFullYear() - 80;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  employee.age = 80;
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log('\n --------employee---------');
  console.log('employee.name', employee.name);
  console.log('employee.age', employee.age);
  console.log('employee.gender', employee.gender);
  console.log('employee.grossPay', employee.grossPay);
  console.log('employee.netPay', employee.netPay);
}

{
  const manager = new Manager({
    name: 'João da Cunha',
    gender: GENDER.male,
    age: 18,
  });

  assert.deepStrictEqual(manager.name, 'Mr. João da Cunha');
  assert.deepStrictEqual(manager.age, undefined);
  assert.deepStrictEqual(manager.gender, undefined);
  assert.deepStrictEqual(manager.birthYear, 2003);
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

  console.log('\n --------manager---------');
  console.log('manager.name', manager.name);
  console.log('manager.age', manager.age);
  console.log('manager.gender', manager.gender);
  console.log('manager.grossPay', manager.grossPay);
  console.log('manager.netPay', manager.netPay);
}
