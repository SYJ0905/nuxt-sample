const resize = () => ({
  getWidth() {
    return window.innerWidth;
  },
});

export const RESIZE = resize();
