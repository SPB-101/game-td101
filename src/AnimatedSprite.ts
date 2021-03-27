import {Drawable} from "./Drawable";
import {FrameData} from "./FrameData";
import {Vector} from "./Utils";

export class AnimatedSprite implements Drawable {

    image?: CanvasImageSource;
    currentFrames: FrameData[];
    currentIndex: number = -1;
    currentPos: Vector;

    constructor(image: CanvasImageSource, currentFrames: FrameData[], currentIndex: number, currentPos: Vector) {
        this.image = image;
        this.currentFrames = currentFrames;
        this.currentIndex = currentIndex;
        this.currentPos = currentPos;
    }

    draw(cx: CanvasRenderingContext2D) {
        if (this.currentIndex === -1) return;

        if (this.image) {
            this.currentIndex = (this.currentIndex + 1) % this.currentFrames.length;
            const currentFrame = this.currentFrames[this.currentIndex];

            let dx = this.currentPos.x,
                dy = this.currentPos.y;
            const newSize = {
                w: currentFrame.frame.w,
                h: currentFrame.frame.h,
            };
            const newPosition = {
                x: 0,
                y: 0,
            };

            if (currentFrame.rotated) {
                cx.save();
                cx.translate(cx.canvas.width / 2, cx.canvas.height / 2);
                cx.rotate(-Math.PI / 2);
                cx.translate(-cx.canvas.height / 2, -cx.canvas.width / 2);
                newSize.w = currentFrame.frame.h;
                newSize.h = currentFrame.frame.w;
            }

            newPosition.x = currentFrame.spriteSourceSize.x + dx;
            newPosition.y = currentFrame.spriteSourceSize.y + dy;

            if (currentFrame.rotated) {
                newPosition.x = cx.canvas.height - currentFrame.spriteSourceSize.h - currentFrame.spriteSourceSize.y - dy;
                newPosition.y = currentFrame.spriteSourceSize.x + dx;
            }

            cx.drawImage(
                this.image,
                currentFrame.frame.x,
                currentFrame.frame.y,
                newSize.w,
                newSize.h,
                newPosition.x,
                newPosition.y,
                newSize.w,
                newSize.h
            );

            cx.beginPath();
            cx.strokeStyle = 'lime'
            cx.rect(newPosition.x, newPosition.y, newSize.w, newSize.h)
            cx.stroke()
            cx.closePath()

            cx.beginPath();

            let posX = this.currentPos.x;
            let posY = this.currentPos.y;
            if(currentFrame.rotated) {
                posX = cx.canvas.height - this.currentPos.y;
                posY = this.currentPos.x;
            }

            cx.arc(posX, posY, 4, 0, 2*Math.PI)
            cx.fillStyle = 'lime'
            cx.fill()
            cx.closePath()

            if (currentFrame.rotated) cx.restore();

        }
    }

}