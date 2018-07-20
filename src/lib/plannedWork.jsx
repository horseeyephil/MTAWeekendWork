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
  return (
    <div style = {{fontFamily: `"Helvetica", Helvetica, sans-serif`, 
                  width: scale, backgroundColor: 'white', flex: '0 1' //, minHeight: scale*1.09,
    }}>
      {/* <div style={{color: 'white', backgroundColor: 'black', height: scale/6, fontSize: scale/17, paddingTop: 12, paddingLeft: scale*.045,
        fontWeight: 520, letterSpacing: -2
      }}>
        Planned Work
      </div> */}
      <div style = {{height: scale*.27, backgroundColor: '#c4c4c4', fontSize: scale*.09, fontWeight: 800, paddingTop: scale*.02,  position: 'relative',
      letterSpacing: -2.5,
      }}>
        <span style={{marginLeft: scale*.045}}>{props.template.topHeader}</span>
        <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: scale*.18, color: 'white',
        position: 'absolute', right: scale*.025, height: scale*.25
    }}>


           <div style = {{height: scale*.23, width: scale*.23, borderRadius: scale*.23, backgroundColor: (props.template.colorSpecs && props.template.colorSpecs[0]) || colorPicker[props.template.colorSpecs[0]] || '#ef9bb7',   
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: scale*.01
            }}>{props.template.routeBubbles[0]}</div>
            { props.template.routeBubbles[1] &&
            <div style = {{height: scale*.23, width: scale*.23, borderRadius: scale*.23, backgroundColor: (props.template.colorSpecs && props.template.colorSpecs[1]) || colorPicker[props.template.routeBubbles[1]] || '#ef9bb7',  
            display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>{props.template.routeBubbles[1]}</div>}

        </div>
        <div style={{fontSize: scale*.045, fontWeight: 550, letterSpacing: -1, position: 'absolute', bottom: scale*.02, marginLeft: scale*.045,}}>
            
            <div >{props.template.subDate[0]}</div>
            <div >{props.template.subDate[1]}</div>
        </div>
      </div>
      
      <div style={{backgroundColor: 'white', minHeight: scale*.82}}>
        <div style={{fontSize: scale*.04, fontWeight: 500, letterSpacing: -1, paddingTop: scale*.01, paddingRight: scale*.045, marginLeft: scale*.045, marginBottom: scale*.055}}
        >{props.template.capsHeader}</div>
        <hr style={{ width: scale*.92, height: scale*.004, border:'none', backgroundColor: 'black', margin: 'auto'}}></hr>
        <div style={{fontSize: scale*.04, fontWeight: 600, letterSpacing: -0.5, marginTop: scale*.01, marginLeft: scale*.045, paddingRight: scale*.045, marginBottom: scale*.055}}
        >{props.template.infoHeader}</div>
        <hr style={{ width: scale * .92, height: scale*.0015, border:'none', backgroundColor: 'black', margin: 'auto'}}></hr>
        <ul style={{listStylePosition: 'outside', fontSize: scale*0.038, marginTop: scale*.01, marginLeft: 0, paddingLeft: scale*0.045, paddingRight: scale*.045}}>
            {props.template.bulletin.map(each=>(
                <li style={{marginBottom: scale*.045}}>{each}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
