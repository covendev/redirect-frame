interface ImageProps {
  width: number;
  height: number;
}

export const viewport = ({ width, height }: ImageProps) => {
  const aspectRatio = width / height;
  const viewportWidth = Math.min(800, window.innerWidth); // Maximum width of 800 pixels
  const viewportHeight = viewportWidth / aspectRatio;
  return {
    width: viewportWidth,
    height: viewportHeight,
    initialScale: 1.0,
  };
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { width, height } = { width: 3, height: 2 }; // Replace these values with the actual dimensions of your image
  const { width: viewportWidth, height: viewportHeight, initialScale } = viewport({ width, height });
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={`width=${viewportWidth}, height=${viewportHeight}, initial-scale=${initialScale}`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
