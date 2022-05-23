import * as feeds from "../fake.api/feedback.api.js";
const API = {
    feeds
}

const feedsArr = feeds.fetchAll();
// feedsArr.map((feed) => {
//     console.log(feed.author)
// })