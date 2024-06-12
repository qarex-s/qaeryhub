import { getInfoValueFromKey } from "./getConvertedAuditsValueFromKey";

export const getItemsAuditsObj = (
  dataLightHoustResultListAudits,
  dataLightHoustResultCategories
) => {
  return {
    performanceAudits: getInfoValueFromKey(
      dataLightHoustResultListAudits,
      dataLightHoustResultCategories.performance.auditRefs
    ),
    accessibilityAudits: getInfoValueFromKey(
      dataLightHoustResultListAudits,
      dataLightHoustResultCategories.accessibility.auditRefs
    ),
    practicesAudits: getInfoValueFromKey(
      dataLightHoustResultListAudits,
      dataLightHoustResultCategories["best-practices"].auditRefs
    ),
    seoAudits: getInfoValueFromKey(
      dataLightHoustResultListAudits,
      dataLightHoustResultCategories.seo.auditRefs
    ),
  };
};
