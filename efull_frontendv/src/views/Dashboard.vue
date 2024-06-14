<template>
  <div class="app">
  <transition name="fade">
    <div v-if="isMounted" class="container-caue">
        <div class="menu-caue">
            <div class="brand">
                <img src="https://res.cloudinary.com/daox93pja/image/upload/v1715122906/e-full/rxdmtvmlczmg69wkeovx.png" alt="">
                <p>Efull Dashboard</p>
            </div>
            <div class="line"></div>
            <div class="menu-itens">
                <div class="menu-item">
                    <div class="icon">
                        <i class="bi bi-house-fill"></i>
                    </div>
                    <p>Dashboard</p>
                </div>
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-truck"></i>
                    </div>
                    <router-link aria-current="page" to="/entregas">Entregas</router-link>
                </div>
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <p><a href="mapa">Rastreamento</a></p>
                </div>
            </div>
        </div>

        <div class="dashboard">
            <div class="bar">
                <div class="pages">
                    <div class="q-pages">
                        <p class="pag">Páginas</p>
                        <p>/</p>
                        <p>Dashboard</p>
                    </div>
                    <h1>Dashboard</h1>
                </div>
        
                <p id="data"></p>
                <div class="nav">
                    <nav>
                        <ul>
                            <li><a href=""><i class="bi bi-gear-fill"></i></a></li>
                            <li><a href=""><i class="bi bi-bell-fill"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="info">
                <div class="card-info">
                    <div class="infos">
                        <div class="data">
                            <p>Entregas Diárias</p>
                            <div class="number">
                                <p class="bt"><b>12</b></p>
                                <p class="green"><b>+80%</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="info-icon">
                        <i class="bi bi-truck"></i>
                    </div>
                </div>
                <div class="card-info">
                    <div class="infos">
                        <div class="data">
                            <p>Tempo de Entrega</p>
                            <div class="number">
                                <p><b>42:05 min</b></p>
                                <p class="green"><b>-20%</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="info-icon">
                        <i class="bi bi-clock-fill"></i>
                    </div>
                </div>
                <div class="card-info">
                    <div class="infos">
                        <div class="data">
                            <p>Custo por Km</p>
                            <div class="number">
                                <p><b>R$: 8,00</b></p>
                                <p class="red"><b>+10%</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="info-icon">
                        <i class="bi bi-currency-dollar"></i>
                    </div>
                </div>
                <div class="card-info">
                    <div class="infos">
                        <div class="data">
                            <p>Índice de Satisfação </p>
                            <div class="number">
                                <p><b>Nota: 8,5</b></p>
                                <p class="green"><b>+8%</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="info-icon">
                        <i class="bi bi-star-fill"></i>
                    </div>
                </div>
            </div>
            <div class="c-box">
                <div class="graph">
                    <div class="g-box">
                        <div class="g-icon">
                            <div class="info-icon-2"><i class="bi bi-download"></i></div>
                            <div class="info-icon-2"><i class="bi bi-printer"></i></div>
                            <div class="info-icon-2"><i class="bi bi-share"></i></div>
                        </div>
                        <h1>Resumo da Logística</h1>
                        <div>
                            <h3>Total de Clientes: <b>223</b></h3>
                          </div>
                          <div>
                            <h3>Novos Clientes: <b>3</b> <i class="bi bi-caret-up-fill green"></i> </h3>
                          </div>
                          <div>
                            <h3>Faturamento: <b class="green">R$: 4511,45</b></h3>
                          </div>
                          <div>
                            <h3>Total de Pedidos: <b>122</b></h3>
                          </div>
                          <div>
                            <h3>Pedidos Pendentes: <b>5</b> <i class="bi bi-caret-up-fill green"></i></h3>
                          </div>
                    </div>
                </div>
                <div class="congrats">
                    <svg class='container' width="529px" height="286px" viewBox="30 27 529 286" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="graph-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(30.000000, 27.000000)">
                            <g id="y_axis" font-size="11.0833333" font-family=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface" fill="#FFFFFF" opacity="0.4" font-weight="normal">
                                <text id="0">
                                    <tspan x="25.3008249" y="264.333333">0</tspan>
                                </text>
                                <text id="2">
                                    <tspan x="12.7757572" y="232.666667">2</tspan>
                                </text>
                                <text id="4">
                                    <tspan x="12.7757572" y="201">4</tspan>
                                </text>
                                <text id="6">
                                    <tspan x="12.7757572" y="169.333333">6</tspan>
                                </text>
                                <text id="8">
                                    <tspan x="12.7757572" y="137.666667">8</tspan>
                                </text>
                                <text id="10">
                                    <tspan x="6.51322328" y="106">10</tspan>
                                </text>
                                <text id="12">
                                    <tspan x="6.51322328" y="74.3333333">12</tspan>
                                </text>
                                <text id="14">
                                    <tspan x="6.51322328" y="42.6666667">14</tspan>
                                </text>
                                <text id="16">
                                    <tspan x="6.51322328" y="11">16</tspan>
                                </text>
                            </g>
                            <g id="GRAPHS" transform="translate(64.000000, 16.000000)" stroke-linecap="round" stroke-width="8" stroke-linejoin="round">
                                <polyline id="dado1" stroke="#FF0000" points="-10 200 88.0438662 1 128.985782 137 180.170616 137 224.189573 182 256.947867 91 301.990521 137 346.009479 91 392.087202 91 429.952607 179"></polyline>
                                <polyline id="dado2" stroke="#FF8000" points="-10 130 54.2559242 227 96.2274882 47 133.080569 1 302.018438 1 346.680361 144.6280822 386.957346 0 427.905213 43"></polyline>
                                <polyline id="dado3" stroke="#FFC000" points="-10 80 53.273159 180 99.2985782 91 137.175355 47 219.077488 47 256.947867 190 301.990521 47 349.080569 137 398.228672 137 432 91"></polyline>
                            </g>
                            <g id="x_axis" transform="translate(71.974046, 271.541667)" font-size="11.0833333" font-family=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface" fill="#FFFFFF" opacity="0.4" font-weight="normal">
                                <text id="1">
                                    <tspan x="0.396183206" y="11">1</tspan>
                                </text>
                                <text id="2">
                                    <tspan x="39.2603361" y="11">2</tspan>
                                </text>
                                <text id="3">
                                    <tspan x="78.8786567" y="11">3</tspan>
                                </text>
                                <text id="4">
                                    <tspan x="118.496977" y="11">4</tspan>
                                </text>
                                <text id="5">
                                    <tspan x="158.115298" y="11">5</tspan>
                                </text>
                                <text id="6">
                                    <tspan x="197.733619" y="11">6</tspan>
                                </text>
                                <text id="7">
                                    <tspan x="237.351939" y="11">7</tspan>
                                </text>
                                <text id="8">
                                    <tspan x="276.97026" y="11">8</tspan>
                                </text>
                                <text id="9">
                                    <tspan x="316.58858" y="11">9</tspan>
                                </text>
                                <text id="10">
                                    <tspan x="359.229833" y="11">10</tspan>
                                </text>
                                <text id="11">
                                    <tspan x="400.036703" y="11">11</tspan>
                                </text>
                                <text id="12">
                                    <tspan x="438.466474" y="11">12</tspan>
                                </text>
                            </g>
                            <g id="grid" transform="translate(46.618321, 4.750000)" stroke="#FFFFFF" stroke-linecap="square" opacity="0.0800000057">
                                <path d="M0.396183206,1.1875 L478.991396,1.1875" id="Line"></path>
                                <path d="M0.396183206,32.8541667 L478.991396,32.8541667" id="Line"></path>
                                <path d="M0.396183206,64.5208333 L478.991396,64.5208333" id="Line"></path>
                                <path d="M0.396183206,96.1875 L478.991396,96.1875" id="Line"></path>
                                <path d="M0.396183206,127.854167 L478.991396,127.854167" id="Line"></path>
                                <path d="M0.396183206,159.520833 L478.991396,159.520833" id="Line"></path>
                                <path d="M0.396183206,191.1875 L478.991396,191.1875" id="Line"></path>
                                <path d="M0.396183206,222.854167 L478.991396,222.854167" id="Line"></path>
                                <path d="M0.396183206,254.520833 L478.991396,254.520833" id="Line"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  </transition>
