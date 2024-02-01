import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
const app = express();

const apiProxy = createProxyMiddleware("/", {
  target: "http://129.158.235.114:11434/",
  changeOrigin: false,
  secure: false,
  cookieDomainRewrite: "localhost",
  onProxyRes: function (proxyRes, req, res) {
    const cookies = proxyRes.headers["set-cookie"];
    if (cookies) {
      cookies[0] = cookies[0].replace("; HttpOnly; Secure; SameSite=None", "");
      res.setHeader("Set-Cookie", cookies, req.cookie);
    }

    res.on("finish", () =>
      console.log("Headers:", res.getHeaders()["access-control-allow-origin"])
    );
  },
  onProxyReq: function (proxyReq, req, res) {
    console.log(req.headers.cookie);
    req.headers.cookie && proxyReq.setHeader("Cookie", req.headers.cookie);
  },
});

app.use(apiProxy);
app.use(cors());
app.use(express.json());

app.listen(11434, () => {
  console.log("Server started on http://localhost:11434");
});
