import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHealper.js";

export async function toggleTodoStatus(id, completed) {
  try {
    const { uid, token } = await getUserInfo();

    const response = await fetch(`${host}/${uid}/${id}.json?auth=${token}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });

    if (!response.ok) {
      throw new Error(
        `Не удалось обновить статус задачи. Статус: ${response.status}`
      );
    }

    console.log("Статус задачи обновлен");

    return true;
  } catch (error) {
    throw error;
  }
}
