import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 重点是 base 路径要写你的仓库名
export default defineConfig({
  base: '/line-liff-order/',
  plugins: [react()],
})

