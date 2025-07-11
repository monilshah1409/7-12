const services = [
  {
    title: "Digital Land Brochure",
    description: "We create a smart and interactive brochure for your land that includes maps, photographs, drone videos, legal details, and 360° views. This brochure can be shared via a single link, making it ideal for presenting your property to buyers, developers, or investors in a professional and trustworthy manner.",
    pdfUrl: "https://drive.google.com/file/d/1-sPTCLaxpF-xw-XMGD4S2jxjNqCd_WKK/view?usp=sharing"
  },
  {
    title: "Farmer (Khatedar) Entry",
    description: "We help you identify and verify Khatedar (official landholder) entries in government records. This is crucial for agricultural ownership, subsidy claims, or succession purposes. We also help you update or add names when needed. ",
    // pdfUrl: "https://example.com/farmer-ownership.pdf"
  },
  // {
  //   title: "Land Checklist",
  //   description: "Comprehensive checklist to ensure all land documents are in order.",
  //   pdfUrl: "https://example.com/land-checklist.pdf"
  // },
  {
    title: "Non-Agricultural (N.A.)",
    description: "Planning to use your agricultural land for residential, industrial, or commercial projects? We assist you in converting your land legally from agricultural (Gaayalu) to non-agricultural (N.A.) use, including zone confirmation, government applications, and approvals.",
    // pdfUrl: "https://example.com/non-agricultural.pdf"
  },
  {
    title: "Title Report",
    description: "A Title Report is the backbone of any land transaction. Our team conducts thorough due diligence to check ownership history, encumbrances, and disputes. We provide a legally verified report that helps ensure secure, hassle-free buying or selling of land.",
    pdfUrl: "https://drive.google.com/file/d/1YIsxtH-21f1Ce-XDXMndFd21jj2q6kVB/view?usp=drive_link"
  },
  // {
  //   title: "Rights Shortage",
  //   description: "Address and resolve rights shortage issues effectively.",
  //   pdfUrl: "https://example.com/rights-shortage.pdf"
  // },
  {
    title: "Digital Master File",
    description: "A complete digital compilation of all documents and legal history related to your land. This file includes 7/12, 8A, title chain, old records, mutation entries, and official correspondence. A must-have for resale, verification, or legal purposes.",
    pdfUrl: "https://drive.google.com/file/d/1jpJPBBFyFLKExsWhFM6fegKKNoSXX4NN/view?usp=sharing"
  },
  // {
  //   title: "Land Share Entry",
  //   description: "Manage land share entries and ownership divisions.",
  //   pdfUrl: "https://example.com/land-share.pdf"
  // },
  // {
  //   title: "Digital Master File",
  //   description: "A complete digital compilation of all documents and legal history related to your land. This file includes 7/12, 8A, title chain, old records, mutation entries, and official correspondence. A must-have for resale, verification, or legal purposes.",
  //   pdfUrl: "https://drive.google.com/file/d/1jpJPBBFyFLKExsWhFM6fegKKNoSXX4NN/view?usp=sharing"
  // },
  {
    title: "Inheritance & Hak Kami",
    description: "When a landowner passes away or if rights need to be relinquished, we help process Waras (Inheritance) or Hak Kami (Right Removal) legally. We ensure all succession or claim transfers are updated in revenue records without disputes.",
    // pdfUrl: "https://example.com/land-inheritance.pdf"
  },
  {
    title: "Land Entry",
    description: "Entry and registration of new land properties.",
    pdfUrl: "https://example.com/land-entry.pdf"
  },
  // {
  //   title: "Rights Entry in Heirship",
  //   description: "Manage rights entry for heirs and successors.",
  //   pdfUrl: "https://example.com/rights-heirship.pdf"
  // },
  {
    title: "Land Measurement & DLR Services",
    description: "Our technical team conducts precise land measurements using government guidelines and supports DLR-related services like re-surveys, GIS map updates, boundary markings, and official approvals — ensuring your land is legally and physically aligned.",
    // pdfUrl: "https://example.com/dlr-services.pdf"
  },
  // {
  //   title: "Other facilities related to 7/12 extract",
  //   description: "Additional facilities and services related to 7/12 land extracts.",
  //   pdfUrl: "https://example.com/other-facilities.pdf"
  // },
  {
    title: "Corrections in 7/12 extract",
    description: "Mistakes in government land records can create long-term legal problems. We help you correct errors in names, areas, survey numbers, or ownership entries in your 7/12 extract, ensuring accuracy and protecting your rights.",
    // pdfUrl: "https://example.com/corrections.pdf"
  },
  {
    title: "Digital Indexing",
    description: "IEvery document, update, and entry related to your land is categorized, tagged, and indexed digitally. This makes your land record searchable, transparent, and easy to share — saving time during verification, sale, or inheritance.",
    // pdfUrl: "https://example.com/land-indexing.pdf"
  }
];

