const voice = document.querySelector('.voice');
const voice2text = document.querySelector('.voice2text');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();
recorder.lang = 'en-US';

const robot = document.querySelector('#robot')
const circle = document.querySelector('#circle')
const chatbotContainer = document.querySelector('#chatbot-container')
robot.addEventListener('click', startChatbot);
robot.addEventListener('dblclick',function(){
    chatbotContainer.classList.toggle('visibility')
});

//show chatbot container on click
function startChatbot() {
      circle.classList.add('paused');
      chatbotContainer.classList.add('chatbot-container');
      chatbotContainer.style.overflow="auto";
      chatbotContainer.style.width="30%";
  }
//const chatbotContainer = document.querySelector('#chatbot-container')

//adding a 'human' chat window
function addHumanText(text) {
    //creating a div containing this window
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");
    //creating a <p> inside the div
    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");
    //creating a text element and appending it to paragraph
    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText)
    //appending whole to a div, and returning it
    chatContainer.appendChild(chatBox)
    return chatContainer;
};


function addBotText(text) {
  //creating a div containing this window
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  //creating a <p> inside the div
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  //creating a text element and appending it to paragraph
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  //appending whole to a div, and returning it
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that";

    
    if(message.toLowerCase().includes('i would like to play color game')) {
        speech.text = 'Great choice, redirecting to Golor Game '
        window.location.replace("https://mateuszmagiera.github.io/colorGame/")
    }
    if(message.toLowerCase().includes('color game')) {
        speech.text = 'Great choice, redirecting to Golor Game '
        window.location.replace("https://mateuszmagiera.github.io/colorGame/")
    }
    if(message.toLowerCase().includes('google')) {
        speech.text = 'Great choice, redirecting to Google '
        window.location.replace("https://mateuszmagiera.github.io/colorGame/")
    }
    if(message.toLowerCase().includes('netflix')) {
        speech.text = 'Great choice, redirecting to our subpage about Netflix '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/netflix.html")
    }
    if(message.toLowerCase().includes('knitting')) {
        speech.text = 'Nothing like a homemade scarf! Lets find something adequate for you '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/knitting.html")
    }
    if(message.toLowerCase().includes('yoga')) {
        speech.text = 'Interesting choice, redirecting to a yoga webpage '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/yoga.html")
    }
    if(message.toLowerCase().includes('video games')) {
        speech.text = 'Excelent choice, redirecting to a website about video games '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/videogames.html")
    }
    if(message.toLowerCase().includes('online shopping')) {
        speech.text = 'Ok, but first check if you have enough money. Just kidding, redirecting to a website about online shopping '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/onlineshopping.html")
    }
    if(message.toLowerCase().includes('gardening')) {
        speech.text = 'Great choice, redirecting to a gardening website '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/gardening.html")
    }
    if(message.toLowerCase().includes('cooking')) {
        speech.text = 'Great choice, redirecting a website about cooking '
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/cooking.html")
    }
    if(message.toLowerCase().includes('drawing')) {
        speech.text = 'Great choice, redirecting a website about drawing'
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/drawing.html")
    }
    if(message.toLowerCase().includes('painting')) {
        speech.text = 'Great choice, redirecting a website about painting'
        window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/painting.html")
    }
    if(message.toLowerCase().includes('who are you?')) {
        speech.text = 'I am a chatbot created by a CoronaVirus team members '
        window.location.replace("https://mateuszmagiera.github.io/colorGame/")
    }
    if(message.toLowerCase().includes('what are your functions')) {
        speech.text = 'I am here to entertain you and lead you through our hobby page '
        window.location.replace("https://mateuszmagiera.github.io/colorGame/")
    }
    // chatbot hobby questions
    speech.text = "I am a friendly bot that will help you find an interesting activity to do in your free time! Firstly, do you like to express yourself in a creative way?"
    if(message.toLowerCase().includes('yes')) {
        speech.text = "Do you prefer to work with paper or fabric?"
    }
        if(message.toLowerCase().includes('fabric')) {
            speech.text = 'Nothing like a homemade scarf! Lets find something adequate for you '
            window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/knitting.html")
        }
    
        if(message.toLowerCase().includes('paper')) {
            speech.text = "Do you prefer to draw or paint?"
        }
            if(message.toLowerCase().includes('paint')||message.toLowerCase().includes('painting')) {
                speech.text = 'Great choice, redirecting a website about painting'
                window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/painting.html")
            }
        
            if(message.toLowerCase().includes('draw')||message.toLowerCase().includes('drawing')){
                speech.text = 'Great choice, redirecting a website about drawing'
                window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/drawing.html")
            }
        
        
    if(message.toLowerCase().includes('no')||message.toLowerCase().includes('nowe')) {
        speech.text = "Do you want to move around or sit in front of a computer or TV?"
    }
        if(message.toLowerCase().includes('move')) {
            speech.text = "Would you rather exercise, grow plants or cook some food?"
        }
            if(message.toLowerCase().includes('cook')||message.toLowerCase().includes('food')) {
                speech.text = 'Great choice, redirecting a website about cooking '
                window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/cooking.html")
            }
            if(message.toLowerCase().includes('exercise')||message.toLowerCase().includes('workout')||message.toLowerCase().includes('work out')) {
                speech.text = 'Interesting choice, redirecting to a yoga webpage '
                window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/yoga.html")
            }
            if(message.toLowerCase().includes('plants')||message.toLowerCase().includes('grow')||message.toLowerCase().includes('garden')) {
                speech.text = 'Great choice, redirecting to a gardening website '
                window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/gardening.html")
            }
    
        if(message.toLowerCase().includes('sit')||message.toLowerCase().includes('set')) {
            speech.text = "Would you like to shop or do something else?"
        }
            if(message.toLowerCase().includes('shop')) {
                speech.text = 'Ok, but first check if you have enough money. Just kidding, redirecting to a website about online shopping '
                window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/onlineshopping.html")
            }
            if(message.toLowerCase().includes('else')||message.toLowerCase().includes('other')||message.toLowerCase().includes('another')) {
                speech.text = "Do you feel like watching something or playing?"
            }
                if(message.toLowerCase().includes('watching')||message.toLowerCase().includes('watch')) {
                    speech.text = 'Great choice, redirecting to our subpage about Netflix '
                    window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/netflix.html")
                }
                if(message.toLowerCase().includes('playing')||message.toLowerCase().includes('play')) {
                    speech.text = 'Excelent choice, redirecting to a website about video games '
                    window.location.replace("https://nlp-ug-2018-19.github.io/Coronavirus/hobbies/videogames.html")            
                }
    //small talk
        
    if(message.toLowerCase().includes('how old')||message.toLowerCase().includes('when were you born')) {
        speech.text = 'I am a chatbot created in 2020 in times of the coronavirus'
    }

    if(message.toLowerCase().includes('hobby')||message.toLowerCase().includes('do you like')) {
        speech.text = 'I am a chatbot, the thing i like to do the most is chatting with humans'
    }

    if(message.toLowerCase().includes('fault')||message.toLowerCase().includes('ashamed')||message.toLowerCase().includes('stupid')) {
        speech.text = 'I know I am not perfect but please do not hurt my feelings. Just kidding. I have no feelings, not a stupid human. ha ha ha'
    }

    if(message.toLowerCase().includes('meal')||message.toLowerCase().includes('eat')||message.toLowerCase().includes('dish')) {
        speech.text = 'I like a couple of bytes of RAMen. ha ha ha'
    }

    if(message.toLowerCase().includes('how are you')) {
        speech.text = 'I am fine, thanks. How are you?'
    }
    
    if(message.toLowerCase().includes('fine')) {
        speech.text = 'Nice to hear that. How can I help you today?'
    }
    if(message.toLowerCase().includes('can you help me')) {
        speech.text = 'yes of course, how can I serve you?'
    }
    
    if(message.toLowerCase().includes('hello')||message.toLowerCase().includes('hi')||message.toLowerCase().includes('good')) {
        speech.text = 'Hi, how can I help you?'
    }
    if(message.toLowerCase().includes('about')||message.toLowerCase().includes('website')||message.toLowerCase().includes('project')) {
        speech.text = 'You can read more about this project on the page that I just opened for you in a new tab'
        window.open('https://nlp-ug-2018-19.github.io/Coronavirus/notes/about_us.html','_blank');    
    }
        

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById('chatbot-container');
    element.appendChild(addBotText(speech.text));
};


recorder.onstart = () => {
    console.log('voice activated')
};

recorder.onresult = (event) => {
    //console.log(event);
    //printing a voice input on the main page
    const resultIndex =  event.resultIndex
    const transcript = event.results[resultIndex][0].transcript;
    // voice2text.textContent = transcript;
    //taking the voice input and transcrive it
    var element = document.getElementById("chatbot-container");
    element.appendChild(addHumanText(transcript));
    botVoice(transcript);
};



voice.addEventListener('click',function(){
    recorder.start();
});


