export const viewport = {
  width: 'device-width',
  height: 'calc((device-width / 1.91) + (813px - device-width) / 2)', // Set the height to maintain the 1.91:1 aspect ratio with a centered square image
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
