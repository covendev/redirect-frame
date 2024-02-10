export const viewport = {
  width: 'device-width',
  height: 'device-width', // Set both width and height to 'device-width' to maintain a 1:1 aspect ratio
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={`width=${viewport.width}, height=${viewport.height}, initial-scale=${viewport.initialScale}`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
