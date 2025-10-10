import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio = '16/10',
  priority = false,
  className = '',
  style,
  objectFit = 'contain',
  placeholder = 'blur',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = 'data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoQAAwAAkA4JZwAAvMAD+D/gM/gH8A/YD+Af4B/AH8A/gH8A/gH8AfwD+Af4B/AP4B/AH8A/gH8A/gH8AfwB/AP8A/gH+AfwD//2Q==';
  
  // Fallback image
  const fallbackSrc = '/images/placeholder.svg';

  // Calculate dimensions if aspectRatio is provided
  let computedWidth = width;
  let computedHeight = height;
  
  if (aspectRatio && !height && width) {
    const [widthRatio, heightRatio] = aspectRatio.split('/').map(Number);
    computedHeight = Math.round((width * heightRatio) / widthRatio);
  } else if (aspectRatio && !width && height) {
    const [widthRatio, heightRatio] = aspectRatio.split('/').map(Number);
    computedWidth = Math.round((height * widthRatio) / heightRatio);
  }

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-background-cream flex items-center justify-center ${className}`}
        style={{ aspectRatio }}
      >
        <span className="text-primary-gray text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      {isLoading && (
        <div className="absolute inset-0 bg-background-cream animate-pulse" />
      )}
      
      {computedWidth && computedHeight ? (
        <Image
          src={src}
          alt={alt}
          width={computedWidth}
          height={computedHeight}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          sizes={sizes}
          style={{
            objectFit,
            width: '100%',
            height: '100%',
            ...style
          }}
          onLoad={handleLoadingComplete}
          onError={handleError}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          sizes={sizes}
          style={{ 
            objectFit,
            ...style
          }}
          onLoad={handleLoadingComplete}
          onError={handleError}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
    </div>
  );
};

export default ImageOptimizer;