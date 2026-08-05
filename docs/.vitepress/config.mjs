import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kitty Blog',
  description: 'Java / Spring Boot / Vue 技术笔记',
  head: [
    ['meta', { name: 'msvalidate.01', content: '91B7399AE12261064EE40FC425A3B381' }],
  ],
  sitemap: {
    hostname: 'https://kitty-0512.github.io',
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/spring-boot-mybatisplus' },
    ],
    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Spring Boot 3 + MyBatis-Plus', link: '/posts/spring-boot-mybatisplus' },
          { text: 'Docker Compose 部署', link: '/posts/docker-compose-deploy' },
          { text: 'Vue3 数据分析仪表盘', link: '/posts/vue3-dashboard' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kitty-0512' },
    ],
  },
})
