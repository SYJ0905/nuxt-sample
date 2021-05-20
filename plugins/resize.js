const resize = () => ({
  async getWidth() {
    return window.innerWidth;
  },
});

export const RESIZE = resize();
