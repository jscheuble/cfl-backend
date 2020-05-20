const faker = require('faker');

const createFakeQuestion = () => ({
  question: faker.hacker.phrase() + '?',
  survey_id: Math.floor(Math.random() * 7) + 1
})

exports.seed = function (knex) {
  const fakeQuestions = [];
  const desiredFakeQuestions = 80;

  for (let i = 0; i < desiredFakeQuestions; i++) {
    fakeQuestions.push(createFakeQuestion());
  }

  return knex('question').insert(fakeQuestions);
};
