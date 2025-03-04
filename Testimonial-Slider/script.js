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

const addTestimonials = () => {
  const container = document.createElement("div");
  container.classList.add("testimonials-container");

  testimonials.forEach((testimonial) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("testimonial-card");

    // // 🔹 Styling langsung dengan JS
    // newDiv.style.border = "1px solid #ccc";
    // newDiv.style.padding = "20px";
    // newDiv.style.margin = "10px";
    // newDiv.style.borderRadius = "10px";
    // newDiv.style.textAlign = "center";
    // newDiv.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";

    const newImg = document.createElement("img");
    newImg.classList.add("testimonial-img");
    newImg.src = testimonial.photoUrl;
    newImg.alt = "Foto " + testimonial.name;

    // 🔹 Styling gambar langsung
    // newImg.style.width = "100px";
    // newImg.style.height = "100px";
    // newImg.style.borderRadius = "50%";

    const newP = document.createElement("p");
    newP.classList.add("testimonial-p");
    newP.textContent = testimonial.text;

    const headingFour = document.createElement("h4");
    headingFour.classList.add("testimonial-heading");
    headingFour.textContent = testimonial.name;

    // 🔹 Styling nama heading
    // headingFour.style.fontSize = "18px";
    // headingFour.style.fontWeight = "bold";
    // headingFour.style.marginTop = "10px";

    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);
    newDiv.appendChild(headingFour);

    container.appendChild(newDiv);
  });
};

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
