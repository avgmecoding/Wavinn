interface ControlGroupProps {
  title: string;
  children: React.ReactNode;
}

export default function ControlGroup({ title, children }: ControlGroupProps) {
  return (
    <div className="p-4 border-b border-gray-100 dark:border-white/5 space-y-6">
      <h3 className="text-[11px] font-mono text-gray-400 uppercase tracking-tighter">
         {title}
      </h3>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}