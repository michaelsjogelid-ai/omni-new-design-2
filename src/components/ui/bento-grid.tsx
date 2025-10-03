"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-8 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/10 bg-white/5 backdrop-blur-sm",
                        "hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20",
                        "hover:scale-105 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : ""
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-6">
                        <div className="text-purple-400 group-hover:text-cyan-400 transition-all duration-300 animate-bounce-gentle">
                            {item.icon}
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">
                                {item.title}
                            </h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-purple-400">
                                    {item.meta}
                                </span>
                            </div>
                            <p className="text-gray-300">
                                {item.description}
                            </p>
                        </div>

                        {item.tags && item.tags.length > 0 && (
                            <div className="space-y-3">
                                <h4 className="text-purple-400 font-semibold">Includes:</h4>
                                <ul className="space-y-2">
                                    {item.tags.map((tag, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <svg className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300 text-sm">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
