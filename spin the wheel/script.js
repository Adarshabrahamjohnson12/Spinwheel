document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // Random degree plus multiple spins
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
