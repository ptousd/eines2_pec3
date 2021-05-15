/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


/*import * as bootstrap from 'bootstrap';*/
import { Accessibility } from 'accessibility/src/main';

window.addEventListener(
  'load',
  function () {

  var labels = {
    resetTitle: 'Reset',
    closeTitle: 'Cerrar',
    menuTitle: 'Accesibilidad',
    increaseText: 'Aumentar tamaño texto',
    decreaseText: 'Reducir tamaño texto',
    increaseTextSpacing: 'Aumentar espaciado',
    decreaseTextSpacing: 'Disminuir espaciado',
    invertColors: 'Invertir Colores',
    grayHues: 'Matices grises',
    underlineLinks: 'Subrayar links',
    bigCursor: 'Cursor grande',
    readingGuide: 'Guía de lectura',
    textToSpeech: 'Texto a Dictado',
    speechToText: 'Dictado a texto'
  };

  var options = { labels: labels };
  options.textToSpeechLang = 'es'; // or any other language
  options.speechToTextLang = 'es'; // or any other language
    new Accessibility(options);    
  },
  false
);
