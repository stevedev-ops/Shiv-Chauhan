import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["Shiv Chauhan", " A Developer"];

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % phrases.length;
            const fullText = phrases[current];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(() => {
            handleTyping();
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed]);

    return <span className="typing-effect">{text}</span>;
};

export default TypingEffect;
