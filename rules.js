class Rules {

    constructor() {
      this.button = createButton('Lets Play !!');
      this.title = createElement('h1');

    }
    hide(){
      this.button.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("🌸❅ 𝕽𝖚𝖑𝖊𝖘 & 𝕽𝖊𝖌𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘 ✪❂");
      this.title.position(displayWidth/2 - 650, displayHeight - 750);

      this.button.position(displayWidth/2 + 400, displayHeight - 200);
      this.button.style('font-size', '30px');
      this.button.style('color', 'white');
      this.button.style('background', 'black');

      this.button.mousePressed(()=>{
        gameState = 1
    });
  
    }
  }
  