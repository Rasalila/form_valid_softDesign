let errors = [];
let checkValidity = (input) => {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push(`Заполните пустое поле ${input.placeholder}`);
  }
  if (validity.patternMismatch) {
    errors.push(`Неверный формат заполнения`);
  }
  if (validity.rangeOverflow) {
    let max = input.getAttributeValue(input, "max");
    errors.push(`Максимальное значение не может быть больше чем ${max}`);
  }
  if (validity.rangeUnderflow) {
    let min = input.getAttributeValue(input, "min");
    errors.push(`Минимальное значение не может быть больше чем ${min}`);
  }
};

let checkAll = () => {
  errors = [];
  let inputs = document.querySelectorAll("input, select");

  let form = document.querySelector("form");
  form.addEventListener("button", (event) => {
    if (errors.length > 0) {
      event.preventDefault();
    }
  });

  for (let input of inputs) {
    checkValidity(input);
  }

  document.querySelector(".errorsInfo").innerHTML = errors.join(".<br>");
};
