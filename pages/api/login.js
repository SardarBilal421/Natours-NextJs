// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function (req, res) {
  // const response = await axios.post(
  //   "http://127.0.0.1:200/api/v1/users/login",
  //   req.body,
  //   {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }
  // );
  // console.log(req.body);
  res.status(200).json(req.body);
}
