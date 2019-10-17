// Copyright 2019, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {
  dialogflow,
  SimpleResponse,
  BasicCard,
  Button,
  Image,
  BrowseCarousel,
  BrowseCarouselItem,
  Suggestions,
  LinkOutSuggestion,
  MediaObject,
  Table,
  List,
  Carousel
} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

// [START df_js_table_simple]
app.intent('Simple Table Card', (conv) => {
  if (!conv.screen) {
    conv.ask('Sorry, try this on a screen device or select the ' +
      'phone surface in the simulator.');
    conv.ask('Which response would you like to see next?');
    return;
  }

  conv.ask('Dit is een eenvoudige tabel.');
  conv.ask(new Table({
    dividers: true,
    columns: ['Categorie', 'Verandering aandeel zzpers tussen 2003 en 2017'],
    rows: [ // should be 2 columns per row
      ['Bouwnijverheid', '13,5%'],
      ['Informatie en communicatie', '10,7%'],
      ['Specialistische zakelijke diensten', '9,6%'],
      ['Overige dienstverlening', '9,1%'],
      ['Bouwnijverheid', '5,3%'],
    ],
  }));
  conv.ask('Wil je nog iets anders weten rondom zzpers?');
});
// [END df_js_table_simple]

// [START df_js_table_complex]
app.intent('Advanced Table Card', (conv) => {
  if (!conv.screen) {
    conv.ask('Sorry, try this on a screen device or select the ' +
      'phone surface in the simulator.');
    conv.ask('Wil je nog iets anders weten rondom zzpers?');
    return;
  }

  conv.ask('Hier is een grote tabel.');
  conv.ask(new Table({
    title: 'Werkzame beroepsbevolking',
    subtitle: 'positie in de werkkring',
    image: new Image({
      url: 'https://imagescbs.blob.core.windows.net/images/4a69536a57475a7967314152795853376269704a39673d3d/720x480.jpg',
      alt: 'Alt Text',
    }),
    columns: [
      {
        header: 'Positie in de werkkring',
        align: 'LEADING',
      },
      {
        header: '2003',
        align: 'LEADING',
      },
      {
        header: '2004',
        align: 'LEADING',
      },
      {
        header: '2005',
        align: 'LEADING',
      },
      {
        header: '2006',
        align: 'LEADING',
      },
      {
        header: '2007',
        align: 'LEADING',
      },
      {
        header: '2008',
        align: 'LEADING',
      },
    ], 
    rows: [ // should be 7 columns per row
      {
        cells: ['Totaal', '7783', '7761', '7818', '7938', '8169', '8358'],
        dividerAfter: false,
      },
      {
        cells: ['Werknemer', '6783', '6738', '6763', '6847', '7020', '7164'],
        dividerAfter: true,
      },
      {
        cells: ['Zelfstandige', '1000', '1022', '1054', '1091', '1149', '1194'],
      },
      {
        cells: ['Zelfstandige zonder personeel(zzp)', '634', '653', '677', '711', '757', '810'],
      },
    ],
    buttons: new Button({
      title: 'Naar bron tabel',
      url: 'https://opendata.cbs.nl/statline/#/CBS/nl/dataset/82646NED/table?dl=18C8C',
    }),
  }));
  conv.ask('Wil je nog iets anders weten rondom zzpers?');
});
// [END df_js_table_complex]

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
