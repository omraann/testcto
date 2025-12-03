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
      <Card className="h-full flex flex-col group-hover:border-[rgba(255,255,255,0.25)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] group-hover:scale-[1.02] group-hover:-translate-y-[2px]">
        {/* Optional Thumbnail could go here */}
        
        <h3 className="text-[22px] font-bold text-[#F5F1E6] mt-4 group-hover:text-[#5D9CEC] transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-[15px] text-[#AFAFAF] mt-2 mb-4 line-clamp-2">
          {project.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-[6px] mt-auto mb-4">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} className="text-[10px] px-2 py-1 h-[22px]">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-[14px] font-medium text-[#5D9CEC] flex items-center mt-2 group-hover:underline">
          Read case study 
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </Card>
    </Link>
  );
};
