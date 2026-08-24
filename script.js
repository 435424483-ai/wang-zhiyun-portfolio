const byId = (id) => document.getElementById(id);

const imageMeta = {
  "assets/a_people_daily/a01_minshi_naliang.jpg": { width: 1920, height: 1080 },
  "assets/a_people_daily/a02_qingliang_fudi.jpg": { width: 1920, height: 1080 },
  "assets/a_people_daily/a03_olympic_glory.jpg": { width: 1920, height: 1080 },
  "assets/a_people_daily/a04_songci_fujian_0619.jpg": { width: 1080, height: 1920 },
  "assets/a_people_daily/a05_songci_fujian_0620.jpg": { width: 1080, height: 1920 },
  "assets/a_people_daily/a06_anti_drug_day.jpg": { width: 1080, height: 1920 },
  "assets/a_people_daily/a07_practical_tech_0710.jpg": { width: 1080, height: 1920 },
  "assets/b_gulangyu/b01_minoyaki.png": { width: 3839, height: 1829 },
  "assets/b_gulangyu/b02_tile_package_mockup.png": { width: 1122, height: 1402 },
  "assets/b_gulangyu/b03_canvas_bag_mockup.png": { width: 2048, height: 2048 },
  "assets/b_gulangyu/b04_postcard_black_gold.png": { width: 2531, height: 1656 },
  "assets/b_gulangyu/b05_coin_mockup.png": { width: 1810, height: 917 },
  "assets/c_xmu_media/c03_media_memory_longform_01.jpg": { width: 3000, height: 5619 },
  "assets/c_xmu_media/c04_graduation_gift_cover.png": { width: 2350, height: 1000 },
  "assets/c_xmu_media/c05_calendar_body.png": { width: 4500, height: 3645 },
  "assets/c_xmu_media/c06_checkin_card.png": { width: 1417, height: 1890 },
  "assets/c_xmu_media/c09_badge_blue_yellow_mockup.png": { width: 1254, height: 1661 },
  "assets/c_xmu_media/c11_year_review_opening.png": { width: 1000, height: 4200 },
  "assets/c_xmu_media/c12_year_review_cover_02.png": { width: 2350, height: 1000 },
  "assets/d_museum/d01_jixiang_babao.jpg": { width: 3508, height: 4961 },
  "assets/d_museum/d02_baxian_guohai_01.jpg": { width: 3508, height: 4961 },
  "assets/d_museum/d03_qiequ_wen.jpg": { width: 3508, height: 4961 },
  "assets/d_museum/d04_shoumian_1106.jpg": { width: 3508, height: 4961 },
  "assets/d_museum/d05_yunlei_wen.jpg": { width: 3508, height: 4961 },
  "assets/d_museum/d07_guided_tour_hk_cultural_exchange.png": { width: 755, height: 566 },
  "assets/d_museum/d08_guided_tour_xmu_freshmen.jpg": { width: 1080, height: 810 },
  "assets/hero/hero_science_board_topic_02.jpg": { width: 1600, height: 2400 },
  "assets/hero/hero_science_board_main_visual.jpg": { width: 1600, height: 2400 },
  "assets/hero/hero_2026_new_year.jpg": { width: 3508, height: 4961 },
  "assets/e_xiayu_studio/e01_market_booth_overview.jpg": { width: 4096, height: 3072 },
  "assets/e_xiayu_studio/e02_market_stamp_interaction.jpg": { width: 4096, height: 3072 },
  "assets/e_xiayu_studio/e03_market_full_display.jpg": { width: 1707, height: 1280 },
  "assets/e_xiayu_studio/e04_local_culture_product_detail.jpg": { width: 1440, height: 960 },
  "assets/e_xiayu_studio/e05_market_product_wall.jpg": { width: 1440, height: 1080 },
  "assets/e_xiayu_studio/e06_creative_market_product_table.jpg": { width: 1440, height: 1204 },
  "assets/e_xiayu_studio/e07_store_product_shelf.jpg": { width: 1440, height: 1920 },
  "assets/e_xiayu_studio/e08_product_design_overview.jpg": { width: 3072, height: 4096 },
  "assets/e_xiayu_studio/e09_charm_design_series.jpg": { width: 1280, height: 2015 },
  "assets/e_xiayu_studio/e10_shanghai_illustration_fair_poster.jpg": { width: 1080, height: 1440 },
  "assets/e_xiayu_studio/e11_hangzhou_illustration_fair_poster.jpg": { width: 1280, height: 1707 },
  "assets/e_xiayu_studio/e12_xiaohongshu_post_601_likes.jpg": { width: 1216, height: 2688 },
  "assets/e_xiayu_studio/e13_xiaohongshu_content_post.jpg": { width: 1440, height: 2038 },
  "assets/e_xiayu_studio/e14_xmu_admission_package_xhs_01.jpg": { width: 1280, height: 1707 },
  "assets/e_xiayu_studio/e15_xmu_admission_package_xhs_02.jpg": { width: 1280, height: 1707 },
  "assets/e_xiayu_studio/e16_jiageng_series_overview.jpg": { width: 4960, height: 3720 },
  "assets/e_xiayu_studio/e17_jiageng_travel_cup.jpg": { width: 2480, height: 3508 },
  "assets/e_xiayu_studio/e18_jiageng_canvas_bag.jpg": { width: 2480, height: 3508 },
  "assets/e_xiayu_studio/e19_book_design_ethics.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e20_book_design_dedication.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e21_book_design_reading.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e22_book_design_learning.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e23_book_design_virtue.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e24_book_design_thinking.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e25_book_design_self_cultivation.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e26_book_design_innovation.png": { width: 4000, height: 2961 },
  "assets/e_xiayu_studio/e27_xiaohongshu_women_statement.jpg": { width: 1440, height: 2038 },
  "assets/e_xiayu_studio/e28_xiaohongshu_daily_language.png": { width: 1216, height: 1778 }
};

