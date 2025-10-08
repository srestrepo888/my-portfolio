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
}

const neuralNodes: NeuralNode[] = [
  {
    id: 'strategic-design',
    name: 'Strategic Design',
    description: 'Crafting comprehensive design strategies that align business objectives with user needs, creating sustainable competitive advantages.',
    x: 20,
    y: 25,
    connections: ['experience-architecture', 'user-research', 'innovation-consulting'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    color: '#FF6663',
    category: 'Strategy & Planning',
    isActive: false
  },
  {
    id: 'experience-architecture',
    name: 'Experience Architecture',
    description: 'Designing seamless, intuitive experiences that connect users with products and services through thoughtful interaction design.',
    x: 50,
    y: 15,
    connections: ['strategic-design', 'digital-transformation', 'design-systems'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    color: '#8FBC8F',
    category: 'UX & Interaction',
    isActive: false
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Guiding organizations through digital evolution, implementing technology solutions that enhance operational efficiency and user satisfaction.',
    x: 80,
    y: 25,
    connections: ['experience-architecture', 'design-systems', 'innovation-consulting'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    color: '#B19CD9',
    category: 'Technology & Innovation',
    isActive: false
  },
  {
    id: 'user-research',
    name: 'User Research',
    description: 'Uncovering deep insights about user behavior, needs, and motivations to inform data-driven design decisions and product strategies.',
    x: 15,
    y: 60,
    connections: ['strategic-design', 'design-systems'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    color: '#FFB347',
    category: 'Research & Insights',
    isActive: false
  },
  {
    id: 'design-systems',
    name: 'Design Systems',
    description: 'Creating scalable design systems that ensure consistency, efficiency, and maintainability across all digital touchpoints.',
    x: 50,
    y: 70,
    connections: ['experience-architecture', 'user-research', 'innovation-consulting'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    color: '#708090',
    category: 'Systems & Standards',
    isActive: false
  },
  {
    id: 'innovation-consulting',
    name: 'Innovation Consulting',
    description: 'Providing strategic guidance and creative solutions to help organizations navigate complex challenges and drive meaningful innovation.',
    x: 85,
    y: 60,
    connections: ['strategic-design', 'digital-transformation', 'design-systems'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    color: '#FF6663',
    category: 'Strategy & Innovation',
    isActive: false
  }
];

const ObsidianNeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [nodes, setNodes] = useState<NeuralNode[]>(neuralNodes);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const drawNeuralConnections = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const drawConnection = (startNode: NeuralNode, endNode: NeuralNode) => {
      const startX = (startNode.x / 100) * canvas.width;
      const startY = (startNode.y / 100) * canvas.height;
      const endX = (endNode.x / 100) * canvas.width;
      const endY = (endNode.y / 100) * canvas.height;

      // Create sophisticated gradient
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, startNode.color + '40');
      gradient.addColorStop(0.5, startNode.color + '20');
      gradient.addColorStop(1, endNode.color + '40');

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // Create elegant curved path
      const controlX = (startX + endX) / 2 + (Math.sin(Date.now() / 2000) * 20);
      const controlY = (startY + endY) / 2 + (Math.cos(Date.now() / 2000) * 20);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = hoveredNode === startNode.id || hoveredNode === endNode.id ? 3 : 1.5;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Add pulsing particles along the path
      if (hoveredNode === startNode.id || hoveredNode === endNode.id) {
        const t = (Date.now() / 3000) % 1;
        const particleX = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
        const particleY = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
        
        ctx.beginPath();
        ctx.arc(particleX, particleY, 4, 0, Math.PI * 2);
        ctx.fillStyle = startNode.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = startNode.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw all connections
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes.find(n => n.id === targetId);
          if (target) {
            drawConnection(node, target);
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
    drawNeuralConnections();
  }, [drawNeuralConnections]);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
    setNodes(prev => prev.map(node => ({
      ...node,
      isActive: nodeId === nodeId ? !node.isActive : false
    })));
  };

  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden">
      {/* Obsidian-style background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 102, 99, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(143, 188, 143, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(177, 156, 217, 0.02) 0%, transparent 50%),
            linear-gradient(135deg, #FFFBEE 0%, #FFF5E6 100%)
          `
        }}
      />
      
      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      
      {/* Neural Nodes */}
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
            rotate: hoveredNode === node.id ? [0, 2, -2, 0] : 0
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
          {/* Node Core */}
          <motion.div
            className="relative"
            animate={{
              boxShadow: hoveredNode === node.id 
                ? `0 0 40px ${node.color}50, 0 0 80px ${node.color}20` 
                : `0 0 20px ${node.color}30`
            }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${node.color}15, ${node.color}05, transparent)`,
              border: `2px solid ${node.color}40`,
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Icon Container */}
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
            
            {/* Orbiting particles */}
            <motion.div
              className="absolute"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: node.color,
                borderRadius: '50%',
                top: '50%',
                left: '50%'
              }}
              animate={{
                rotate: 360,
                x: [0, 30, 0, -30, 0],
                y: [-30, 0, 30, 0, -30],
                opacity: [0.8, 1, 0.8, 0.4, 0.8]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Node Label */}
          <motion.div
            className="absolute whitespace-nowrap"
            style={{
              top: '90px',
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

          {/* Category Badge */}
          <motion.div
            className="absolute"
            style={{
              top: '110px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              opacity: hoveredNode === node.id ? 1 : 0.6
            }}
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-light tracking-wider uppercase"
              style={{
                backgroundColor: `${node.color}15`,
                color: node.color,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {node.category}
            </span>
          </motion.div>

          {/* Hover Tooltip */}
          <AnimatePresence>
            {hoveredNode === node.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute z-20 p-6 rounded-2xl shadow-2xl"
                style={{
                  top: '140px',
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

      {/* Selected Node Detail Panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 p-8 rounded-2xl shadow-2xl"
            style={{
              width: '350px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: `2px solid ${nodes.find(n => n.id === selectedNode)?.color}30`
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
                  backgroundColor: `${nodes.find(n => n.id === selectedNode)?.color}15`,
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
                className="inline-block px-4 py-2 rounded-full text-xs font-light tracking-wider uppercase"
                style={{
                  backgroundColor: `${nodes.find(n => n.id === selectedNode)?.color}15`,
                  color: nodes.find(n => n.id === selectedNode)?.color
                }}
              >
                {nodes.find(n => n.id === selectedNode)?.category}
              </span>
            </div>
            
            <p
              className="text-base font-light leading-relaxed"
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

export default ObsidianNeuralNetwork;
