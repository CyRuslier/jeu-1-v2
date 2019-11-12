class Cap {

    constructor() {

    const capImg = document.createElement('img');
    capImg.onload = () => {
        this.capImg = capImg;

        const capImgRatio = capImg.naturalWidth/capImg.naturalHeight;

        this.w = 70; 
        this.h = 60;
  
        this.x = 0;
        this.y = -this.h;
        }
        capImg.src="./images/casquette1.png";
}
    
    draw() {
        if (!this.capImg) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.capImg, this.x, this.y, this.w, this.h);
    
    }
  
    hits(bike) {
        return (

          (bike.x+bike.w >= this.x && bike.x <= this.x+this.w) 
          &&
          (bike.y <= this.y+this.h && bike.y+bike.h >= this.y)
        );
      }
  }

  