function imageKind(src) {
  const meta = imageMeta[src];
  if (!meta) return "unknown";
  const ratio = meta.width / meta.height;
  if (ratio >= 1.85) return "panorama";
  if (ratio >= 1.15) return "landscape";
  if (ratio >= 0.85) return "square";
  if (ratio >= 0.48) return "portrait";
  return "tall";
}

function visualWeight(src) {
  const weights = {
    panorama: 260,
    landscape: 360,
    square: 430,
    portrait: 620,
    tall: 760,
    unknown: 500
  };
  return weights[imageKind(src)] || weights.unknown;
}

function leadCountForCase(caseItem, orderedImages) {
  const desired = {
    "people-daily": 2,
    gulangyu: 2,
    "xmu-media": 2,
    "human-museum": 3,
    "xiayu-studio": 3,
    "xiayu-campus": 2
  };
  return Math.min(desired[caseItem.id] || 2, orderedImages.length);
}

function featureIdsForCase(caseItem) {
  const featured = {
    "people-daily": ["A4", "A5", "A6", "A7"],
    "xiayu-studio": ["E2", "E4", "E5", "E6", "E27", "E28", "E10"],
    "xiayu-campus": ["E16"]
  };
  return featured[caseItem.id] || [];
}

function carouselIdsForCase(caseItem) {
  const carousel = {
    "xiayu-campus": ["E19", "E20", "E21", "E22", "E23", "E24", "E25", "E26"]
  };
  return carousel[caseItem.id] || [];
}

