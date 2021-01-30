<template>
  <div class="design-container">
    <div class="design-sidebar">
      <h2>3D DESIGNER</h2>
      <p>
        Tridimensional designer for DIY indoor gardeners.
        <strong>Expect bugs!</strong> Feedback is welcome.
      </p>
<div class="accordion-labels-container">
    <div class="accordion-maintitle">3D Objects</div>

      <div class="accordion-labels">
        <label for="one" class="accordion-grid pressed"><td-trash/></label>
        <label for="fro" class="accordion-grid"><td-circle/></label>

        <label for="tw2o" class="accordion-grid"><td-adjust/></label>
        <label for="tre" class="accordion-grid"><td-air/></label>
        <label for="cua" class="accordion-grid"><td-flash/></label>
      </div>
      <div class="accordion-absoluted-container">

        <div class="accordion-category"> 
          <input type="radio" name="toggle" id="one" checked>      
          <ul class="accordion-items">    
            <li><button id="add-bucket">5gal bucket</button></li> 
            <li><button id="add-brute">10gal brute</button>      </li>      
            <li><button id="add-tote">20gal tote</button> </li> 
            <li><button id="add-euro">Eurobox</button>  </li> 
            <li><button id="add-barrel">Rain barrel</button>   </li>  
          </ul>      
        </div>
        <div class="accordion-category">
          <input type="radio" name="toggle" id="fro">      
          <ul class="accordion-items">    
            <li><button id="add-sphere">Sphere</button></li> 
            <li><button id="add-cylinder">Cylinder</button></li> 
            <li><button id="add-cone">Cone</button></li> 
            <li><button id="add-cube">Cube</button></li> 
          </ul>      
        </div>        
        <div class="accordion-category">
          <input id="tw2o" type="radio" name="toggle">      
          <ul class="accordion-items">
            <li><button id="add-cfl">23w CFL</button>  </li>  
            <li><button id="add-cfl-power">42w CFL</button>  </li> 
            <li><button id="add-ufo">180w LED</button>  </li>  
             <li><button id="add-ufo300">300w LED</button>  </li>  
            <li><button id="add-led">100w COB LED</button>  </li>  
            <li><button id="add-strip">LED strips</button>  </li>                    
          </ul>      
        </div>  
        <div class="accordion-category">
          <input id="tre" type="radio" name="toggle">      
          <ul class="accordion-items">
            <li><button id="add-fan">PC fan</button></li>
            <li><button id="add-dcfan">DC fan</button>  </li>      
            <li><button id="add-trap">In-line fan</button>  </li>  
            <li><button id="add-boost">Booster fan</button></li>
          </ul>
        </div> 
        <div class="accordion-category">
          <input id="cua" type="radio" name="toggle">      
          <ul class="accordion-items">
            <li><button id="add-socket">Socket adapter</button></li>
            <li><button id="add-power">Power strip</button></li>
          </ul>
        </div>   
      </div>
    </div>        
    </div>
    <div class="design-scene scene">
      <div class="box">
        <div class="box__face box__face--back"></div>
        <div class="box__face box__face--right"></div>
        <div class="box__face box__face--left"></div>
        <div class="box__face box__face--top"></div>
        <div class="box__face box__face--bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.design-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: calc(100vh - 50px);
  .design-sidebar {
    padding: 15px;
    color: #fff;
    h2 {
      font-size: 20px;
      color: #eee;
      padding-bottom: 10px;
    }
    p {
      color: #eee;
      line-height: 1.2em;
    }
  }
  .design-scene {
    border: 2px solid #004d47;
  }
}

.accordion-labels {
  display: flex;
  > label {
    flex: 1;
    padding: 10px
  }
}
.accordion-category {
  .accordion-items,
  input { display: none; }
  input:checked + .accordion-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      text-transform: uppercase;
      flex: 1;
      max-width: max-content;

    }    
    button {
      border: 0;
      background: transparent;
      color: #fff;
      width: max-content;
    }    
  }
}

