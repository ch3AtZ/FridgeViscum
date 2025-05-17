import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

// Create OpenAI instance using SDK v4 syntax
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const RecipeFetch = router.post('/', async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || ingredients.length === 0) {
    return res.status(400).json({ error: 'No ingredients provided.' });
  }

  const prompt = `Given the following ingredients: ${ingredients.join(', ')}, suggest 5 different recipes that can be made using them. List them with title and short description.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;
    res.json({ recipes: reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate recipes.' });
  }
});
