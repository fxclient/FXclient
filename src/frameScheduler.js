export function createFrameScheduler(callback, requestFrame = window.requestAnimationFrame.bind(window)) {
  let scheduled = false;
  return () => {
    if (scheduled) return;
    scheduled = true;
    requestFrame(() => {
      scheduled = false;
      callback();
    });
  };
}
