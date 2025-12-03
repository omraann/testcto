import React from 'react';
import { Card } from './ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ServiceCard = ({ title, description, tags }: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <h3 className="text-[20px] font-bold text-[#F5F1E6] mb-2">{title}</h3>
      <p className="text-[15px] leading-relaxed text-[#AFAFAF] mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[12px] text-[#AFAFAF] bg-[rgba(255,255,255,0.04)] px-2 py-1 rounded border border-[rgba(255,255,255,0.1)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
};
