type AnyFunction = (...args: any[]) => void;

export const debounce = (func: AnyFunction, delay: number): AnyFunction => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
