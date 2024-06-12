export const getInfoValueFromKey = (auditsObj, auditsArray) => {
  const newAuditsDescription = auditsArray.map((audit) => {
    return (
      // audit.group !== "hidden" &&
      // audit.group !== null &&
      audit.weight >= 0 &&
      auditsObj[audit.id].score < 1 &&
      auditsObj[audit.id].score != null && {
        title: auditsObj[audit.id].title,
        description: auditsObj[audit.id].description,
      }
    );
  });
  return newAuditsDescription.filter((audit) => audit != false);
};
