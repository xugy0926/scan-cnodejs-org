扫描 [https://cnodejs.org](https://cnodejs.org) 文章，存储在 leanCode 上。

#### 注意

使用 leanCode 免费版，总请求数不超过每日 30,000 次。 超过请求次数会返回错误。

```
{ error: { code: 140, error: '今天的 API 调用总次数已超过开发版限制。' } }
```

#### 扫描所有文章

2 秒扫描一次 cnodejs。

node scan-all-topics.js

#### 扫描最新文章

1 分钟扫描一次 cnodejs 上最新的 10 条数据。

node scan-latest.js