import React from 'react';
import AnimatedElement from './AnimatedElement';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  className = ''
}) => {
  return (
    <AnimatedElement animation="fadeInUp" className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`section-title inline-block ${center ? 'before:left-1/2 before:-translate-x-1/2' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-dim mt-4 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </AnimatedElement>
  );
};

export default SectionTitle;