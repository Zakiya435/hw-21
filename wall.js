class Wall
{
    constructor(thickness)
    {
        this.x = 1200;
        this.y = 200;
        this.thickness = thickness;
        this.sprite = createSprite(this.x,this.y,this.thickness,this.thickness * 2);
        this.sprite.velocityX = this.speed;
        this.sprite.shapeColor = color(230,230,230);
    };
}