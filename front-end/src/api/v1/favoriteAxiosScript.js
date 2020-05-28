import http from "@/api/v1/http-common.js";

export default {
  follow(param, success, error) {
    http
      .post(`favorite`, param)
      .then((res) => success(res))
      .catch((err) => error(err));
  },
  searchFavoriteByToId(param, success, error) {
    http
      .get(`favorite/${param}`)
      .then((res) => success(res))
      .catch((err) => error(err));
  },
  unfollow(param, success, error) {
    http
      .delete(`favorite`, { data: param })
      .then((res) => success(res))
      .catch((err) => error(err));
  },
};
