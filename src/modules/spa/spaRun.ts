export const spaRun = () => {
  window.gpnSpaUrl = 'https://spa-back.gazprom-neft.ru/events';
  window.gpnCounterId = 386;
  window.apiVersion = '1.0';
  const headEl = document.getElementsByTagName('head')[0];
  const counterLoadingScript = document.createElement('script');
  counterLoadingScript.async = true;
  counterLoadingScript.src =
    'https://spa-back.gazprom-neft.ru/static/counter.js';
  headEl.appendChild(counterLoadingScript);
};
