import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET
export const GET = async (request, { params }) => {
    try {
        await connectDB();
        const prompt = await Prompt.findById(params.id).populate("creator");

        if (!prompt) return new Response("Prompt not found", { status:404 });

        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const { prompt, tag } = await request.json();

    try {
        await connectDB();

        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) return new Response("Prompt not found", { status:404 });

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to update the prompt", {
            status: 500
        })
    }
}

// DELETE
export const DELETE = async (request, { params }) => {
    try {
        await connectDB();
        
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted sussessfully", { status: 200 });
    } catch (error) {
        return new Response("Failed to delete the post", { status: 500 });
    }
}