const specialRequests = [
  {
    title: "Sales PDF",
    description: "Generate professional sales PDFs for your land properties.",
    // pdfUrl: "https://example.com/sales-pdf.pdf"
  },
  {
    title: "NA Land",
    description: "Planning to use your agricultural land for residential, industrial, or commercial projects? We assist you in converting your land legally from agricultural (Gaayalu) to non-agricultural (N.A.) use, including zone confirmation, government applications, and approvals.",
    // pdfUrl: "https://example.com/non-agricultural.pdf"
    // pdfUrl: "https://example.com/na-land.pdf"
  },
  {
    title: "Title Report",
    description: "A Title Report is the backbone of any land transaction. Our team conducts thorough due diligence to check ownership history, encumbrances, and disputes. We provide a legally verified report that helps ensure secure, hassle-free buying or selling of land.",
    // pdfUrl: "https://drive.google.com/file/d/1YIsxtH-21f1Ce-XDXMndFd21jj2q6kVB/view?usp=drive_link"
  },
  {
    title: "7/12 Sudhara",
    description: "Mistakes in government land records can create long-term legal problems. We help you correct errors in names, areas, survey numbers, or ownership entries in your 7/12 extract, ensuring accuracy and protecting your rights.",
    // pdfUrl: "https://example.com/7-12-sudhara.pdf"
  }
];

const servicesContainer = document.getElementById('servicesContainer');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const viewDemoBtn = document.getElementById('viewDemoBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');

const specialRequestDetailsContainer = document.getElementById('specialRequestDetailsContainer');
const specialRequestTitle = document.getElementById('specialRequestTitle');
const specialRequestDescription = document.getElementById('specialRequestDescription');
const specialRequestViewDemoBtn = document.getElementById('specialRequestViewDemoBtn');

let currentPdfUrl = '';
let currentSpecialRequestPdfUrl = '';

function openModal(service) {
  modalTitle.textContent = service.title;
  modalDescription.textContent = service.description;
  currentPdfUrl = service.pdfUrl;
  if (currentPdfUrl) {
    viewDemoBtn.style.display = 'block';
  } else {
    viewDemoBtn.style.display = 'none';
  }
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  currentPdfUrl = '';
}

services.forEach(service => {
  const btn = document.createElement('button');
  btn.className = 'service-btn';
  btn.textContent = service.title;
  btn.addEventListener('click', () => openModal(service));
  servicesContainer.appendChild(btn);
});

const specialRequestItems = document.querySelectorAll('.special-request-item');
specialRequestItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.textContent.trim();
    const request = specialRequests.find(req => req.title === title);
    if (request) {
      specialRequestTitle.textContent = request.title;
      specialRequestDescription.textContent = request.description;
      currentSpecialRequestPdfUrl = request.pdfUrl;

      if (currentSpecialRequestPdfUrl) {
        specialRequestViewDemoBtn.style.display = 'block';
      } else {
        specialRequestViewDemoBtn.style.display = 'none';
      }

      specialRequestDetailsContainer.classList.add('active');
    }
  });
});

specialRequestViewDemoBtn.addEventListener('click', () => {
  if (currentSpecialRequestPdfUrl) {
    window.open(currentSpecialRequestPdfUrl, '_blank');
  }
});

viewDemoBtn.addEventListener('click', () => {
  if (currentPdfUrl) {
    window.open(currentPdfUrl, '_blank');
  }
});

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const closeMenuBtn = document.getElementById('close-menu-btn');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
});

closeMenuBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenu.style.display = 'flex';
});

// Close mobile menu when a navigation link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.style.display = 'flex';
    });
});

function typeText(element, text, delay = 100, callback) {
  element.textContent = '';
  element.style.color = '#2980b9'; // Set color explicitly during typing
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }
  type();
}

document.addEventListener('DOMContentLoaded', () => {

  // Scroll animation for sections
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    let delay = 0;
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        const title = entry.target.querySelector('.section-title');
        if (title) {
          setTimeout(() => {
            if (title.textContent.includes('Brochure')) {
              typeText(title, title.textContent, 100, () => {
                const highlight = title.querySelector('.highlight');
                if (highlight) {
                  highlight.style.color = '#1a3557'; // Darker color after typing
                }
              });
            } else {
              typeText(title, title.textContent);
            }
          }, delay);
          delay += 1500; // delay next typing animation by 1.5s
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('animate-fade-in');
    observer.observe(section);
  });

});
