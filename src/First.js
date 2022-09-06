import { useEffect, useState } from "react";

function First({ props }) {
  const [value, setValue] = useState(0);
  const { setIsRenderFirst } = props;

  useEffect(() => {
    const f = async () => {
      await sleep(1000);
      setValue(2000);
      // 描画フラグ
      setIsRenderFirst(true);
      console.log("render");
    }
    f();
  }, [setIsRenderFirst]);


  return (
    value > 0 ?
      <div style={{ width: `${value}px`, height: `${value}px`, border: "solid" }}>
        Lazy Load Container
      </div>
      : <p>Container now loading...</p>
  );
}

const sleep = (time) => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, time);
})

export default First;
