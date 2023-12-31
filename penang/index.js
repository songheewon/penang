// 대강 이런 식으로 API가 넘어올 것이라 생각하고 더미 데이터를 만들어둔 부분입니다.

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = 3000;

// app.use(express.static(path.join(__dirname, "penang/views")));
app.set('views', __dirname + '/views');
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');


// home에는 slogan에 대한 데이터, 게시글에 대한 데이터, shop에 대한 데이터가 넘어갑니다.
app.get("", (req, res) => {
  res.render("home", {
    sloganTitle: "AnotherThinkingLab 어나더씽킹랩",
    sloganDesc: [
      "Thoughts + Education,",
      "토론을 기반으로 한 새로운",
      "교육 실험",
    ],
    sloganFooter: "아이와 부모가 함께 성장하는 행복한 교육을 지향합니다",
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

// board에는 게시글에 대한 데이터, shop에 대한 데이터가 넘아갑니다
app.get("/board", (req, res) => {
  res.render("board", {
    // queryString의 값을 boardId로 합니다
    boardId: req.query.id,
    thumbnailUrl: "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
    title: "독일 의대생이 말하는 독일 교실의 토론 교육",
    summary: "2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다. 2022 지자체 선거를 앞둔 시기, 전국 교육감 후보들 사이에 'IB 도입 공약'이 화두가 됐습니다.",
    author: "anothertinking",
    createdDate: "2022-07-28",
    content: "독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다. 독일은 토론의 나라라 해도 과언이 아닙니다.",
    imgUrl: "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
    shopData: [
      {
        itemId: "1",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "3000",
        salePrice: "1000",
      },
      {
        itemId: "2",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "10000",
        salePrice: "3000",
      },
      {
        itemId: "3",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "6000",
        salePrice: "5000",
      },
      {
        itemId: "4",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "2000",
        salePrice: "500",
      },
      {
        itemId: "5",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "100",
        salePrice: "50",
      },
      {
        itemId: "6",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "100",
        salePrice: "30",
      },
      {
        itemId: "1",
        isOnline: true,
        imgUrl:
          "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg",
        title: "타이틀",
        content: "컨텐츠",
        basicPrice: "3000",
        salePrice: "7000",
      },

    ]
  });
});

// 실행
app.listen(port, () => {
  console.log(`서버가 실행됨 포트 넘버 :  ${port}`);
});

module.exports = app;