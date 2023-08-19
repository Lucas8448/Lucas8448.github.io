let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 110; i++) {
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
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.size = 5;
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    show() {
        noStroke();
        fill('rgba(100,255,100,0.5)');
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
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 150) {
                stroke('rgba(100,255,100,0.5)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}