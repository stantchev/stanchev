import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const [animate, setAnimate] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimate(true);
          }, index * 150); // Stagger animation
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [index]);
  
  // Determine color based on skill level
  const getGradient = () => {
    if (skill.level >= 80) {
      return 'from-cyan-400 to-fuchsia-500';
    } else if (skill.level >= 60) {
      return 'from-cyan-400 to-blue-500';
    } else {
      return 'from-blue-400 to-indigo-500';
    }
  };
  
  return (
    <div 
      ref={skillRef} 
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-medium">{skill.name}</h3>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      
      <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${getGradient()} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: animate ? `${skill.level}%` : '0%',
            boxShadow: animate ? `0 0 10px rgba(0, 255, 255, 0.5)` : 'none'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
