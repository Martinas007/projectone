{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const navLinks = document.querySelectorAll('nav a');\
\
    navLinks.forEach(link => \{\
        link.addEventListener('click', (e) => \{\
            e.preventDefault();\
            smoothScroll(e.target.getAttribute('href'));\
        \});\
    \});\
\
    const playGameBtn = document.getElementById('play-game');\
    const submitGuessBtn = document.getElementById('submit-guess');\
    const gameResult = document.getElementById('game-result');\
    const guessInput = document.getElementById('guess');\
    const gameSection = document.getElementById('game');\
    let randomNumber = Math.floor(Math.random() * 10) + 1;\
\
    playGameBtn.addEventListener('click', () => \{\
        gameSection.hidden = false;\
    \});\
\
    submitGuessBtn.addEventListener('click', () => \{\
        const userGuess = parseInt(guessInput.value, 10);\
\
        if (userGuess === randomNumber) \{\
            gameResult.textContent = "Congratulations, you've won! You can now view the portfolio.";\
            gameResult.hidden = false;\
            setTimeout(() => \{\
                document.querySelectorAll('section[data-aos]').forEach(section => \{\
                    section.hidden = false;\
                \});\
                gameSection.hidden = true;\
            \}, 3000);\
        \} else \{\
            gameResult.textContent = "Try again!";\
            gameResult.hidden = false;\
            randomNumber = Math.floor(Math.random() * 10) + 1;\
        \}\
    \});\
\
    function smoothScroll(target) \{\
        document.querySelector(target).scrollIntoView(\{\
            behavior: 'smooth',\
            block: 'start'\
        \});\
    \}\
\
    // Add AOS (Animate On Scroll) library for animations\
    document.write('<script src="https://cdn.jsdelivr.net/npm/aos@3.0.0-beta.6/dist/aos.js"><\\/script>');\
    document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@3.0.0-beta.6/dist/aos.css" />');\
\
    // Initialize AOS after the library is loaded\
    window.onload = () => \{\
        AOS.init(\{\
            duration: 1000,\
            once: true,\
        \});\
    \};\
\
    // Back-to-top button functionality\
    const backToTopBtn = document.getElementById('back-to-top');\
\
    window.addEventListener('scroll', () => \{\
        if (window.scrollY > 300) \{\
            backToTopBtn.style.display = 'block';\
        \} else \{\
            backToTopBtn.style.display = 'none';\
        \}\
    \});\
\
    backToTopBtn.addEventListener('click', () => \{\
        smoothScroll('#hero');\
    \});\
\});\
}