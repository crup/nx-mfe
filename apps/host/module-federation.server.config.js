// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'host',
  remotes: ['b2c-home', 'c2b-home', 'cms', 'listing'],
};

module.exports = moduleFederationConfig;
