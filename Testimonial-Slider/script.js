const testimonials = [
  {
    name: "dhanty",
    photoUrl: "https://www.svgrepo.com/show/509001/avatar-thinking-9.svg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    name: "putri",
    photoUrl: "https://www.svgrepo.com/show/509006/avatar-thinking-4.svg",
    text: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
  },
];

let currentIndex = 0;

const container = document.createElement("div");
container.classList.add("testimonials-container");
document.body.appendChild(container);

const newDiv = document.createElement("div");
newDiv.classList.add("testimonial-card");

const newImg = document.createElement("img");
newImg.classList.add("testimonial-img");

const newP = document.createElement("p");
newP.classList.add("testimonial-p");

const headingFour = document.createElement("h4");
headingFour.classList.add("testimonial-heading");

newDiv.appendChild(newImg);
newDiv.appendChild(newP);
newDiv.appendChild(headingFour);
container.appendChild(newDiv);
const updateTestimonials = () => {
  const { name, photoUrl, text } = testimonials[currentIndex];
  newImg.src = photoUrl;
  newImg.alt = `Foto ${name}`;
  newP.textContent = text;
  headingFour.textContent = name;

  currentIndex = (currentIndex + 1) % testimonials.length;
};

updateTestimonials();
setInterval(updateTestimonials, 2000);

const style = document.createElement("style");
style.textContent = `
//   .testimonials-container {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//   }

  .testimonial-card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  }

  .testimonial-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .testimonial-heading {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  .testimonial-p {
    color: #333;
    font-size: 14px;
  }
`;
document.head.appendChild(style);

document.body.onload = addTestimonials;
