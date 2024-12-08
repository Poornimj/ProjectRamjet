document.addEventListener("DOMContentLoaded", () => {
  const startQuestButton = document.getElementById("start-quest");
  const playerMoney = document.getElementById("player-money");
  const questDetails = document.getElementById("quest-details");

  let money = 0;

  // Handle Start Quest Button
  startQuestButton.addEventListener("click", () => {
    questDetails.textContent = "Collect 10 gold coins!";
    alert("Quest Started: Collect 10 gold coins!");
  });

  // Simulate Money Increase (Example Interaction)
  setInterval(() => {
    money += 10;
    playerMoney.textContent = `$${money}`;
  }, 3000);

  // Handle Other Buttons
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