function setProfile() {
  document.title = `${portfolioProfile.name} | 视觉传播作品集`;
  byId("hero-title").textContent = portfolioProfile.headline;
  byId("hero-intro").textContent = portfolioProfile.intro;
  byId("profile-name").textContent = portfolioProfile.name;
  byId("profile-title").textContent = portfolioProfile.title;
  byId("profile-status").textContent = portfolioProfile.basics.politicalStatus;

  const educationText = portfolioProfile.basics.education
    .map((item) => `${item.school}${item.degree}`)
    .join(" / ");
  byId("profile-education").textContent = educationText;

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
  const images = caseItem.images || [];
  const mainImages = images.filter((image) => image.detailLevel === "main");
  const supportImages = images.filter((image) => image.detailLevel !== "main");
  const orderedImages = [...mainImages, ...supportImages];
  const evidenceLinks = caseItem.evidenceLinks || [];
  const evidenceImageIds = new Set(evidenceLinks.flatMap((link) => link.imageIds || []));
  const galleryImages = orderedImages.filter((image) => !evidenceImageIds.has(image.id));
  const leadImages = galleryImages.slice(0, leadCountForCase(caseItem, galleryImages));
  const featureIds = featureIdsForCase(caseItem);
  const carouselIds = carouselIdsForCase(caseItem);
  const featuredFollowImages = galleryImages.filter(
    (image) => featureIds.includes(image.id) && !leadImages.some((lead) => lead.id === image.id)
  ).sort((a, b) => featureIds.indexOf(a.id) - featureIds.indexOf(b.id));
  const carouselImages = galleryImages.filter(
    (image) =>
      carouselIds.includes(image.id) &&
      !leadImages.some((lead) => lead.id === image.id) &&
      !featuredFollowImages.some((featured) => featured.id === image.id)
  );
  const remainingImages = galleryImages.filter(
    (image) =>
      !leadImages.some((lead) => lead.id === image.id) &&
      !featuredFollowImages.some((featured) => featured.id === image.id) &&
      !carouselImages.some((carouselImage) => carouselImage.id === image.id)
  );
  const balancedColumns = remainingImages.reduce(
    (columns, image) => {
      const target = columns.leftHeight <= columns.rightHeight ? "left" : "right";
      columns[target].push(image);
      columns[`${target}Height`] += visualWeight(image.src);
      return columns;
    },
    { left: [], right: [], leftHeight: 0, rightHeight: 0 }
  );

  const renderImageCard = (image) => `
    <figure class="work-card work-${image.id.toLowerCase()} ${image.detailLevel === "main" ? "main" : ""} ${imageKind(image.src)} reveal">
      <div class="work-image">
        <button class="image-button" type="button" data-full="${image.src}" data-title="${image.id} ${image.title}">
          <img src="${image.src}" alt="${image.title}" loading="lazy" />
        </button>
      </div>
      <figcaption class="work-caption">
        <strong>${image.id} ${image.title}</strong>
        <p>${image.note}</p>
        <small>点击图片放大查看</small>
      </figcaption>
    </figure>
  `;

  const renderEvidenceProof = (link) => {
    const evidenceImages = (link.imageIds || [])
      .map((id) => images.find((image) => image.id === id))
      .filter(Boolean);

    const evidenceImageHtml = evidenceImages
      .map(
        (image) => `
          <figure class="evidence-photo ${imageKind(image.src)}">
            <button class="image-button evidence-image-button" type="button" data-full="${image.src}" data-title="${image.id} ${image.title}">
              <img src="${image.src}" alt="${image.title}" loading="lazy" />
            </button>
            <figcaption>
              <strong>${image.title}</strong>
              <span>${image.note}</span>
            </figcaption>
          </figure>
        `
      )
      .join("");

    return `
      <div class="evidence-proof">
        <div class="evidence-proof-head">
          <span>${link.proofLabel}</span>
          <strong>${link.ability}</strong>
        </div>
        <div class="evidence-photos">${evidenceImageHtml}</div>
      </div>
    `;
  };

  const renderEvidenceAction = (link, linkIndex) => `
    <div class="evidence-action">
      <span class="evidence-index">${String(linkIndex + 1).padStart(2, "0")}</span>
      <p class="evidence-label">${link.label}</p>
      <h4>${link.action}</h4>
      <p>${link.note}</p>
    </div>
  `;

  const renderEvidenceRows = (modeClass = "") =>
    evidenceLinks
      .map(
        (link, linkIndex) => `
          <section class="evidence-row ${modeClass}">
            ${renderEvidenceAction(link, linkIndex)}
            ${renderEvidenceProof(link)}
          </section>
        `
      )
      .join("");

  const renderSideEvidence = () =>
    evidenceLinks
      .map(
        (link, linkIndex) => `
          <section class="side-evidence-card" aria-label="${link.label}">
            <div class="side-evidence-source">
              <span>${String(linkIndex + 1).padStart(2, "0")}</span>
              <strong>${link.proofLabel || "过程证据"}</strong>
            </div>
            <div class="evidence-photos compact">
              ${(link.imageIds || [])
                .map((id) => images.find((image) => image.id === id))
                .filter(Boolean)
                .map(
                  (image) => `
                    <figure class="evidence-photo ${imageKind(image.src)}">
                      <button class="image-button evidence-image-button" type="button" data-full="${image.src}" data-title="${image.id} ${image.title}">
                        <img src="${image.src}" alt="${image.title}" loading="lazy" />
                      </button>
                      <figcaption>
                        <strong>${image.title}</strong>
                      </figcaption>
                    </figure>
                  `
                )
                .join("")}
            </div>
          </section>
        `
      )
      .join("");

  const leadImageHtml = leadImages.map(renderImageCard).join("");
  const featuredFollowHtml = featuredFollowImages.map(renderImageCard).join("");
  const carouselHtml = carouselImages.map(renderImageCard).join("");
  const leftFollowHtml = balancedColumns.left.map(renderImageCard).join("");
  const rightFollowHtml = balancedColumns.right.map(renderImageCard).join("");
  const sideEvidenceHtml = renderSideEvidence();
  const hasFollowImages = featuredFollowHtml || carouselHtml || leftFollowHtml || rightFollowHtml;
  const followImageHtml = hasFollowImages
    ? `
      ${featuredFollowHtml ? `<div class="feature-row">${featuredFollowHtml}</div>` : ""}
      ${carouselHtml ? `<div class="carousel-row" aria-label="系列作品横向浏览">${carouselHtml}</div>` : ""}
      <div class="gallery-column">${leftFollowHtml}</div>
      <div class="gallery-column">${rightFollowHtml}</div>
    `
    : "";
  const hasSideContent = sideEvidenceHtml || leadImageHtml;

  return `
    <article class="case-section case-${caseItem.id}" id="${caseItem.id}">
      ${
        evidenceLinks.length
          ? `<svg class="case-connector" aria-hidden="true">
              <defs>
                <marker id="connector-arrow-${caseItem.id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z"></path>
                </marker>
              </defs>
              <path class="case-connector-path" marker-end="url(#connector-arrow-${caseItem.id})"></path>
            </svg>`
          : ""
      }
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
          <ul>${caseItem.keyActions
            .map((item, actionIndex) => {
              const linkedEvidence = evidenceLinks.find((link) => link.action === item);
              return `<li class="${linkedEvidence ? "linked-action" : ""}">
                ${linkedEvidence ? `<span class="inline-evidence-mark" title="对应右侧现场照片">${linkedEvidence.skillTag || "公众表达"}</span>` : ""}
                ${item}
              </li>`;
            })
            .join("")}</ul>
        </div>
        <div class="detail-block">
          <h4>成果证据</h4>
          <ul>${caseItem.results.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="case-side reveal">
        ${
          hasSideContent
            ? `
              ${sideEvidenceHtml ? `<div class="side-evidence-list">${sideEvidenceHtml}</div>` : ""}
              ${leadImageHtml ? `<div class="case-gallery lead-gallery">${leadImageHtml}</div>` : ""}
            `
            : `
              <div class="case-placeholder">
                <span>素材待补充</span>
                <p>这一案例已按新简历建立文字结构，后续可继续补充账号截图、过程图、成品图或活动现场图。</p>
              </div>
            `
        }
      </div>
      ${followImageHtml ? `<div class="case-gallery follow-gallery">${followImageHtml}</div>` : ""}
      <div class="case-transition" aria-hidden="true">
        <span>${index + 1 < portfolioCases.length ? "进入下一章节" : "作品集章节结束"}</span>
      </div>
    </article>
  `;
}

