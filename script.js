let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(51, 51, 51);

    for (let particle of particles) {
        particle.update();
        particle.show();
        particle.checkParticles(particles);
    }
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-3, 3), random(-3, 3)).mult(random(0.5, 2));
        this.size = random(3, 7);
        this.color = color(100, 255, 100, 0.5);
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    checkParticles(particles) {
        for (let i = particles.indexOf(this) + 1; i < particles.length; i++) {
            const particle = particles[i];
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            const alpha = map(d, 0, 150, 0.5, 0);
            if (d < 150) {
                stroke(100, 255, 100, alpha * 255);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        }
    }
}