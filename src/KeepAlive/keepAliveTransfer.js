import { useRef, useContext, useEffect } from "react";
import { KeepAliveContext } from './KeepAliveContext';

function keepAliveTransfer (KeepAliveComponent, keepAliveId) {
  return function (props) {

    const _ref = useRef(null);
    const { keepAliveStates, setKeepAliveState } = useContext(KeepAliveContext);

    useEffect(() => {
      const state = keepAliveStates[keepAliveId];

      if (state && state.nodes) {
        state.nodes.forEach(node => _ref.current.appendChild(node));
      } else {
        setKeepAliveState({
          reactElement: <KeepAliveComponent { ...props } />,
          keepAliveId,
        })
      }
    }, [keepAliveStates, setKeepAliveState, props]);

    return (
      <div ref={ _ref } className='a'></div>
    );
  }
}

export default keepAliveTransfer;
