import { useEffect, useRef, useCallback } from "react";

function Second({ props }) {
  const { isRenderFirst } = props;
  const ref = useRef(null);

  // useCallbackを使った方が、パフォーマンス的にお行儀がいいぐらい
  const scrollToDiv = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [ref]);

  useEffect(() => {
    if (isRenderFirst) {
      console.log("scroll");
      scrollToDiv();
    }
  }, [isRenderFirst, scrollToDiv])


  return (
    <div ref={ref} style={{ width: `300px`, height: `300px`, border: "solid" }}>
      Scroll Me!
    </div>
  );
}

export default Second;
