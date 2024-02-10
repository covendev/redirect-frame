import React from 'react';

interface ImageProps {
  width: number;
  height: number;
}

export const viewport = ({ width, height }: ImageProps) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const imageAspectRatio = width / height;
  const screenAspectRatio = screenWidth / screenHeight;

  let viewportWidth: number;
  let viewportHeight: number;

  if (imageAspectRatio > screenAspectRatio) {
    // Image is wider than screen
    viewportWidth = screenWidth;
    viewportHeight = screenWidth / imageAspectRatio;
  } else {
    // Image is taller than or equal to screen
    viewportHeight = screenHeight;
    viewportWidth = screenHeight * imageAspectRatio;
  }

  return {
    width: viewportWidth,
    height: viewportHeight,
    initialScale: 1.0,
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
  image: ImageProps;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, image }) => {
  const { width, height, initialScale } = viewport(image);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={`width=${width}, height=${height}, initial-scale=${initialScale}`} />
      </head>
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