.scene {
  --depth: 100px;
  --height: 100%;
  --width: 100%;

  --depthTransform: calc(var(--depth) / 2);

  --widthTransform: calc(var(--width) / 2);
  --widthreTransform: calc(var(--widthTransform) - var(--depthTransform));
}

@media screen and (max-width: 950px) {
  :root {
    --height: 420px;
  }
  .scene {
    perspective-origin: center;
    &.growActive {
      perspective-origin: center !important;
    }
    &.buildActive {
      perspective-origin: center !important;
    }
    &.shopActive {
      perspective-origin: center !important;
    }
  }
}

@keyframes recaca {
  0% {
    perspective-origin: 300px center;
  }
  50% {
    perspective-origin: 350px center;
  }
  100% {
    perspective-origin: 300px center;
  }
}

.scene {
  width: 100%;
  height: var(--height);
  perspective: 150px;
  perspective-origin: center 320px;
  transition: all 0.4s linear;
  overflow: hidden;
  &.shopActive {
    perspective: 250px;
    perspective-origin: center 220px;
    //animation: 10s recaca linear infinite;
  }
  &.buildActive {
    perspective: 300px;
  }
  &.growActive {
    perspective: 350px;
    perspective-origin: center 400px;
  }
  &.loginIn {
    perspective: 400px;
  }
}

.box {
  width: 100%;
  height: var(--height);
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(calc(-1 * var(--depthTransform)));
}

.box__face {
  position: absolute;
  border: 1px solid rgba(0, 77, 71, 1);
  border-radius: 0px;
  transition: all 0.2s linear;
}

.box__face--back {
  width: 100%;
  height: var(--height);
  background-image: linear-gradient(rgba(0, 77, 71, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 77, 71, 0.3) 1px, transparent 1px);
  background-size: 1px 11px, 11px 11px;
  background-position: -1px -1px, -1px -1px;
  border: 0;
}

