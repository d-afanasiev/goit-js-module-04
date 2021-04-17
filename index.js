// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = { service: "Steam" };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

// const gmail = { service: "Gmail" };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."

const pizzaPalace = {
  company: "Pizza Palace",
};

const burgerShack = {
  company: "Burger Shack",
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer("Манго");

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer("Поли");
console.log(pizzaPalaceMessage, burgerShackMessage);