import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

export const useMediaLoader = () => {
  const { addLoadingItem, removeLoadingItem } = useLoading();

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');
    
    const mediaElements = [...Array.from(images), ...Array.from(videos)];
    
    if (mediaElements.length === 0) {
      return;
    }

    // Add loading items for each media element
    mediaElements.forEach((element, index) => {
      const id = `media-${index}`;
      addLoadingItem(id);

      const handleLoad = () => {
        removeLoadingItem(id);
        element.removeEventListener('load', handleLoad);
        element.removeEventListener('loadeddata', handleLoad);
        element.removeEventListener('error', handleError);
      };

      const handleError = () => {
        removeLoadingItem(id);
        element.removeEventListener('load', handleLoad);
        element.removeEventListener('loadeddata', handleLoad);
        element.removeEventListener('error', handleError);
      };

      if (element.tagName === 'IMG') {
        const img = element as HTMLImageElement;
        if (img.complete && img.naturalHeight !== 0) {
          // Image already loaded
          removeLoadingItem(id);
        } else {
          img.addEventListener('load', handleLoad);
          img.addEventListener('error', handleError);
        }
      } else if (element.tagName === 'VIDEO') {
        const video = element as HTMLVideoElement;
        if (video.readyState >= 3) {
          // Video already loaded enough data
          removeLoadingItem(id);
        } else {
          video.addEventListener('loadeddata', handleLoad);
          video.addEventListener('error', handleError);
        }
      }
    });

    // Cleanup function
    return () => {
      mediaElements.forEach((element, index) => {
        const id = `media-${index}`;
        removeLoadingItem(id);
      });
    };
  }, [addLoadingItem, removeLoadingItem]);
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
