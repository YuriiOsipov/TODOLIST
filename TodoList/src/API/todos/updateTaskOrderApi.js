import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHealper.js";

export async function updateTaskOrderOnServer(taskId, order) {
  try {
    const { uid, token } = await getUserInfo();

    const response = await fetch(
      `${host}/${uid}/${taskId}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Не удалось обновить порядок задач. Статус: ${response.status}`
      );
    }
  } catch (error) {
    throw error;
  }
}
