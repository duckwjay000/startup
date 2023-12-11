import React from 'react';
import oceanImage from '/ocean.jpg'
import './play.css'

export function Play() {
  return (
    <main>
        <div className="player">
          Player:
          <span className="game-stats"></span>
        </div>
  

        <div>
            <label htmlFor="time">Current time: </label>
            <div id="time">
              <span className="digit" id="min">00</span>
              <span className="txt">Min</span>
              <span className="digit" id="sec">00</span>
              <span className="txt">Sec</span>
              <span className="digit" id="count">00</span>
        </div>

        <div>
          <table id="OceanTiles" className="table table-sm">
            <tr>
              <td>
                <button className="gridBtn" id="1" >
                    <img type="image" id="a1" src={oceanImage} alt="a1" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="2" >
                    <img type="image" id="a2" src={oceanImage} alt="a2" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="3" >
                    <img type="image" id="a3" src={oceanImage} alt="a3" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="4" >
                    <img type="image" id="a4" src={oceanImage} alt="a4" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="5" >
                    <img type="image" id="a5" src={oceanImage} alt="a5" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="6" >
                    <img type="image" id="a6" src={oceanImage} alt="a6" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="7" >
                    <img type="image" id="a7" src={oceanImage} alt="a7" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="8" >
                    <img type="image" id="a8" src={oceanImage} alt="a8" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="9" >
                    <img type="image" id="a9" src={oceanImage} alt="a9" style={{width: '10', height: '10'}}/>
                </button>
              </td>
              <td>
                <button className="gridBtn" id="10" >
                    <img type="image" id="a10" src={oceanImage} alt="a10" style={{width: '10', height: '10'}}/>
                </button>
              </td>
            </tr>
            <tr>
                <td>
                  <button className="gridBtn" id="11" >
                      <img type="image" id="b1" src={oceanImage} alt="b1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="12" >
                      <img type="image" id="b2" src={oceanImage} alt="b2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="13" >
                      <img type="image" id="b3" src={oceanImage} alt="b3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="14" >
                      <img type="image" id="b4" src={oceanImage} alt="b4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="15" >
                      <img type="image" id="b5" src={oceanImage} alt="b5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="16" >
                      <img type="image" id="b6" src={oceanImage} alt="b6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="17" >
                      <img type="image" id="b7" src={oceanImage} alt="b7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="18" >
                      <img type="image" id="b8" src={oceanImage} alt="b8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="19" >
                      <img type="image" id="b9" src={oceanImage} alt="b9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="20" >
                      <img type="image" id="b10" src={oceanImage} alt="b10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="21" >
                      <img type="image" id="c1" src={oceanImage} alt="c1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="22" >
                      <img type="image" id="c2" src={oceanImage} alt="c2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="23" >
                      <img type="image" id="c3" src={oceanImage} alt="c3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="24" >
                      <img type="image" id="c4" src={oceanImage} alt="c4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="25" >
                      <img type="image" id="c5" src={oceanImage} alt="c5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="26" >
                      <img type="image" id="c6" src={oceanImage} alt="c6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="27" >
                      <img type="image" id="c7" src={oceanImage} alt="c7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="28" >
                      <img type="image" id="c8" src={oceanImage} alt="c8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="29" >
                      <img type="image" id="c9" src={oceanImage} alt="c9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="30" >
                      <img type="image" id="c10" src={oceanImage} alt="c10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="31" >
                      <img type="image" id="d1" src={oceanImage} alt="d1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="32" >
                      <img type="image" id="d2" src={oceanImage} alt="d2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="33" >
                      <img type="image" id="d3" src={oceanImage} alt="d3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="34" >
                      <img type="image" id="d4" src={oceanImage} alt="d4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="35" >
                      <img type="image" id="d5" src={oceanImage} alt="d5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="36" >
                      <img type="image" id="d6" src={oceanImage} alt="d6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="37" >
                      <img type="image" id="d7" src={oceanImage} alt="d7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="38" >
                      <img type="image" id="d8" src={oceanImage} alt="d8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="39" >
                      <img type="image" id="d9" src={oceanImage} alt="d9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="40" >
                      <img type="image" id="d10" src={oceanImage} alt="d10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="41" >
                      <img type="image" id="e1" src={oceanImage} alt="e1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="42" >
                      <img type="image" id="e2" src={oceanImage} alt="e2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="43" >
                      <img type="image" id="e3" src={oceanImage} alt="e3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="44" >
                      <img type="image" id="e4" src={oceanImage} alt="e4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="45" >
                      <img type="image" id="e5" src={oceanImage} alt="e5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="46" >
                      <img type="image" id="e6" src={oceanImage} alt="e6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="47" >
                      <img type="image" id="e7" src={oceanImage} alt="e7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="48" >
                      <img type="image" id="e8" src={oceanImage} alt="e8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="49" >
                      <img type="image" id="e9" src={oceanImage} alt="e9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="50" >
                      <img type="image" id="e10" src={oceanImage} alt="e10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="51" >
                      <img type="image" id="f1" src={oceanImage} alt="f1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="52" >
                      <img type="image" id="f2" src={oceanImage} alt="f2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="53" >
                      <img type="image" id="f3" src={oceanImage} alt="f3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="54" >
                      <img type="image" id="f4" src={oceanImage} alt="f4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="55" >
                      <img type="image" id="f5" src={oceanImage} alt="f5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="56" >
                      <img type="image" id="f6" src={oceanImage} alt="f6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="57" >
                      <img type="image" id="f7" src={oceanImage} alt="f7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="58" >
                      <img type="image" id="f8" src={oceanImage} alt="f8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="59" >
                      <img type="image" id="f9" src={oceanImage} alt="f9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="60" >
                      <img type="image" id="f10" src={oceanImage} alt="f10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="61" >
                      <img type="image" id="g1" src={oceanImage} alt="g1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="62" >
                      <img type="image" id="g2" src={oceanImage} alt="g2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="63" >
                      <img type="image" id="g3" src={oceanImage} alt="g3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="64" >
                      <img type="image" id="g4" src={oceanImage} alt="g4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="65" >
                      <img type="image" id="g5" src={oceanImage} alt="g5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="66" >
                      <img type="image" id="g6" src={oceanImage} alt="g6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="67" >
                      <img type="image" id="g7" src={oceanImage} alt="g7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="68" >
                      <img type="image" id="g8" src={oceanImage} alt="g8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="69" >
                      <img type="image" id="g9" src={oceanImage} alt="g9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="70" >
                      <img type="image" id="g10" src={oceanImage} alt="g10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="71" >
                      <img type="image" id="h1" src={oceanImage} alt="h1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="72" >
                      <img type="image" id="h2" src={oceanImage} alt="h2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="73" >
                      <img type="image" id="h3" src={oceanImage} alt="h3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="74" >
                      <img type="image" id="h4" src={oceanImage} alt="h4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="75" >
                      <img type="image" id="h5" src={oceanImage} alt="h5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="76" >
                      <img type="image" id="h6" src={oceanImage} alt="h6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="77" >
                      <img type="image" id="h7" src={oceanImage} alt="h7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="78" >
                      <img type="image" id="h8" src={oceanImage} alt="h8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="79" >
                      <img type="image" id="h9" src={oceanImage} alt="h9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="80" >
                      <img type="image" id="h10" src={oceanImage} alt="h10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="81" >
                      <img type="image" id="i1" src={oceanImage} alt="i1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="82" >
                      <img type="image" id="i2" src={oceanImage} alt="i2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="83" >
                      <img type="image" id="i3" src={oceanImage} alt="i3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="84" >
                      <img type="image" id="i4" src={oceanImage} alt="i4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="85" >
                      <img type="image" id="i5" src={oceanImage} alt="i5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="86" >
                      <img type="image" id="i6" src={oceanImage} alt="i6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="87" >
                      <img type="image" id="i7" src={oceanImage} alt="i7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="88" >
                      <img type="image" id="i8" src={oceanImage} alt="i8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="89" >
                      <img type="image" id="i9" src={oceanImage} alt="i9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="90" >
                      <img type="image" id="i10" src={oceanImage} alt="i10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr><tr>
                <td>
                  <button className="gridBtn" id="91" >
                      <img type="image" id="j1" src={oceanImage} alt="j1" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="92" >
                      <img type="image" id="j2" src={oceanImage} alt="j2" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="93" >
                      <img type="image" id="j3" src={oceanImage} alt="j3" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="94" >
                      <img type="image" id="j4" src={oceanImage} alt="j4" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="95" >
                      <img type="image" id="j5" src={oceanImage} alt="j5" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="96" >
                      <img type="image" id="j6" src={oceanImage} alt="j6" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="97" >
                      <img type="image" id="j7" src={oceanImage} alt="j7" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="98" >
                      <img type="image" id="j8" src={oceanImage} alt="j8" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="99" >
                      <img type="image" id="j9" src={oceanImage} alt="j9" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
                <td>
                  <button className="gridBtn" id="100" >
                      <img type="image" id="j10" src={oceanImage} alt="j10" style={{width: '10', height: '10'}}/>
                  </button>
                </td>
              </tr>
          </table>
        </div>
    
        </div>
    
          <div className="numGuesses">
            <label htmlFor="guessNum">Number of guesses:</label>
            <br />
            <div id="guessNum" className="countBottom">--</div>
          </div>
          <div>
          <button style={{background:'#3630a3', color:'white'}} className="gridBtn">Reset</button>          </div>
    
          <br />
      </main>
  );
}