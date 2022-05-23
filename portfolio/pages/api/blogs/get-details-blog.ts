import { supabase } from "@utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { slug } = req.query;
		let { data, error } = await supabase
			.from('View Counter')
			.select("*")
			.eq('slug', slug)
			.limit(1)
			.single();

		if (error) {
			res.status(200).send({ view_counter: 1, slug, likes: 0 });
		} else {
			res.status(200).send({ ...data });
		}
	} else {
		res.status(400).send("Bad request");
	}
};
