// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  order(pizzaName, newPizza, errorPizza) {
    if (pizzaPalace.pizzas.includes(pizzaName)) {
      newPizza(pizzaName);
    } else {
      errorPizza(`В ассортименте нет пиццы с названием ${pizzaName}.`);
    }
  },
};
// Пиши код выше этой строки

  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`)
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }

// Колбэк для onError
function onOrderError(error) {
  console.log(`Ошибка! ${error}`);
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
pizzaPalace.order("Биг майк", makePizza, onOrderError);
pizzaPalace.order("Венская", makePizza, onOrderError);
