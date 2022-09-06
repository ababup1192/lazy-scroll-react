import { useState } from 'react';
import First from './First';
import Second from './Second';

function App() {
  const [isRenderFirst, setIsRenderFirst] = useState(false);

  return (
    <>
      <First props={{ setIsRenderFirst }} />
      <Second props={{ isRenderFirst }} />
    </>
  );
}

export default App;
