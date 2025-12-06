import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ServiceCard = ({ title, description, tags }: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <h3 className="text-[20px] font-bold text-foreground mb-2">{title}</h3>
      <p className="text-[15px] leading-relaxed text-secondary mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag) => (
          <Badge key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
