import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/project-ironbody-ui/src',
      components: '/project-ironbody-ui/src/components',
    },
  },
  base: '/project-ironbody-ui/',
});
