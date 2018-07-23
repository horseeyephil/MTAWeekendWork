import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";
import MTA from '../lib/plannedWork'
import Header from '../lib/workHeader.jsx'




const template = {

  topHeader: 'Weekend',
  subDate: ['Rockaway Beach'],
  routeBubbles: ['G', 'T'],
  colorSpecs: ['#4d99cc'],
  capsHeader: `TRACKS ON FIRE REALLY`,
  infoHeader: ['G Service suspended between Metropolitan and Nostrand.', 'another header for boys and girls'],
  bulletin: ['A bunch of text $bubble@Wgreen gonna write a novel here writing $bubble@Xviolet a lot to fill the lines, A bunch of text gonna write a novel here writing a lot to fill the lines', 'service is $bubble.ffffddd suspended in every burrough, take ubers $bubble leaving from sheepshead bay', 'stand clear of the closing doors please'],

}







render(<div style={{backgroundColor: '#ffffff'}}>
<Header flyerWidth={800}/>
<div style={{display: 'flex', width: 800}}>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
</div>
<div style={{display: 'flex', width: 800}}>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
</div>
<div style={{display: 'flex', width: 800}}>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
</div>
<div style={{display: 'flex', width: 800}}>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
<MTA template={template} flyerWidth={200}/>
</div>
</div>, document.getElementById("app"));
