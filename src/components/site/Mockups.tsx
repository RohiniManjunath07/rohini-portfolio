import type { ReactNode } from "react";

export function BrowserMockup({
  title = "rohini.dev",
  children,
  className = "",
}: {
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-strong gradient-border rounded-3xl overflow-hidden shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
        <span className="size-3 rounded-full bg-red-500/80" />
        <span className="size-3 rounded-full bg-yellow-500/80" />
        <span className="size-3 rounded-full bg-green-500/80" />
        <div className="mx-auto text-xs text-muted-foreground font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10">
          {title}
        </div>
        <span className="size-3 rounded-full bg-transparent" />
      </div>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#0a0d1f] via-[#0d1030] to-[#070514]">
        {children}
      </div>
    </div>
  );
}

export function PhoneMockup({
  children,
  className = "",
  label,
  image,
}: {
  children?: ReactNode;
  className?: string;
  label?: string;
  image?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[240px] rounded-[42px] p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 shadow-[0_30px_80px_-20px_rgba(124,58,237,0.5)]">
        <div className="rounded-[34px] overflow-hidden bg-[#05070f] aspect-[9/19.5] relative border border-white/10">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black z-10" />

          {children ? (
            children
          ) : image ? (
            <img
              src={image}
              alt={label ?? "Project Screenshot"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-muted-foreground font-mono">
              {label ?? "Screen"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
