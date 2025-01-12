import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        // Include all your HTML pages here
        main: resolve(__dirname,"index.html") ,
        about: resolve(__dirname,"about.html"),  
        addtoCart: resolve(__dirname,"addtoCart.html") ,    
        products:resolve(__dirname,"products.html"),
        contact:resolve(__dirname,"contact.html"),
        

      },
    },
  },
});
