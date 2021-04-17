// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.call(mango, "Добро пожаловать");
// // Добро пожаловать, Манго.

// greetGuest.call(poly, "С приездом");
// // С приездом, Поли.

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// let indexNew = 0;
// let newArr;
// function composeMessage(position) {
//   console.log(
//     `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
//   );
//   // this.message(
//   //   `Готовим ${this.dish} для ${this.email}. Ваш заказ ${index}-й в очереди.`
//   // );
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// for (key of orders) {
//   orders[indexNew].message = composeMessage.call(key, indexNew);
//   indexNew += 1;
// }

//  const messages = orders.map(newArr => newArr.message);

// console.log(messages);



const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((value, index) => composeMessage.call(value, index + 1));
  

console.log(messages);