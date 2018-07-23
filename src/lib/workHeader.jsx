import React from "react";

export default function (props){
    const scale = props.flyerWidth || 600

    return (
        <div style={{
            width: scale, fontFamily: `"Helvetica", Helvetica, sans-serif`, 
        }}>
         <div style={{
            height: scale*.17, backgroundColor: 'black', color: 'white', fontSize: scale*.108, fontWeight: 540,
            paddingLeft: scale*.02, letterSpacing: -3.5,
        }}> Weekend Work
        </div>
        <div style={{
            height: scale*.022, backgroundColor: 'gold'
        }}>
        </div>
        <div style={{
            height: scale*.15, backgroundColor: 'white', color: 'black', display: 'flex'
        }}>
            <div style={{width: scale*.5, paddingTop:scale*.005, fontSize: scale*.038, fontWeight: 500, letterSpacing: -1.5, 
                
            }}>
                <div style={{paddingLeft: scale*.02,}}>Lilac I wish you well</div>
                <div style={{paddingLeft: scale*.02,}}>Late Nights</div>
            </div>
            <div style={{display: 'flex',  fontSize: scale*.015}}>
                <div style={{width: scale*.24, paddingLeft: scale*0.0105 }}>
                    <div style={{fontWeight: 600, paddingTop:scale*.0048, }}>Key</div>
                    <div style={{marginTop: scale*.008, }}>big block of text filling all this up!</div>
                    <div style={{marginTop: scale*.008, }}>big block of text filling all this up!</div>
                </div>
                <div style={{width: scale*.24, paddingLeft: scale*0.0105, paddingRight: scale*0.005}}>
                    <div style={{height: scale*.072, paddingTop:scale*.0048,}}>
                    <div style={{fontWeight: 700}}>Where I go</div>
                    <div style={{marginTop: scale*.008}}>Where I go I wanna write a lot of text to break lines over and over three</div>
                    </div>
                    <hr style={{margin: 0, width: scale*.24, height: scale*.001, border: 'none', backgroundColor: 'black', marginBottom: scale*.003}}></hr>
                    <div style={{fontWeight: 700,}}>Where I go</div>
                    <div style={{marginTop: scale*.008}}>Where I go</div>
                </div>
            </div>
        </div>
        <div style={{
            height: scale*.011, backgroundColor: 'black'
        }}>
        </div>
        
        </div>






    )



}