import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div style = {{fontFamily: `"Helvetica", Helvetica, sans-serif`, border: '1px solid black',
                  width: 600, height: 700, 
    }}>
      <div style={{color: 'white', backgroundColor: 'black', height: 100, fontSize: 36, paddingTop: 12, paddingLeft: 16,
        fontWeight: 520, letterSpacing: -2
      }}>
        Planned Work
      </div>
      <div style = {{height: 160, backgroundColor: '#c4c4c4', fontSize: 54, fontWeight: 800, paddingTop: 2, paddingLeft: 16, position: 'relative',
      letterSpacing: -2.5,
      }}>
        Weeknights
        <div style = {{height: 140, width: 140, borderRadius: 140, backgroundColor: '#5d9cef', 
        position: 'absolute', zIndex: 100, right: 150, top: 10, color: 'white', fontSize: 100, 
        display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>A</div>
        <div style = {{height: 140, width: 140, borderRadius: 140, backgroundColor: '#5d9cef', 
        position: 'absolute', zIndex: 100, right: 5, top: 10, color: 'white', fontSize: 100, 
        display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>C</div>
        <div style={{fontSize: 24, fontWeight: 550, letterSpacing: -1, position: 'absolute', bottom: 20}}>
        <div >May 2 to Dec 25
        </div>
        <div >10pm-5am</div>
        </div>
      </div>
      <div style={{fontSize: 24, fontWeight: 500, letterSpacing: -1, paddingTop: 12, paddingLeft: 16, paddingBottom: 16}}
      >TRACK MAINTENANCE </div>
      <hr style={{ width: 580, height: 3, border:'none', backgroundColor: 'black'}}></hr>
    <div style={{fontSize: 24, fontWeight: 600, letterSpacing: -0.5, paddingTop: 2, paddingLeft: 16}}
    >Stillwell Avenue bound trains running local between Cortelyou and Church</div>
    
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
