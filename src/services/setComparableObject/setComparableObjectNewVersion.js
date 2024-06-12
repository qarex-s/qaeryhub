import { getItemsAuditsObj } from "../getPerformanceAudits/getItemsAuditsObj";
import { titleColourPaletePerformance } from "../colorPerformance/titleColourPaletePerformance";
export const setComparableObjectNewVersion = (PerformanceSelector) => {
  if (!PerformanceSelector.answerServer) return null;
  const answerServerObj = PerformanceSelector.answerServer;
  const lighthouseResultObj = answerServerObj.lighthouseResult;
  const categoriesObj = lighthouseResultObj.categories;
  const auditsObj = lighthouseResultObj.audits;
  const objItemsMapAuditsAndCategories = getItemsAuditsObj(
    auditsObj,
    categoriesObj
  );
  const colourPaletePerformance = titleColourPaletePerformance;
  const comparableObject = {
    siteUrl: lighthouseResultObj.finalUrl,
    generalValue: answerServerObj.loadingExperience.overall_category,
    formFactor: lighthouseResultObj.configSettings.formFactor,
    fetchingDate: lighthouseResultObj.fetchTime,

    metrics: [
      auditsObj["first-contentful-paint"],
      auditsObj["largest-contentful-paint"],
      auditsObj["total-blocking-time"],
      auditsObj["cumulative-layout-shift"],
      auditsObj["speed-index"],
    ],
    speedPagePerformanceItemsObj: {
      performance: {
        title: categoriesObj.performance.title,
        score: categoriesObj.performance.score,
        listAudits: objItemsMapAuditsAndCategories.performanceAudits,
        styleSetter: colourPaletePerformance.performance,
      },
      accessibility: {
        title: categoriesObj.accessibility.title,
        score: categoriesObj.accessibility.score,
        listAudits: objItemsMapAuditsAndCategories.accessibilityAudits,
        styleSetter: colourPaletePerformance.accessibility,
      },
      ["bestPractices"]: {
        title: categoriesObj["best-practices"].title,
        score: categoriesObj["best-practices"].score,
        listAudits: objItemsMapAuditsAndCategories.practicesAudits,
        styleSetter: colourPaletePerformance.bestPractices,
      },
      seo: {
        title: categoriesObj.seo.title,
        score: categoriesObj.seo.score,
        listAudits: objItemsMapAuditsAndCategories.seoAudits,
        styleSetter: colourPaletePerformance.seo,
      },
    },
  };
  return comparableObject;
};
