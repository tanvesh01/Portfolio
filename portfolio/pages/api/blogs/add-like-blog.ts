import { getEncryptedAndDecryptedIp, getIpFromReq } from "@utils/api";
import { supabase } from "@utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //   console.log(req);
  const IP = getIpFromReq(req);
  const { encrypted, decrypted } = getEncryptedAndDecryptedIp(IP);

  console.log(IP, encrypted, decrypted);
  res.status(200).send({ IP });

  if (req.method === "POST") {
    // check if encrypted ip address is already there in JSON
    // if they alreay are liked then dont do anything
    // if they are not liked then +1 the counter
  }

  // if (req.method === "GET") {
  // 	const { slug } = req.query;
  // 	let { data, error } = await supabase
  // 		.from('View Counter')
  // 		.select("*")
  // 		.eq('slug', slug)
  // 		.limit(1)
  // 		.single();

  // 	if (error) {
  // 		res.status(200).send({ view_counter: 1, slug, likes: 0 });
  // 	} else {
  // 		res.status(200).send({ ...data });
  // 	}
  // } else {
  // 	res.status(400).send("Bad request");
  // }
};
