import { useEffect, useState } from "react";

function First({ props }) {
  const [value, setValue] = useState(0);
  const { setIsRenderFirst } = props;

  useEffect(() => {
    setTimeout(() => {
      setValue(2000);
      // 描画フラグ
      setIsRenderFirst(true);
      console.log("render");
    }, 1000);
  }, [setIsRenderFirst]);


  return (
    value > 0 ?
      <div style={{ width: `${value}px`, height: `${value}px`, border: "solid" }}>
        Lazy Load Container
      </div>
      : <p>Container now loading...</p>
  );
}

export default First;
