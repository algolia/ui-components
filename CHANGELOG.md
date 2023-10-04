## [1.2.2](https://github.com/algolia/ui-components/compare/v1.2.0...v1.2.2) (2023-10-04)


### Bug Fixes

* **types:** don't pollute globals with JSX ([#29](https://github.com/algolia/ui-components/issues/29)) ([d3e3ba3](https://github.com/algolia/ui-components/commit/d3e3ba3c8f930138ea2ecf82129dd4bed4115621))



## [1.2.1](https://github.com/algolia/ui-components/compare/v1.2.0...v1.2.1) (2022-10-17)


### Bug Fixes

* **cx:** return a consistent string type ([#21](https://github.com/algolia/ui-components/issues/21)) ([2ec0751](https://github.com/algolia/ui-components/commit/2ec07513922d73b1387e4b7024392d49c7c517bb)), closes [#20](https://github.com/algolia/ui-components/issues/20)



# [1.2.0](https://github.com/algolia/ui-components/compare/v1.1.5...v1.2.0) (2022-10-13)


### Features

* **shared:** add array support to cx utility ([#18](https://github.com/algolia/ui-components/issues/18)) ([37da61f](https://github.com/algolia/ui-components/commit/37da61f6e63efe749c78b7435517c818ae5f123f))



## [1.1.5](https://github.com/algolia/ui-components/compare/v1.1.4...v1.1.5) (2022-10-12)


### Bug Fixes

* **types:** complete used interface of JSX fallback ([#16](https://github.com/algolia/ui-components/issues/16)) ([2cbcee8](https://github.com/algolia/ui-components/commit/2cbcee8aa4207d6cabdf8162056437f12378e83d))



## [1.1.4](https://github.com/algolia/ui-components/compare/v1.1.3...v1.1.4) (2022-10-10)


### Bug Fixes

* **babel:** remove jsx pragma comment in output ([#14](https://github.com/algolia/ui-components/issues/14)) ([7fc9047](https://github.com/algolia/ui-components/commit/7fc90477b710755be00b92f9cf85e7aa0be28c1b))
* **shared:** make usable when there's no preact or react ([#13](https://github.com/algolia/ui-components/issues/13)) ([9bcee85](https://github.com/algolia/ui-components/commit/9bcee850f0f7eadc074772513a55642962356ed5))



## [1.1.3](https://github.com/algolia/ui-components/compare/v1.1.2...v1.1.3) (2022-07-26)


### Bug Fixes

* add @babel/runtime as a dependency in relevant packages ([#11](https://github.com/algolia/ui-components/issues/11)) ([a31d918](https://github.com/algolia/ui-components/commit/a31d918837bb31232a85b64a73cf40733cf1f1f9))



## [1.1.2](https://github.com/algolia/ui-components/compare/v1.1.1...v1.1.2) (2022-07-25)


### Bug Fixes

* **shared:** remove UMD entry points and add CommonJS ([#9](https://github.com/algolia/ui-components/issues/9)) ([46e7ccf](https://github.com/algolia/ui-components/commit/46e7ccf4feb4733d537c066969eea7aadfd978a3))



## [1.1.1](https://github.com/algolia/ui-components/compare/v1.1.0...v1.1.1) (2022-07-18)


### Bug Fixes

* **highlight-vdom:** remove UMD entry points and add CommonJS ([#7](https://github.com/algolia/ui-components/issues/7)) ([7941870](https://github.com/algolia/ui-components/commit/79418707a7cb8799ecabc6ca7af02e8d91c0656b))



# [1.1.0](https://github.com/algolia/ui-components/compare/v1.1.0...v1.0.0) (2022-07-13)


### Features

* introduce `highlight-vdom` and `shared` packages ([#2](https://github.com/algolia/ui-components/issues/2)) ([5bb888d](https://github.com/algolia/ui-components/commit/5bb888d4c505e5832b83af8d4bdb6582b36fd0b0))



# [1.0.0](https://github.com/algolia/recommend/compare/v1.0.0-experimental.6...v1.0.0) (2021-06-30)

This is the first stable release of the Recommend UI library. Check out the [**upgrade guide**](https://algolia.com/doc/ui-libraries/recommend/introduction/upgrade-guide/#upgrading-from-beta-to-stable) to migrate.

### Bug Fixes

- **release:** bump packages' versions on release ([#46](https://github.com/algolia/recommend/issues/46)) ([cca414f](https://github.com/algolia/recommend/commit/cca414fe5841e1afc2ea16774a2952094ff6aeae))

# [1.0.0-experimental.6](https://github.com/algolia/recommend/compare/v1.0.0-experimental.5...v1.0.0-experimental.6) (2021-06-29)

### Bug Fixes

- **recommend:** only sort items with scores ([#42](https://github.com/algolia/recommend/issues/42)) ([ea94549](https://github.com/algolia/recommend/commit/ea9454920104a515069c8e49dc6c09658202e637))

### Features

- **recommend:** add status state (loading, stalled, idle) ([#43](https://github.com/algolia/recommend/issues/43)) ([9f6ef30](https://github.com/algolia/recommend/commit/9f6ef30e63bd4444116f30afa014dace6e9344b8))

# [1.0.0-experimental.5](https://github.com/algolia/recommend/compare/v1.0.0-experimental.4...v1.0.0-experimental.5) (2021-06-23)

### Bug Fixes

- **recommend:** ignore `items` type in components ([#37](https://github.com/algolia/recommend/issues/37)) ([63121fa](https://github.com/algolia/recommend/commit/63121fa432d96b548ac4ea7632d89afec7f60eea))

### Features

- **recommend:** leverage the new Recommend API client ([#40](https://github.com/algolia/recommend/issues/40)) ([618ee07](https://github.com/algolia/recommend/commit/618ee0759702d46174126832192d314db351242f))

# [1.0.0-experimental.4](https://github.com/algolia/recommend/compare/v1.0.0-experimental.3...v1.0.0-experimental.4) (2021-06-16)

### Bug Fixes

- **horizontal-slider:** add `z-index` to navigation arrows ([8803d29](https://github.com/algolia/recommend/commit/8803d294ee2e64542de17abbe5bbaafb19392368))
- **react:** use FBT hook in `FrequentlyBoughtTogether` component ([#35](https://github.com/algolia/recommend/issues/35)) ([8193798](https://github.com/algolia/recommend/commit/8193798f12ece31662f7dac6ebc85dae1ed48580))

# [1.0.0-experimental.3](https://github.com/algolia/recommend/compare/v1.0.0-experimental.2...v1.0.0-experimental.3) (2021-06-14)

This release renames the packages:

- `@algolia/ui-components-horizontal-slider-js`
- `@algolia/ui-components-horizontal-slider-react`
- `@algolia/ui-components-horizontal-slider-theme`
- `@algolia/ui-components-horizontal-slider-vdom`
- `@algolia/recommend-core`
- `@algolia/recommend-js`
- `@algolia/recommend-react`
- `@algolia/recommend-vdom`

### Features

- rename packages to Recommend ([#33](https://github.com/algolia/recommend/issues/33)) ([4612d0d](https://github.com/algolia/recommend/commit/4612d0dcdd88a11682615498784d48ba69e514c1))
- **horizontal-slider:** change renderer implementation to VDOM ([#28](https://github.com/algolia/recommend/issues/28)) ([e297a92](https://github.com/algolia/recommend/commit/e297a923eebab60e9227d54bd48a8e4472717be8))
- **recommendations:** change renderer implementation to VDOM ([#27](https://github.com/algolia/recommend/issues/27)) ([29edf36](https://github.com/algolia/recommend/commit/29edf36dd1a9f40c91a4d179916298f6c51cb88a))

# [1.0.0-experimental.2](https://github.com/algolia/recommend/compare/v1.0.0-experimental.1...v1.0.0-experimental.2) (2021-05-25)

### Features

- **fbt:** update filter strategy without fallbacks ([#22](https://github.com/algolia/recommend/issues/22)) ([7ebf4f7](https://github.com/algolia/recommend/commit/7ebf4f7d24ffdb963971a5d8591fb11ef72bd9bc))
- **recommendations:** add `fallbackComponent` prop ([#23](https://github.com/algolia/recommend/issues/23)) ([3c6b8b8](https://github.com/algolia/recommend/commit/3c6b8b84beab8cbe8f4af59071872e7a2ed6c191))
- **recommendations:** add `headerComponent` prop ([a23f38c](https://github.com/algolia/recommend/commit/a23f38c885ce02580b9166ea0ba3267ccf57907c))

# [1.0.0-experimental.1](https://github.com/algolia/recommend/compare/v1.0.0-experimental.0...v1.0.0-experimental.1) (2021-05-21)

### Bug Fixes

- **recommendations:** convert scores to integers ([#19](https://github.com/algolia/recommend/issues/19)) ([1d43a04](https://github.com/algolia/recommend/commit/1d43a04642f8481c5c9762030ec2dfa1bc9ea7b7))
- **types:** fix missing types ([#17](https://github.com/algolia/recommend/issues/17)) ([b28963e](https://github.com/algolia/recommend/commit/b28963e144ac97bdd1b3d20cbc05e67f11be8be6))

### Features

- **recommendations:** support `classNames` prop ([#20](https://github.com/algolia/recommend/issues/20)) ([2a006fc](https://github.com/algolia/recommend/commit/2a006fc24099163f9d5c83cdbd99641f66a00f5f))

# [1.0.0-experimental.0](https://github.com/algolia/recommend/compare/v1.0.0-beta.9...v1.0.0-experimental.0) (2021-05-19)

### Features

- **slider**: introduce slider components ([#13](https://github.com/algolia/recommend/issues/13)) ([bd3ff44](https://github.com/algolia/recommend/commit/bd3ff4489a9aa1bfa218e7d3234d04f7f0342592))
- **js:** introduce JavaScript package ([#6](https://github.com/algolia/recommend/issues/6)) ([b73d884](https://github.com/algolia/recommend/commit/b73d884a1e3f1bc060545d8e6cb88bfee330b7e0))
- **transformItems:** Add `transformItems` function to `useRecommendations` hook ([#9](https://github.com/algolia/recommend/issues/9)) ([6d4dded](https://github.com/algolia/recommend/commit/6d4dded6c54ff82b5e570363d031d927d6a12896))
- accept multiple `objectID`s ([#8](https://github.com/algolia/recommend/issues/8)) ([7ebd2e7](https://github.com/algolia/recommend/commit/7ebd2e7af42da7124f2f86082f3cb2bf692c97c1))
- add `searchParameters` prop ([db65cf8](https://github.com/algolia/recommend/commit/db65cf8469a01bbcc181f09f5a921aa72124231a))
- add accessibility translations ([9bc1be4](https://github.com/algolia/recommend/commit/9bc1be44f9361898ad999a92da12b321b209df4b))
- add Translations API ([2625ffe](https://github.com/algolia/recommend/commit/2625ffe2ec59fef24844bf3bcf1f1de796eaede2))
- design slider and grid components ([b797e16](https://github.com/algolia/recommend/commit/b797e16b07b16aad96957f4a2b59e2b65f79535a))
- export `FrequentlyBoughtTogether` and `RelatedProducts` ([3d365fd](https://github.com/algolia/recommend/commit/3d365fdc2009fca9b7a00a7aae75bd51efaf8e4d))
- implement keyboard navigation ([9887eb8](https://github.com/algolia/recommend/commit/9887eb8c74646eba6ade714eca7e4873a24b2f1a))
- make carousel accessible ([4fd4fdb](https://github.com/algolia/recommend/commit/4fd4fdbdffdd5c65327f492c11b77fdd78d1bac6))
- support Insights position ([47f9193](https://github.com/algolia/recommend/commit/47f9193887040dad662699a4c9fa83d07f1b2b02))
- **theme:** bootstrap grid layout ([900a285](https://github.com/algolia/recommend/commit/900a285e950606d4d607284189900c419052375a))
- **theme:** bootstrap inline layout ([74f4051](https://github.com/algolia/recommend/commit/74f40517ef3d0c8886045b20eac5c22ea1d664c3))
- make API generic ([da9735c](https://github.com/algolia/recommend/commit/da9735c0c36a85da3e89ac8a42858c5abd585d36))
- remove InstantSearch ([7866971](https://github.com/algolia/recommend/commit/7866971cf38f3933b7a8b72d08acd3ce9b19392c))
- return object from `useRecommendations` ([bcecce9](https://github.com/algolia/recommend/commit/bcecce9670e46d8a3e031fa33803313159851381))
