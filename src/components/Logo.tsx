import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark", size = "md" }) => {
    const sizeClasses = {
        sm: "h-12 sm:h-14",
        md: "h-16 sm:h-24",
        lg: "h-24 sm:h-36",
        xl: "h-36 sm:h-56"
    };

    const textSizes = {
        sm: "text-2xl sm:text-3xl",
        md: "text-4xl sm:text-6xl",
        lg: "text-6xl sm:text-8xl",
        xl: "text-8xl sm:text-[11rem]"
    };

    return (
        <div className={`inline-flex items-end gap-1 bg-[#F2C200] px-5 py-4 rounded-xl ${className}`}>
            {/* The Three Leaves Icon - Tailored Silhouettes */}
            <svg
                viewBox="0 0 120 100"
                className={`${sizeClasses[size]} w-auto drop-shadow-sm`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Left Leaf - Pointed, curved left */}
                <path
                    d="M30 95C20 75 10 50 20 20C40 30 50 65 30 95Z"
                    fill="#1A8F1A"
                />
                {/* Middle Leaf - Tallest, centered */}
                <path
                    d="M60 92C50 65 45 30 60 5C75 30 70 65 60 92Z"
                    fill="#3DAE2B"
                />
                {/* Right Leaf - Pointed, curved right */}
                <path
                    d="M90 95C100 75 110 50 100 20C80 30 70 65 90 95Z"
                    fill="#63C64D"
                />
            </svg>

            {/* Custom Handwritten Text */}
            <span
                style={{
                    fontFamily: "'Permanent Marker', cursive",
                    letterSpacing: '-0.02em',
                    transform: 'translateY(-10%)'
                }}
                className={`${textSizes[size]} ${variant === 'dark' ? 'text-[#1A1108]' : 'text-white'} leading-none select-none`}
            >
                ANANTA
            </span>
        </div>
    );
};

export default Logo;
