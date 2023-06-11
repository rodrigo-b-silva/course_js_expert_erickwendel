"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link('../src/Person.js',{default(v){Person=v}},2);

const { describe, it } = mocha
const { expect } = chai


describe('Person', () => {
  it('should return a Person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '1 Bike,Moto 10000 2022-01-01 2022-12-31'
    )
    const expected = {
      from: '2022-01-01',
      to: '2022-12-31',
      vehicles: ['Bike', 'Moto'],
      kmTraveled: '10000',
      id: '1'
    }
    expect(person).to.be.deep.equal(expected)
  })

  it('should format valus', () => {
    const person = new Person({
      from: '2022-01-01',
      to: '2022-12-31',
      vehicles: ['Bike', 'Moto'],
      kmTraveled: '10000',
      id: '1'
    })
    const result = person.formatted('pt-BR')
    const expected = {
      id: 1,
      vehicles: 'Bike e Moto',
      kmTraveled: '10.000 km',
      from: '01 de janeiro de 2022',
      to: '31 de dezembro de 2022'
    }
    expect(result).to.be.deep.equal(expected)
  })
})