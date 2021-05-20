const log = () => ({
  success(logContent) {
    return {
      code: logContent.code,
      text: logContent.text,
      data: logContent.data,
    };
  },
  error(logContent) {
    return {
      code: logContent.code,
      text: logContent.text,
      desc: '',
    };
  },
});

export const LOG = log();
