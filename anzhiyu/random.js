var posts=["2023/11/15/Algolia搜索引擎配置/","2023/11/15/ChatBase网站聊天机器人配置教程/","2023/10/21/Hexo 从零开始（2）Hexo部署到 GitHub Pages/","2023/10/21/EDU教育邮箱快速申请/","2023/10/21/Hexo 从零开始（3）Butterfly主题安装&基本配置/","2023/10/21/Hexo 从零开始（1）Hexo环境准备/","2023/11/15/NotionNext博客快速建站教程/","2023/10/21/Hexo 从零开始（4）Butterfly主题魔改/","2023/11/15/Twikoo网站评论系统配置教程/","2023/11/15/Twitch Drops Miner 老鼠台自动掉宝软件使用教程/","2023/11/15/Wordpress 宝塔建站教程/","2023/11/17/hello-world/","2023/11/15/如何3分钟在 Windows 11 上启用/","2023/11/15/截图软件推荐-Snipaste /","2023/11/20/探索Typora的魅力：一款高效、简洁直观的 Markdown 编辑器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };