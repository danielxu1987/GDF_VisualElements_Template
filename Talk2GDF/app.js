// Import the service function and various response classes
const {
    dialogflow,
    actionssdk,
    Image,
    Table,
    Carousel,
} = require('actions-on-google');

const express = require('express');
const bodyParser = require('body-parser');

// Create an app instance by calling the service you loaded. For example:
//const app = dialogflow();
const app = dialogflow({
    debug: true
});

// ------- Below is the intent map which contains definition of responses to all webhook-enabled intents --------
app.intent('hoi server', (conv) => {
    conv.ask('Ik ben een echt server!');
});

app.intent('Geef me een tabel', (conv) => {
    if (!conv.screen) {
        conv.ask('Sorry, try this on a screen device or select the ' +
            'phone surface in the simulator.');
        conv.ask('Which response would you like to see next?');
        return;
    }

    conv.ask('Dit is een simpel tabel.');
    conv.ask(new Table({
        dividers: true,
        columns: ['header 1', 'header 2', 'header 3'],
        rows: [
            ['row 1 item 1', 'row 1 item 2', 'row 1 item 3'],
            ['row 2 item 1', 'row 2 item 2', 'row 2 item 3'],
        ],
    }));
    conv.ask('Wat anders wil je nog?');
});

// -------- End of intent map --------

app.catch((conv, err) => {
    console.error(err);
    conv.ask('Sorry ik kan je niet goed beantwoorden. Kan je het nogmaals zeggen?');
});

console.log("app.js for dialogflow is listening to port 3000!");

express().use(bodyParser.json(), app).listen(3000);