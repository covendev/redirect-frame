export const viewport = {
  width: 'device-width',
  height: 'calc(2 * device-width / 3)', // Set the height based on a 3:2 aspect ratio
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
