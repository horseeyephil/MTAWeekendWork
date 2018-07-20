import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";
import MTA from '../lib/plannedWork'




const template = {

  topHeader: 'Deep Thoughts',
  subDate: ['Rockaway Beach'],
  routeBubbles: ['G'],
  colorSpecs: ['#4d99cc'],
  capsHeader: `TRACKS ON FIRE REALLY`,
  infoHeader: 'G Service suspended between Metropolitan and Nostrand.',
  bulletin: ['A bunch of text gonna write a novel here writing a lot to fill the lines, A bunch of text gonna write a novel here writing a lot to fill the lines', 'service is suspended in every burrough, take ubers leaving from sheepshead bay', 'stand clear of the closing doors please'],

}







render(<div style={{backgroundColor: '#000111'}}>
<MTA template={template} flyerWidth={500}/>
</div>, document.getElementById("app"));
