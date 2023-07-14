import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi, Configuration } from "openai";

type ResData = {};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  try {
    const prompt = req.body.prompt;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.data.choices[0].message?.content;

    return res.status(200).json({ result });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : reason;
    console.log("API failure:", message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
