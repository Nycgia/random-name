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
  const index = Math.floor(Math.random() * messages.length);
  const message = messages[index];
  console.log(message);
};

module.exports = { randomName }
