import { updateTask } from "../../index.js";

export function createUpdateButton(todo) {
  const updateButton = document.createElement("button");
  updateButton.classList.add("button-function");

  updateButton.addEventListener("click", () => updateTask(todo));

  const updateIcon = document.createElement("img");
  updateIcon.src = "./assets/icons/icon-update.png";
  updateIcon.alt = "Изменить";
  updateIcon.title = "Изменить";
  updateIcon.width = 24;

  updateButton.append(updateIcon);

  return updateButton;
}
