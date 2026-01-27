import { useEffect, useRef } from "react";

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

// 浅黄色系烟花粒子颜色
const COLORS = [
  'rgba(255, 248, 220, 1)',   // 浅黄色
  'rgba(255, 250, 205, 1)',   // 柠檬绸
  'rgba(255, 239, 153, 1)',   // 淡金色
  'rgba(255, 245, 180, 1)',   // 浅金黄
  'rgba(250, 250, 210, 1)',   // 亮黄色
  'rgba(255, 255, 224, 1)',   // 浅黄白
];

// 烟花粒子
class FireworkParticle {
  public position: Vec2;
  public velocity: Vec2;
  public color: string;
  public size: number;
  public alpha: number = 1;
  public active: boolean = true;
  public lifetime: number = 0;
  public maxLifetime: number;
  private gravity: number = 80; // 重力加速度

  constructor(x: number, y: number, angle: number, speed: number, color: string, size: number) {
    this.position = new Vec2(x, y);
    this.color = color;
    this.size = size;
    
    // 根据角度和速度设置初始速度
    this.velocity = new Vec2(
      Math.cos(angle) * speed,
      Math.sin(angle) * speed
    );

    // 随机生命周期 1-2秒
    this.maxLifetime = 1 + Math.random() * 1;
  }

  update(dt: number) {
    this.lifetime += dt;

    // 应用重力
    this.velocity.y += this.gravity * dt;

    // 更新位置
    const movement = this.velocity.clone().multiplyScalar(dt);
    this.position.add(movement);

    // 逐渐消失
    this.alpha = 1 - (this.lifetime / this.maxLifetime);

    if (this.lifetime >= this.maxLifetime || this.alpha <= 0) {
      this.active = false;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active || this.alpha <= 0) return;

    ctx.save();
    ctx.globalAlpha = this.alpha;

    // 绘制最外层大光晕（外发光效果）
    const outerGlow = ctx.createRadialGradient(
      this.position.x, this.position.y, 0,
      this.position.x, this.position.y, this.size * 5
    );
    outerGlow.addColorStop(0, this.color.replace('1)', '0.4)'));
    outerGlow.addColorStop(0.3, this.color.replace('1)', '0.2)'));
    outerGlow.addColorStop(0.6, this.color.replace('1)', '0.1)'));
    outerGlow.addColorStop(1, this.color.replace('1)', '0)'));

    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size * 5, 0, Math.PI * 2);
    ctx.fill();

    // 绘制中层发光光晕
    const midGlow = ctx.createRadialGradient(
      this.position.x, this.position.y, 0,
      this.position.x, this.position.y, this.size * 3
    );
    midGlow.addColorStop(0, this.color);
    midGlow.addColorStop(0.4, this.color.replace('1)', '0.6)'));
    midGlow.addColorStop(0.8, this.color.replace('1)', '0.3)'));
    midGlow.addColorStop(1, this.color.replace('1)', '0)'));

    ctx.fillStyle = midGlow;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size * 3, 0, Math.PI * 2);
    ctx.fill();

    // 绘制内层光晕
    const gradient = ctx.createRadialGradient(
      this.position.x, this.position.y, 0,
      this.position.x, this.position.y, this.size * 2
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.5, this.color.replace('1)', '0.7)'));
    gradient.addColorStop(1, this.color.replace('1)', '0)'));

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size * 2, 0, Math.PI * 2);
    ctx.fill();

    // 核心光点（增强外发光）
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    // 再次绘制核心以加强光亮感
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size * 0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

// 上升火箭
class Rocket {
  public position: Vec2;
  public velocity: Vec2;
  public color: string;
  public active: boolean = true;
  public exploded: boolean = false;
  private targetY: number;
  private trail: Vec2[] = []; // 轨迹记录
  private maxTrailLength: number = 25; // 拖尾长度加长

