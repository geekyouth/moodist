# 白噪音

<div align="center">
  <img src="/assets/banner.svg" alt="Moodist Logo Banner" />
  <h2> 👀 Moodist 🌲</h2>
  <p>有助于集中注意力和平静的环境声音</p>
  
  <a href="https://moodist.java666.cn" target="_blank">在线享受</a>
  <br/>
  <a href="https://moodist.vercel.app" target="_blank">备用通道</a>
</div>

---

# docker hub image
<a href="https://moodist.vercel.app" target="_blank">https://hub.docker.com/r/geekyouth/moodist</a>

# docker-compose.yaml
```
version: '3.9'
services:
  moodist:
    image: geekyouth/moodist:v1.2.0
    logging:
      options:
        max-size: 100m
    restart: unless-stopped
    ports:
      - '8080:8080'

```
