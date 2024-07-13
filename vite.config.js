import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        imagetools(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
