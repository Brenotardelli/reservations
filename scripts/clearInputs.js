export const clearInputs = (inputs, length) => {
  for (let index = 0; index < length; index++) {
    const input = inputs[index];
    input.value = "";
  }
};
