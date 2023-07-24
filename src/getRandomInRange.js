const getRangomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

export default getRangomInRange;
