import Header from './workHeader.jsx'
import MTA from './plannedWork.jsx'

const Poster = props => (

<div style={{backgroundColor: '#ffffff'}}>
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
</div>
    
)

export default Poster