export const selectRandomData = data => {
  return data[Math.floor(Math.random() * data.length)];
};
