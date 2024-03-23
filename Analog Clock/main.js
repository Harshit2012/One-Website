function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourRotation = (hours % 12 + minutes / 60) * 30;
    const minuteRotation = (minutes + seconds / 60) * 6;
    const secondRotation = seconds * 6;
  
    document.getElementById('hourHand').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(updateClock, 1000);
  updateClock();