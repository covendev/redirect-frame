export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* First line of buttons */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ marginRight: '10px' }}>Button 1</button>
          <button style={{ marginRight: '10px' }}>Button 2</button>
        </div>
        {/* Second line of buttons */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ marginRight: '10px' }}>Button 3</button>
          <button>Button 4</button>
        </div>
        {/* Render children */}
        {children}
      </body>
    </html>
  );
}
