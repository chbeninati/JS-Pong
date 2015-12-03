"use strict";

// BALL //
function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
}

Ball.prototype.Draw = function(game) {
    game.ctx.beginPath();
    game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    game.ctx.fillStyle = this.color;
    game.ctx.fill();
    game.ctx.closePath;
}