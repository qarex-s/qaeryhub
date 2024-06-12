import { getItemsAuditsObj } from "../getPerformanceAudits/getItemsAuditsObj";

export const setComparableObject = (PerformanceSelector) => {
  if (!PerformanceSelector.answerServer) return null;
  const answerServerObj = PerformanceSelector.answerServer;
  const lighthouseResultObj = answerServerObj.lighthouseResult;
  const categoriesObj = lighthouseResultObj.categories;
  const auditsObj = lighthouseResultObj.audits;

  const objItemsMapAuditsAndCategories = getItemsAuditsObj(
    auditsObj,
    categoriesObj
  );
  const comparableObject = {
    siteUrl: lighthouseResultObj.finalUrl,
    generalValue: answerServerObj.loadingExperience.overall_category,
    formFactor: lighthouseResultObj.configSettings.formFactor,
    metrics: [
      auditsObj["first-contentful-paint"],
      auditsObj["largest-contentful-paint"],
      auditsObj["total-blocking-time"],
      auditsObj["cumulative-layout-shift"],
      auditsObj["speed-index"],
    ],
    fetchingDate: lighthouseResultObj.fetchTime,
    performanceCategory: {
      titleCategory: categoriesObj.performance.title,
      scoreCategory: Math.round(categoriesObj.performance.score * 100),
      listAudits: objItemsMapAuditsAndCategories.performanceAudits,
    },
    accessibilityCategory: {
      titleCategory: categoriesObj.accessibility.title,
      scoreCategory: Math.round(categoriesObj.accessibility.score * 100),
      listAudits: objItemsMapAuditsAndCategories.accessibilityAudits,
    },
    bestPracticesCategory: {
      titleCategory: categoriesObj["best-practices"].title,
      scoreCategory: Math.round(categoriesObj["best-practices"].score * 100),
      listAudits: objItemsMapAuditsAndCategories.practicesAudits,
    },
    seoCategory: {
      titleCategory: categoriesObj.seo.title,
      scoreCategory: Math.round(categoriesObj.seo.score * 100),
      listAudits: objItemsMapAuditsAndCategories.seoAudits,
    },
  };
  return comparableObject;
};
