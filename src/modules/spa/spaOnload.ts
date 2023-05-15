type TimeoutIndex = ReturnType<typeof setTimeout>;

let timeoutIndex: TimeoutIndex;

export const spaOnload = (
  fn?: (spaCounter: Required<Window['gpnAnalytics']>) => void,
) => {
  const timeout = () => {
    clearTimeout(timeoutIndex);
    if (window.gpnAnalytics?.sendEvent) {
      fn?.(window.gpnAnalytics);
    } else {
      timeoutIndex = setTimeout(timeout, 100);
    }
  };
  timeout();
};
