# @vedin-pp-se/bolido-tsconfig

Shared `tsconfig.json` presets for libraries and applications

## Recommended

The recommended `tsconfig.json` for general use.

Add to your `tsconfig.json`:

```
"extends": ["@vedin-pp-se/bolido-tsconfig/recommended"]
```

## Cypress

Recommended configuration for Cypress, optionally combined with `recommended`:

Add to your `tsconfig.json`:

```
"extends": ["@vedin-pp-se/bolido-tsconfig/recommended", "@vedin-pp-se/bolido-tsconfig/cypress"]
```

## Vue

Recommended configuration for Vue, optionally combined with `recommended`:

Add to your `tsconfig.json`:

```
"extends": ["@vedin-pp-se/bolido-tsconfig/recommended", "@vedin-pp-se/bolido-tsconfig/vue"]
```
