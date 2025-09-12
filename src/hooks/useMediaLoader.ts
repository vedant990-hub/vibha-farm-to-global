import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

export const useMediaLoader = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Show loading initially
    setIsLoading(true);

    // Simple timeout to hide loading after 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Also check for window load event as backup
    const handleWindowLoad = () => {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    };

    // If window is already loaded, hide immediately
    if (document.readyState === 'complete') {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    // Cleanup
    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [setIsLoading]);
};

export const useImageLoader = (imageUrls: string[]) => {
  const { addLoadingItem, removeLoadingItem } = useLoading();

  useEffect(() => {
    if (imageUrls.length === 0) return;

    imageUrls.forEach((url, index) => {
      const id = `image-${index}-${url}`;
      addLoadingItem(id);

      const img = new Image();
      
      const handleLoad = () => {
        removeLoadingItem(id);
      };

      const handleError = () => {
        removeLoadingItem(id);
      };

      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
      img.src = url;
    });

    return () => {
      imageUrls.forEach((url, index) => {
        const id = `image-${index}-${url}`;
        removeLoadingItem(id);
      });
    };
  }, [imageUrls, addLoadingItem, removeLoadingItem]);
};
