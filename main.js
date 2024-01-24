process.env.OPENAI_API_KEY = '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';
const { OpenAI} = require('openai');

const openai = new OpenAI({ key: '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', dangerouslyAllowBrowser: true });

async function makeOpenAIRequest() {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Was ist die Hauptstadt von Frankreich?' },
        ],
      });
  
      console.log('Antwort des Modells:', response.choices[0].message.content);
    } catch (error) {
      console.error('Fehler bei der OpenAI-Anfrage:', error.message);
    }
  }
  
  makeOpenAIRequest();