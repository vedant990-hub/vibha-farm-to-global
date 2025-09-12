import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

export const useMediaLoader = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    // Maximum loading time fallback
    const maxLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // 8 seconds max

    const checkMediaLoading = () => {
      const images = document.querySelectorAll('img');
      const videos = document.querySelectorAll('video');
      
      const totalMedia = images.length + videos.length;
      let loadedMedia = 0;

      const checkComplete = () => {
        loadedMedia++;
        if (loadedMedia >= totalMedia) {
          clearTimeout(maxLoadTime);
          setIsLoading(false);
        }
      };

      // If no media elements, hide loading quickly
      if (totalMedia === 0) {
        clearTimeout(maxLoadTime);
        setTimeout(() => setIsLoading(false), 500);
        return;
      }

      // Check images
      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          checkComplete();
        } else if (!img.src || img.src === window.location.href) {
          checkComplete();
        } else {
          const handleLoad = () => {
            checkComplete();
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
          };
          const handleError = () => {
            checkComplete();
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
          };
          img.addEventListener('load', handleLoad);
          img.addEventListener('error', handleError);
        }
      });

      // Check videos
      videos.forEach((video) => {
        if (video.readyState >= 2) {
          checkComplete();
        } else if (!video.src || video.src === window.location.href) {
          checkComplete();
        } else {
          const handleCanPlay = () => {
            checkComplete();
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('error', handleError);
          };
          const handleError = () => {
            checkComplete();
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('error', handleError);
          };
          video.addEventListener('canplay', handleCanPlay);
          video.addEventListener('error', handleError);
        }
      });
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkMediaLoading);
    } else {
      setTimeout(checkMediaLoading, 100);
    }

    return () => {
      clearTimeout(maxLoadTime);
      document.removeEventListener('DOMContentLoaded', checkMediaLoading);
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
