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

export default function RootLayout({ children, image }: { children: React.ReactNode; image: ImageProps }) {
  const { width, height, initialScale } = viewport(image);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={`width=${width}, height=${height}, initial-scale=${initialScale}`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
