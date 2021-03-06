import React from "react";


const colorPicker = {

    A: '#5d9cef',
    C: '#5d9cef',
    E: '#5d9cef',
    B: '#ff7919',
    D: '#ff7919',
    F: '#ff7919',
    M: '#ff7919',
    Q: '#f9db16',
    R: '#f9db16',
    N: '#f9db16',
    W: '#f9db16',
    G: '#72ea52',
    S: '#909e8f',
    L: '#909e8f',
    J: '#b57809',
    Z: '#b57809',
    1: '#ff6849',
    2: '#ff6849',
    3: '#ff6849',
    4: '#0cad44',
    5: '#0cad44',
    6: '#0cad44',
    7: '#ad0b9a',
    Wblack: 'black',
    Qblack: 'black',
    Rblack: 'black',
    Nblack: 'black'
}

const colorDefaults = ['#f72c4a', '#4d99cc','#4e84db', '#ef9bb7', '#f95331', '#60f7a4']



export default function MTA(props) {

    const scale = props.flyerWidth || 600

    const color1 = props.template.colorSpecs && props.template.colorSpecs[0] ? props.template.colorSpecs[0] :  colorPicker[props.template.routeBubbles[0]] || colorDefaults[1]
    const color2 = props.template.colorSpecs && props.template.colorSpecs[1] ? props.template.colorSpecs[1] :  colorPicker[props.template.routeBubbles[1]] || colorDefaults[props.template.capsHeader.length % 6]

    const bubbleRegex = /\{bubble(@?\S*)\}/

    const {footerScale, fontScale} = props.plannedWork 
    

  return (
    <div style = {{fontFamily: `"Helvetica Neue", Helvetica, sans-serif`, width: scale }}>

      { props.plannedWork && <div style={{color: 'white', backgroundColor: 'black', height: scale*.13, fontSize: scale*.05, paddingTop: scale*.02, paddingLeft: scale*.045,
        fontWeight: 520, letterSpacing: -2
      }}>{props.plannedWork.head}
      </div> }

      <div style = {{height: scale*.27, backgroundColor: '#c4c4c4', paddingTop: scale*.02,  position: 'relative', fontWeight: 800,}}>
        <span style={{marginLeft: scale*.042, fontSize: scale*.085, letterSpacing: -1,}}>{props.template.topHeader}</span>
        <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: scale*.18, color: 'white',
        position: 'absolute', right: scale*.025, height: scale*.25,
        }}>
           {props.template.routeBubbles && <div style = {{height: scale*.24, width: scale*.24, borderRadius: scale*.24, backgroundColor: color1, color: colorPicker[props.template.routeBubbles[0]+'black'] || 'white',
            fontFamily: `"Helvetica", Helvetica, sans-serif`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: scale*.01
            }}>{props.template.routeBubbles[0]}</div>}
            { props.template.routeBubbles &&
            <div style = {{height: scale*.24, width: scale*.24, borderRadius: scale*.24, backgroundColor: color2, color: colorPicker[props.template.routeBubbles[1]+'black'] || 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>{props.template.routeBubbles[1]}</div>}
        </div>
        <div style={{fontSize: scale*.05, fontWeight: 550, letterSpacing: -0.5, position: 'absolute', bottom: scale*.02, marginLeft: scale*.042,}}>
            {props.template.subDate && <div >{props.template.subDate[0]}</div>}
            {props.template.subDate && <div >{props.template.subDate[1]}</div>}
        </div>
      </div>
      
      <div style={{backgroundColor: 'white', minHeight: scale*.82, paddingBottom: scale*.042}}>
        <div style={{fontSize: scale*.04, fontWeight: 540, paddingTop: scale*.01, paddingRight: scale*.042, marginLeft: scale*.042, marginBottom: scale*.04}}
        >{props.template.capsHeader}</div>
        <hr style={{ width: scale*.92, height: scale*.004, border:'none', backgroundColor: 'black', margin: 'auto'}}></hr>
        
        {props.template.infoHeader && props.template.infoHeader.map((eachHeader,idx)=>(
        <div key={'infoHeader'+idx} style={{paddingLeft: scale*.042, paddingRight: scale*.042, marginTop: scale*.01}}>
        {eachHeader.split(bubbleRegex).map((each, jdx)=>{
            
        {  if(each[0]!=='@') return (<span key={'infoSpan'+jdx}>
                <span style={{fontSize: scale*.04, fontWeight: 600, letterSpacing: -0.5,  }}
                >{each}</span></span>)
        const parsedBubble = each.split('>')
        
        return (<span key={'infoSpan'+jdx}>
        <a key={'infoBubble'+jdx} href={parsedBubble[2]} style={{ fontFamily: `"Helvetica", Helvetica, sans-serif`, color: 'white', display: 'inline-flex', alignItems:'center', justifyContent: 'center',
                        width: scale*.06, height:scale*.06, borderRadius: scale*.06, fontSize: scale*.038,
                        textDecoration: 'none', backgroundColor: parsedBubble[1]}}>{each[1]}</a></span>)
        }
        })}
        <hr style={{ width: scale * .92, height: scale*.0015, border:'none', backgroundColor: 'black', margin: 'auto', marginTop: scale*.04}}></hr>
        </div>
        ))}
        
        
        <ul style={{listStylePosition: 'outside', marginLeft: scale*.062, fontSize: scale*.038, marginTop: scale*.01, paddingLeft: scale*0, paddingRight: scale*.042, lineHeight: 1.4}}>
            {props.template.bulletin && props.template.bulletin.map((eachSentence, idx) => (
                <li key={'bulletin'+idx} style={{position: 'relative', marginBottom: scale*.035}}>
                <span style={{position:'relative', left: -scale*.019}}>
                {eachSentence.split(bubbleRegex).map((each,jdx)=>{
                    
                    if(each[0]!=='@') return (<span key={'textSpan'+jdx}>{each}</span>)
                    
                    const parsedBubble = each.split('>')

                    return(
                    <a key={'bulletinBubble'+jdx} href={parsedBubble[2]}style={{ fontFamily: `"Helvetica", Helvetica, sans-serif`, color: 'white', display: 'inline-flex', alignItems:'center', justifyContent: 'center',
                        width: scale*.06, height:scale*.06, borderRadius: scale*.06, 
                        textDecoration: 'none', backgroundColor: parsedBubble[1]}}>{each[1]}</a>)
                })}</span></li>
            ))}
            
        </ul>
      </div>
      {props.plannedWork && (
      <div>
        <div style={{ backgroundColor:'#c4c4c4', height: scale*.12, paddingLeft: scale*.045}}>
          {props.plannedWork.footerText.map((eachText, idx)=>(
            <div style={{display: 'inline-block', width: scale*.22*(footerScale && footerScale[idx] || 1), marginTop: scale*.003, marginRight: scale*.015,
            fontSize: scale*.013* (fontScale && fontScale[idx] || 1 ), fontWeight: 600, verticalAlign: 'top'}}
            >{eachText}</div>))
          }
        </div>
        <div style={{ backgroundColor:'black', height: scale*.02}}></div>
      </div>)}
    </div>
  );
}
