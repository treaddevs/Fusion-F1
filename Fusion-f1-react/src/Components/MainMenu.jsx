function MainMenu() {
    return (
        <div className="main-container">
        <div className="video-background">
            <video autoPlay muted loop className="colorful-video">
              <source src="pexels_videos_2025634 (720p).mp4" type="video/mp4" />
            </video>
          </div>
        <header>
            <img src="F1.jpeg" alt="Formula 1 logo with background pattern" />
            <div>
                <div className="header-title">
                    <svg className="fusion-f1" width="241px" height="24px" viewBox="0 0 241 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Fusion F1</title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Formula1-Display-Wide, Formula1" fontSize="24" fontStyle="expanded" fontWeight="400">
                            <text id="Fusion-F1" fill="#FFFFFF">
                                <tspan x="0" y="20">Fusion F1</tspan>
                            </text>
                        </g>
                    </svg>
                </div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <div className="navbar-nav ml-auto">
                                <a className="nav-link" href="#" style={{ color: "white"}}>Latest <i className="fas fa-angle-down fa-xs"></i></a>
                                <a className="nav-link" href="#" style={{ color: "white"}}>Video</a>
                                <a className="nav-link" href="#" style={{ color: "white"}}>F1 Unlocked</a>
                                <a className="nav-link" href="#" style={{ color: "white"}}>Schedule <i className="fas fa-angle-down fa-xs"></i></a>
                                <a className="nav-link" href="#" style={{ color: "white"}}>Results <i className="fas fa-angle-down fa-xs"></i></a>
                                <a className="nav-link" href="#" style={{ color: "white"}}>Drivers <i className="fas fa-angle-down fa-xs"></i></a>
                                    <div className="nav-secondary drivers-menu">
                                        <div className="nav-contents">
                                            <div className="nav-header">
                                                <a href="/en/drivers.html" data-locationinpage="secondary_navigation" data-pathtype="internal" className="f1-bold--s f1-color--white ">All Drivers <i className="fas fa-angle-right"></i><i className="icon icon-chevron-right f1-color--warmRed"></i></a>
                                                <a href="/en/drivers/hall-of-fame.html" data-locationinpage="secondary_navigation" data-pathtype="internal" className="f1-bold--s f1-color--white ">Hall of Fame <i className="fas fa-angle-right"></i><i className="icon icon-chevron-right f1-color--warmRed"></i></a>
                                            </div>
                                            <div className="nav-list drivers">
                                                <ul className="column">
                                                    <li>
                                                        <a href="/en/drivers/alexander-albon.html" className="driver" style={{ color: "#37BEDD"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                            <div className="driver-info">
                                                                <div className="name-wrapper">  
                                                                    <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                        <span className="firstname">Alexander</span>
                                                                        <span className="lastname f1-bold--xxs f1-uppercase">Albon</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info">
                                                                    <span className="number">23</span>
                                                                    <img src="Flags/088-thailand.svg" alt="Thailand Flag" className="flag" />
                                                                </div>
                                                            </div>
                                                            <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/fernando-alonso.html" className="driver" style={{ color: "#358C75"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Fernando</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Alonso</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">14</span>
                                                                <img src="Flags/230-spain.svg" alt="Spain Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/valtteri-bottas.html" className="driver" style={{ color: "#00E701"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                            <div className="driver-info">
                                                                <div className="name-wrapper"> 
                                                                    <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                        <span className="firstname">Valtteri</span>
                                                                        <span className="lastname f1-bold--xxs f1-uppercase">Bottas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info">
                                                                    <span className="number">77</span>
                                                                    <img src="Flags/211-finland.svg" alt="Spain Flag" className="flag" />
                                                                </div>
                                                            </div>
                                                            <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/pierre-gasly.html" className="driver" style={{ color: "#2293D1"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Pierre</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Gasly</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">10</span>
                                                                <img src="Flags/197-france.svg" alt="France Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/lewis-hamilton.html" className="driver" style={{ color: "#6CD3BF"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Lewis</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Hamilton</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">44</span>
                                                                <img src="Flags/110-united kingdom.svg" alt="UK Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="column">
                                                    <li>    
                                                        <a href="/en/drivers/nico-hulkenberg.html" className="driver" style={{ color: "#B6BABD"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Nico</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Hulkenberg</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">27</span>
                                                                <img src="Flags/208-germany.svg" alt="Germany Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/charles-leclerc.html" className="driver" style={{ color: "#F91536"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Charles</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Leclerc</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">16</span>
                                                                <img src="Flags/220-monaco.svg" alt="Monaco Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/kevin-magnussen.html" className="driver" style={{ color: "#B6BABD"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Kevin</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Magnussen</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">20</span>
                                                                <img src="Flags/191-denmark.svg" alt="Denmark Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/lando-norris.html" className="driver" style={{ color: "#F58020"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Lando</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Norris</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">4</span>
                                                                <img src="Flags/110-united kingdom.svg" alt="UK Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/esteban-ocon.html" className="driver" style={{ color: "#2293D1"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Esteban</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Ocon</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">31</span>
                                                                <img src="Flags/197-france.svg" alt="France Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="column">
                                                    <li>    
                                                        <a href="/en/drivers/sergio-perez.html" className="driver" style={{ color: "#3671C6"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Sergio</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Perez</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">11</span>
                                                                <img src="Flags/033-mexico.svg" alt="Mexico Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/oscar-piastri.html" className="driver" style={{ color: "#F58020"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Oscar</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Piastri</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">81</span>
                                                                <img src="Flags/143-australia.svg" alt="Australia Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/daniel-ricciardo.html" className="driver" style={{ color: "#5E8FAA"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Daniel</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Ricciardo</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">3</span>
                                                                <img src="Flags/143-australia.svg" alt="Australia Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/george-russell.html" className="driver" style={{ color: "#6CD3BF"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">George</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Russell</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">63</span>
                                                                <img src="Flags/110-united kingdom.svg" alt="UK Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/carlos-sainz.html" className="driver" style={{ color: "#F91536"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Carlos</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Sainz</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">55</span>
                                                                <img src="Flags/230-spain.svg" alt="Spain Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="column">
                                                    <li>    
                                                        <a href="/en/drivers/logan-sargeant.html" className="driver" style={{ color: "#37BEDD"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Logan</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Sargeant</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">2</span>
                                                                <img src="Flags/186-united states.svg" alt="US Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/lance-stroll.html" className="driver" style={{ color: "#358C75"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Lance</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Stroll</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">18</span>
                                                                <img src="Flags/066-canada.svg" alt="Canada Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/yuki-tsunoda.html" className="driver" style={{ color: "#5E8FAA"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Yuki</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Tsunoda</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">22</span>
                                                                <img src="Flags/241-japan.svg" alt="Japan Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/max-verstappen.html" className="driver" style={{ color: "#3671C6"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Max</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Verstappen</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">1</span>
                                                                <img src="Flags/077-netherlands.svg" alt="Netherlands Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                    <li>    
                                                        <a href="/en/drivers/guanyu-zhou.html" className="driver" style={{ color: "#00E701"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="driver-info">
                                                            <div className="name-wrapper"> 
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="firstname">Guanyu</span>
                                                                    <span className="lastname f1-bold--xxs f1-uppercase">Zhou</span>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <span className="number">24</span>
                                                                <img src="Flags/011-china.svg" alt="China Flag" className="flag" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                <a className="nav-link teams" href="#" style={{ color: "white"}}>Teams <i className="fas fa-angle-down fa-xs"></i></a>
                                <div className="nav-secondary teams-menu">
                                    <div className="nav-contents">
                                        <div className="nav-header">
                                            <a href="/en/drivers.html" data-locationinpage="secondary_navigation" data-pathtype="internal" className="f1-bold--s f1-color--white ">All Teams <i className="fas fa-angle-right"></i><i className="icon icon-chevron-right f1-color--warmRed"></i></a>
                                        </div>
                                        <div className="nav-list teams">
                                            <ul className="column">
                                                <li>
                                                    <a href="/en/teams/Alpine.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Alpine</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/Alpine.avif" alt="Alpine Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/en/teams/AstonMartin.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Aston Martin</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/AstonMartin.avif" alt="Aston Martin Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/en/teams/Ferrari.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Ferrari</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/Ferrari.avif" alt="Ferrari Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="column">
                                                <li>
                                                    <a href="/en/teams/Haas.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Haas</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/Haas.avif" alt="Haas Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>   
                                                <li>
                                                    <a href="/en/teams/KickSauber.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Kick Sauber</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/KickSauber.avif" alt="Kick Sauber Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/en/teams/McLaren.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">McLaren</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/McLaren.avif" alt="McLaren Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="column">
                                                <li>
                                                    <a href="/en/teams/Mercedes.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Mercedes</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/Mercedes.avif" alt="Mercedes Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>   
                                                <li>
                                                    <a href="/en/teams/RB.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">RB</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/RB.avif" alt="RB Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/en/teams/RedBull.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Red Bull</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/RedBull.avif" alt="RedBull Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li>      
                                            </ul>
                                            <ul className="column">
                                                <li>
                                                    <a href="/en/teams/Williams.html" className="team" style={{ color: "white"}} data-locationinpage="secondary_navigation" data-pathtype="internal">
                                                        <div className="team-info">
                                                            <div className="teamname-wrapper">  
                                                                <div className="name f1--xxs f1-color--white followed f1-capitalize">
                                                                    <span className="teamname">Williams</span>
                                                                    <span className="arrow"><i className="fas fa-angle-right white"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="car-container">
                                                                <img className="car" src="Teams/Williams.avif" alt="Williams Team car" />
                                                            </div>
                                                        </div>
                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
                                                    </a>
                                                </li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <a className="nav-link gaming" href="#" style={{ color: "white"}}>Gaming <i className="fas fa-angle-down fa-xs"></i></a>
                                <a className="nav-link live_timing" href="#" style={{ color: "white"}}>Live Timing</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    )
  }
  
  export default MainMenu;
  