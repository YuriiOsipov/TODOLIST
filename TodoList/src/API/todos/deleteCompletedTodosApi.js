import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHealper.js";

export async function deleteCompletedTodos(container) {
  try {
    const { uid, token } = await getUserInfo();

    const completedTodos = Array.from(
      container.querySelectorAll(".todo")
    ).filter((todoElement) => {
      const checkbox = todoElement.querySelector('input[type="checkbox"]');
      return checkbox.checked;
    });

    for (const todoElement of completedTodos) {
      const taskId = todoElement.getAttribute("data-id");

      const deleteResponse = await fetch(
        `${host}/${uid}/${taskId}.json?auth=${token}`,
        {
          method: "DELETE",
        }
      );

      if (!deleteResponse.ok) {
        throw new Error(
          `Не удалось удалить список выполненных. Статус: ${deleteResponse.status}`
        );
      }
      todoElement.remove();
    }

    return true;
  } catch (error) {
    throw error;
  }
}
