import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
          // src 目录路径
        '@': path.resolve(__dirname, 'src'),
          // 公共组件导入路径
	      '@modules': path.resolve(__dirname, 'src/modules/components')
        }
    },
    plugins: [vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({ importStyle: 'less' }), // ant-design-vue
          // ElementPlusResolver(), // Element Plus
          // VantResolver(), // Vant
        ]
      })
    ],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8080
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: { 'primary-color': 'red' },
          javascriptEnabled: true, // 这是必须的
        },
      },
    }
    
});

