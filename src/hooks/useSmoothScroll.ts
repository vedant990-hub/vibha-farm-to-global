import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }, []);

  const scrollToPosition = useCallback((position: number) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollToPosition
  };
};
