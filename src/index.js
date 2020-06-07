const names = [
  "Pedro",
  "Ana",
  "Nicolay",
  "Alex",
  "Diego",
  "Matias",
  "Laura"
];

const randomName = () => {
  const index = Math.floor(Math.random() * names.length);
  return names[index];
};

module.exports = { randomName }
