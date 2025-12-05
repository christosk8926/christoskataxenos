'use client';

import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

/**
 * Code block component with copy button
 * Wraps code blocks and adds a copy-to-clipboard button
 */
export default function CodeBlock({ children, className, ...props }) {
    const [copied, setCopied] = useState(false);

    // Extract language from className (format: "language-python")
    const language = className?.replace(/language-/, '') || '';

    const handleCopy = async () => {
        try {
            // Get the code content from children
            const code = children?.props?.children || children;
            const codeText = typeof code === 'string' ? code : code?.toString() || '';

            await navigator.clipboard.writeText(codeText.trim());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="relative group">
            {/* Language label */}
            {language && (
                <div className="absolute top-0 left-0 px-3 py-1 text-xs font-mono text-gray-400 bg-gray-800/50 rounded-tl-lg rounded-br-lg border-b border-r border-purple-500/20">
                    {language}
                </div>
            )}

            {/* Copy button */}
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 rounded-md bg-gray-800/80 hover:bg-gray-700 border border-gray-600 hover:border-purple-500 transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Copy code"
            >
                {copied ? (
                    <FaCheck className="w-4 h-4 text-green-400" />
                ) : (
                    <FaCopy className="w-4 h-4 text-gray-300" />
                )}
            </button>

            {/* The actual code block */}
            <pre className={className} {...props}>
                {children}
            </pre>
        </div>
    );
}
