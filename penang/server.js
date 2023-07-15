const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 3000;

app.use(express.static(__dirname + "/views"));
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("home", {
    boardData: [
      {
        boardId: "1",
        isNew: true,
        isFree: false,
        category: "토론랩",
        createdDate: "2023.07.11",
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유",
        content: "내용내용내용",
      },
      {
        boardId: "2",
        isNew: false,
        isFree: true,
        category: "토론랩",
        createdDate: "2023.07.11",
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유",
        content: "내용내용내용",
      },
      {
        boardId: "3",
        isNew: true,
        isFree: false,
        category: "토론랩",
        createdDate: "2023.07.11",
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유",
        content: "내용내용내용",
      },
      {
        boardId: "4",
        isNew: false,
        isFree: true,
        category: "토론랩",
        createdDate: "2023.07.11",
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유",
        content: "내용내용내용",
      },
      {
        boardId: "5",
        isNew: true,
        isFree: false,
        category: "토론랩",
        createdDate: "2023.07.11",
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유",
        content: "내용내용내용",
      },
      {
        boardId: "6",
        isNew: false,
        isFree: true,
        category: "토론랩",
        createdDate: "2023.07.11",
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title:
          "왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유왜 뉴스 토론인가?(1) 뉴스 토론이 좋은 7가지 이유",
        content: "내용내용내용",
      },
    ],
    shopData: [
      {
        itemId: "1",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "70000",
        salePrice: "30000",
      },
      {
        itemId: "2",
        isOnline: false,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "80000",
        salePrice: "30000",
      },
      {
        itemId: "3",
        isOnline: false,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "50000",
        salePrice: "30000",
      },
      {
        itemId: "4",
        isOnline: false,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "40000",
        salePrice: "20000",
      },
      {
        itemId: "5",
        isOnline: false,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "20000",
        salePrice: "10000",
      },
      {
        itemId: "6",
        isOnline: false,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "60000",
        salePrice: "10000",
      },
    ],
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/board/:id", (req, res) => {
  res.render("board");
});

app.get("/temp", (req, res) => {
  res.render("temp");
});

app.listen(port, () => {
  console.log(`서버가 실행됨 포트 넘버 :  ${port}`);
});