</div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>


<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 500ms ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');




body {
  background: #f1f1f1;
}

* {
  font-size: 2.1vh;
}

.carousel-inner img {
  border-radius: 32px;
}

.carousel-inner {
  width: auto;
  height: auto;
  border-radius: 32px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}


#carouselExampleSlidesOnly {
  margin-bottom: 10%;
}



.btn-login {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-image: linear-gradient( to right, #FF0000, #FFC000);
    border: none;
    color: rgb(255, 255, 255);
    padding: 4px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
    transition: 500ms;
}

.btn-login:hover {
    opacity: 0.5;
}

.btn:hover  {
    color: #b40000;
}

.title-gradient {
    background-image: linear-gradient(to right, #FF0000, #FF8000, #FFC000);
    background-clip: text;  
    -webkit-text-fill-color: transparent; 
    color: transparent;    
}
.text-box {
    margin: 10% 0 7% 0;
    display: flex;
    flex-direction: column;
}

.text-box h1 {
    font-size: 3.3em; 
    font-weight: 800;
}

.card {
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 64px;
    overflow: hidden;
    background-color: #f8f9fa;
}

.bg-1 {

    background-color: #212529;
}

  .container-sm {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .card img {
    max-width: 100px;
  }



.aviso {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 10%;
    width: 100%;
    padding: 15px;
    border-radius: 32px;
    gap: 20px;
}

.aviso h7 {
    max-width: 800px;
}

.aviso i {
    font-size: 3rem;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
    display: flex;
    padding: 10% 0% 5% 0%;
    background-color: #f8f9fa;
    border-top: 1px solid #e5e5e5;
  }
  
  .footer > * {
    flex:  1 100%;
  }
  
  .footer__addr {
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2em;
  }


  .footer img {
    max-width: 90px;
    margin-bottom: 30px;
  }
  
  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }
  
  .nav__title {
    font-weight: bold;
    font-size: 15px;
  }
  
  .footer address {
    font-style: normal;
  }
  
  .footer ul {
    list-style: none;
    padding-left: 0;
  }
  
  .footer li {
    line-height: 2em;
  }
  
  .footer a {
    text-decoration: none;
  }
  
  .footer__nav {
    display: flex;
    justify-content: space-between;
  }
  
  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }
  
  .nav__ul a {
    color: #212529;
  }
  
  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }
  
  .copy {
    gap: 30px;
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
    
 
  
  .heart {
    color: #2f2f2f;
  }
  
  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }
  
  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }
    
    .nav__item--extra {
      flex-grow: 2;
    }
    
    .footer__addr {
      flex: 1 0px;
    }
    
    .footer__nav {
      flex: 2 0px;
    }
  }

  .branding {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 100px;
  }
  
  .branding img {
    max-width: 500px;
  }



  .text-box a {
    color: #212529;
    font-size: 20px;
    text-decoration: none;
    transition: 1s;
  }

