import { generateText } from "ai";
import { createGoogleGenerativeAI } from '@ai-sdk/google';


const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});


const results = await generateText({
  model: google("gemini-2.5-flash"),
  prompt: "Who is the most powerful super hero and why? Be concise.",
})

console.log(results.text);