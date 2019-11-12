  /*
            _______ __________________          _______  _______ 
|\     /|(  ___  )\__   __/\__   __/|\     /|(  ____ )(  ____ \
| )   ( || (   ) |   ) (      ) (   | )   ( || (    )|| (    \/
| |   | || |   | |   | |      | |   | |   | || (____)|| (__    
( (   ) )| |   | |   | |      | |   | |   | ||     __)|  __)   
 \ \_/ / | |   | |   | |      | |   | |   | || (\ (   | (      
  \   /  | (___) |___) (___   | |   | (___) || ) \ \__| (____/\
   \_/   (_______)\_______/   )_(   (_______)|/   \__/(_______/
                                                               
    */

  class Voiture {

    constructor() {

    const voitureimg = document.createElement('img');
    voitureimg.onload = () => {
        this.voitureimg = voitureimg;

 const voitureimgRatio = voitureimg.naturalWidth/voitureimg.naturalHeight;

        this.w = 100; 
        this.h = 180;
  
        this.x = 50;
        this.y = 680//-this.h;
        }
    voitureimg.src="./images/voiture.png";
}
    
    draw() {
        if (!this.voitureimg) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.voitureimg, this.x, this.y, this.w, this.h);
    
    }
    hits(bike) {
      return (
        (bike.x+bike.w >= this.x && bike.x <= this.x+this.w) 
        &&
        (bike.y <= this.y+this.h && bike.y+bike.h >= this.y)
      );
    }
  
  }


  /*
            _______ __________________          _______  _______    ______   _        _______           _______ 
|\     /|(  ___  )\__   __/\__   __/|\     /|(  ____ )(  ____ \  (  ___ \ ( \      (  ____ \|\     /|(  ____ \
| )   ( || (   ) |   ) (      ) (   | )   ( || (    )|| (    \/  | (   ) )| (      | (    \/| )   ( || (    \/
| |   | || |   | |   | |      | |   | |   | || (____)|| (__      | (__/ / | |      | (__    | |   | || (__    
( (   ) )| |   | |   | |      | |   | |   | ||     __)|  __)     |  __ (  | |      |  __)   | |   | ||  __)   
 \ \_/ / | |   | |   | |      | |   | |   | || (\ (   | (        | (  \ \ | |      | (      | |   | || (      
  \   /  | (___) |___) (___   | |   | (___) || ) \ \__| (____/\  | )___) )| (____/\| (____/\| (___) || (____/\
   \_/   (_______)\_______/   )_(   (_______)|/   \__/(_______/  |/ \___/ (_______/(_______/(_______)(_______/
                                                                                                              
    */


  class VoitureBleue {

    constructor() {
        console.log('test');

    const voitureBleueimg = document.createElement('img');
    voitureBleueimg.onload = () => {
        this.voitureBleueimg = voitureBleueimg;

        const voitureBleueimgRatio = voitureBleueimg.naturalWidth/voitureBleueimg.naturalHeight;

        this.w = 100; 
        this.h = 180;
  
        this.x = 150;
        this.y = 680//-this.h;
        }
    voitureBleueimg.src="./images/voitureBleue.png";
}
    
    draw() {
        if (!this.voitureBleueimg) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.voitureBleueimg, this.x, this.y, this.w, this.h);
    
    }
  
    hits(bike) {
      return (
        (bike.x+bike.w >= this.x && bike.x <= this.x+this.w) 
        &&
        (bike.y <= this.y+this.h && bike.y+bike.h >= this.y)
      );
    }
  }
/*
  _______           _______ 
  (       )|\     /|(  ____ )
  | () () || )   ( || (    )|
  | || || || |   | || (____)|
  | |(_)| || |   | ||     __)
  | |   | || |   | || (\ (   
  | )   ( || (___) || ) \ \__
  |/     \|(_______)|/   \__/
                           

  class Mur {
    constructor() {
      this.w = 200; 
      this.h = 600;
  
      this.x = 450
      this.y = -this.h;
    }
  
    draw() {
     
      ctx.fillRect(this.x,this.y, this.w,this.h);
    }
  }

  */