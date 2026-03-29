"use client";
import { useRef, useState } from 'react';

// 1. 增加了一个可选的 href 属性
export default function MagneticButton({ text, href }: { text: string; href?: string }) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        
        const x = (clientX - (left + width / 2)) * 0.3; 
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    // 2. 将按钮本身的 UI 逻辑定义为一个公共变量
    const buttonEl = (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out'
            }}
            className="px-8 py-4 rounded-full border border-white/20 text-lg hover:border-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-colors duration-300 relative z-10 block w-fit mx-auto"
        >
            {text}
        </button>
    );

    // 3. 如果提供了 href，我们就把按钮包裹在一个新窗口打开的 <a> 标签里
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                {buttonEl}
            </a>
        );
    }

    return buttonEl;
}