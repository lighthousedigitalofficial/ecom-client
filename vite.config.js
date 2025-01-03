/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
    server: {
        port: 80,
    },
    plugins: [
        react(),
        visualizer({
            emitFile: true,
            filename: 'stats.html',
            open: true,
        }),
    ],
})
