module.exports = {
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/zerolr\.github\.io\/pwa\/.*/,
      handler: "networkFirst",
    },
  ],
};
