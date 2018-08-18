import React from "react";
import { render } from "react-dom";
import "./styles.css";
import MTA from '../lib/plannedWork'


const template1 = {

  topHeader: 'Weekend',
  subDate: ['Rockaway Beach'],
  routeBubbles: ['Q', 'X'],
  colorSpecs: [null, 'salmon'],
  capsHeader: `TRACKS ON FIRE REALLY`,
  infoHeader: ['{bubble@G>green>www.google.com} Service suspended between Metropolitan and Nostrand.', 'another header for boys and girls'],
  bulletin: ['These keys on the template {bubble@p>violet}rop take arrays:  subDate, routeBubbles, colorSpecs, infoHeader, bulletin. topHeader and capsHeader expect strings.',
   'To create an inline {bubble@R>red}oute bubble, enclose letter>color>hyperlink between a {bubble@ and an }, and inject it within your string',
  'Service is suspended in every burrough, take {bubble@U>black>http://uber.com}bers leaving from sheepshead bay', 
  'stand clear of the closing doors please'],

}

const header1 = {
  head: 'Planned Work',
  footerText: ['Scalable font', 'This is an added feature: now there is an optional header and footer combo!', 'Pass an object as a plannedWork prop to the component! It takes a these keys: {head, footerText, footerScale, fontScale}. Those last three should be arrays.'],
  footerScale: [1, 2, 1],
  fontScale: [2.8, 2, 1]

}





render(<MTA template={template1} plannedWork={header1} flyerWidth={580}/>, document.getElementById("app"));



