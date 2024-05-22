Topic regarding the concepts from the course and labs (use virtual machines, client-server communication, threads, voice recognition. Document with explanations and screenshots + Code)

## 1. Introduction
This project is a web aplication that uses Natural Language Processing (NLP) and a predefined set of 5 values ( Imagery, Emotion, Rythm and Sound, Theme and Message, Word Choice and Language),
and a prompt given by the user to generate a poem in any possible language.

## 2. Technologies
- Next.js
- React.js
- Node.js
- Tailwind CSS
- OpenAI API
- Longchain API

Client server communication is done using Next.js and Node.js. The client side is built using React.js and Tailwind CSS, Langchain. The server side is built using Node.js. The OpenAI API is used to generate the poem.

## Basic Logic of the Application (Explanation)

The has access to a web interface where he can modify the five sliders explained earlier in 1.Introduction, and a text area where he can introduce a prompt.
Then user can press the 'Submit' button and the aplication with create a initial custom prompt based on the values of the sliders and the user input.
The prompt is transformed into a message type accepted by the openAI API and the API will generate a poem based on the prompt.
The api will return the poem and the backend of the aplication will send it to the frontend where it will be displayed to the user.

## 3. Screenshots
![image](https://i.imgur.com/EiZEOcv.png)
![image](https://i.imgur.com/aQc32EN.png)