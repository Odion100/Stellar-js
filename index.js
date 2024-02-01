import { Ollama } from "@langchain/community/llms/ollama";
//http://165.227.96.26:11434
const ollama = new Ollama({
  baseUrl: "http://129.158.235.114:11434", // Default value
  model: "mistral", // Default value
});
console.log("sending request");
const stream = await ollama.stream(`are you an ai choose true or false`);

const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
}

console.log(chunks.join(""));
