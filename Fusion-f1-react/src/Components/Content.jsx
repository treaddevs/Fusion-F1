function Content() {
    return (
        <div className="content-container">
            <div className="video">
                <svg className="highlights" width="343px" height="17px" viewBox="0 0 343 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Formula 1 Highlights</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Formula1-Display-Wide, Formula1" fontSize="16" fontStyle="expanded" fontWeight="400">
                        <text id="Formula-1-Highlights" fill="#FFFFFF">
                            <tspan x="0" y="14">Formula 1 Highlights</tspan>
                        </text>
                    </g>
                </svg>
                <video className="f1-video" width="854" height="480" controls autoPlay>
                    <source src="Formula 1.1.mp4" type="video/mp4" />
                </video>

                <div className="slides-container">
                    <div className="slideshow-container">
                        <div className="slide">
                            <img src="formula-one-ffqxtcobqlmjqc2f.jpg" alt="Formula One Image with lights" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="F1rainbow.avif" alt="Formula One rainbow car" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="f1-22-F1 22-5.jpg" alt="Formula One rainbow car" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="F1rainbow.avif" alt="Formula One Image" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="pexels-alex-wolf-mx-14401740.jpg" alt="Formula One driver talking to teammate in car" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="pexels-adriaan-greyling-18789437.jpg" alt="Formula One Team Ferrari in garage" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="70459923-8100-45a2-87a0-2edf3aee22e1_1600x902.jpg" alt="Formula One Alpine driver in car close-up" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="202467049-pink-race-car-in-motion-blur-with-wheels-leaving-trails-of-motion-blur-generative-ai-high-quality.jpg" alt="Formula One pink car with sparks" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="gettyimages-1800093928-3ea884e9fb65ed78aa5a1106a1670342ba8c40cc-s1100-c50.jpg" alt="Formula One racecar in Las Vegas" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="GP2119_164325_54I2652-scaled-1920x1080.jpg" alt="Formula One black car close up" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="gpr-may-21-pat-4-1.jpg" alt="Formula One black and orange car front view" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="1_WJzPFbrX9dl4Zx4BiVd-Vg.webp" alt="Formula One cars at starting line during rain" width="854" height="480" />
                        </div>
                        <div className="slide">
                            <img src="vegasgp.webp" alt="Formula One Vegas GP champion standing on RedBull car" width="854" height="480" />
                        </div>

                        {/* <a className="prev" onclick="plusSlides(event, -1)" href="#">
                            <i className="fas fa-angle-left"></i>
                        </a>
                        <a className="next" onclick="plusSlides(event, 1)" href="#">
                            <i className="fas fa-angle-right"></i>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="articles-container">
                <div className="article">
                    <a href="article1.html">
                        <img src="Mercedes.avif" alt="Mercedes Formula 1 car" />
                            <div className="article-type">
                                <p>Technical</p>
                            </div>
                        <h3>FIRST LOOK: Mercedes unveil their 2024 F1 car ahead of Silverstone shakedown</h3>
                    </a>
                </div>
                <div className="article">
                    <a href="article2.html">
                        <img src="Day2Bahrain.avif" alt="Lewis Hamilton" />
                            <div className="article-type">
                                <p>News</p>
                            </div>
                        <h3>Who’s driving on Day 2 of pre-season testing in Bahrain?</h3>
                    </a>
                </div>
                <div className="article">
                    <a href="article3.html">
                        <img src="RedBullVerstappen.avif" alt="Max Verstappen" />
                            <div className="article-type">
                                <p>News</p>
                            </div>
                        <h3>Red Bull ‘got the answers we needed to’ after first day of 2024 testing for Verstappen</h3>
                    </a>
                </div>
                <div className="article">
                    <a href="article4.html">
                        <img src="RedBull.avif" alt="RedBull Formula 1 car" />
                        <div className="article-type">
                            <p>Technical</p>
                        </div>
                        <h3>TECH ANALYSIS: Why Red Bull's dominant opening day of testing wasn't quite all it seemed</h3>
                    </a>
                </div>
                <div className="article">
                    <a href="article5.html">
                        <img src="Testing.avif" alt="Testing debrief" />
                        <div className="article-type">
                            <p>Feature</p>
                        </div>
                        <h3>TESTING DEBRIEF: The surprising – and less surprising – teams who came out fighting on Day 1 of 2024 testing</h3>
                    </a>
                </div>
                <div className="article">
                    <a href="article6.html">
                        <img src="Ferrari.avif" alt="Ferrari formula 1 car" />
                        <div className="article-type">
                            <p>News</p>
                        </div>
                        <h3>Leclerc and Sainz give their verdicts on where Ferrari stand relative to Red Bull</h3>
                    </a>
                </div>

                <div className="track-image">
                    <img src="red-bull-and-ferrari-on-track-during-monaco-grand-prix-planet-f1.jpg" alt="RedBull and Ferrari racing in Monaco" width="1031" />
                    <img src="hungaroring-the-hungarian-f1-race-track-hungary.jpg" alt="RedBull and Ferrari racing in Monaco" width="1031" />
                </div>
            </div>
            <div className="race-schedule">
                <div className="schedule">
                    <img src="pexels-mahdi-bafande-15629018.jpg" alt="Abstract background" width="1915" />
                </div>
            </div>
        </div>
    )
  }
  
  export default Content;
  