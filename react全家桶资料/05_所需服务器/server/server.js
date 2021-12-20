const express = require("express")
const axios = require("axios")
const app = express();
app.use((request, response, next) => {
  console.log("请求了");
  next();
})

app.get("/student", function (request, response) {
  const list = [
    {
      login: "学生1",
      id: 1,
    },
    {
      login: "学生2",
      id: 2,
    },
  ]
  response.send(list);
})

/*
  请求地址： http://localhost:3000/search/users?q=aa

  后台路由
    key： /search/users
    value： function () {}
*/
app.get("/search/users", function (request, response) {
  const {q} = request.query
  axios({
    url: 'https://api.github.com/search/users',
    params: {q}
  }).then(response => {
    response.json(response.data)
  })
})

app.get("/search/users2", function (request, response) {
  response.json({
    items: [
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 1,
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 2,
      },
      {
        login: "yyx9908032",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 3,
      },
      {
        login: "ruanyf2",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 4,
      },
      {
        login: "yyx9908033",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 5,
      },
      {
        login: "ruanyf3",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 6,
      },
      {
        login: "yyx9908034",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 7,
      },
      {
        login: "ruanyf4",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 8,
      },
      {
        login: "yyx9908035",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 9,
      },
    ],
  });
});



app.listen(5000, "localhost", (err) => {
  if (!err){
  	console.log("服务器启动成功")
  	console.log("端口：5000")
  } 
  else console.log(err);
})
