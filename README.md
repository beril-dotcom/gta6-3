# Léo Parpeix Homepage Replica

Static build of the restored interactive homepage replica.

## Run locally

Serve the repository root with any static web server. For example:

```bash
npx serve .
```

The Three.js scene requires WebGL and browser hardware acceleration. Large media, model, and texture files are loaded from the deployed CDN; Basis and Draco decoders are included locally so the opening loader can complete.
