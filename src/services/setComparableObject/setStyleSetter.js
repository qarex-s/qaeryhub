import { titleColourPaletePerformanceForOldVersion } from "../colorPerformance/titleColourPaletePerformanceForOldVersion";
export const setStyleSetter = (oldVersionSite) => {
  const colourPaletePerformance = titleColourPaletePerformanceForOldVersion;
  if (!oldVersionSite) return null;
  //setting style for old version using spread for obj, additing new style
  const updatedOldVersionSite = {
    ...oldVersionSite,
    speedPagePerformanceItemsObj: {
      performance: {
        ...oldVersionSite.speedPagePerformanceItemsObj.performance,
        score:
          oldVersionSite.speedPagePerformanceItemsObj.performance.score / 100,
        styleSetter: colourPaletePerformance.performance,
      },
      accessibility: {
        ...oldVersionSite.speedPagePerformanceItemsObj.accessibility,
        score:
          oldVersionSite.speedPagePerformanceItemsObj.accessibility.score / 100,

        styleSetter: colourPaletePerformance.accessibility,
      },
      bestPractices: {
        ...oldVersionSite.speedPagePerformanceItemsObj.bestPractices,
        score:
          oldVersionSite.speedPagePerformanceItemsObj.bestPractices.score / 100,

        styleSetter: colourPaletePerformance.bestPractices,
      },
      seo: {
        ...oldVersionSite.speedPagePerformanceItemsObj.seo,
        score: oldVersionSite.speedPagePerformanceItemsObj.seo.score / 100,

        styleSetter: colourPaletePerformance.seo,
      },
    },
  };

  return updatedOldVersionSite;
};
