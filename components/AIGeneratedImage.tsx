import React from 'react';
import { ShieldCheckIcon } from './icons'; // More on-brand icon for a security company.

// This component provides a stable, visually appealing placeholder for missing images.
// Direct client-side AI image generation was found to be unstable and insecure, causing app-load failures.
// This robust fallback ensures a professional appearance and reliable application performance.
const AIGeneratedImage: React.FC<{ alt: string; className?: string; prompt?: string }> = ({ alt, className }) => {
    return (
        <div 
            className={`flex flex-col items-center justify-center bg-dark text-white p-4 text-center overflow-hidden ${className}`}
            role="img"
            aria-label={`Placeholder image for ${alt}`}
        >
            <div className="relative z-10 flex flex-col items-center justify-center">
                <ShieldCheckIcon className="h-10 w-10 text-primary opacity-90 mb-3" />
                <span className="text-lg font-bold tracking-wider text-gray-200">Aran Network</span>
                <span className="text-sm font-light text-gray-400 mt-1 truncate max-w-full px-2" title={alt}>{alt}</span>
            </div>
        </div>
    );
};

export default AIGeneratedImage;
