class Bike {
    constructor(){
        var img = document.createElement('img');
        img.onload = () => {
            this.img = img;
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 60;
            this.h = this.w / imgRatio;
            this.x = 250;
            this.y = 450;
        }
        img.src="./images/bike.png";
    }

    draw(){
        if (!this.img) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    }


    moveLeft() {
    this.x += -50;
  }
  moveRight() {
    this.x += 50;
  }
}