// 'use client'; is no longer necessary as we will dynamically import this component where needed

export default function Page() {
  return (
    <>
      <div>
        <p>Click on a button to redirect:</p>
        <button onClick={() => redirectTo('button1')}>Button 1</button>
        <button onClick={() => redirectTo('button2')}>Button 2</button>
        <button onClick={() => redirectTo('button3')}>Button 3</button>
        <button onClick={() => redirectTo('button4')}>Button 4</button>
      </div>
    </>
  );
}

function redirectTo(redirectUrl: string) {
  // Construct the redirect URL with the query parameter for the specific button
  const url = `/redirectpage?redirectUrl=${redirectUrl}`;
  window.location.href = url;
}