.text-box a:hover {
  color: #929394;
  text-decoration: underline;
}

  .branding  h1 {
    margin-left: 10px;
    font-size: 52px;
    font-weight: 800;
    max-width: 600px;
  }
  
  p {
    margin-bottom: 0;
  }

  .branding p {
    margin-left: 10px;
    max-width:450px;
  }


/* Dash  */


.menu-caue {
  margin-top: 30px;
    width: 20%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.brand {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    font-weight: bold;
    color: #4c4c4c;
}

.brand img {
    max-width: 35px;
    max-height: 35px;
}

.line {
    margin-bottom: 30px;
    width: 800%;
    height: 1px;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), black, black,  rgba(255, 255, 255, 0));
    transform: scale(0.1);
}

.menu-itens {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.menu-item {
    position: relative;
    padding: 16px;
    gap: 18px;
    width: 60%;
    border-radius: 16px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    justify-content: left;
    align-items: center;
    display: flex;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #FF0000;
    border-radius: 8px;
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}



.menu-item-2 {
    position: relative;
    padding: 16px;
    gap: 18px;
    width: 60%;
    border-radius: 16px;
    justify-content: left;
    align-items: center;
    display: flex;
}

.icon-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #f8f9fa;
    border-radius: 8px;
    color: rgb(29, 29, 29);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.container-caue {
    display: flex;
    position: relative;
    width: 100% !important;
}

.dashboard {
    width: 80%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 20px;
}

.q-pages {
    display: flex;
    gap: 8px;
}

.pag {
    color: #828181;
}

.bar {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

nav ul li {
    list-style: none;
}

nav ul li a {
    color: #4c4c4c;
    font-size: 18px;
}

nav ul {
    display: flex;
    gap: 30px;
}

.info {
    width: 100%;
    justify-content: space-around;
    align-items: center;
    position: relative;
    display: flex;
    gap: 30px;
}

.card-info {
    position: relative;
    padding: 20px;
    width: 30%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border-radius: 32px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.green {
    color: green;
}

.red {
    color: red;
}

.infos {
    flex-direction: column;
    display: flex;
    gap: 40px;
}

.c-text {
    width: 60%;
    flex-direction: column;
    display: flex;
    gap: 15px;
}

.c-text p {
    font-size: 1.2rem;
}

.data {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#data {
    width: 200px;
}


.number {
    justify-content: left;
    align-items: center;
    display: flex;
    gap: 20px;
    font-size: 18px;
}

.icon-3 {
    background-image: linear-gradient(to right, #FF0000, #FF8000, #FFC000);
    color: white;  
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 20px; 
}

.col {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  

.col h2 {
    font-weight: 400;
    font-size: 17px;
}

.info-icon {
    background-image: linear-gradient(to right, #FF0000, #FF8000, #FFC000);
    color: white;  
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 16px;
    font-size: 24px;
}

.info-icon-2 {
    color: rgb(19, 18, 18);  
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    font-size: 14px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}




.congrats {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    border-radius: 32px;
    height: 80%;
    padding: 30px;
    background-color: #212529;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.graph {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    border-radius: 32px;
    padding: 30px;
    height: 80%;
    background: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.g-box {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 20px;
    font-weight: 300;
}

a {
    text-decoration: none;
    color: #212529;
}

.c-box {
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    gap: 30px;
}

.c-icon {
    background-image: linear-gradient(to right, #FF0000, #FF8000, #FFC000);
    color: white;  
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 16px;
    font-size: 84px;
}

.title {
    font-weight: 800;
}

svg {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    padding-top: 40px;
  }
  
  polyline {
    stroke-dasharray:  1000;
    stroke-dashoffset: 1000;
    animation: dash 4s ease-in forwards;
    animation-iteration-count: 1;
  }
  
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  .text {
    animation: moveRightToLeft 10s linear infinite;
    height: 20px;
    text-wrap: nowrap;
  }
  
.t-box {
    overflow: hidden;
}

.marquee-container {
    width: 80%;
    overflow: hidden;
  }
  
  .marquee {
    white-space: nowrap;
    animation: marquee 10s linear infinite;
  }
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  @keyframes moveRightToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  h3 {
    font-weight: 400;
  }

  .g-box b {
    margin-left: 20px;
  }

  .g-icon {
    position: absolute;
    font-size: 24px;
    display: flex;
    gap: 24px;
    right: 0;
    flex-direction: column;
    cursor: pointer;
  }

  .responsive-table li {
    padding: 35px 40px;
    display: flex;
    justify-content: space-between;
  }
  
  .responsive-table .table-header {
    font-size: 14px;
    letter-spacing: 0.03em;
    border-radius: 32px 32px 0px 0px;
  }

  .table {
    background-color: #f8f9fa;
    border-radius: 32px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  
  
  @media all and (max-width: 767px) {
    .responsive-table .table-header {
      display: none;
    }
    .responsive-table li {
      display: block;
    }
    .responsive-table .col {
      flex-basis: 100%;
      display: flex;
      padding: 10px 0;
    }
    .responsive-table .col:before {
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }

  .yellow{
    color: #ffbf00;
  }

  .line-2 {
    width: 100%;
    height: 1px;
    background-color: #4c4c4c;
  }

  .active  {
    background-color: #f1f1f1;
    border-radius: 0px !important;
  }
</style>
