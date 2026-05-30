const byId = (id) => document.getElementById(id);

function setProfile() {
  document.title = `${portfolioProfile.name} | 视觉传播作品集`;
  byId("hero-title").textContent = portfolioProfile.headline;
  byId("hero-intro").textContent = portfolioProfile.intro;
  byId("about-summary").textContent =
    `${portfolioProfile.name}，${portfolioProfile.basics.politicalStatus}。目标方向为${portfolioProfile.title}，关注内容理解、视觉表达、项目推进与传播落地。`;

  const phoneLink = byId("phone-link");
  const emailLink = byId("email-link");
  phoneLink.href = `tel:${portfolioProfile.contact.phone}`;
  phoneLink.textContent = `电话 ${portfolioProfile.contact.phone}`;
  emailLink.href = `mailto:${portfolioProfile.contact.email}`;
  emailLink.textContent = `邮箱 ${portfolioProfile.contact.email}`;

  const educationList = byId("education-list");
  educationList.innerHTML = portfolioProfile.basics.education
    .map(
      (item) => `
        <article>
          <strong>${item.school} · ${item.degree}</strong>
          <p>${item.major}｜${item.period}</p>
          <p>${item.highlights.join("；")}</p>
        </article>
      `
    )
    .join("");

  const skillList = byId("skill-list");
  skillList.innerHTML = portfolioProfile.basics.skills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function renderCase(caseItem, index) {
  const mainImages = caseItem.images.filter((image) => image.detailLevel === "main");
  const supportImages = caseItem.images.filter((image) => image.detailLevel !== "main");
  const orderedImages = [...mainImages, ...supportImages];

  const imageHtml = orderedImages
    .map(
      (image) => `
        <figure class="work-card ${image.detailLevel === "main" ? "main" : ""} reveal">
          <div class="work-image">
            <img src="${image.src}" alt="${image.title}" loading="lazy" />
          </div>
          <figcaption class="work-caption">
            <strong>${image.id} ${image.title}</strong>
            <p>${image.note}</p>
          </figcaption>
        </figure>
      `
    )
    .join("");

  return `
    <article class="case-section" id="${caseItem.id}">
      <div class="case-copy reveal">
        <div class="case-kicker">
          <span>CASE ${caseItem.group}</span>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3>${caseItem.title}</h3>
        <p>${caseItem.oneLine}</p>
        <div class="case-meta">
          <span class="pill">${caseItem.role}</span>
          <span class="pill">${caseItem.period}</span>
        </div>
        <div class="detail-block">
          <h4>项目逻辑</h4>
          <p>${caseItem.logic}</p>
        </div>
        <div class="detail-block">
          <h4>我的职责</h4>
          <p>${caseItem.responsibility}</p>
        </div>
        <div class="detail-block">
          <h4>关键动作</h4>
          <ul>${caseItem.keyActions.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="detail-block">
          <h4>成果证据</h4>
          <ul>${caseItem.results.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="case-gallery">${imageHtml}</div>
    </article>
  `;
}

function renderCases() {
  byId("case-list").innerHTML = portfolioCases.map(renderCase).join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal, .method-grid article").forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

function setupImageFallback() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest("figure")?.classList.add("image-missing");
      image.alt = `${image.alt} 图片未能加载`;
    });
  });
}

setProfile();
renderCases();
setupReveal();
setupImageFallback();