  constructor(x: number, y: number, targetY: number) {
    this.position = new Vec2(x, y);
    this.targetY = targetY;
    
    // 向上的速度
    this.velocity = new Vec2(0, -200);
    
    // 随机颜色
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  update(dt: number) {
    if (this.exploded) {
      this.active = false;
      return;
    }

    // 记录当前位置到轨迹
    this.trail.push(this.position.clone());
    
    // 限制轨迹长度
    if (this.trail.length > this.maxTrailLength) {
      this.trail.shift();
    }

    // 更新位置
    const movement = this.velocity.clone().multiplyScalar(dt);
    this.position.add(movement);

    // 到达目标高度时爆炸
    if (this.position.y <= this.targetY) {
      this.exploded = true;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.exploded || !this.active) return;

    ctx.save();
    
    // 绘制拖尾（彗星效果）- 增强外发光
    for (let i = 0; i < this.trail.length; i++) {
      const pos = this.trail[i];
      const alpha = (i + 1) / this.trail.length; // 越靠前透明度越低
      const size = 2 * alpha; // 越靠前越小
      
      ctx.globalAlpha = alpha * 0.7;
      
      // 外层拖尾光晕（增强发光）
      const outerTrail = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y, size * 4
      );
      outerTrail.addColorStop(0, this.color.replace('1)', '0.5)'));
      outerTrail.addColorStop(0.5, this.color.replace('1)', '0.2)'));
      outerTrail.addColorStop(1, this.color.replace('1)', '0)'));
      
      ctx.fillStyle = outerTrail;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * 4, 0, Math.PI * 2);
      ctx.fill();
      
      // 内层拖尾光晕
      const gradient = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y, size * 2
      );
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(0.6, this.color.replace('1)', '0.4)'));
      gradient.addColorStop(1, this.color.replace('1)', '0)'));
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // 绘制主光点（增强发光）
    ctx.globalAlpha = 1;
    
    // 外发光
    const outerGlow = ctx.createRadialGradient(
      this.position.x, this.position.y, 0,
      this.position.x, this.position.y, 8
    );
    outerGlow.addColorStop(0, this.color);
    outerGlow.addColorStop(0.5, this.color.replace('1)', '0.5)'));
    outerGlow.addColorStop(1, this.color.replace('1)', '0)'));
    
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 核心光点
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  explode(): FireworkParticle[] {
    const particles: FireworkParticle[] = [];
    const particleCount = 30 + Math.floor(Math.random() * 20); // 30-50个粒子
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.3;
      const speed = 80 + Math.random() * 60; // 速度随机
      const size = 1 + Math.random() * 1.5; // 大小随机 1-2.5px
      
      particles.push(new FireworkParticle(
        this.position.x,
        this.position.y,
        angle,
        speed,
        this.color,
        size
      ));
    }
    
    return particles;
  }
}

interface GuangDianLiZiProps {
  width?: number;
  height?: number;
}

const GuangDianLiZi: React.FC<GuangDianLiZiProps> = ({ 
  width = 750, 
  height = 350 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const rocketsRef = useRef<Rocket[]>([]);
  const particlesRef = useRef<FireworkParticle[]>([]);
  const nextSpawnTimeRef = useRef<number>(0);

  const getRandomSpawnTime = () => {
    // 随机生成间隔：0.8秒到2秒
    return 0.8 + Math.random() * 1.2;
  };

  const spawnRocket = () => {
    // 随机X位置
    const x = 100 + Math.random() * (width - 200);
    
    // 从底部发射
    const y = height;
    
    // 目标高度：顶部20%-60%区域
    const targetY = height * 0.2 + Math.random() * height * 0.4;
    
    const rocket = new Rocket(x, y, targetY);
    rocketsRef.current.push(rocket);
  };

  const update = (time: number) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
      nextSpawnTimeRef.current = getRandomSpawnTime();
    }
    
    const dt = (time - previousTimeRef.current) / 1000;
    previousTimeRef.current = time;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // 随机生成新火箭
    nextSpawnTimeRef.current -= dt;
    if (nextSpawnTimeRef.current <= 0) {
      spawnRocket();
      nextSpawnTimeRef.current = getRandomSpawnTime();
    }

    // 更新火箭
    for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
      const rocket = rocketsRef.current[i];
      rocket.update(dt);
      
      if (rocket.exploded) {
        // 爆炸，生成粒子
        const newParticles = rocket.explode();
        particlesRef.current.push(...newParticles);
        rocketsRef.current.splice(i, 1);
      } else if (!rocket.active) {
        rocketsRef.current.splice(i, 1);
      } else {
        rocket.draw(ctx);
      }
    }

    // 更新和绘制所有爆炸粒子
    for (let i = particlesRef.current.length - 1; i >= 0; i--) {
      const p = particlesRef.current[i];
      p.update(dt);
      
      if (!p.active) {
        particlesRef.current.splice(i, 1);
      } else {
        p.draw(ctx);
      }
    }

    requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="block w-full h-full"
      />
    </div>
  );
};

export default GuangDianLiZi;