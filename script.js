function createConfetti() {
    const colors = ['#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63'];
    const header = document.querySelector('header');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        header.appendChild(confetti);
    }
}

document.getElementById('pinata').addEventListener('click', function() {
    this.classList.add('shake');
    setTimeout(() => {
        this.classList.remove('shake');
        document.getElementById('giftLink').style.display = 'block';
        createConfetti(); // Confetti Animation
    }, 500); 
});

document.getElementById('giftLinkAnchor').addEventListener('click', function(event) {
    event.preventDefault();
    const prankLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll link


    window.open(prankLink, '_blank');

    // Show prank message after short delay
    setTimeout(() => {
        alert("Sorry, a prank hehe, Here's your real gift...");
        document.getElementById('giftLink').style.display = 'none'; // Hide the gift link
        const modal = document.getElementById('giftModal');
        const modalContent = modal.querySelector('.modal-content');
        modal.style.display = 'block';
        modalContent.classList.add('party');
        startEmojiParty();
    }, 3000);
});

document.getElementById('closeModal').onclick = function() {
    document.getElementById('giftModal').style.display = 'none';
    stopEmojiParty();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('giftModal')) {
        document.getElementById('giftModal').style.display = 'none';
    }
}

function startEmojiParty() {
    const emojis = ['🎉','🎊','🎈','🥳','🎂','✨','🎀','🪅'];
    const partyContainer = document.createElement('div');
    partyContainer.classList.add('party-emoji-container');
    document.body.appendChild(partyContainer);

    const partyInterval = setInterval(() => {
    const emoji = document.createElement('div');
    emoji.classList.add('party-emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.fontSize = (Math.random() * 30 + 20) + 'px';
    emoji.style.position = 'fixed';
    emoji.style.top = '-50px';
    emoji.style.zIndex = 2000;
    emoji.style.opacity = 0.9;
    emoji.style.transform = `rotate(${Math.random()*360}deg)`;
    emoji.style.transition = 'transform 6s linear, top 6s linear, opacity 6s';

    partyContainer.appendChild(emoji);

    requestAnimationFrame(() => {
        emoji.style.top = window.innerHeight + 100 + 'px';
        emoji.style.transform = `translateX(${Math.random()*100 - 50}px) rotate(${Math.random()*720}deg)`;
        emoji.style.opacity = 0;
    });

    setTimeout(() => {
        emoji.remove();
    }, 6000);
    }, 150);

    partyContainer.dataset.interval = partyInterval;
}

function stopEmojiParty() {
    const partyContainer = document.querySelector('.party-emoji-container');
    if (partyContainer && partyContainer.dataset.interval) {
    clearInterval(partyContainer.dataset.interval);
    partyContainer.remove();
    }
}

window.onload = function() {
    createConfetti();
};