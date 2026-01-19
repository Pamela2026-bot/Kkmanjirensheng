import { useEffect, useRef } from "react";

// --- Cocos-like Logic & Math Helpers ---

class Vec2 {
  public x: number;
  public y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(v: Vec2): Vec2 {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  multiplyScalar(s: number): Vec2 {
    this.x *= s;
    this.y *= s;
    return this;
  }

  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }
}

class Color {
  r: number;
  g: number;
  b: number;
  a: number;
  constructor(
    r: number,
    g: number,
    b: number,
    a: number = 255,
  ) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  toCSS(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a / 255})`;
  }
}

// 春节主题色彩 - 红色、金色为主，适量蓝色和绿色
const COLORS = [
  new Color(255, 0, 0), // 中国红
  new Color(255, 215, 0), // 金色
  new Color(255, 140, 0), // 橙色
  new Color(255, 69, 0), // 橘红
  new Color(255, 105, 180), // 粉红
  new Color(255, 182, 193), // 浅粉
  new Color(240, 230, 140), // 黄色
  new Color(255, 250, 205), // 柠檬绸
  new Color(0, 191, 255), // 天蓝色
  new Color(135, 206, 250), // 亮蓝色
  new Color(50, 205, 50), // 翠绿色（减少绿色占比）
];

class ConfettiParticle {
  public position: Vec2;
  public velocity: Vec2;
  public rotation: number = 0;
  public rotationSpeed: number = 0;
  public scale: number = 1;
  public color: Color;
  public size: Vec2;
  public active: boolean = true;

  // Physics constants per particle for variety
  private gravity: number;
  private drag: number;

  constructor(x: number, y: number) {
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);

    // Size variation: 8~18px width, 6~12px height
    this.size = new Vec2(
      8 + Math.random() * 10,
      6 + Math.random() * 6,
    );

    this.color =
      COLORS[Math.floor(Math.random() * COLORS.length)];

    // Rotation
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 600;

    this.scale = 0.5 + Math.random() * 0.9;

    // RANDOM PHYSICS PROPERTIES
    // This ensures they don't all follow the exact same curve
    this.gravity = 1000 + Math.random() * 400; // Vary gravity
    this.drag = 0.98 + Math.random() * 0.015; // Vary air resistance (0.98 - 0.995)
  }

  update(dt: number) {
    // Apply Gravity
    this.velocity.y += this.gravity * dt;

    // Apply Drag
    this.velocity.x *= this.drag;
    this.velocity.y *= this.drag;

    // Update Position
    const movement = this.velocity.clone().multiplyScalar(dt);
    this.position.add(movement);

    // Update Rotation
    this.rotation += this.rotationSpeed * dt;

    // Boundary check - 适配1624高度
    if (this.position.y > 1700) {
      this.active = false;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;

    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.scale(this.scale, this.scale);

    ctx.fillStyle = this.color.toCSS();
    ctx.fillRect(
      -this.size.x / 2,
      -this.size.y / 2,
      this.size.x,
      this.size.y,
    );

    ctx.restore();
  }
}

interface FireworksProps {
  key?: number | string;
}

const Fireworks: React.FC<FireworksProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const particlesRef = useRef<ConfettiParticle[]>([]);

  const CANVAS_WIDTH = 750;
  const CANVAS_HEIGHT = 1624;
  const BURST_COUNT = 50; // 增加粒子数量以适配更大的画布

  const explode = () => {
    particlesRef.current = []; // Clear existing

    // 画布中央位置 (1624 / 2 = 812)
    const centerY = CANVAS_HEIGHT / 2;

    // Left Side Burst
    for (let i = 0; i < BURST_COUNT; i++) {
      // Widen the spawn area (not just a single point)
      // X: -50 to 150 (Start wider)
      // Y: 居中位置上下浮动100px (712 to 912)
      const startX = Math.random() * 200 - 50;
      const startY = centerY + (Math.random() * 200 - 100);

      const p = new ConfettiParticle(startX, startY);

      // Velocity Logic: Fan shape
      // X: 100 to 600 (Wide variance in horizontal speed)
      // Y: -800 to -1600 (Wide variance in vertical power)
      p.velocity = new Vec2(
        100 + Math.random() * 500,
        -(800 + Math.random() * 800),
      );
      particlesRef.current.push(p);
    }

    // Right Side Burst
    for (let i = 0; i < BURST_COUNT; i++) {
      // Mirror spawn area
      const startX = CANVAS_WIDTH - (Math.random() * 200 - 50);
      const startY = centerY + (Math.random() * 200 - 100);

      const p = new ConfettiParticle(startX, startY);

      // Mirror velocity
      p.velocity = new Vec2(
        -(100 + Math.random() * 500),
        -(800 + Math.random() * 800),
      );
      particlesRef.current.push(p);
    }
  };

  const update = (time: number) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
    }
    const dt = (time - previousTimeRef.current) / 1000;
    previousTimeRef.current = time;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = particlesRef.current.length - 1; i >= 0; i--) {
      const p = particlesRef.current[i];
      p.update(dt);
    }

    particlesRef.current.forEach((p) => p.draw(ctx));
    requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    explode();
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current)
        cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="block"
        style={{ width: '750px', height: '1624px' }}
      />
    </div>
  );
};

export default Fireworks;