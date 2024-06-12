export const setColorTheme = (colorTheme) => {
  return colorTheme
    ? {
        //____________________________________________________________GENERAL
        "--shadow-size-background": "30px",
        "--shadow-size-items": "30px",
        "--text-additional-info": "#2a2a2a",
        //____________________________________________________________LOADER

        "--loader-color": "#622e2e",

        //____________________________________________________________HEADER

        "--header-gradient":
          "linear-gradient(90deg, #798ac0 0%, rgb(198, 114, 134) 100%)",
        "--color-header": "#000",
        "--font-weight-header": "400",

        //____________________________________________________________RECOMENDATION

        "--background-recomends-section":
          "linear-gradient(180deg,#343b53 0%,#53384b 100%)",

        //____________________________________________________________METRICS

        "--sep-line-gradient":
          "linear-gradient(90deg, #c8adad28 0%, #a62630 50%, #c8adad28 100%)",
        "--sep-line-vertical-gradient":
          "linear-gradient(0deg, #2518182e 0%, #a62630 50%, #2518182e 100%)",
        //____________________________________________________________METRICS

        "--background-metrics-v2":
          "linear-gradient(90deg,#343b53 0%,#553232 50%,#343b53 100%)",

        //____________________________________________________________FILTER

        "--background-filter-section":
          "linear-gradient(0deg, #b1abba 0%, #aaafbb 100%)",
        "--text-checked": "#202020",
        "--text-filter-title": "#202020",
        "--text-filter-title-query": "#000",
        "--text-filter-query": "#21155ecd",
        "--background-checked": "#aeb0c1",
        //____________________________________________________________INFO-DIAGNOSTIC-ITEM
        "--diagnostic-item": "#a2a2ae",
        "--text-diagnostic-item": "#202020",
        "--border-gradient--active--btn":
          "linear-gradient(145deg, #6b6096 50%, #a04949 100%)",
        //____________________________________________________________SEARCH-BAR
        "--text-white": "#202020",
        "--background-search-bar": "#c2c2c2",
        "--text-placeholder": "#4d4d4d",
        "--btn-gradient": "linear-gradient(145deg, #a46d97 0%, #6772a3 100%)",
        "--btn-gradient-hover":
          "linear-gradient(145deg, #8e5e83 0%, #4a547e 100%)",
        //____________________________________________________________STORY-ROW
        "--story-row-first": "#afafb9",
        "--story-row-second": "#9190a4",
        "--story-row-hover": "#d7d7d7",
        "--text-story-row": "#000",
        "--btn-gradient-check":
          "linear-gradient(120deg, #728acf 0%, rgb(222, 139, 157) 100%)",
        "--text-error-searching": "#622e2e",
        "--background-sorted-active":
          "linear-gradient(120deg, #728acf 0%, rgb(222, 139, 157) 100%)",
        //____________________________________________________________MAIN
        "--text-weight": "400",
        "--main-background": "#b5b5b5",
        "--background-gradient":
          "linear-gradient(180deg,#bebebe 0%,#afabbe 50%,#bebebe 100%)",
        //____________________________________________________________STORY
        "--background-story":
          "linear-gradient(180deg, #9899a9 0%, #a299a2 50%, #bababa 100%)",
      }
    : {};
};
