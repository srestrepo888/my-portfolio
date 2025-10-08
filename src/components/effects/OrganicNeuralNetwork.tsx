import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface NeuralNode {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  connections: string[];
  icon: React.ReactNode;
  color: string;
  category: string;
  isActive: boolean;
  isCenter?: boolean;
}

const neuralNodes: NeuralNode[] = [
  {
    id: 'experience-architecture',
    name: 'Experience Architecture',
    description: 'Designing seamless, intuitive experiences that connect users with products and services through thoughtful interaction design.',
    x: 50,
    y: 50,
    connections: ['strategic-design', 'digital-transformation', 'user-research', 'design-systems', 'innovation-consulting'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 2L4 8l12 6 12-6-12-6z"/>
        <path d="M4 22l12 6 12-6"/>
        <path d="M4 16l12 6 12-6"/>
        <circle cx="16" cy="16" r="2.5" fill="currentColor" opacity="0.15"/>
      </svg>
    ),
    color: '#FF6663',
    category: 'Core Architecture',
    isActive: false,
    isCenter: true
  },
  {
    id: 'strategic-design',
    name: 'Strategic Design',
    description: 'Crafting comprehensive design strategies that align business objectives with user needs.',
    x: 20,
    y: 25,
    connections: ['experience-architecture', 'digital-transformation', 'design-systems'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 4L8 8l8 4 8-4-8-4z"/>
        <path d="M8 16l8 4 8-4"/>
        <path d="M8 24l8 4 8-4"/>
        <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.2"/>
        <path d="M12 12l8 8M20 12l-8 8" strokeWidth="0.6"/>
      </svg>
    ),
    color: '#8B9DC3',
    category: 'Strategy & Planning',
    isActive: false
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Guiding organizations through digital evolution, implementing technology solutions.',
    x: 80,
    y: 25,
    connections: ['experience-architecture', 'strategic-design', 'innovation-consulting'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="6" width="24" height="18" rx="2" ry="2"/>
        <path d="M10 30h12"/>
        <path d="M16 24v6"/>
        <circle cx="16" cy="15" r="1.5" fill="currentColor" opacity="0.15"/>
        <path d="M12 11h8M12 19h8" strokeWidth="0.6"/>
      </svg>
    ),
    color: '#2C3E50',
    category: 'Technology & Innovation',
    isActive: false
  },
  {
    id: 'user-research',
    name: 'User Research',
    description: 'Uncovering deep insights about user behavior, needs, and motivations.',
    x: 15,
    y: 75,
    connections: ['experience-architecture', 'design-systems'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="3.5"/>
        <path d="M8 8l4 4M24 8l-4 4M8 24l4-4M24 24l-4-4"/>
        <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.3"/>
        <path d="M12 12l8 8M20 12l-8 8" strokeWidth="0.5"/>
      </svg>
    ),
    color: '#8B9DC3',
    category: 'Research & Insights',
    isActive: false
  },
  {
    id: 'design-systems',
    name: 'Design Systems',
    description: 'Creating scalable design systems that ensure consistency and efficiency.',
    x: 50,
    y: 85,
    connections: ['experience-architecture', 'strategic-design', 'user-research'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="6" width="8" height="8" rx="1"/>
        <rect x="18" y="6" width="8" height="8" rx="1"/>
        <rect x="6" y="18" width="8" height="8" rx="1"/>
        <rect x="18" y="18" width="8" height="8" rx="1"/>
        <circle cx="16" cy="16" r="0.8" fill="currentColor" opacity="0.25"/>
        <path d="M10 10h12M10 22h12M10 10v12M22 10v12" strokeWidth="0.5"/>
      </svg>
    ),
    color: '#2C3E50',
    category: 'Systems & Standards',
    isActive: false
  },
  {
    id: 'innovation-consulting',
    name: 'Innovation Consulting',
    description: 'Providing strategic guidance and creative solutions for meaningful innovation.',
    x: 85,
    y: 75,
    connections: ['experience-architecture', 'digital-transformation'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 4L8 12l8 8 8-8-8-8z"/>
        <path d="M8 20l8 8 8-8"/>
        <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.15"/>
        <path d="M12 12l8 8M20 12l-8 8" strokeWidth="0.6"/>
        <circle cx="16" cy="16" r="0.4" fill="currentColor"/>
      </svg>
    ),
    color: '#FF6663',
    category: 'Strategy & Innovation',
    isActive: false
  }
];

const OrganicNeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [nodes, setNodes] = useState<NeuralNode[]>(neuralNodes);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const drawOrganicConnections = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const drawOrganicConnection = (startNode: NeuralNode, endNode: NeuralNode) => {
      const startX = (startNode.x / 100) * canvas.width;
      const startY = (startNode.y / 100) * canvas.height;
      const endX = (endNode.x / 100) * canvas.width;
      const endY = (endNode.y / 100) * canvas.height;

      // Create very subtle gradient
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, startNode.color + '25');
      gradient.addColorStop(0.5, startNode.color + '15');
      gradient.addColorStop(1, endNode.color + '25');

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // Create truly organic, flowing curves
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      
      // Calculate distance for organic curve strength
      const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      const curveStrength = Math.min(distance * 0.3, 60);
      
      // Create natural, flowing curves
      const controlX1 = startX + (midX - startX) * 0.6 + (Math.random() - 0.5) * 20;
      const controlY1 = startY + (midY - startY) * 0.6 + (Math.random() - 0.5) * 15;
      const controlX2 = midX + (endX - midX) * 0.4 + (Math.random() - 0.5) * 20;
      const controlY2 = midY + (endY - midY) * 0.4 + (Math.random() - 0.5) * 15;
      
      ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = hoveredNode === startNode.id || hoveredNode === endNode.id ? 2 : 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Add very subtle flowing particles
      if (hoveredNode === startNode.id || hoveredNode === endNode.id) {
        const t = (Date.now() / 6000) % 1;
        const particleX = Math.pow(1 - t, 3) * startX + 
                         3 * Math.pow(1 - t, 2) * t * controlX1 + 
                         3 * (1 - t) * Math.pow(t, 2) * controlX2 + 
                         Math.pow(t, 3) * endX;
        const particleY = Math.pow(1 - t, 3) * startY + 
                         3 * Math.pow(1 - t, 2) * t * controlY1 + 
                         3 * (1 - t) * Math.pow(t, 2) * controlY2 + 
                         Math.pow(t, 3) * endY;
        
        ctx.beginPath();
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
        ctx.fillStyle = startNode.color;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw all connections with organic flow
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes.find(n => n.id === targetId);
          if (target) {
            drawOrganicConnection(node, target);
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width * 100);
      mouseY.set((e.clientY - rect.top) / rect.height * 100);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredNode, mouseX, mouseY, nodes]);

  useEffect(() => {
    drawOrganicConnections();
  }, [drawOrganicConnections]);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden">
      {/* Subtle background - no containers */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(255, 102, 99, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(139, 157, 195, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(44, 62, 80, 0.008) 0%, transparent 60%),
            linear-gradient(135deg, #FFFBEE 0%, #FFF5E6 100%)
          `
        }}
      />
      
      {/* Organic neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />
      
      {/* Floating Neural Nodes - No containers, truly floating */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute cursor-pointer group"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: hoveredNode === node.id ? 1.15 : 1,
            rotate: hoveredNode === node.id ? [0, 1, -1, 0] : 0
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            rotate: {
              duration: 0.4,
              repeat: hoveredNode === node.id ? Infinity : 0
            }
          }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => handleNodeClick(node.id)}
        >
          {/* Floating Node Core - All same size */}
          <motion.div
            className="relative"
            animate={{
              boxShadow: hoveredNode === node.id 
                ? `0 0 30px ${node.color}30, 0 0 60px ${node.color}15` 
                : `0 0 15px ${node.color}20`
            }}
            style={{
              width: '70px', // All nodes same size
              height: '70px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${node.color}15, ${node.color}05, transparent)`,
              border: `1.5px solid ${node.color}25`,
              backdropFilter: 'blur(15px)'
            }}
          >
            {/* Modern Icon */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ color: node.color }}
            >
              <motion.div
                animate={{
                  scale: hoveredNode === node.id ? 1.2 : 1,
                  rotate: hoveredNode === node.id ? 360 : 0
                }}
                transition={{ duration: 0.6 }}
              >
                {node.icon}
              </motion.div>
            </div>
            
            {/* Subtle orbiting element */}
            <motion.div
              className="absolute"
              style={{
                width: '3px',
                height: '3px',
                backgroundColor: node.color,
                borderRadius: '50%',
                top: '50%',
                left: '50%'
              }}
              animate={{
                rotate: 360,
                x: [0, 30, 0, -30, 0],
                y: [-30, 0, 30, 0, -30],
                opacity: [0.4, 0.8, 0.4, 0.2, 0.4]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Floating Node Label - Compact */}
          <motion.div
            className="absolute whitespace-nowrap"
            style={{
              top: '80px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              opacity: hoveredNode === node.id ? 1 : 0.8
            }}
          >
            <p
              className="text-sm font-light tracking-wide"
              style={{
                color: '#6B7280',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'center'
              }}
            >
              {node.name}
            </p>
          </motion.div>

          {/* Compact Category Badge */}
          <motion.div
            className="absolute"
            style={{
              top: '95px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              opacity: hoveredNode === node.id ? 1 : 0.7
            }}
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-light tracking-wide uppercase"
              style={{
                backgroundColor: `${node.color}12`,
                color: node.color,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {node.category}
            </span>
          </motion.div>

          {/* Floating Hover Tooltip - No container, truly floating */}
          <AnimatePresence>
            {hoveredNode === node.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute z-20 p-6 rounded-2xl shadow-xl"
                style={{
                  top: '115px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '280px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${node.color}20`
                }}
              >
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{
                    color: '#6B7280',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {node.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Floating Selected Node Detail - No container, truly floating */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-8 rounded-2xl shadow-xl"
            style={{
              width: '320px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: `1.5px solid ${nodes.find(n => n.id === selectedNode)?.color}25`
            }}
          >
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                color: '#9CA3AF'
              }}
            >
              ✕
            </button>
            
            <div className="mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${nodes.find(n => n.id === selectedNode)?.color}12`,
                  color: nodes.find(n => n.id === selectedNode)?.color
                }}
              >
                {nodes.find(n => n.id === selectedNode)?.icon}
              </div>
              
              <h3
                className="text-2xl font-light mb-2"
                style={{
                  color: '#6B7280',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic'
                }}
              >
                {nodes.find(n => n.id === selectedNode)?.name}
              </h3>
              
              <span
                className="inline-block px-4 py-1 rounded-full text-sm font-light tracking-wide uppercase"
                style={{
                  backgroundColor: `${nodes.find(n => n.id === selectedNode)?.color}12`,
                  color: nodes.find(n => n.id === selectedNode)?.color
                }}
              >
                {nodes.find(n => n.id === selectedNode)?.category}
              </span>
            </div>
            
            <p
              className="text-sm font-light leading-relaxed"
              style={{
                color: '#9CA3AF',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {nodes.find(n => n.id === selectedNode)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrganicNeuralNetwork;
