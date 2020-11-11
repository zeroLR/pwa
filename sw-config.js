module.exports = {
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/zerolor\.github\.io\/pwa\/.*/,
      handler: "networkFirst",
    },
  ],
};
