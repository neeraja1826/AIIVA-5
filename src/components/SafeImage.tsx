import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  onFail?: () => void;
}

// Renders nothing when there is no source or the image fails to load.
export function SafeImage({ src, onFail, alt = '', ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      onError={() => {
        setFailed(true);
        onFail?.();
      }}
      {...rest} />);


}