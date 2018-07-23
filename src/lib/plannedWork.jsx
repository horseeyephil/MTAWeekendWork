import React from "react";


const colorPicker = {

    A: '#5d9cef',
    C: '#5d9cef',
    E: '#5d9cef',
    B: '#ffb07f',
    D: '#ffb07f',
    F: '#ffb07f',
    M: '#ffb07f',
    Q: '#fff53f',
    R: '#fff53f',
    N: '#fff53f',
    G: '#8bfc6c',
    S: '#909e8f',
    1: '#ff6849',
    2: '#ff6849',
    3: '#ff6849',
    4: '#0cad44',
    5: '#0cad44',
    6: '#0cad44',
    7: '#ad0b9a',

}




export default function MTA(props) {

    const scale = props.flyerWidth || 600

    const bubbleRegex = /\$bubble(@?\S*)/

  return (
    <div style = {{fontFamily: `"Helvetica", Helvetica, sans-serif`, width: scale }}>

      {/* <div style={{color: 'white', backgroundColor: 'black', height: scale/6, fontSize: scale/17, paddingTop: 12, paddingLeft: scale*.045,
        fontWeight: 520, letterSpacing: -2
      }}>Planned Work OPTIONAL FEATURE COMING SOON
      </div> */}

      <div style = {{height: scale*.27, backgroundColor: '#c4c4c4', paddingTop: scale*.02,  position: 'relative', fontWeight: 800,}}>
        <span style={{marginLeft: scale*.042, fontSize: scale*.085, letterSpacing: -1.5,}}>{props.template.topHeader}</span>
        <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: scale*.18, color: 'white',
        position: 'absolute', right: scale*.025, height: scale*.25
        }}>
           <div style = {{height: scale*.24, width: scale*.24, borderRadius: scale*.24, backgroundColor: (props.template.colorSpecs && props.template.colorSpecs[0]) || colorPicker[props.template.colorSpecs[0]] || '#ef9bb7',   
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: scale*.01
            }}>{props.template.routeBubbles[0]}</div>
            { props.template.routeBubbles[1] &&
            <div style = {{height: scale*.24, width: scale*.24, borderRadius: scale*.24, backgroundColor: (props.template.colorSpecs && props.template.colorSpecs[1]) || colorPicker[props.template.routeBubbles[1]] || '#ef9bb7',  
            display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>{props.template.routeBubbles[1]}</div>}
        </div>
        <div style={{fontSize: scale*.05, fontWeight: 550, letterSpacing: -1, position: 'absolute', bottom: scale*.02, marginLeft: scale*.042,}}>
            <div >{props.template.subDate[0]}</div>
            <div >{props.template.subDate[1]}</div>
        </div>
      </div>
      
      <div style={{backgroundColor: 'white', minHeight: scale*.82, paddingBottom: scale*.042}}>
        <div style={{fontSize: scale*.04, fontWeight: 540, letterSpacing: -.5, paddingTop: scale*.01, paddingRight: scale*.042, marginLeft: scale*.042, marginBottom: scale*.05}}
        >{props.template.capsHeader}</div>
        <hr style={{ width: scale*.92, height: scale*.004, border:'none', backgroundColor: 'black', margin: 'auto'}}></hr>
        
        {props.template.infoHeader.map(each=>(
        <div>
        <div style={{fontSize: scale*.04, fontWeight: 600, letterSpacing: -0.5, marginTop: scale*.01, marginLeft: scale*.042, paddingRight: scale*.042, marginBottom: scale*.05}}
        >{each}</div>
        <hr style={{ width: scale * .92, height: scale*.0015, border:'none', backgroundColor: 'black', margin: 'auto'}}></hr>
        </div>
        ))}
        
        
        <ul style={{listStylePosition: 'outside', marginLeft: scale*.062, fontSize: scale*0.038, marginTop: scale*.01, paddingLeft: scale*0, paddingRight: scale*.042, lineHeight: 1.4}}>
            {props.template.bulletin.map(eachSentence => (
                <li style={{position: 'relative', marginBottom: scale*.04}}>
                <span style={{position:'relative', left: -scale*.019}}>
                {eachSentence.split(bubbleRegex).map(each=>(
                    
                    each[0]!=='@' ? <span >{each}</span>
                    :
                    <div style={{ color: 'white', fontSize: scale*.038,  display: 'inline-flex', alignItems:'center', justifyContent: 'center',
                        width: scale*.06, height:scale*.06, borderRadius: scale*.06, 
                        backgroundColor: each.slice(2)}}>{each[1]}</div>
                ))}</span></li>
            ))}
            
        </ul>
      </div>
    </div>
  );
}
