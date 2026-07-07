import { IconSearch } from './icons';

export function GridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <div className="skeleton" style={{ height: 158 }} />
          <div className="skeleton" style={{ height: 14, width: '40%', margin: '12px 0 8px' }} />
          <div className="skeleton" style={{ height: 18, width: '85%' }} />
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="empty">
      <IconSearch className="ico" />
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
    </div>
  );
}
