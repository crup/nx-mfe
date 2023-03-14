module.exports = {
  name: 'cms',
  exposes: {
    './Module': 'apps/cms/src/remote-entry.ts',
  },
};
