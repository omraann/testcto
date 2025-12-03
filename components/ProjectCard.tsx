import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { CaseStudy } from '@/lib/data/case-studies';

interface ProjectCardProps {
  project: CaseStudy;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/work/${project.slug}`} className="block group h-full">
      <Card className="h-full flex flex-col">
        {/* Optional Thumbnail could go here */}
        
        <h3 className="text-[20px] font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-200 font-space">
          {project.title}
        </h3>
        
        <p className="text-[15px] text-secondary leading-relaxed mb-4 line-clamp-2 flex-grow">
          {project.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-[14px] font-medium text-accent flex items-center mt-2">
          Read case study 
          <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-[2px]">→</span>
        </div>
      </Card>
    </Link>
  );
};
