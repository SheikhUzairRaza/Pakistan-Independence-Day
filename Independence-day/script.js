document.addEventListener('DOMContentLoaded', function() {
    const numFireworks = 30; // Number of fireworks to display
    const fireworkContainer = document.querySelector('.fireworks');
    const numFlags = 50; // Number of flags to display
    const flagContainer = document.querySelector('.fireworks');
    const flagUrls = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png', // Replace with actual paths or URLs
            // Add more flag URLs here
    ];

    for (let i = 0; i < numFlags; i++) {
        const flag = document.createElement('img');
        flag.src = flagUrls[Math.floor(Math.random() * flagUrls.length)];
        flag.className = 'flag';
        flag.style.left = Math.random() * 100 + 'vw';
        flag.style.top = Math.random() * 100 + 'vh';
        flag.style.animationDuration = (Math.random() * 10 + 5) + 's'; 
        flagContainer.appendChild(flag);
    }
    for (let i = 0; i < numFireworks; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.animationDuration = (Math.random() * 2 + 1) + 's'; 
        fireworkContainer.appendChild(firework);
    }
});

