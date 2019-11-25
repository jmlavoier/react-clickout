import { useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickout = (events = defaultEvents) => {
  const refWrap = useRef();
  let doEvent = () => {};

  const bindClickout = (clickoutFn) => {
    doEvent = clickoutFn;
  };

  useEffect(() => {
    const handler = (event) => {
      const isOut = !!refWrap.current && !refWrap.current.contains(event.target);
      if (isOut) doEvent(event, refWrap);
    };

    events.forEach((event) => {
      document.addEventListener(event, handler);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handler);
      });
    };
  });

  return [refWrap, bindClickout];
};

export default useClickout;
