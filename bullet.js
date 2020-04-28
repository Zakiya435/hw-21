class Bullet
{
    constructor(weight,speed)
    {
        this.x = 50;
        this.y = 200;
        this.speed = speed;
        this.weight = weight;
        this.sprite = createSprite(this.x,this.y,50,30);
        this.sprite.velocityX = this.speed;
        this.sprite.shapeColor = color(255);
    };
};