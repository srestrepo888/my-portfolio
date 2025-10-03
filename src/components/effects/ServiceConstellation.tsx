import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Service {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  connections: string[];
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    id: 'experience',
    name: 'Experience Design',
    description: 'Crafting seamless journeys that resonate with human needs',
    x: 50,
    y: 30,
    connections: ['service', 'product'],
    icon: '✧',
    color: '#F26B75'
  },
  {
    id: 'service',
    name: 'Service Design',
    description: 'Orchestrating touchpoints into cohesive service ecosystems',
    x: 25,
    y: 50,
    connections: ['research', 'operations'],
    icon: '◈',
    color: '#FFB6C1'
  },
  {
    id: 'product',
    name: 'Product Strategy',
    description: 'Aligning business goals with user needs through strategic vision',
    x: 75,
    y: 50,
    connections: ['research', 'transformation'],
    icon: '◆',
    color: '#FFA07A'
  },
  {
    id: 'research',
    name: 'User Research',
    description: 'Uncovering deep insights to drive meaningful innovation',
    x: 35,
    y: 70,
    connections: ['operations'],
    icon: '○',
    color: '#FFD700'
  },
  {
    id: 'operations',
    name: 'Design Operations',
    description: 'Scaling design impact through systematic excellence',
    x: 50,
    y: 85,
    connections: ['transformation'],
    icon: '□',
    color: '#98D8C8'
  },
  {
    id: 'transformation',
    name: 'Digital Transformation',
    description: 'Leading organizations into the future of digital excellence',
    x: 65,
    y: 70,
    connections: ['experience'],
    icon: '△',
    color: '#B19CD9'
  }
];

const ServiceConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      services.forEach(service => {
        service.connections.forEach(targetId => {
          const target = services.find(s => s.id === targetId);
          if (target) {
            const startX = (service.x / 100) * canvas.width;
            const startY = (service.y / 100) * canvas.height;
            const endX = (target.x / 100) * canvas.width;
            const endY = (target.y / 100) * canvas.height;

            // Create gradient for the line
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop(0, service.color + '30');
            gradient.addColorStop(1, target.color + '30');

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            
            // Create curved path
            const controlX = (startX + endX) / 2 + (Math.random() - 0.5) * 50;
            const controlY = (startY + endY) / 2 + (Math.random() - 0.5) * 50;
            ctx.quadraticCurveTo(controlX, controlY, endX, endY);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = hoveredService === service.id || hoveredService === targetId ? 2 : 1;
            ctx.stroke();

            // Animate particles along the path
            if (hoveredService === service.id || hoveredService === targetId) {
              const t = (Date.now() / 2000) % 1;
              const particleX = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
              const particleY = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
              
              ctx.beginPath();
              ctx.arc(particleX, particleY, 3, 0, Math.PI * 2);
              ctx.fillStyle = service.color;
              ctx.fill();
            }
          }
        });
      });
    };

    const animate = () => {
      drawConnections();
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width * 100);
      mouseY.set((e.clientY - rect.top) / rect.height * 100);
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredService, mouseX, mouseY]);

  return (
    <div className="relative w-full h-full min-h-[600px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      
      {/* Service Nodes */}
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="absolute cursor-pointer"
          style={{
            left: `${service.x}%`,
            top: `${service.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: hoveredService === service.id ? 1.2 : 1,
            rotate: hoveredService === service.id ? [0, 5, -5, 0] : 0
          }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            rotate: {
              duration: 0.3,
              repeat: hoveredService === service.id ? Infinity : 0
            }
          }}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
          onClick={() => setSelectedService(service.id)}
        >
          {/* Node Circle */}
          <motion.div
            className="relative"
            animate={{
              boxShadow: hoveredService === service.id 
                ? `0 0 30px ${service.color}60` 
                : `0 0 15px ${service.color}30`
            }}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${service.color}20, transparent)`,
              border: `2px solid ${service.color}40`
            }}
          >
            {/* Icon */}
            <span
              className="absolute inset-0 flex items-center justify-center text-2xl"
              style={{ color: service.color }}
            >
              {service.icon}
            </span>
            
            {/* Orbiting particle */}
            <motion.div
              className="absolute"
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: service.color,
                borderRadius: '50%',
                top: '50%',
                left: '50%'
              }}
              animate={{
                rotate: 360,
                x: [0, 25, 0, -25, 0],
                y: [-25, 0, 25, 0, -25]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Service Label */}
          <motion.div
            className="absolute whitespace-nowrap"
            style={{
              top: '70px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              opacity: hoveredService === service.id ? 1 : 0.7
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                color: '#4A5568',
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              {service.name}
            </p>
          </motion.div>

          {/* Tooltip on hover */}
          {hoveredService === service.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-10 p-4 bg-white rounded-lg shadow-xl"
              style={{
                top: '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '250px',
                border: `1px solid ${service.color}30`
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}
              >
                {service.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Selected Service Detail */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl"
          style={{
            width: '300px',
            border: `2px solid ${services.find(s => s.id === selectedService)?.color}30`
          }}
        >
          <button
            onClick={() => setSelectedService(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          <h3
            style={{
              fontSize: '20px',
              fontFamily: 'Georgia, serif',
              color: services.find(s => s.id === selectedService)?.color,
              marginBottom: '12px'
            }}
          >
            {services.find(s => s.id === selectedService)?.name}
          </h3>
          <p
            style={{
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              color: '#6B7280',
              lineHeight: '1.6'
            }}
          >
            {services.find(s => s.id === selectedService)?.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceConstellation;