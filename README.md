# Error repro

```sh
yarn && yarn build && yarn start
```
- navigate to mdx consumer route "/test"

TypeError: t.jsxDEV is not a function
    at i (http://localhost:3000/build/assets/test-3df63586.js:9:223)
    at l (http://localhost:3000/build/assets/test-3df63586.js:10:522)
    at io (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:68:19477)
    at ja (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:70:43691)
    at Da (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:70:39496)
    at id (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:70:39427)
    at $r (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:70:39287)
    at Ni (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:70:35709)
    at Ta (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:70:34665)
    at E (http://localhost:3000/build/assets/entry.client-1dd82fdc.js:55:1562)