.box__face--right,
.box__face--left {
  width: var(--depth);
  height: var(--height);
  left: var(--widthreTransform);
  background-image: linear-gradient(transparent 90%, #004d47);
  background-size: 1px 11px;
  position: absolute;
  &:after {
    content: "";
    background: linear-gradient(to bottom, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}
.box__face--left {
  border-left-width: 2px;
  border-top-width: 2px;
  border-right: 0;
  border-bottom-width: 2px;
  left: 0;
}

.box__face--right {
  border-right-width: 2px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  left: initial;
  right: 0;
}

.box__face--right {
  border-left: 0;
  &:after {
    content: "";
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--top {
  position: absolute;
  background-image: linear-gradient(to right, transparent 90%, #004d47);
  background-size: 11px 1px;
  border-bottom: 0;
  top: 0;
  &:after {
    content: "";
    background: linear-gradient(to top, black 10%, transparent);
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--bottom {
  position: absolute;
  background-image: linear-gradient(to right, transparent 90%, #004d47);
  background-size: 11px 1px;
  border-top: 0;
  border-bottom-width: 1px;
  bottom: 0;
  &:after {
    content: "";
    background: linear-gradient(to bottom, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--top,
.box__face--bottom {
  width: 100%;
  height: var(--depth);
  border-top-width: 2px;
}

.box__face--back {
  transform: rotateY(180deg) translateZ(var(--depthTransform));
}
.box__face--right {
  transform: rotateY(90deg) translateZ(var(--depthTransform));
}
.box__face--left {
  transform: rotateY(-90deg) translateZ(var(--depthTransform));
}
.box__face--top {
  transform: rotateX(90deg) translateZ(var(--depthTransform));
}
.box__face--bottom {
  transform: rotateX(-90deg) translateZ(var(--depthTransform));
}

.box__face.box__face--back.bac2 {
  transform: rotateY(180deg) translateZ(20px);
  opacity: 0.4;
  background: transparent;
  border-width: 2px;
}

@keyframes identifier {
  0% {
    transform: perspective(550px) rotateY(-15deg);
  }
  50% {
    transform: perspective(550px) rotateY(15deg);
  }
  100% {
    transform: perspective(550px) rotateY(-15deg);
  }
}

.box__face.box__face--back.bac1 {
  transform: rotateY(0) translateZ(48px) !important;
  opacity: 1;
  border-color: #004d4740 !important;
  background: transparent;
  border-width: 2px;
  display: flex;
  .exploremons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    > div {
      font-size: 36px;
    }
  }
  span {
    text-decoration: underline;
    color: #fdd835;
  }
  img {
    display: block;
    width: 50%;
    transform: perspective(550px) translateZ(-50px) rotateY(-15deg);
    animation: 8s identifier infinite linear;
    opacity: 0.9;
  }
}

.buildActiveGarage {
  .box__face.box__face--left,
  .box__face.box__face--right {
    background-color: #abaaac;
    background-image: linear-gradient(transparent 90%, #004d4775);
    background-size: 1px 11px;
    border-color: #333;
    &:after {
      background: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent);
    }
  }
  .box__face.box__face--left {
    &:after {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent);
    }
  }
  .box__face.box__face--back {
    background-color: #565556;
    border-color: #333;

    &.bac2,
    &.bac1 {
      background: transparent;
      opacity: 0.2;
    }
  }
  .box__face.box__face--top {
    background: #3a383f;
    background-image: linear-gradient(to right, transparent 90%, #004d4775);
    background-size: 11px 1px;
    border-color: #333;

    &:after {
      opacity: 0;
    }
  }
  .box__face.box__face--bottom {
    background-color: #96959b;
    border-color: #333;

    background-image: linear-gradient(to right, transparent 90%, #004d4775);
    background-size: 11px 1px;
    &:after {
      opacity: 0;
    }
  }
}

.adventure.adventure.scene {
  perspective: 90px;
  .box {
    .box__face {
      border: 0;
    }
    .box__face.box__face--top {
      //background: rgba(0, 98, 90, 0.6);
      background-image: linear-gradient(
        90deg,
        transparent calc(100% - 2px),
        rgba(0, 98, 90, 0.4) 2px
      );
      background-size: 20% 1px;
      border-left: 2px solid rgba(0, 98, 90, 0.3);
      &:after {
        background: linear-gradient(to bottom, black 10%, transparent);
        left: -2px;
      }
    }
    .box__face.box__face--back {
      background: transparent;
    }
    .box__face.box__face--right.bacdoor {
      width: 50px;
      right: -18px;
      background: rgba(0, 98, 90, 0.3);
      bottom: -64px;
      height: 545px;
      border: 2px solid rgba(0, 98, 90, 1);
      border-top: 4px solid rgba(0, 98, 90, 1);
      border-bottom: 0;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      background: rgba(0, 98, 90, 0.4);

      &:after {
        display: none;
      }
      &.closer {
        width: 45px !important;
        right: -18px;
        background: #000;
        bottom: -202px !important;
        height: 730px !important;
        border: 2px solid #00625a;
        border-top: 4px solid #00625a;
        border-bottom: 0;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        transform: rotateY(90deg) translateZ(220px);
      }
    }
    .box__face.box__face--left:after {
      background: linear-gradient(to right, black, transparent);
    }
    .box__face.bac2,
    .box__face.bac1 {
      border: 2px solid rgba(0, 98, 90, 0.6);
    }
    .box__face.bac2 {
      transform: rotateY(180deg) translateZ(-5px);
    }
    .box__face.bac1 {
      transform: rotateY(180deg) translateZ(-48px);
    }
    .box__face.box__face--right:after {
      background: linear-gradient(to left, black, transparent);
    }
    .box__face.box__face--right,
    .box__face.box__face--left {
      border-top: 0;
      background-size: 1px 50px;
      background-image: linear-gradient(
        180deg,
        transparent calc(100% - 2px),
        rgba(0, 98, 90, 0.4) 2px
      );
    }
    .box__face.box__face--bottom {
      background: rgba(0, 98, 90, 0.4);
      &:after {
        background: linear-gradient(to top, black, transparent);
      }
    }
  }
}
</style>