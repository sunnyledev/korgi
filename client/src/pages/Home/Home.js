import React, {useState} from "react";
// import API from "../utils/API";
import "./home-style.css";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import Typing from "react-typing-animation";

function Home() {
  return (
      <div className="home-outer">
          <div className="first-div">
              <div className="first-first-div">
                  <AnimatedText
                      textColor="#000000"
                      overlayColor="#FFAC00">KORGI</AnimatedText>
              </div>
              <h4>Though she be but little, she is fearless</h4>
              <div className="divider"/>

              <Typing>
                  <Typing.Delay ms={3000} />
                  <span style={{fontSize: '2.5em'}}>Kor • gi</span>
              </Typing>
              <div style={{marginTop: "20px"}}>
                  <Typing>
                      <Typing.Delay ms={4000} />
                      <Typing.Speed ms={10} />
                      <span style={{fontSize: '1.3em'}}>The word originates from Wales, a mystical land of foggy rolling hills and castles. In their Welsh language, it means little dog. A breed attributed for their warmth, cleverness, and curiosity. Like Korgi, this application is based on those same quirks. We serve as a platform for little humans and the one inside all of us to express our own individuality without the need of words, but with objects. So bring your dog or borrow one and let's explore together. Remember, it is less of what we see but more of how we see things.</span>
                  </Typing>
              </div>
              <button className="join-btn">Join</button>
          </div>
      </div>
  );
}

export default Home;
