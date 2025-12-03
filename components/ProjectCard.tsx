import Link from 'next/link';
import { CaseStudy } from '@/lib/data';

interface ProjectCardProps {
  project: CaseStudy;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <div className="group relative border border-accent/20 rounded-[1.25rem] p-6 hover:border-accent/50 transition-colors cursor-pointer h-full flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted mb-4">{project.subtitle}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs text-muted">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="text-sm text-accent group-hover:text-foreground transition-colors">
            Read case study →
          </div>
        </div>
      </div>
    </Link>
  );
}
