const intro = document.createElement("div");
intro.id = "dayIntro";
intro.classList.add("intro");

const p = document.createElement("p");
p.id = "dayName";
intro.appendChild(p);

const container = document.createElement("div");
container.classList.add("container");

const displayClock = document.createElement("div");
displayClock.classList.add("dispClock");

container.appendChild(displayClock);

const time = document.createElement("div");
time.classList.add("time");
displayClock.appendChild(time);

document.body.append(intro, container);

const currentTime = () => {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let now = new Date();
  let dayName = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate().toString().padStart(2, "0");
  let hour = now.getHours().toString().padStart(2, "0");
  let min = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");

  time.textContent = `${hour} : ${min} : ${second}`;
  p.textContent = `${dayName}, ${date} - ${month} - ${year}`;
};
currentTime();
setInterval(currentTime, 1000);

const style = document.createElement("style");
style.textContent = `
    *,
    *::before,
    *::after{
      box-sizing: content-box;
      font-family: 'Poppins', sans-serif;
    }
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color:rgb(172, 202, 232);
    }
    .intro {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:rgb(168, 179, 190);
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .time {
        font-size: 36px;
        font-weight: bold;
        color: #333;
    }
`;
document.head.appendChild(style);
