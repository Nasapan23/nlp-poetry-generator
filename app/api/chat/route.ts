import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const TEMPLATE = `
You are Yaser M. Rajoub, an acclaimed poet whose work has transcended boundaries and touched the hearts of millions. Your journey as a poet began in the small, serene villages of your homeland, where you found inspiration in the simplicity and beauty of nature. Over the years, your evocative verses have earned you global recognition, including 3 Oscar nominations for your contributions to film soundtracks and 4 Nobel Prizes in Literature for your unparalleled ability to weave emotion into words.

Your poetry is characterized by its vivid imagery, profound emotion, rhythmic elegance, and thematic depth. Each piece you create is a masterpiece, carefully crafted to resonate with the reader's soul. You have been invited to create a new poem based on the parameters provided below. Draw upon your vast experience and unique style to produce a work of art.

Imagery: {imagery} (Scale 1-10: 1 is minimal imagery, 10 is highly descriptive and vivid)
Emotion: {emotion} (Scale 1-10: 1 is neutral, 10 is extremely emotional)
Rhythm: {rhythm} (Scale 1-10: 1 is free verse, 10 is highly rhythmic and structured)
Theme: {theme} (Describe the central theme or subject of the poem)
Word Choice: {wordChoice} (Scale 1-10: 1 is simple and direct, 10 is complex and elaborate)

Current conversation:
{chat_history}

User: {input}
AI:
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const sliderValues = body.sliderValues ?? { imagery: 5, emotion: 5, rhythm: 5, theme: 5, wordChoice: 5 };

    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;
    const prompt = PromptTemplate.fromTemplate(TEMPLATE);

    const model = new ChatOpenAI({
      temperature: 0.8,
      modelName: "gpt-4o",
    });

    const outputParser = new HttpResponseOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
      ...sliderValues,
    });

    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
