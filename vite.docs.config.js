import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * The deployed docs are a SPA: Vercel rewrites every path to docs.html. Vite's
 * dev server would serve index.html (the playground) for those paths instead,
 * which makes a hard refresh on /components/toast open the wrong app. Mirror the
 * production rewrite in dev so routing behaves the same way locally.
 */
function docsSpaFallback() {
  return {
    name: 'docs-spa-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0]

        if (path === '/docs.html') {
          res.writeHead(302, { Location: '/' })
          res.end()
          return
        }

        // Vite's own endpoints and real files keep their paths.
        if (!path || path.startsWith('/@') || path.includes('.')) {
          next()
          return
        }

        req.url = '/docs.html'
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), docsSpaFallback()],
  build: {
    outDir: 'dist-docs',
    rollupOptions: {
      input: {
        index: 'docs.html',
      },
    },
  },
})
