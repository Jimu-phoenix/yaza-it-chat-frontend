import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {}
  }
})
```

```
NPM_FLAGS="--legacy-peer-deps"