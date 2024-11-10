import { setComparableObject } from "../services/setComparableObject/setComparableObject";

export const createAudits = (dataPerformanceSelector) => {
  const urlAspNet = "https://localhost:7013/api/Performance";

  const objAudits = setComparableObject(dataPerformanceSelector);

  fetch(urlAspNet, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: JSON.stringify(objAudits),
  }).then((resp) => resp.json());
  alert("work");
};
