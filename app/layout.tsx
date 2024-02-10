export const viewport = {
  width: 'device-width',
  height: 'calc((100vw * 1.91) / 1)', // Calculate height based on the viewport width and aspect ratio
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
