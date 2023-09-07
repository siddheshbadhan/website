AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Business Intern for Products",
    cardImage: "assets/images/experience-page/PJLI.jpeg",
    place: "PJ Lhuillier Group of Companies",
    time: "(May 2023 - August 2023)",
    desp: "Designed and implemented a social-media centric business strategy aimed at boosting engagement and enhancing visibility for MSMEs by integrating AI solutions for optimized content creation, resulting in reduced production time and increased content quality. Developed a strategic plan for expanding the product portfolio to meet market needs.",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/cmu.png",
    place: "Carnegie Mellon University",
    time: "(May 2023 - Jul 2023)",
    desp: "Audited the LLPA(Loan-Level Price Adjustment) data within the Fannie-Mae secondary loan mortgage market by generating summary statistics, employed regression analysis to successfully project default rates for the last 23 years, resulting in improved risk management strategies.",
  },
  {
    title: "Cloud FinOps Analyst",
    cardImage: "assets/images/experience-page/ICICI.jpeg",
    place: "ICICI Lombard GIC",
    time: "(Aug 2021 - Jul 2022)",
    desp: "Spearheaded the Cloud Economics Project by reducing the monthly cloud expenditure by 12.5%, optimized the resource performance by implementing auto-scaling strategies and collaborated with the team to deliver streamlined infrastructure supporting over 120 applications. Received accolades from the board of directors for outstanding performance in two consecutive quarters of 2022.",
  },
  {
    title: "Cloud Analyst Intern",
    cardImage: "assets/images/experience-page/ICICI.jpeg",
    place: "ICICI Lombard GIC",
    time: "(Feb 2021 - Aug 2021)",
    desp: "Implemented automation for cost-optimization on AWS, leading to substantial reductions in resource utilization; Executed research on emerging cloud technologies by contributing to the migration of the infrastructure to cloud. Secured a position within the top 5 incoming analysts for superior performance.",
  },
  {
    title: "Data Analyst Intern",
    cardImage: "assets/images/experience-page/iocl1.png",
    place: "Indian Oil Corporation Limited",
    time: "(Jun 2019 - Jul 2019)",
    desp: "Designed a user friendly interface for generating and viewing reports, automated the report generation process by 75% reduction in the report generation time to track the status of retail outlets.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Teaching Assistant, Carnegie Mellon University",
    cardImage: "assets/images/experience-page/tepper.jpeg",
    // description:
    //   "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "Student Mentor, Gradvine",
    cardImage: "assets/images/experience-page/gradvine.png",
  },
  {
    title: "Student Volunteer, Afroz Shah Foundation",
    cardImage: "assets/images/experience-page/afroz shah.jpeg",
    // description:
    //   "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 400px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          </div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "India Innovation Challenge Design Contest (IICDC) 2019",
    subtitle: "Semi-finalist",
    image: "assets/images/experience-page/TI.png",
    desp: "Attained a remarkable achievement by securing a position among the top 50 teams out of over 18,000 participating teams in India's premier innovation and design contest, jointly organized by Texas Instruments and the Department of Science and Technology (DST).",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ACCS Design Challenge (ADC) 2019",
    subtitle: "Finalist",
    image: "assets/images/experience-page/accs.jpeg",
    desp: "Achieved finalist status, ranking among the top 4 teams, from a competitive pool of over 400 participating teams in the Advanced Computing and Communication Society (ACCS) Design Challenge, focused on product innovation and development.",
    href: "https://ulhacks.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
