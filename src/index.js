const api = require('./api');

// Adding some mock users for index called system and type users
const insertUsers = async () => {
  const users = [{
    id: 1,
    name: 'John',
    skills: 'java node react angular',
    title: 'developer'
  },
  {
    id: 2,
    name: 'Jane',
    skills: 'elixir node react elm',
    title: 'developer'
  },
  {
    id: 3,
    name: 'Sean',
    skills: 'java devops',
    title: 'architect'
  }
  ];
  users.forEach(async (user) => await api.create('system', 'users', user));
};

// Searching skills for a user
const searchSkill = async (skill) => {
  const { data } = await api.lazySearch('system', {
    'skills': skill
  });
  return data.hits.hits;
};

// resolve this function to see output
const main = async () => {
  await insertUsers();
  const result = await searchSkill('java');
  console.log(result);
};
