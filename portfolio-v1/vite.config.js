import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact()],
    server: {
        port: 3000
    }
})