function renderCases() {
  byId("case-list").innerHTML = portfolioCases.map(renderCase).join("");
}

function setupEvidenceConnectors() {
  const drawConnectors = () => {
    document.querySelectorAll(".case-section").forEach((section) => {
      const connector = section.querySelector(".case-connector");
      const path = section.querySelector(".case-connector-path");
      const action = section.querySelector(".linked-action");
      const target = section.querySelector(".side-evidence-card");
      if (!connector || !path || !action || !target) return;

      const sectionRect = section.getBoundingClientRect();
      const actionRect = action.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const startX = actionRect.right - sectionRect.left;
      const startY = actionRect.top + actionRect.height / 2 - sectionRect.top;
      const endX = targetRect.left - sectionRect.left + 2;
      const endY = targetRect.top - sectionRect.top + 32;
      const bendX = Math.min(startX + 52, endX - 24);

      connector.setAttribute("viewBox", `0 0 ${sectionRect.width} ${sectionRect.height}`);
      path.setAttribute("d", `M ${startX} ${startY} H ${bendX} V ${endY} H ${endX}`);
    });
  };

  drawConnectors();
  window.addEventListener("resize", drawConnectors);
  window.addEventListener("load", drawConnectors);
  document.fonts?.ready.then(drawConnectors);
  setTimeout(drawConnectors, 250);
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
  const classifyImage = (image) => {
    const card = image.closest(".work-card, .flow-card");
    if (!card || !image.naturalWidth || !image.naturalHeight) return;

    const ratio = image.naturalWidth / image.naturalHeight;
    card.classList.toggle("panorama", ratio >= 1.85);
    card.classList.toggle("landscape", ratio >= 1.15 && ratio < 1.85);
    card.classList.toggle("square", ratio >= 0.85 && ratio < 1.15);
    card.classList.toggle("portrait", ratio < 0.85 && ratio >= 0.48);
    card.classList.toggle("tall", ratio < 0.48);
  };

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("load", () => {
      classifyImage(image);
    });

    if (image.complete) classifyImage(image);

    image.addEventListener("error", () => {
      image.closest("figure")?.classList.add("image-missing");
      image.alt = `${image.alt} 图片未能加载`;
    });
  });
}

function setupImageViewer() {
  const viewer = byId("image-viewer");
  const viewerImage = byId("viewer-image");
  const viewerCaption = byId("viewer-caption");
  const closeButton = viewer.querySelector(".viewer-close");

  const closeViewer = () => {
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    viewerImage.src = "";
    viewerImage.alt = "";
    viewerCaption.textContent = "";
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".image-button");
    if (!trigger) return;

    viewerImage.src = trigger.dataset.full;
    viewerImage.alt = trigger.dataset.title;
    viewerCaption.textContent = trigger.dataset.title;
    viewer.setAttribute("aria-hidden", "false");
    viewer.classList.add("open");
  });

  closeButton.addEventListener("click", closeViewer);
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) closeViewer();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && viewer.classList.contains("open")) closeViewer();
  });
}

setProfile();
renderCases();
setupReveal();
setupImageFallback();
setupImageViewer();
setupEvidenceConnectors();
