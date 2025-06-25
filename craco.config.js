module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "node_modules/@vectord/styles/dist/base.scss";
        `,
      },
    },
  },
};
