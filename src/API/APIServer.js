import { setComparableObject } from "../services/setComparableObject/setComparableObject";

export const createAudits = (dataPerformanceSelector) => {
  const urlAspNet = "https://localhost:7013/api/Performance";

  const objAudits = setComparableObject(dataPerformanceSelector);

  fetch(urlAspNet, {
    method: "POST",
    body: JSON.stringify(objAudits),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
  // alert("work");
};
