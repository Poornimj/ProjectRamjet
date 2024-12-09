document.addEventListener("DOMContentLoaded", () => {
  const startQuestButton = document.getElementById("start-quest");
  const playerMoney = document.getElementById("player-money");
  const questDetails = document.getElementById("quest-details");

  let money = 0;

  startQuestButton.addEventListener("click", () => {
    questDetails.textContent = "Collect 10 gold coins!";
    alert("Quest Started: Collect 10 gold coins!");
  });

  setInterval(() => {
    money += 10;
    playerMoney.textContent = `$${money}`;
  }, 3000);

  document.getElementById("shop-button").addEventListener("click", () => {
    alert("Shop feature coming soon!");
  });

  document.getElementById("inventory-button").addEventListener("click", () => {
    alert("Inventory feature coming soon!");
  });

  document.getElementById("settings-button").addEventListener("click", () => {
    alert("Settings feature coming soon!");
  });
});