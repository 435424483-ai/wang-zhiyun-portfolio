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
  "assets/b_gulangyu/b03_canvas_bag_clean.png": { width: 1254, height: 1254 },
  "assets/b_gulangyu/b04_postcard_black_gold_clean.png": { width: 1550, height: 1014 },
  "assets/b_gulangyu/b05_coin_mockup.png": { width: 1810, height: 917 },
  "assets/b_gulangyu/b06_phone_grip.png": { width: 1122, height: 1402 },
  "assets/b_gulangyu/b07_landmark_magic_cube.png": { width: 1448, height: 1086 },
  "assets/b_gulangyu/b08_minoyaki_product_set.png": { width: 1448, height: 1086 },
  "assets/b_gulangyu/b09_landmark_thermos.png": { width: 1448, height: 1086 },
  "assets/b_gulangyu/b10_nfc_record_magnet_clean.png": { width: 1312, height: 1862 },
  "assets/b_gulangyu/b11_paper_cut_notebook_clean.png": { width: 1487, height: 1059 },
  "assets/c_xmu_media/c03_media_memory_longform_01.jpg": { width: 3000, height: 5619 },
  "assets/c_xmu_media/c04_graduation_gift_cover.png": { width: 2350, height: 1000 },
  "assets/c_xmu_media/c05_calendar_body.png": { width: 4500, height: 3645 },
  "assets/c_xmu_media/c06_checkin_card.png": { width: 1417, height: 1890 },
  "assets/c_xmu_media/c09_badge_blue_yellow_mockup.png": { width: 1254, height: 1661 },
  "assets/c_xmu_media/c11_year_review_opening.png": { width: 1000, height: 4200 },
  "assets/c_xmu_media/c12_year_review_cover_02.png": { width: 2350, height: 1000 },
  "assets/c_xmu_media/c13_xmu_annual_report.png": { width: 1216, height: 960 },
  "assets/c_xmu_media/c14_graduation_gift_article.png": { width: 1216, height: 960 },
  "assets/c_xmu_media/c15_20th_congress_avatar_frame.png": { width: 1216, height: 960 },
  "assets/c_xmu_media/c16_new_student_portraits.png": { width: 1216, height: 960 },
  "assets/c_xmu_media/c17_xmu_wallpapers.png": { width: 1216, height: 960 },
  "assets/c_xmu_media/c23_travel_calendar_students.jpg": { width: 1080, height: 607 },
  "assets/c_xmu_media/c24_travel_calendar_feedback.jpg": { width: 1080, height: 1440 },
  "assets/c_xmu_media/c26_travel_calendar_wechat_long.png": { width: 1101, height: 2048 },
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
  "assets/e_xiayu_studio/e28_xiaohongshu_daily_language.png": { width: 1216, height: 1778 },
  "assets/e_xiayu_studio/e29_xiaohongshu_account_profile.png": { width: 765, height: 332 },
  "assets/e_xiayu_studio/e30_shanghai_illustration_festival.jpg": { width: 1080, height: 1440 },
  "assets/e_xiayu_studio/e31_hangzhou_illustration_expo.jpg": { width: 1280, height: 1707 },
  "assets/f_party_branch/f01_anti_fraud_comic_cover.jpg": { width: 2350, height: 1000 },
  "assets/f_party_branch/f02_anti_fraud_comic_longform.jpg": { width: 1080, height: 6000 }
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
    gulangyu: 1,
    "xmu-media": 2,
    "human-museum": 3,
    "xiayu-studio": 3,
    "xiayu-campus": 3,
    "party-branch": 1
  };
  return Math.min(desired[caseItem.id] || 2, orderedImages.length);
}

function leadIdsForCase(caseItem) {
  const leadIds = {
    "xmu-media": ["C13", "C17", "C15", "C16", "C14"]
  };
  return leadIds[caseItem.id] || null;
}

function featureIdsForCase(caseItem) {
  const featured = {
    "people-daily": ["A4", "A6", "A7"],
    gulangyu: ["B7", "B8", "B9", "B3", "B4", "B5", "B10", "B11"],
    "xiayu-studio": ["E2", "E4", "E5", "E6"],
    "xiayu-campus": [],
    "party-branch": ["F2"]
  };
  return featured[caseItem.id] || [];
}

function carouselIdsForCase(caseItem) {
  const carousel = {
    "xiayu-campus": ["E19", "E20", "E21", "E22", "E23", "E24", "E25", "E26"]
  };
  return carousel[caseItem.id] || [];
}

function sectionedImageIdsForCase(caseItem) {
  const sections = {
    "xiayu-studio": ["E29", "E27", "E28", "E30", "E31"]
  };
  return sections[caseItem.id] || [];
}

function featureRowsForCase(caseItem, featuredImages) {
  const rows = {
    "xiayu-studio": [["E2", "E4"], ["E5", "E6"], ["E27", "E28"]],
    gulangyu: [["B7", "B8"], ["B9", "B3"], ["B4", "B5"], ["B10", "B11"]]
  };
  const definedRows = rows[caseItem.id];
  if (!definedRows) return [featuredImages];

  return definedRows
    .map((ids) => ids.map((id) => featuredImages.find((image) => image.id === id)).filter(Boolean))
    .filter((row) => row.length);
}

function setProfile() {
  document.title = `${portfolioProfile.name} | 视觉传播作品集`;
  byId("hero-title").textContent = portfolioProfile.headline;
  byId("hero-intro").textContent = portfolioProfile.intro;
  byId("profile-title").textContent = portfolioProfile.title;
  byId("profile-status").textContent = portfolioProfile.basics.politicalStatus;

  byId("about-summary").textContent =
    `${portfolioProfile.name}，${portfolioProfile.basics.politicalStatus}，厦门大学艺术学院硕士在读。方向为${portfolioProfile.title}。`;

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


function renderGraduationGiftModule() {
  const base = "assets/c_xmu_media/";
  const badges = [
    ["c28_travel_badge_engineering.png", "工科兔子金属徽章"],
    ["c29_travel_badge_journalism.png", "新闻兔子金属徽章"],
    ["c30_travel_badge_literature.png", "文学兔子金属徽章"],
    ["c31_travel_badge_medicine.png", "医学兔子金属徽章"]
  ];
  const stickers = [
    ["c40_sticker_archery.png", "翔安校区射箭课贴纸"],
    ["c41_sticker_gardening.png", "校园花草贴纸"],
    ["c42_sticker_boating.png", "芙蓉湖划船贴纸"],
    ["c43_sticker_music.png", "校园音乐活动贴纸"],
    ["c44_sticker_black_swan.png", "思明校区黑天鹅贴纸"],
    ["c45_sticker_military.png", "军训贴纸"],
    ["c46_sticker_graduation.png", "毕业典礼贴纸"],
    ["c47_sticker_lake.png", "芙蓉湖贴纸"],
    ["c48_sticker_campus_friends.png", "校园伙伴贴纸"],
    ["c49_sticker_travel.png", "旅行周历贴纸"]
  ];

  const calendarStops = [{"label":"第一站 · 群贤楼","place":"思明校区群贤楼","front":"c50_travel_calendar_stop01_front.png","back":"c51_travel_calendar_stop01_back.png"},{"label":"第二站 · 德旺图书馆","place":"翔安校区德旺图书馆","front":"c52_travel_calendar_stop02_front.png","back":"c53_travel_calendar_stop02_back.png"},{"label":"第三站 · 爱秋体育馆","place":"翔安校区爱秋体育馆","front":"c54_travel_calendar_stop03_front.png","back":"c55_travel_calendar_stop03_back.png"},{"label":"第四站 · 思源谷","place":"思明校区思源谷","front":"c56_travel_calendar_stop04_front.png","back":"c57_travel_calendar_stop04_back.png"},{"label":"第五站 · 八闽园","place":"翔安校区八闽园","front":"c58_travel_calendar_stop05_front.png","back":"c59_travel_calendar_stop05_back.png"},{"label":"第六站 · 凤凰花","place":"凤凰花","front":"c60_travel_calendar_stop06_front.png","back":"c61_travel_calendar_stop06_back.png"},{"label":"第七站 · 小巨蛋","place":"翔安校区小巨蛋","front":"c62_travel_calendar_stop07_front.png","back":"c63_travel_calendar_stop07_back.png"},{"label":"第八站 · 芙蓉湖","place":"思明校区芙蓉湖","front":"c64_travel_calendar_stop08_front.png","back":"c65_travel_calendar_stop08_back.png"},{"label":"第九站 · 建南大礼堂","place":"建南大礼堂","front":"c66_travel_calendar_stop09_front.png","back":"c67_travel_calendar_stop09_back.png"}];

  return `
    <section class="graduation-gift-module reveal" aria-label="毕业礼盒项目展示">
      <div class="graduation-gift-heading">
        <span>PROJECT EXTENSION / GRADUATION GIFT</span>
        <h4>毕业礼盒：把九周校园记忆装进一份可参与的告别</h4>
        <p>围绕“旅行周历”策划毕业季产品与内容传播，让实体礼盒、推送长图和学生互动形成一条完整路径。</p>
      </div>

      <div class="gift-metric-strip" aria-label="毕业礼盒传播数据">
        <div class="gift-metric"><strong>20,662</strong><span>阅读人数</span></div>
        <div class="gift-metric"><strong>28,040</strong><span>总阅读次数</span></div>
        <div class="gift-metric"><strong>1,024</strong><span>分享次数</span></div>
        <div class="gift-metric"><strong>448</strong><span>抽奖参与人数</span></div>
      </div>

      <div class="gift-kit-layout">
        <button class="gift-page-turn gift-page-turn-prev" type="button" data-gift-page="-1" aria-label="上一页" title="上一页"><span aria-hidden="true">&#8249;</span></button>
        <button class="gift-page-turn gift-page-turn-next" type="button" data-gift-page="1" aria-label="下一页" title="下一页"><span aria-hidden="true">&#8250;</span></button>
        <figure class="gift-kit-overview" aria-live="polite">
          <button class="gift-overview-visual gift-overview-single gift-overview-button image-button is-active" type="button" data-overview-visual="single" data-full="${base}c32_travel_giftbox.png" data-title="旅行周历毕业礼盒">
            <img class="gift-overview-image" src="${base}c32_travel_giftbox.png" alt="旅行周历毕业礼盒整体包装" loading="lazy" />
          </button>
          <div class="gift-overview-visual gift-overview-badge-collage" data-overview-visual="badges" aria-label="分专业学术服兔子金属徽章组合">
            ${badges.map(([file, title]) => `<button class="image-button" type="button" data-full="${base}${file}" data-title="毕业礼盒 / ${title}"><img src="${base}${file}" alt="${title}" loading="lazy" /></button>`).join("")}
          </div>
          <div class="gift-overview-visual gift-overview-wish-collage" data-overview-visual="wish" aria-label="毕业打卡与盖章留念的实际使用场景">
            <button class="image-button" type="button" data-full="${base}c68_travel_checkin_scene.jpg" data-title="毕业前一定要做的事 / 打卡盖章现场"><img src="${base}c68_travel_checkin_scene.jpg" alt="学生在毕业打卡单上使用印章的实际场景" loading="lazy" /></button>
          </div>
          <figcaption>
            <span class="gift-overview-eyebrow">GRADUATION GIFT</span>
            <strong class="gift-overview-title">礼盒本体</strong>
            <p class="gift-overview-copy">周历、专业徽章与印章，共同组成毕业礼盒。</p>
          </figcaption>
          <div class="gift-overview-guide" aria-label="旅行周历内容分区">
            <article><span>RECORD</span><strong>记录区</strong><p>留住这一站的校园印象与当周片段。</p></article>
            <article><span>MESSAGE</span><strong>寄语区</strong><p>写给同行的人，也写给即将离校的自己。</p></article>
            <article><span>CHECK-IN</span><strong>打卡小任务区</strong><p>用地点与轻任务，引导走进线下校园。</p></article>
          </div>
        </figure>

        <div class="gift-kit-explorer">
          <div class="gift-product-controls" role="tablist" aria-label="毕业礼盒产品">
            <button class="gift-product-control is-active" type="button" role="tab" aria-selected="true" data-panel="gift-set">礼盒组合</button>
            <button class="gift-product-control" type="button" role="tab" aria-selected="false" data-panel="gift-calendar">旅行周历</button>
            <button class="gift-product-control" type="button" role="tab" aria-selected="false" data-panel="gift-badges">徽章与贴纸</button>
            <button class="gift-product-control" type="button" role="tab" aria-selected="false" data-panel="gift-stamp">毕业前要做的事</button>
          </div>

          <div class="gift-product-panel is-active" id="gift-set" role="tabpanel">
            <div class="gift-product-single">
              <div class="gift-set-carousel" aria-label="旅行周历礼盒使用场景自动展示" aria-live="off">
                <button class="gift-set-slide image-button is-active" type="button" data-full="${base}c69_gift_scene_checklist.jpg" data-title="旅行周历 / 打卡单与周历"><img src="${base}c69_gift_scene_checklist.jpg" alt="学生展示旅行周历与毕业打卡单" loading="lazy" /></button>
                <button class="gift-set-slide image-button" type="button" data-full="${base}c70_gift_scene_library.jpg" data-title="旅行周历 / 图书馆场景"><img src="${base}c70_gift_scene_library.jpg" alt="学生在书架前展示旅行周历" loading="lazy" /></button>
                <button class="gift-set-slide image-button" type="button" data-full="${base}c71_gift_scene_campus.jpg" data-title="旅行周历 / 校园互动场景"><img src="${base}c71_gift_scene_campus.jpg" alt="学生在校园中展示周历与打卡单" loading="lazy" /></button>
              </div>
              <div class="gift-product-note"><span>01 / 礼盒组合</span><strong>旅行周历本体</strong><p>九周校园路线汇入同一册周历，用可翻阅的票根形式留住毕业季的每一站。</p></div>
            </div>
          </div>

          <div class="gift-product-panel" id="gift-calendar" role="tabpanel">
            <div class="gift-calendar-carousel" aria-label="旅行周历九站正反面自动展示" aria-live="off">
              ${calendarStops.map((stop, index) => `
                <div class="gift-calendar-slide ${index === 0 ? "is-active" : ""}" aria-hidden="${index !== 0}">
                  <div class="gift-calendar-pair">
                    <button class="image-button" type="button" data-full="${base}${stop.front}" data-title="旅行周历 / ${stop.label} 正面"><img src="${base}${stop.front}" alt="旅行周历${stop.label}正面" loading="lazy" /></button>
                    <button class="image-button" type="button" data-full="${base}${stop.back}" data-title="旅行周历 / ${stop.label} 反面"><img src="${base}${stop.back}" alt="旅行周历${stop.label}反面" loading="lazy" /></button>
                  </div>
                  <p class="gift-calendar-label">${stop.label} · ${stop.place}</p>
                </div>`).join("")}
            </div>
          </div>
          <div class="gift-product-panel" id="gift-badges" role="tabpanel">
            <div class="gift-marquee-group">
              <div class="gift-marquee-heading"><span>金属徽章</span><p>按专业延展的学士服兔子徽章。</p></div>
              <div class="gift-marquee-viewport">
                <div class="gift-marquee-track gift-badge-track">
                  ${[...badges, ...badges].map(([file, title], index) => `<button class="gift-marquee-item image-button" type="button" data-full="${base}${file}" data-title="毕业礼盒 / ${title}" ${index >= badges.length ? 'tabindex="-1" aria-hidden="true"' : ''}><img src="${base}${file}" alt="${title}" loading="lazy" /></button>`).join("")}
                </div>
              </div>
            </div>
            <div class="gift-marquee-group gift-sticker-group">
              <div class="gift-marquee-heading"><span>校园主题贴纸</span><p>从军训、射箭课、黑天鹅、芙蓉湖到毕业典礼的周历记忆。</p></div>
              <div class="gift-marquee-viewport">
                <div class="gift-marquee-track gift-sticker-track">
                  ${[...stickers, ...stickers].map(([file, title], index) => `<button class="gift-sticker-item image-button" type="button" data-full="${base}${file}" data-title="毕业礼盒 / ${title}" ${index >= stickers.length ? 'tabindex="-1" aria-hidden="true"' : ''}><img src="${base}${file}" alt="${title}" loading="lazy" /></button>`).join("")}
                </div>
              </div>
            </div>
          </div>

          <div class="gift-product-panel" id="gift-stamp" role="tabpanel">
            <div class="gift-wish-module">
              <div class="gift-wish-images">
                <button class="image-button" type="button" data-full="${base}c34_travel_checklist.png" data-title="毕业礼盒 / 毕业前一定要做的事"><img src="${base}c34_travel_checklist.png" alt="毕业前一定要做的事打卡单" loading="lazy" /></button>
                <button class="image-button" type="button" data-full="${base}c27_travel_stamp.png" data-title="毕业礼盒 / 毕业印章"><img src="${base}c27_travel_stamp.png" alt="毕业兔子印章" loading="lazy" /></button>
              </div>
              <div class="gift-product-note"><span>04 / 毕业前要做的事</span><strong>从一张打卡单，走进校园文化体验</strong><p>完成任务后盖下毕业印章，把“打卡—体验—留念”串成一次完整的毕业行动。</p></div>
            </div>
          </div>
        </div>
      </div>

      <section class="gift-campaign-section">
        <div class="gift-campaign-column">
          <div class="gift-campaign-heading">
            <span>CHECK-IN</span>
            <h5>周历引导线下体验</h5>
            <p>448 人参与抽奖并留下互动反馈。项目获校内文创店支持，后续衍生开发新生礼盒版本。</p>
          </div>
          <div class="gift-checkin-pair">
            <button class="gift-checkin-card image-button" type="button" data-full="${base}c23_travel_calendar_students.jpg" data-title="打卡建南大礼堂">
              <img src="${base}c23_travel_calendar_students.jpg" alt="打卡建南大礼堂" loading="lazy" /><span>打卡建南大礼堂</span>
            </button>
            <button class="gift-checkin-card image-button" type="button" data-full="${base}c24_travel_calendar_feedback.jpg" data-title="打卡德旺图书馆">
              <img src="${base}c24_travel_calendar_feedback.jpg" alt="打卡德旺图书馆" loading="lazy" /><span>打卡德旺图书馆</span>
            </button>
          </div>
        </div>
        <div class="gift-campaign-column gift-push-column">
          <div class="gift-campaign-heading">
            <span>WECHAT LONGFORM</span>
            <h5>九周主题，讲成一篇推送</h5>
            <p>以九处校园地标串联周历、互动与毕业叙事。</p>
          </div>
          <div class="gift-longform-viewer">
            <button class="image-button" type="button" data-full="${base}c26_travel_calendar_wechat_long.png" data-title="旅行周历 / 九周主题推送">
              <img src="${base}c26_travel_calendar_wechat_long.png" alt="旅行周历九周主题推送长图" loading="lazy" />
            </button>
          </div>
          <button class="gift-longform-toggle" type="button" aria-expanded="false">展开查看完整长图</button>
        </div>
      </section>
    </section>
  `;
}

const haiZhiXiangCase = Object.freeze({
  marker: "CASE STUDY / 海之乡",
  title: "把产业故事写成一封海边来信",
  titleAccent: {
    src: "assets/a_people_daily/hai_zhi_xiang/hai-zhi-xiang-handwritten-title.png",
    alt: "如何把复杂的信息变成一封好看的信"
  },
  introduction:
    "“从山海环境、村庄生活与海洋产业中提取视觉线索，呈现一种与海共处的生活方式。”",
  caseName: "官坞村 · 碧海边的“富村山居图”",
  summary: "“以新闻摄影建立真实，以书信语言传递温度。”",
  sources: [
    {
      className: "hai-zhi-xiang-source-bay",
      src: "assets/a_people_daily/hai_zhi_xiang/01-village-bay-source.jpg",
      title: "01 山海环境",
      description: "建立山、村庄与海的整体关系"
    },
    {
      className: "hai-zhi-xiang-source-aerial",
      src: "assets/a_people_daily/hai_zhi_xiang/02-village-aerial-source.jpg",
      title: "02 村庄空间",
      description: "呈现村庄依海生长的空间形态"
    },
    {
      className: "hai-zhi-xiang-source-kelp",
      src: "assets/a_people_daily/hai_zhi_xiang/04-kelp-detail-reference.jpg",
      title: "03 产业细节",
      description: "让海洋经济变得具体可感",
      reference: "产业语境参考 / 未直接用于成品"
    }
  ],
  translation: {
    marker: "04 / VISUAL TRANSLATION",
    title: "从山海照片到一封来信",
    introduction:
      "“我先从照片里找到山、村、海的关系，再用相纸、日期和手写标记，把官坞村的故事整理成一封海边来信。”",
    closing:
      "“我保留了新闻需要的日期、地点和产业信息，也借用相纸与手写标记，让官坞村不只是一组产业数据，而是一处真实生活着的海边乡村。”",
    letterVisuals: [
      {
        src: "assets/a_people_daily/hai_zhi_xiang/letter-photo-landscape.png",
        alt: "山海风景相纸"
      },
      {
        src: "assets/a_people_daily/hai_zhi_xiang/letter-postcard-layout.png",
        alt: "带书写区域的海边明信片"
      }
    ],
    items: [
      {
        number: "01",
        title: "先看山、村、海",
        from: "远景交代环境",
        to: "俯拍补充村落",
        visual: "space"
      },
      {
        number: "02",
        title: "为什么用书信",
        from: "照片像随信寄来的风景",
        to: "文字像写给远方的人",
        visual: "letter"
      },
      {
        number: "03",
        title: "留下新闻信息",
        from: "日期、地点、产业名称",
        to: "让画面有据可读",
        visual: "record"
      },
      {
        number: "04",
        title: "让画面更亲近",
        from: "海水蓝、纸张白、暖黄色",
        to: "让报道多一些生活气息",
        visual: "palette"
      }
    ]
  },
  final: {
    src: "assets/a_people_daily/hai_zhi_xiang/03-guanwucun-final-poster.jpg",
    title: "一封来自官坞村的信"
  }
});

function renderHaiZhiXiangModule() {
  const sourceFigures = haiZhiXiangCase.sources
    .map(
      (image) => `
        <figure class="hai-zhi-xiang-source ${image.className}">
          <button class="image-button" type="button" data-full="${image.src}" data-title="${image.title}">
            <img src="${image.src}" alt="${image.title}" loading="lazy" />
          </button>
          <figcaption>
            <strong>${image.title}</strong>
            <p>${image.description}</p>
            ${image.reference ? `<small>${image.reference}</small>` : ""}
          </figcaption>
        </figure>
      `
    )
    .join("");

  const translationVisuals = {
    space: `
      <span class="hai-zhi-xiang-translation-demo demo-space" aria-hidden="true">
        <i></i><i></i>
      </span>`,
    letter: `
      <span class="hai-zhi-xiang-translation-demo demo-letter-assets" aria-hidden="true">
        ${haiZhiXiangCase.translation.letterVisuals
          .map(
            (asset, index) => `
              <span class="demo-letter-card demo-letter-card-${index + 1}">
                <img src="${asset.src}" alt="" loading="lazy" />
              </span>`
          )
          .join("")}
      </span>`,
    record: `
      <span class="hai-zhi-xiang-translation-demo demo-record" aria-hidden="true">
        <b>08.23</b><b>官坞村</b><b>NO.03</b>
      </span>`,
    palette: `
      <span class="hai-zhi-xiang-translation-demo demo-palette" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
      </span>`
  };

  const translationItems = haiZhiXiangCase.translation.items
    .map(
      (item, index) => `
        <article
          class="hai-zhi-xiang-translation-item is-${item.visual}"
          style="--translation-index: ${index}"
          aria-label="${item.number} ${item.title}。${item.from}；${item.to}"
        >
          <div class="hai-zhi-xiang-translation-item-head">
            <h6>${item.number} ${item.title}</h6>
          </div>
          ${translationVisuals[item.visual]}
          <p class="hai-zhi-xiang-translation-phrase">
            <span>${item.from}</span><i aria-hidden="true"></i><span>${item.to}</span>
          </p>
        </article>
      `
    )
    .join("");

  return `
    <section class="hai-zhi-xiang-module reveal" aria-labelledby="hai-zhi-xiang-title">
      <header class="hai-zhi-xiang-intro">
        <p class="hai-zhi-xiang-marker">${haiZhiXiangCase.marker}</p>
        <div class="hai-zhi-xiang-intro-title">
          <h4 id="hai-zhi-xiang-title">${haiZhiXiangCase.title}</h4>
          <img class="hai-zhi-xiang-title-accent" src="${haiZhiXiangCase.titleAccent.src}" alt="${haiZhiXiangCase.titleAccent.alt}" loading="lazy" />
        </div>
        <p class="hai-zhi-xiang-lede">${haiZhiXiangCase.introduction}</p>
      </header>

      <h5 class="hai-zhi-xiang-case-name">${haiZhiXiangCase.caseName}</h5>
      <div class="hai-zhi-xiang-visual">
        <div class="hai-zhi-xiang-left">
          <div class="hai-zhi-xiang-sources" aria-label="原始摄影素材与产业语境参考">
            ${sourceFigures}
          </div>

          <section class="hai-zhi-xiang-translation" aria-labelledby="hai-zhi-xiang-translation-title">
            <header class="hai-zhi-xiang-translation-header">
              <div>
                <p>${haiZhiXiangCase.translation.marker}</p>
                <h6 id="hai-zhi-xiang-translation-title">${haiZhiXiangCase.translation.title}</h6>
              </div>
              <p>${haiZhiXiangCase.translation.introduction}</p>
            </header>

            <div class="hai-zhi-xiang-translation-content">
              <div class="hai-zhi-xiang-translation-track">
                ${translationItems}
              </div>
              <p class="hai-zhi-xiang-translation-closing">${haiZhiXiangCase.translation.closing}</p>
            </div>
          </section>
        </div>

        <header class="hai-zhi-xiang-final-header">
          <p class="hai-zhi-xiang-output-label">05 / FINAL DESIGN</p>
          <h6 class="hai-zhi-xiang-final-title">${haiZhiXiangCase.final.title}</h6>
        </header>

        <figure class="hai-zhi-xiang-final-figure">
          <button class="image-button hai-zhi-xiang-poster-button" type="button" data-full="${haiZhiXiangCase.final.src}" data-title="${haiZhiXiangCase.final.title}">
            <img src="${haiZhiXiangCase.final.src}" alt="${haiZhiXiangCase.final.title}" loading="lazy" />
          </button>
        </figure>
      </div>
    </section>
  `;
}
function renderPeopleDailyIntro(caseItem, index) {
  return `
    <div class="people-daily-intro">
      <div class="case-kicker">
        <span>CASE ${caseItem.group}</span>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <header class="people-daily-heading">
        <h3>
          <span class="people-daily-title-main">人民日报数字传播</span>
          <span class="people-daily-title-sub">政务内容的视觉策划与热点响应</span>
        </h3>
        <p class="people-daily-identity"><strong>内容设计实习生</strong><span>2024.06—2024.09</span></p>
      </header>
      <div class="people-daily-overview">
        <section class="people-daily-summary" aria-labelledby="people-daily-summary-title">
          <p id="people-daily-summary-title" class="people-daily-label">项目介绍</p>
          <p>在主流媒体与政务传播语境中，将政策、文化、产业与热点内容转化为清晰、有感染力的视觉作品。</p>
        </section>
        <section class="people-daily-scale" aria-labelledby="people-daily-scale-title">
          <p id="people-daily-scale-title" class="people-daily-label">工作规模</p>
          <dl class="people-daily-metrics">
            <div><dt>40+</dt><dd>海报</dd></div>
            <div><dt>7</dt><dd>个视觉系列</dd></div>
            <div><dt>4</dt><dd>套独立系列模板</dd></div>
            <div><dt>40 万+</dt><dd>累计浏览</dd></div>
          </dl>
        </section>
      </div>
      <section class="people-daily-process" aria-label="工作流程">
        <span>工作流程</span>
        <ol>
          <li>内容提炼</li><li>主题策划</li><li>视觉设定</li><li>模板搭建</li><li>多端输出</li>
        </ol>
      </section>
    </div>
  `;
}

const peopleDailySelectedPosters = Object.freeze([
  { id: "A4", number: "01", category: "传统文化", title: "宋词里的福建", description: "古籍原图与竖排文字，保留宋词的阅读气息。" },
  { id: "A9", number: "02", category: "地域文旅", title: "清凉福地", description: "让山水成为主角，用纵向标题带出清凉感。" },
  { id: "A6", number: "03", category: "公共议题", title: "国际禁毒日", description: "减少装饰，把注意力留给警示信息。" },
  { id: "A7", number: "04", category: "科技应用", title: "实用黑科技", description: "放大产品主体，用图形说明功能与使用场景。" }
]);

function renderPeopleDailySelectedPosters(images) {
  const posterItems = peopleDailySelectedPosters.map((content, index) => {
    const image = images.find((item) => item.id === content.id);
    if (!image) return "";
    return `
      <figure class="people-daily-poster" style="--poster-index: ${index}">
        <div class="people-daily-poster-inner">
          <div class="people-daily-poster-visual">
            <button class="image-button" type="button" data-full="${image.src}" data-title="${content.title}">
              <img src="${image.src}" alt="${content.title}" loading="lazy" />
            </button>
          </div>
          <figcaption>
            <p class="people-daily-poster-category"><span class="people-daily-poster-number" data-number="${content.number}">${content.number}</span> ${content.category}</p>
            <strong>${content.title}</strong>
            <p>${content.description}</p>
          </figcaption>
        </div>
      </figure>
    `;
  }).join("");

  return `
    <section class="people-daily-selected-posters reveal" aria-labelledby="people-daily-posters-title">
      <header class="people-daily-posters-heading">
        <p>SELECTED POSTERS / 议题表达</p>
        <h4 id="people-daily-posters-title">内容不同，画面也要换一种说法</h4>
        <p>我会先判断内容的语气，再决定图像、字体和信息的轻重。下面四张作品，分别回应传统文化、地域文旅、公共议题和科技应用。</p>
      </header>
      <div class="people-daily-poster-progress" aria-hidden="true"><span></span><i></i><i></i><i></i><i></i></div>
      <div class="people-daily-posters-grid">${posterItems}</div>
    </section>
  `;
}

const humanMuseumAssets = Object.freeze({
  tours: [
    {
      title: "香港国民教育学会文化交流团",
      src: "assets/d_museum/d07_guided_tour_hk_cultural_exchange.png",
      preview: "assets/d_museum/d07_guided_tour_hk_cultural_exchange.png"
    },
    {
      title: "厦门大学社会与人类学院新生",
      src: "assets/d_museum/d08_guided_tour_xmu_freshmen.jpg",
      preview: "assets/d_museum/d08_guided_tour_xmu_freshmen.jpg"
    }
  ],
  boardSeries: {
    antiwar: {
      label: "抗战主题",
      title: "抗战记忆",
      subtitle: "从资料梳理到系列展陈",
      description: "担任设计组组长，统筹设计思路与视觉规范，将历史照片、人物故事和文字资料整理为一组连续展板。",
      responsibilities: ["内容编排", "视觉统筹", "团队协作", "展陈适配"],
      workDrafts: [
        { title: "抗战展板内容校对批注", src: "assets/d_museum/antiwar-work-note.png", label: "发现问题", role: "note" },
        { title: "抗战展板主题与素材任务拆解", src: "assets/d_museum/antiwar-task-breakdown.png", label: "重组逻辑", role: "primary" },
        { title: "抗战展板人物场景与风格任务底稿", src: "assets/d_museum/antiwar-visual-brief.png", label: "拆分任务", role: "secondary" }
      ],
      images: [
        { title: "抗战主题展板 · 主视觉", src: "assets/hero/hero_science_board_main_visual.jpg", preview: "assets/d_museum/web/antiwar-01.webp" },
        { title: "抗战主题展板 · 主题二", src: "assets/hero/hero_science_board_topic_02.jpg", preview: "assets/d_museum/web/antiwar-02.webp" },
        { title: "抗战主题展板 · 城市记忆", src: "assets/d_museum/antiwar_board_memory_22.jpg", preview: "assets/d_museum/web/antiwar-03.webp" },
        { title: "抗战主题展板 · 当代传承", src: "assets/d_museum/antiwar_board_memory_23.jpg", preview: "assets/d_museum/web/antiwar-04.webp" }
      ],
      exhibition: [
        { title: "系列展板现场", src: "assets/d_museum/antiwar_exhibition_series.jpg", preview: "assets/d_museum/antiwar_exhibition_series.jpg" },
        { title: "观众观看展板", src: "assets/d_museum/antiwar_exhibition_audience.jpg", preview: "assets/d_museum/antiwar_exhibition_audience.jpg" }
      ]
    },
    minhai: {
      label: "闽海归源",
      title: "“闽海归源”闽台文物展",
      description: "从馆藏文物和考古资料出发，以主题封面和单件文物内页梳理闽台之间的历史联系。",
      images: [
        { title: "“闽海归源”主题封面", src: "assets/d_museum/minhai_return_cover.jpg", preview: "assets/d_museum/web/minhai-01.webp" },
        { title: "陶纺轮 · 文物内页", src: "assets/d_museum/minhai_spindle_board.jpg", preview: "assets/d_museum/web/minhai-02.webp" },
        { title: "印纹陶尊 · 文物内页", src: "assets/d_museum/minhai_pottery_vessel_board.jpg", preview: "assets/d_museum/web/minhai-03.webp" }
      ]
    }
  },
  game: {
    routeCards: [
      { key: "green", title: "绿色路线手卡正面", src: "assets/d_museum/museum_game_route_green_front.png" },
      { key: "pink", title: "粉色路线手卡正面", src: "assets/d_museum/museum_game_route_pink_front.png" },
      { key: "purple", title: "紫色路线手卡正面", src: "assets/d_museum/museum_game_route_purple_front.png" }
    ],
    cardBack: { title: "路线手卡背面", src: "assets/d_museum/museum_game_route_back.png" },
    process: [
      { title: "观察与拍摄", src: "assets/d_museum/museum_game_observe.png", preview: "assets/d_museum/museum_game_observe.png" },
      { title: "现场盖章", src: "assets/d_museum/museum_game_stamp.png", preview: "assets/d_museum/museum_game_stamp.png" }
    ]
  },
  museumDay: {
    props: {
      title: "5·18国际博物馆日活动手举牌",
      src: "assets/d_museum/museum_day_hand_props.jpg",
      preview: "assets/d_museum/web/museum-day-props.webp"
    },
    derivative: {
      title: "厦门大学1921手机支架",
      src: "assets/d_museum/museum_day_1921_phone_stand.jpg",
      preview: "assets/d_museum/web/museum-day-1921.webp"
    },
    mediaReport: {
      title: "媒体报道",
      src: "assets/d_museum/museum_media_report.png",
      preview: "assets/d_museum/museum_media_report.png"
    }
  },
  extensions: [
    { title: "吉祥八宝纹", src: "assets/d_museum/d01_jixiang_babao.jpg", preview: "assets/d_museum/web/collection-01.webp" },
    { title: "八仙过海", src: "assets/d_museum/d02_baxian_guohai_01.jpg", preview: "assets/d_museum/web/collection-02.webp" },
    { title: "窃曲纹", src: "assets/d_museum/d03_qiequ_wen.jpg", preview: "assets/d_museum/web/collection-03.webp" },
    { title: "兽面纹", src: "assets/d_museum/d04_shoumian_1106.jpg", preview: "assets/d_museum/web/collection-04.webp" },
    { title: "云雷纹", src: "assets/d_museum/d05_yunlei_wen.jpg", preview: "assets/d_museum/web/collection-05.webp" },
    { title: "2026新年海报", src: "assets/hero/hero_2026_new_year.jpg", preview: "assets/d_museum/web/collection-06.webp" }
  ]
});

function renderMuseumImage(asset, className = "", dimensions = "landscape") {
  const size = dimensions === "portrait" ? 'width="1200" height="1800"' : 'width="1600" height="1200"';
  return `
    <figure class="museum-media ${className}">
      <button class="image-button" type="button" data-full="${asset.src}" data-title="${asset.title}">
        <img src="${asset.preview || asset.src}" alt="${asset.title}" loading="lazy" decoding="async" ${size} />
      </button>
      <figcaption>${asset.title}</figcaption>
    </figure>
  `;
}

function renderMuseumBoardThumb(asset, index) {
  return `
    <button class="museum-browser-thumb${index === 0 ? " is-active" : ""}" type="button"
      data-src="${asset.preview || asset.src}" data-full="${asset.src}" data-title="${asset.title}"
      data-index="${index}"
      aria-label="切换至${asset.title}" aria-pressed="${index === 0 ? "true" : "false"}">
      <img src="${asset.preview || asset.src}" alt="" loading="lazy" decoding="async" width="1200" height="1800" />
      <span>${String(index + 1).padStart(2, "0")}</span>
    </button>
  `;
}

function renderHumanMuseumCase(caseItem, index) {
  const initialSeries = humanMuseumAssets.boardSeries.antiwar;
  const [greenCard, pinkCard, purpleCard] = humanMuseumAssets.game.routeCards;
  const cardBack = humanMuseumAssets.game.cardBack;

  const extensionCards = humanMuseumAssets.extensions.map((asset, assetIndex) => `
    <figure class="museum-extension-card" data-slide-index="${assetIndex}">
      <button class="image-button" type="button" data-full="${asset.src}" data-title="${asset.title}">
        <img src="${asset.preview}" alt="${asset.title}" loading="lazy" decoding="async" width="1273" height="1800" />
      </button>
      <figcaption>${asset.title}</figcaption>
    </figure>
  `).join("");
  const boardWorkDrafts = initialSeries.workDrafts.map((asset, assetIndex) => `
    <figure class="museum-workdraft-sheet museum-workdraft-sheet-${asset.role}" style="--draft-index: ${{ primary: 0, secondary: 1, note: 2 }[asset.role] ?? assetIndex}">
      <button class="image-button" type="button" data-full="${asset.src}" data-title="${asset.title}">
        <img src="${asset.src}" alt="${asset.title}" loading="lazy" decoding="async" />
      </button>
      <figcaption>${asset.label}</figcaption>
    </figure>
  `).join("");

  return `
    <article class="case-section case-human-museum" id="${caseItem.id}">
      <div class="human-museum-module museum-v2">
        <header class="museum-overview reveal">
          <p class="museum-section-kicker">01 / PROJECT OVERVIEW</p>
          <div class="museum-overview-grid">
            <div class="museum-overview-copy">
              <h3>${caseItem.title}</h3>
              <p class="museum-lead">${caseItem.oneLine}</p>
              <p class="museum-role"><strong>${caseItem.role}</strong><span>${caseItem.period}</span><span class="museum-recognition">优秀学生助理</span></p>
              <div class="museum-duty-line"><span>职责</span><p>日常讲解 / 主题展板 / 公众活动</p></div>
              <div class="museum-process-line"><span>工作流程</span><p>资料理解 → 内容整理 → 视觉设计 → 现场应用</p></div>
            </div>
            <div class="museum-results" aria-label="核心成果">
              <dl>
                <div><dt>40<span>余场</span></dt><dd>讲解</dd></div>
                <div><dt>2000<span>余人次</span></dt><dd>服务</dd></div>
                <div><dt>20<span>余张</span></dt><dd>主题海报</dd></div>
                <div><dt>20<span>余张</span></dt><dd>展板</dd></div>
              </dl>
            </div>
          </div>
          <div class="museum-tour-evidence">
            <p><strong>讲解现场</strong><span>通过日常讲解和现场交流，了解观众如何接收文物信息。</span></p>
            <div class="museum-tour-strip">
              ${humanMuseumAssets.tours.map((asset) => renderMuseumImage(asset, "", "landscape")).join("")}
            </div>
          </div>
        </header>

        <section class="museum-core reveal" aria-labelledby="museum-core-title">
          <header class="museum-core-heading">
            <p>02 / CORE CASES</p>
            <h4 id="museum-core-title">从内容整理到现场参与</h4>
            <p class="museum-section-description">围绕主题展板与公众活动，尝试用不同方式让馆藏内容进入观众的阅读和参观过程。</p>
          </header>

          <section class="museum-core-case museum-board-case" aria-labelledby="museum-board-case-title">
            <header class="museum-case-title museum-board-heading">
              <div class="museum-project-heading">
                <p>主题策展</p>
                <h5 id="museum-board-case-title">${initialSeries.title}</h5>
                <p class="museum-project-subtitle">${initialSeries.subtitle}</p>
              </div>
              <p class="museum-project-description">${initialSeries.description}</p>
              <p class="museum-responsibilities" aria-label="项目职责">${initialSeries.responsibilities.join(" <span aria-hidden=\"true\">/</span> ")}</p>
              <aside class="museum-workdraft" aria-labelledby="museum-workdraft-title">
                <div class="museum-workdraft-copy">
                  <h6 id="museum-workdraft-title">从主题线索到可执行画面</h6>
                  <p>基于基础资料与展板叙事，判断文案、史实和视觉素材之间的关联，重新梳理信息层级，并将模糊需求拆分为可确认、可执行的画面与素材任务。</p>
                  <p class="museum-workdraft-keywords">文本提炼 / 图文匹配 / 任务拆解 / 协作推进</p>
                </div>
                <div class="museum-workdraft-stack" aria-label="抗战主题系列工作底稿">${boardWorkDrafts}</div>
              </aside>
            </header>
            <div class="museum-unified-browser" id="museum-series-panel" tabindex="0" aria-label="抗战主题系列作品查看台，可使用方向键切换">
              <figure class="museum-browser-main" aria-live="polite">
                <button class="image-button museum-browser-main-button" type="button"
                  data-full="${initialSeries.images[0].src}" data-title="${initialSeries.images[0].title}">
                  <img src="${initialSeries.images[0].preview}" alt="${initialSeries.images[0].title}"
                    loading="lazy" decoding="async" width="1200" height="1800" />
                </button>
                <figcaption>${initialSeries.images[0].title}</figcaption>
              </figure>
              <div class="museum-board-support">
                <nav class="museum-board-series" aria-label="抗战主题系列作品切换">
                  <div class="museum-board-support-heading">
                    <h6>系列展板</h6>
                    <div class="museum-board-thumb-controls">
                      <button class="museum-board-rail-button museum-board-rail-prev" type="button" aria-label="查看上一张展板" title="上一张">←</button>
                      <button class="museum-board-rail-button museum-board-rail-next" type="button" aria-label="查看下一张展板" title="下一张">→</button>
                    </div>
                  </div>
                  <div class="museum-browser-thumbs" aria-label="抗战主题系列缩略图">
                    ${initialSeries.images.map(renderMuseumBoardThumb).join("")}
                  </div>
                </nav>
                <section class="museum-board-exhibition" aria-labelledby="museum-board-exhibition-title">
                  <h6 id="museum-board-exhibition-title">从版面到展览现场</h6>
                  <div class="museum-board-exhibition-grid">
                    ${initialSeries.exhibition.map((asset) => renderMuseumImage(asset, "museum-board-exhibition-photo", "landscape")).join("")}
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section class="museum-core-case museum-game-case" aria-labelledby="museum-game-case-title">
            <header class="museum-case-title museum-game-title">
              <div class="museum-project-heading">
                <p>互动策划</p>
                <h5 id="museum-game-case-title">咔嚓！一起捕捉光影</h5>
                <p class="museum-project-subtitle">把重点文物串成一条参观路线</p>
              </div>
              <p class="museum-project-description">围绕馆藏文物设计寻找、拍摄与盖章任务，并完成游戏规则、参观路线、手卡及配套物料设计，将观众真正引入体验。</p>
              <p class="museum-responsibilities" aria-label="项目职责">活动策划 <span aria-hidden="true">/</span> 路线设计 <span aria-hidden="true">/</span> 规则设计 <span aria-hidden="true">/</span> 视觉执行</p>
            </header>
            <div class="museum-game-composition">
              <div class="museum-game-primary">
                <div class="museum-route-card-stack" aria-label="绿、粉、紫三条参观路线手卡">
                  <div class="museum-route-card museum-route-card-under museum-route-card-pink" aria-hidden="true">
                    <img src="${pinkCard.src}" alt="" loading="lazy" decoding="async" width="1228" height="1933" />
                  </div>
                  <div class="museum-route-card museum-route-card-under museum-route-card-purple" aria-hidden="true">
                    <img src="${purpleCard.src}" alt="" loading="lazy" decoding="async" width="1228" height="1933" />
                  </div>
                  <button class="museum-route-card museum-route-card-flip" type="button"
                    aria-label="查看手卡背面" aria-pressed="false" data-card-flip>
                    <span class="museum-route-card-flip-inner">
                      <span class="museum-route-card-face museum-route-card-front">
                        <img src="${greenCard.src}" alt="${greenCard.title}" loading="lazy" decoding="async" width="1228" height="1933" />
                      </span>
                      <span class="museum-route-card-face museum-route-card-back">
                        <img src="${cardBack.src}" alt="${cardBack.title}" loading="lazy" decoding="async" width="1938" height="1203" />
                      </span>
                    </span>
                  </button>
                </div>
                <p class="museum-route-card-hint">悬停或点击查看手卡背面</p>
                <div class="museum-game-insights" aria-label="手卡设计提取点">
                  <p><strong>文物剪影</strong><span>把馆藏外形变成寻找线索。</span></p>
                  <p><strong>路线分色</strong><span>用绿、粉、紫区分不同任务。</span></p>
                  <p><strong>分区排版</strong><span>让文物提示、展厅位置和盖章区域相互对应。</span></p>
                </div>
              </div>
              <div class="museum-game-process">
                <div class="museum-game-process-heading">
                  <h6>寻找文物 → 拍照记录 → 现场盖章</h6>
                  <p>手卡在实际参观过程中被使用，并作为活动视觉线索出现在小红书、官方推送及新闻报道中。</p>
                </div>
                ${humanMuseumAssets.game.process.map((asset) => renderMuseumImage(asset, "museum-process-photo", "landscape")).join("")}
              </div>
            </div>
            <ol class="museum-game-steps" aria-label="展厅探索游戏流程">
              <li>领取手卡</li><li>寻找文物</li><li>拍摄盖章</li><li>集章兑换</li>
            </ol>
            <aside class="museum-day-strip" aria-label="活动配套物料">
              <header class="museum-day-intro">
                <h6>活动识别延伸到现场</h6>
                <p>根据陈列、互动和拍摄需求，完成手举牌与现场物料的视觉延展。</p>
                <p class="museum-responsibilities" aria-label="项目职责">物料规划 <span aria-hidden="true">/</span> 视觉延展 <span aria-hidden="true">/</span> 场景适配</p>
              </header>
              ${renderMuseumImage(humanMuseumAssets.museumDay.props, "museum-day-main", "landscape")}
              ${renderMuseumImage(humanMuseumAssets.museumDay.derivative, "museum-day-derivative", "portrait")}
              ${renderMuseumImage(humanMuseumAssets.museumDay.mediaReport, "museum-report-media", "landscape")}
            </aside>
            <p class="museum-game-summary">手卡让观看文物、寻找展厅与现场盖章，自然连成一次完整的逛馆体验。</p>
          </section>
        </section>

        <section class="museum-results-strip museum-extensions reveal" aria-labelledby="museum-extensions-title">
          <header class="museum-extension-heading">
            <div>
              <p>03 / OTHER VISUAL WORKS</p>
              <h4 id="museum-extensions-title">馆藏视觉作品</h4>
              <p class="museum-extension-note">部分作品使用 AI 辅助创作</p>
            </div>
            <div class="museum-slider-controls">
              <span class="museum-slider-count">01 / ${String(humanMuseumAssets.extensions.length).padStart(2, "0")}</span>
              <button class="museum-slider-prev" type="button" aria-label="查看上一件作品" title="上一件">←</button>
              <button class="museum-slider-next" type="button" aria-label="查看下一件作品" title="下一件">→</button>
            </div>
          </header>
          <div class="museum-extension-track" tabindex="0" aria-label="馆藏视觉作品，可横向滑动">
            ${extensionCards}
          </div>
        </section>
      </div>
      <div class="case-transition" aria-hidden="true"><span>${index + 1 < portfolioCases.length ? "进入下一章节" : "作品集章节结束"}</span></div>
    </article>
  `;
}
const campusMerchAssets = Object.freeze({
  intro: [
    { src: "assets/campus-merch/02-campus-landmarks/landmark-music-square.jpg", title: "校园风景·音乐广场" },
    { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-keyi-blue.jpg", title: "嘉庚精神·科学艺术中心" },
    { src: "assets/campus-merch/02-campus-landmarks/landmark-jiannan.jpg", title: "校园风景·建南大礼堂" },
    { src: "assets/campus-merch/02-campus-landmarks/landmark-qunxian.jpg", title: "校园风景·群贤楼群" }
  ],
  languages: [
    {
      key: "pixel",
      title: "像素化校园地标",
      property: "推文视觉衍生 · 校园素材建设",
      description: "从推文配图需求出发，以像素色块概括建筑特征，建立可以持续使用并延展至校园文创的基础视觉素材。",
      keywords: ["建筑概括", "系列创作", "内容适配"],
      layout: "pixel",
      images: [
        { src: "assets/campus-merch/01-pixel-campus/pixel-campus-gate.jpg", title: "像素校园·校门" },
        { src: "assets/campus-merch/01-pixel-campus/pixel-main-building.jpg", title: "像素校园·主楼" },
        { src: "assets/campus-merch/01-pixel-campus/pixel-campus-building.jpg", title: "像素校园·校园建筑" },
        { src: "assets/campus-merch/01-pixel-campus/pixel-songen-building.jpg", title: "像素校园·颂恩楼" },
        { src: "assets/campus-merch/01-pixel-campus/pixel-xuewu-building.jpg", title: "像素校园·学武楼" }
      ]
    },
    {
      key: "panorama",
      title: "长幅校园图景",
      property: "嘉庚精神文创征集比赛",
      description: "根据笔记本、帆布袋与杯身等产品比例，提炼并重组校园建筑与文化元素，兼顾文创征集对风格化表达与实际落地性的要求，并成为当届<strong>唯一获得文创落地邀请</strong>的作品系列。",
      keywords: ["视觉创作", "构图适配", "产品转化"],
      layout: "panorama",
      images: [
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-key-visual.jpg", title: "嘉庚精神·主视觉", orientation: "tall" },
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-keyi-blue.jpg", title: "嘉庚精神·科学艺术中心", orientation: "tall" },
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-jiannan-yellow.jpg", title: "嘉庚精神·建南礼堂", orientation: "wide" },
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-furong-dorm.jpg", title: "嘉庚精神·芙蓉宿舍", orientation: "tall" },
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-canteen-red.jpg", title: "嘉庚精神·餐厅", orientation: "tall" }
      ]
    },
    {
      key: "minnan",
      title: "闽南文化图形",
      property: "文化创新比赛 · 展台设计",
      description: "从闽南建筑屋檐、装饰构件和色彩中提取视觉特征，并将其延展至插画、文创产品和展示空间。",
      keywords: ["文化提取", "图形衍生", "空间延展"],
      layout: "fold",
      images: [
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-eave-red.jpg", title: "闽南屋檐·红色图稿", orientation: "tall" },
        { src: "assets/campus-merch/03-jiageng-series/illustrations/jiageng-eave-blue.jpg", title: "闽南屋檐·蓝色图稿", orientation: "tall" },
        { src: "assets/campus-merch/99-reference-boards/eave-series-board.jpg", title: "闽南屋檐系列汇总", orientation: "wide" },
        { src: "assets/campus-merch/05-space-extension/campus-merch-booth.png", title: "闽南文化校园文创展台", orientation: "wide", kind: "booth" }
      ]
    }
  ],
  adaptations: [
    {
      key: "pixel",
      title: "像素化校园地标",
      property: "推文衍生 · 产品落地 · 活动策划",
      description: "将校园建筑视觉转化为拼图、明信片与钥匙扣等文创产品。我负责从产品落地到实物交接，并配合推文抽奖规划奖品组合、领取方式与交接流程，让文创实物同时服务内容互动与账号关注。",
      keywords: ["产品落地", "活动策划", "实物交接"],
      layout: "products",
      images: [
        { src: "assets/campus-merch/04-product-photos/postcards-spread-photo.jpg", title: "校园明信片铺陈", label: "明信片", role: "hero" },
        { src: "assets/campus-merch/04-product-photos/puzzle-photo.jpg", title: "校园建筑拼图", label: "拼图" },
        { src: "assets/campus-merch/04-product-photos/keychains-photo.jpg", title: "校园建筑钥匙扣", label: "钥匙扣" },
        { src: "assets/campus-merch/04-product-photos/desk-display-photo.jpg", title: "校园桌面摆件", label: "桌面摆件" },
        { src: "assets/campus-merch/04-product-photos/keychain-detail-photo.jpg", title: "校园钥匙扣细节", label: "钥匙扣" },
        { src: "assets/campus-merch/04-product-photos/postcards-stack-photo.jpg", title: "校园明信片组合", label: "明信片" }
      ]
    },
    {
      key: "panorama",
      title: "长幅校园图景",
      property: "获奖方案 · 文创落地邀请",
      description: "将长幅校园插画分别适配笔记本、帆布袋与随行杯，并依据不同载体的比例重新安排建筑主体、色彩和留白。该系列获校级二等奖，并成为当届<strong>唯一获得文创落地邀请</strong>的作品。",
      keywords: ["构图适配", "系列延展", "产品呈现"],
      layout: "suite",
      images: [
        { src: "assets/campus-merch/03-jiageng-series/products/notebook-keyi.jpg", title: "科学艺术中心笔记本", label: "笔记本", role: "notebook" },
        { src: "assets/campus-merch/03-jiageng-series/products/notebook-key-visual.png", preview: "assets/campus-merch/03-jiageng-series/products/notebook-key-visual-preview.webp", title: "嘉庚精神主视觉笔记本", label: "笔记本", role: "notebook" },
        { src: "assets/campus-merch/03-jiageng-series/products/notebook-yellow.png", preview: "assets/campus-merch/03-jiageng-series/products/notebook-yellow-preview.webp", title: "黄色建筑笔记本", label: "笔记本", role: "notebook" },
        { src: "assets/campus-merch/03-jiageng-series/products/tote-overview.jpg", title: "嘉庚精神帆布袋总览", label: "帆布袋", role: "tote" },
        { src: "assets/campus-merch/03-jiageng-series/products/tumbler-overview.jpg", title: "嘉庚精神随行杯总览", label: "随行杯", role: "tumbler" }
      ]
    },
    {
      key: "minnan",
      title: "闽南文化图形",
      property: "文化创新比赛 · 产品衍生 · 展台设计",
      description: "从闽南屋檐、装饰构件与地域色彩中提取视觉语言，并进一步延展为文创组合和展台空间，使文化图形在产品与现场陈列中保持完整、鲜明的识别。",
      keywords: ["文化提取", "产品衍生", "空间呈现"],
      layout: "space",
      images: [
        { src: "assets/campus-merch/05-space-extension/campus-merch-booth.png", title: "闽南文化校园文创展台", label: "展台设计", role: "booth" },
        { src: "assets/campus-merch/99-reference-boards/eave-series-board.jpg", title: "闽南屋檐系列应用", label: "系列应用", role: "board" },
        { src: "assets/campus-merch/99-reference-boards/jiageng-overview-board.jpg", title: "嘉庚精神视觉系统", label: "视觉系统", role: "board" }
      ]
    }
  ]
});

function renderCampusMerchImage(asset, className = "") {
  return `
    <button class="image-button ${className}" type="button" data-full="${asset.src}" data-title="${asset.title}">
      <img src="${asset.preview || asset.src}" alt="${asset.title}" loading="lazy" />
    </button>
  `;
}

function renderCampusMerchCase(caseItem, index) {
  const introVisuals = campusMerchAssets.intro.map((asset, assetIndex) => `
    <figure class="campus-merch-intro-card campus-merch-intro-card-${assetIndex + 1}" data-campus-depth="${assetIndex + 1}">
      ${renderCampusMerchImage(asset)}
    </figure>
  `).join("");

  const languageNavigation = campusMerchAssets.languages.map((series, seriesIndex) => `
    <button class="campus-series-tab ${seriesIndex === 0 ? "is-active" : ""}" type="button" data-campus-series-tab="${series.key}" aria-selected="${seriesIndex === 0}">
      <span>${String(seriesIndex + 1).padStart(2, "0")}</span>
      <strong>${series.title}</strong>
    </button>
  `).join("");
  const languageDetails = campusMerchAssets.languages.map((series, seriesIndex) => `
    <div class="campus-series-detail ${seriesIndex === 0 ? "is-active" : ""}" data-campus-series-detail="${series.key}" aria-hidden="${seriesIndex !== 0}">
      <p class="campus-series-property">${series.property}</p>
      <p class="campus-series-description">${series.description}</p>
      <p class="campus-series-keywords">${series.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</p>
    </div>
  `).join("");
  const languagePanels = campusMerchAssets.languages.map((series, seriesIndex) => `
    <section class="campus-series-panel campus-series-panel-${series.layout} ${seriesIndex === 0 ? "is-active" : ""}" data-campus-series-panel="${series.key}" data-layout="${series.layout}" aria-hidden="${seriesIndex !== 0}">
      <div class="campus-series-deck" tabindex="0" aria-label="${series.title}作品浏览器">
        ${series.images.map((asset, assetIndex) => `
          <figure class="campus-series-slide campus-series-slide-${asset.orientation || "wide"} ${asset.kind ? `campus-series-slide-${asset.kind}` : ""} ${assetIndex === 0 ? "is-active" : ""}" data-index="${assetIndex}" aria-hidden="${assetIndex !== 0}">
            ${renderCampusMerchImage(asset)}
          </figure>
        `).join("")}
        ${series.layout !== "fold" ? `
          <button class="campus-series-arrow campus-series-prev" type="button" aria-label="查看上一张作品">←</button>
          <button class="campus-series-arrow campus-series-next" type="button" aria-label="查看下一张作品">→</button>
        ` : ""}
      </div>
      ${series.layout !== "fold" ? `
        <div class="campus-series-thumbs" aria-label="${series.title}缩略图">
          ${series.images.map((asset, assetIndex) => `
            <button class="campus-series-thumb ${asset.orientation === "tall" ? "is-tall" : ""} ${assetIndex === 0 ? "is-active" : ""}" type="button" data-index="${assetIndex}" aria-label="查看${asset.title}" aria-pressed="${assetIndex === 0}">
              <img src="${asset.preview || asset.src}" alt="" loading="lazy" />
            </button>
          `).join("")}
        </div>
      ` : ""}
    </section>
  `).join("");

  const adaptationTabs = campusMerchAssets.adaptations.map((series, seriesIndex) => `
    <button class="campus-adaptation-tab ${seriesIndex === 0 ? "is-active" : ""}" type="button" data-campus-adaptation-tab="${series.key}" aria-selected="${seriesIndex === 0}">
      <span>${String(seriesIndex + 1).padStart(2, "0")}</span>
      <strong>${series.title}</strong>
    </button>
  `).join("");
  const adaptationPanels = campusMerchAssets.adaptations.map((series, seriesIndex) => `
    <section class="campus-adaptation-panel campus-adaptation-panel-${series.layout} ${seriesIndex === 0 ? "is-active" : ""}" data-campus-adaptation-panel="${series.key}" data-layout="${series.layout}" aria-hidden="${seriesIndex !== 0}">
      <div class="campus-adaptation-copy">
        <p class="campus-adaptation-property">${series.property}</p>
        <p class="campus-adaptation-description">${series.description}</p>
        <p class="campus-adaptation-keywords">${series.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</p>
      </div>
      <div class="campus-adaptation-stage campus-adaptation-stage-${series.layout}" tabindex="0" aria-label="${series.title}产品与场景展示">
        ${series.images.map((asset, assetIndex) => `
          <figure class="campus-adaptation-media campus-adaptation-media-${asset.role || "support"} ${assetIndex === 0 ? "is-featured" : ""}" data-index="${assetIndex}">
            ${renderCampusMerchImage(asset)}
            <figcaption>${asset.label}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `).join("");
  return `
    <article class="case-section case-xiayu-campus" id="${caseItem.id}">
      <div class="campus-merch-module">
        <section class="campus-merch-block campus-merch-intro reveal" aria-labelledby="campus-merch-title">
          <div class="campus-merch-intro-copy">
            <p class="campus-merch-kicker">CASE ${caseItem.group} / 厦屿厦礼 · 校园文创</p>
            <h3 id="campus-merch-title">从图像创作到视觉衍生</h3>
            <p>我能够根据不同对象选择合适的视觉语言。持续的图像创作训练，让我可以判断一幅画该以什么风格出现、适合进入什么产品，也为视觉宣传、内容衍生与AI辅助创作提供基础。</p>
            <div class="campus-merch-abilities" aria-label="项目能力">
              <span>图像创作</span><span>审美判断</span><span>风格适配</span><span>产品衍生</span>
            </div>
          </div>
          <div class="campus-merch-intro-visual" aria-label="三种代表性视觉风格">
            ${introVisuals}
          </div>
        </section>

        <section class="campus-merch-block campus-merch-languages reveal" aria-labelledby="campus-language-title">
          <header class="campus-merch-heading">
            <p>01 / VISUAL LANGUAGES</p>
            <h4 id="campus-language-title">根据对象，选择画法</h4>
            <span>从推文配图、设计比赛到文化创新项目，根据不同内容与应用场景调整图像风格、构图和视觉密度。</span>
          </header>
          <div class="campus-series-switcher">
            <aside class="campus-series-sidebar">
              <nav class="campus-series-tabs" aria-label="视觉语言系列切换">${languageNavigation}</nav>
              <div class="campus-series-details">${languageDetails}</div>
            </aside>
            <div class="campus-series-stage">${languagePanels}</div>
          </div>
        </section>

        <section class="campus-merch-block campus-merch-applications reveal" aria-labelledby="campus-adaptation-title">
          <header class="campus-merch-heading campus-adaptation-heading">
            <p>02 / PRODUCT ADAPTATION</p>
            <h4 id="campus-adaptation-title">从图稿，走向产品与现场</h4>
            <span>图像进入真实载体后，需要根据产品比例、制作方式与使用场景重新组织。我将三组校园视觉继续延展为文创产品、传播活动与展台空间，完成从创作到落地的衔接。</span>
            <nav class="campus-adaptation-tabs" aria-label="产品适配系列切换">${adaptationTabs}</nav>
          </header>
          <div class="campus-adaptation-switcher">${adaptationPanels}</div>
        </section>

      </div>
      <div class="case-transition" aria-hidden="true"><span>${index + 1 < portfolioCases.length ? "进入下一章节" : "作品集章节结束"}</span></div>
    </article>
  `;
}

function renderCase(caseItem, index) {
  if (caseItem.id === "human-museum") return renderHumanMuseumCase(caseItem, index);
  if (caseItem.id === "xiayu-campus") return renderCampusMerchCase(caseItem, index);

  const images = caseItem.images || [];
  const mainImages = images.filter((image) => image.detailLevel === "main");
  const supportImages = images.filter((image) => image.detailLevel !== "main");
  const orderedImages = [...mainImages, ...supportImages];
  const evidenceLinks = caseItem.evidenceLinks || [];
  const evidenceImageIds = new Set(evidenceLinks.flatMap((link) => link.imageIds || []));
  const galleryImages = orderedImages.filter((image) => !evidenceImageIds.has(image.id));
  const selectedPosterIds = new Set(
    caseItem.id === "people-daily" ? peopleDailySelectedPosters.map((poster) => poster.id) : []
  );
  const selectedPostersHtml =
    caseItem.id === "people-daily" ? renderPeopleDailySelectedPosters(galleryImages) : "";
  const layoutGalleryImages = galleryImages.filter((image) => !selectedPosterIds.has(image.id));
  const leadIds = caseItem.id === "people-daily" ? ["A1", "A2", "A8", "A3"] : leadIdsForCase(caseItem);
  const leadImages = leadIds
    ? leadIds.map((id) => layoutGalleryImages.find((image) => image.id === id)).filter(Boolean)
    : layoutGalleryImages.slice(0, leadCountForCase(caseItem, layoutGalleryImages));
  const featureIds = featureIdsForCase(caseItem);
  const carouselIds = carouselIdsForCase(caseItem);
  const sectionedIds = sectionedImageIdsForCase(caseItem);
  const featuredFollowImages = layoutGalleryImages.filter(
    (image) => featureIds.includes(image.id) && !leadImages.some((lead) => lead.id === image.id)
  ).sort((a, b) => featureIds.indexOf(a.id) - featureIds.indexOf(b.id));
  const carouselImages = layoutGalleryImages.filter(
    (image) =>
      carouselIds.includes(image.id) &&
      !leadImages.some((lead) => lead.id === image.id) &&
      !featuredFollowImages.some((featured) => featured.id === image.id)
  );
  const remainingImages = layoutGalleryImages.filter(
    (image) =>
      !leadImages.some((lead) => lead.id === image.id) &&
      !featuredFollowImages.some((featured) => featured.id === image.id) &&
      !carouselImages.some((carouselImage) => carouselImage.id === image.id) &&
      !sectionedIds.includes(image.id)
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

  const renderImageCard = (image) => {
    const xmuPushLabels = {
      C13: "年度报告",
      C14: "毕业季礼盒",
      C15: "二十大头像框",
      C16: "新生写真",
      C17: "厦大风壁纸"
    };
    const pushLabel = xmuPushLabels[image.id] ? `青春厦大 / ${xmuPushLabels[image.id]}` : "";
    const imageControl = image.link
      ? `<a class="image-button external-article-link" href="${image.link}" target="_blank" rel="noopener noreferrer" title="打开公众号原文">
          <img src="${image.src}" alt="${image.title}" loading="eager" />
          <span>打开公众号原文</span>
        </a>`
      : `<button class="image-button" type="button" data-full="${image.src}" data-title="${image.id} ${image.title}">
          <img src="${image.src}" alt="${image.title}" loading="eager" />
        </button>`;

    return `
    <figure class="work-card work-${image.id.toLowerCase()} ${image.detailLevel === "main" ? "main" : ""} ${imageKind(image.src)} reveal"${pushLabel ? ` data-push-label="${pushLabel}"` : ""}>
      <div class="work-image">
        ${imageControl}
      </div>
      <figcaption class="work-caption">
        <strong>${image.id} ${image.title}</strong>
        <p>${image.note}</p>
        <small>${image.link ? "点击图片打开公众号原文" : "点击图片放大查看"}</small>
      </figcaption>
    </figure>
  `;
  };

  const renderEvidenceProof = (link) => {
    const evidenceImages = (link.imageIds || [])
      .map((id) => images.find((image) => image.id === id))
      .filter(Boolean);

    const evidenceImageHtml = evidenceImages
      .map(
        (image) => `
          <figure class="evidence-photo ${imageKind(image.src)}">
            <button class="image-button evidence-image-button" type="button" data-full="${image.src}" data-title="${image.id} ${image.title}">
              <img src="${image.src}" alt="${image.title}" loading="eager" />
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
                        <img src="${image.src}" alt="${image.title}" loading="eager" />
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
  const featuredRowsHtml = featureRowsForCase(caseItem, featuredFollowImages)
    .map((row) => `<div class="feature-row">${row.map(renderImageCard).join("")}</div>`)
    .join("");
  const sectionedImages = galleryImages
    .filter((image) => sectionedIds.includes(image.id))
    .sort((a, b) => sectionedIds.indexOf(a.id) - sectionedIds.indexOf(b.id));
  const accountResultIds = ["E29", "E27", "E28"];
  const eventPromotionIds = ["E30", "E31"];
  const accountResultImages = sectionedImages.filter((image) => accountResultIds.includes(image.id));
  const eventPromotionImages = sectionedImages.filter((image) => eventPromotionIds.includes(image.id));
  const accountResultsHtml =
    caseItem.id === "xiayu-studio" && accountResultImages.length
      ? `
        <section class="account-results" aria-label="账号运营结果">
          <div class="account-results-heading">
            <span>CONTENT OPERATION</span>
            <h4>账号运营结果</h4>
          </div>
          <div class="account-results-grid">${accountResultImages.map(renderImageCard).join("")}</div>
        </section>
      `
      : "";
  const eventPromotionHtml =
    caseItem.id === "xiayu-studio" && eventPromotionImages.length
      ? `
        <section class="event-promotion" aria-label="线下艺术节传播">
          <div class="event-promotion-heading">
            <span>OFFLINE PROMOTION</span>
            <h4>线下艺术节传播</h4>
          </div>
          <div class="event-promotion-grid">${eventPromotionImages.map(renderImageCard).join("")}</div>
        </section>
      `
      : "";
  const carouselHtml = carouselImages.map(renderImageCard).join("");
  const leftFollowHtml = balancedColumns.left.map(renderImageCard).join("");
  const rightFollowHtml = balancedColumns.right.map(renderImageCard).join("");
  const sideEvidenceHtml = renderSideEvidence();
  const hasFollowImages = featuredRowsHtml || accountResultsHtml || eventPromotionHtml || carouselHtml || leftFollowHtml || rightFollowHtml;
  const followImageHtml = hasFollowImages
    ? `
      ${featuredRowsHtml}
      ${accountResultsHtml}
      ${eventPromotionHtml}
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
        ${caseItem.id === "people-daily" ? renderPeopleDailyIntro(caseItem, index) : `
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
        `}
      </div>
      ${caseItem.id === "people-daily" ? renderHaiZhiXiangModule() : ""}
      ${selectedPostersHtml}
      <div class="case-side reveal">
        ${
          caseItem.id === "people-daily" && leadImageHtml
            ? `
              <div class="people-daily-series">
                <div class="people-daily-series-controls" aria-label="系列作品浏览控制">
                  <span class="people-daily-series-count">01 / ${String(leadImages.length).padStart(2, "0")}</span>
                  <button class="people-daily-series-prev" type="button" aria-label="查看上一张作品">←</button>
                  <button class="people-daily-series-next" type="button" aria-label="查看下一张作品">→</button>
                </div>
                <div class="case-gallery lead-gallery people-daily-series-track" aria-label="系列作品横向浏览">
                  ${leadImageHtml}
                </div>
              </div>
            `
            : hasSideContent
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
      ${caseItem.id === "xmu-media" ? renderGraduationGiftModule() : ""}
      ${caseItem.id === "xmu-media" ? "" : `
        <div class="case-transition" aria-hidden="true">
          <span>${index + 1 < portfolioCases.length ? "进入下一章节" : "作品集章节结束"}</span>
        </div>
      `}
    </article>
  `;
}

function renderCases() {
  const template = document.createElement("template");
  template.innerHTML = portfolioCases.map(renderCase).join("");
  preparePortfolioImages(template.content);
  byId("case-list").replaceChildren(template.content);
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
    { threshold: 0.01 }
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

    enablePortfolioImageRecovery(image);
  });
}

function setupImageViewer() {
  const viewer = byId("image-viewer");
  const viewerImage = byId("viewer-image");
  const viewerCaption = byId("viewer-caption");
  const closeButton = viewer.querySelector(".viewer-close");
  let viewerRequest = 0;
  const viewerStatus = document.createElement("span");
  viewerStatus.className = "viewer-load-status";
  viewerStatus.setAttribute("role", "status");
  viewerCaption.after(viewerStatus);

  const closeViewer = () => {
    viewerRequest += 1;
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    viewerImage.removeAttribute("src");
    viewerImage.removeAttribute("srcset");
    viewerImage.alt = "";
    viewerCaption.textContent = "";
    viewerStatus.textContent = "";
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".image-button");
    if (!trigger) return;
    if (trigger.classList.contains("external-article-link")) return;

    const request = ++viewerRequest;
    const original = trigger.dataset.full;
    viewerImage.removeAttribute("srcset");
    viewerImage.src = portfolioPreviewSource(original);
    viewerStatus.textContent = "正在加载高清原图…";
    const fullImage = new Image();
    fullImage.onload = () => {
      if (request !== viewerRequest) return;
      viewerImage.src = original;
      viewerStatus.textContent = "";
    };
    fullImage.onerror = () => {
      if (request !== viewerRequest) return;
      viewerStatus.textContent = "高清原图暂未加载，当前显示预览图。";
    };
    fullImage.src = original;
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


function setupHumanMuseumExperience() {
  document.querySelectorAll(".case-human-museum").forEach((museumCase) => {
    const markLoaded = (image) => {
      if (!image) return;
      const reveal = () => image.classList.add("is-loaded");
      image.classList.remove("is-loaded");
      if (image.complete && image.naturalWidth) reveal();
      else image.addEventListener("load", reveal, { once: true });
    };

    museumCase.querySelectorAll("img").forEach(markLoaded);

    const seriesPanel = museumCase.querySelector(".museum-unified-browser");
    const seriesMain = museumCase.querySelector(".museum-browser-main");
    const seriesMainButton = museumCase.querySelector(".museum-browser-main-button");
    const seriesMainImage = seriesMainButton?.querySelector("img");
    const seriesMainCaption = seriesMain?.querySelector("figcaption");
    const seriesThumbContainer = museumCase.querySelector(".museum-browser-thumbs");
    const seriesThumbs = [...museumCase.querySelectorAll(".museum-browser-thumb")];
    const seriesPrevious = museumCase.querySelector(".museum-board-rail-prev");
    const seriesNext = museumCase.querySelector(".museum-board-rail-next");
    const boardAssets = humanMuseumAssets.boardSeries.antiwar.images;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let boardIndex = 0;
    let boardSwitchToken = 0;

    const updateBoardControls = () => {
      if (seriesPrevious) seriesPrevious.disabled = boardIndex === 0;
      if (seriesNext) seriesNext.disabled = boardIndex === boardAssets.length - 1;
    };

    const updateBoardMain = (asset, activeThumb = null) => {
      if (!seriesMain || !seriesMainButton || !seriesMainImage || !seriesMainCaption) return;
      const switchToken = ++boardSwitchToken;
      seriesMain.classList.add("is-switching");
      const preload = new Image();
      preload.onload = () => {
        if (switchToken !== boardSwitchToken) return;
        window.setTimeout(() => {
          if (switchToken !== boardSwitchToken) return;
          applyPortfolioPreview(seriesMainImage, asset.preview || asset.src, true);
          seriesMainImage.alt = asset.title;
          seriesMainButton.dataset.full = asset.src;
          seriesMainButton.dataset.title = asset.title;
          seriesMainCaption.textContent = asset.title;
          markLoaded(seriesMainImage);
          [...museumCase.querySelectorAll(".museum-browser-thumb")].forEach((thumb) => {
            const active = thumb === activeThumb || (!activeThumb && thumb.dataset.full === asset.src);
            thumb.classList.toggle("is-active", active);
            thumb.setAttribute("aria-pressed", String(active));
          });
          activeThumb?.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: reduceMotion ? "auto" : "smooth"
          });
          requestAnimationFrame(() => requestAnimationFrame(() => seriesMain.classList.remove("is-switching")));
        }, reduceMotion ? 0 : 110);
      };
      preload.onerror = () => {
        if (switchToken === boardSwitchToken) seriesMain.classList.remove("is-switching");
      };
      preload.src = portfolioPreviewSource(asset.preview || asset.src);
    };

    const selectBoard = (nextIndex, focusThumb = false) => {
      const clampedIndex = Math.max(0, Math.min(boardAssets.length - 1, nextIndex));
      const activeThumb = seriesThumbs[clampedIndex];
      if (!activeThumb) return;
      boardIndex = clampedIndex;
      updateBoardControls();
      if (focusThumb) activeThumb.focus({ preventScroll: true });
      updateBoardMain(boardAssets[boardIndex], activeThumb);
    };

    seriesThumbContainer?.addEventListener("click", (event) => {
      const thumb = event.target.closest(".museum-browser-thumb");
      if (!thumb) return;
      selectBoard(Number(thumb.dataset.index));
    });

    seriesPrevious?.addEventListener("click", () => selectBoard(boardIndex - 1));
    seriesNext?.addEventListener("click", () => selectBoard(boardIndex + 1));
    seriesPanel?.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const offset = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      selectBoard(boardIndex + offset, event.target.closest(".museum-browser-thumb") !== null);
    });
    updateBoardControls();

    const cardFlip = museumCase.querySelector("[data-card-flip]");
    const cardHint = museumCase.querySelector(".museum-route-card-hint");
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let cardLocked = false;
    let suppressCardHover = false;

    const setCardFace = (showBack) => {
      if (!cardFlip) return;
      cardFlip.classList.toggle("is-flipped", showBack);
      cardFlip.closest(".museum-route-card-stack")?.classList.toggle("is-card-open", showBack);
      cardFlip.setAttribute("aria-pressed", String(showBack));
      cardFlip.setAttribute("aria-label", showBack ? "查看手卡正面" : "查看手卡背面");
      if (showBack) cardHint?.classList.add("is-seen");
    };

    cardFlip?.addEventListener("pointerenter", () => {
      if (supportsHover && !cardLocked && !suppressCardHover) setCardFace(true);
    });
    cardFlip?.addEventListener("pointerleave", () => {
      suppressCardHover = false;
      if (!cardLocked) setCardFace(false);
    });
    cardFlip?.addEventListener("click", () => {
      if (cardLocked) {
        cardLocked = false;
        suppressCardHover = true;
        setCardFace(false);
        return;
      }
      cardLocked = true;
      setCardFace(true);
    });

    cardFlip?.querySelectorAll("img").forEach((image) => {
      const markCardFaceMissing = () => image.closest(".museum-route-card-face")?.classList.add("is-missing");
      image.addEventListener("portfolioimageerror", markCardFaceMissing);
    });

    const track = museumCase.querySelector(".museum-extension-track");
    const cards = [...museumCase.querySelectorAll(".museum-extension-card")];
    const previous = museumCase.querySelector(".museum-slider-prev");
    const next = museumCase.querySelector(".museum-slider-next");
    const count = museumCase.querySelector(".museum-slider-count");
    if (!track || !cards.length || !previous || !next || !count) return;

    let currentIndex = 0;
    const updateSlider = (index) => {
      currentIndex = Math.max(0, Math.min(cards.length - 1, index));
      count.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
      previous.disabled = currentIndex === 0;
      next.disabled = currentIndex === cards.length - 1;
    };
    const moveSlider = (index) => {
      const targetIndex = Math.max(0, Math.min(cards.length - 1, index));
      track.scrollTo({ left: cards[targetIndex].offsetLeft - track.offsetLeft, behavior: "smooth" });
      updateSlider(targetIndex);
    };

    previous.addEventListener("click", () => moveSlider(currentIndex - 1));
    next.addEventListener("click", () => moveSlider(currentIndex + 1));
    track.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      moveSlider(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
    });

    let scrollFrame = 0;
    track.addEventListener("scroll", () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const nearest = cards.reduce((best, card, cardIndex) => {
          const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
          const bestDistance = Math.abs(cards[best].offsetLeft - track.offsetLeft - track.scrollLeft);
          return distance < bestDistance ? cardIndex : best;
        }, 0);
        updateSlider(nearest);
      });
    }, { passive: true });
    updateSlider(0);
  });
}
function setupGraduationGiftExperience() {
  document.querySelectorAll(".graduation-gift-module").forEach((module) => {
    const controls = [...module.querySelectorAll(".gift-product-control")];
    const panels = [...module.querySelectorAll(".gift-product-panel")];
    const assetBase = "assets/c_xmu_media/";
    const overview = module.querySelector(".gift-kit-overview");
    const overviewButton = module.querySelector(".gift-overview-button");
    const overviewImage = module.querySelector(".gift-overview-image");
    const overviewVisuals = [...module.querySelectorAll(".gift-overview-visual")];
    const overviewEyebrow = module.querySelector(".gift-overview-eyebrow");
    const overviewTitle = module.querySelector(".gift-overview-title");
    const overviewCopy = module.querySelector(".gift-overview-copy");
    const overviewStates = {
      "gift-set": {
        visual: "single",
        src: `${assetBase}c32_travel_giftbox.png`, alt: "旅行周历毕业礼盒整体包装", title: "旅行周历毕业礼盒",
        eyebrow: "GRADUATION GIFT", heading: "礼盒本体", copy: "周历、专业徽章与印章，共同组成毕业礼盒。"
      },
      "gift-calendar": {
        visual: "single",
        src: `${assetBase}c35_travel_calendar_full.png`, alt: "旅行周历本体与九站票根组合", title: "旅行周历本体",
        eyebrow: "02 / TRAVEL CALENDAR", heading: "九站周历，留出参与的位置", copy: "正面呈现日期与路线，背面设置记录、寄语和打卡小任务。"
      },
      "gift-badges": {
        visual: "badges",
        eyebrow: "03 / ACADEMIC BADGES", heading: "分专业绘制的学术服兔兔徽章", copy: "以不同专业的学术服与学科特征延展兔兔形象，把个性化收藏与校园记忆留在一组金属徽章中。"
      },
      "gift-stamp": {
        visual: "wish",
        eyebrow: "04 / CAMPUS CHECK-IN", heading: "毕业前一定要做的事", copy: "由打卡单引导学生走进校园文化场景；完成体验后盖下毕业印章，形成“打卡—体验—留念”的完整闭环。"
      }
    };

    const updateOverview = (panelId) => {
      const state = overviewStates[panelId] || overviewStates["gift-set"];
      if (!overview || !state) return;
      overview.classList.add("is-swapping");
      overview.classList.toggle("is-calendar", panelId === "gift-calendar");
      window.setTimeout(() => {
        overviewVisuals.forEach((visual) => {
          visual.classList.toggle("is-active", visual.dataset.overviewVisual === state.visual);
        });
        if (state.src && overviewButton && overviewImage) {
          overviewButton.dataset.full = state.src;
          overviewButton.dataset.title = state.title;
          applyPortfolioPreview(overviewImage, state.src, true);
          overviewImage.alt = state.alt;
        }
        overviewEyebrow.textContent = state.eyebrow;
        overviewTitle.textContent = state.heading;
        overviewCopy.textContent = state.copy;
        overview.classList.remove("is-swapping");
      }, 150);
    };

    const giftLayout = module.querySelector(".gift-kit-layout");
    const pageTurnButtons = [...module.querySelectorAll(".gift-page-turn")];
    let activeProductIndex = Math.max(0, controls.findIndex((control) => control.classList.contains("is-active")));

    const activateGiftProduct = (targetIndex, direction = 1) => {
      if (!controls.length) return;
      const normalizedIndex = (targetIndex + controls.length) % controls.length;
      const control = controls[normalizedIndex];
      const panelId = control.dataset.panel;
      if (normalizedIndex === activeProductIndex) return;

      activeProductIndex = normalizedIndex;
      controls.forEach((item, index) => {
        const active = index === normalizedIndex;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === panelId));
      updateOverview(panelId);

      if (giftLayout) {
        giftLayout.classList.remove("is-turning-forward", "is-turning-backward");
        void giftLayout.offsetWidth;
        giftLayout.classList.add(direction > 0 ? "is-turning-forward" : "is-turning-backward");
        window.setTimeout(() => giftLayout.classList.remove("is-turning-forward", "is-turning-backward"), 760);
      }
    };

    controls.forEach((control, index) => {
      control.addEventListener("click", () => {
        const direction = index >= activeProductIndex ? 1 : -1;
        activateGiftProduct(index, direction);
      });
    });

    pageTurnButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = Number(button.dataset.giftPage) || 1;
        activateGiftProduct(activeProductIndex + direction, direction);
      });
    });

    const giftSetSlides = [...module.querySelectorAll(".gift-set-slide")];
    const giftSetCarousel = module.querySelector(".gift-set-carousel");
    const giftSetPanel = module.querySelector("#gift-set");
    let giftSetIndex = 0;

    if (giftSetSlides.length > 1) {
      window.setInterval(() => {
        const isPaused = !giftSetPanel?.classList.contains("is-active")
          || document.hidden
          || giftSetCarousel?.matches(":hover")
          || giftSetCarousel?.contains(document.activeElement);
        if (isPaused) return;

        const currentSlide = giftSetSlides[giftSetIndex];
        giftSetIndex = (giftSetIndex + 1) % giftSetSlides.length;
        const nextSlide = giftSetSlides[giftSetIndex];
        currentSlide.classList.add("is-exiting");
        nextSlide.classList.add("is-active");
        window.setTimeout(() => currentSlide.classList.remove("is-active", "is-exiting"), 900);
      }, 1800);
    }

    const slides = [...module.querySelectorAll(".gift-calendar-slide")];
    const calendarCarousel = module.querySelector(".gift-calendar-carousel");
    const calendarPanel = module.querySelector("#gift-calendar");
    let calendarIndex = 0;

    const showCalendarSlide = (index) => {
      calendarIndex = index;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === calendarIndex;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
    };

    if (slides.length > 1) {
      const interval = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 4000 : 2000;
      window.setInterval(() => {
        const isPaused = !calendarPanel?.classList.contains("is-active")
          || document.hidden
          || calendarCarousel?.matches(":hover")
          || calendarCarousel?.contains(document.activeElement);
        if (!isPaused) showCalendarSlide((calendarIndex + 1) % slides.length);
      }, interval);
    }
    const toggle = module.querySelector(".gift-longform-toggle");
    const viewer = module.querySelector(".gift-longform-viewer");

    toggle?.addEventListener("click", () => {
      const expanded = viewer?.classList.toggle("is-expanded");
      toggle.setAttribute("aria-expanded", String(Boolean(expanded)));
      toggle.textContent = expanded ? "收起长图" : "展开查看完整长图";
    });
  });
}

function setupPeopleDailySeries() {
  document.querySelectorAll(".people-daily-series").forEach((series) => {
    const track = series.querySelector(".people-daily-series-track");
    const cards = [...series.querySelectorAll(".work-card")];
    const previousButton = series.querySelector(".people-daily-series-prev");
    const nextButton = series.querySelector(".people-daily-series-next");
    const counter = series.querySelector(".people-daily-series-count");
    if (!track || !cards.length || !counter) return;

    let activeIndex = 0;
    let scrollFrame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateControls = (index) => {
      activeIndex = Math.max(0, Math.min(index, cards.length - 1));
      counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
      previousButton.disabled = activeIndex === 0;
      nextButton.disabled = activeIndex === cards.length - 1;
    };

    const goTo = (index) => {
      const nextIndex = Math.max(0, Math.min(index, cards.length - 1));
      track.scrollTo({
        left: cards[nextIndex].offsetLeft - track.offsetLeft,
        behavior: reducedMotion ? "auto" : "smooth"
      });
      updateControls(nextIndex);
    };

    previousButton.addEventListener("click", () => goTo(activeIndex - 1));
    nextButton.addEventListener("click", () => goTo(activeIndex + 1));
    track.addEventListener("scroll", () => {
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const nearestIndex = cards.reduce((nearest, card, index) => {
          const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
          const nearestDistance = Math.abs(cards[nearest].offsetLeft - track.offsetLeft - track.scrollLeft);
          return distance < nearestDistance ? index : nearest;
        }, 0);
        updateControls(nearestIndex);
      });
    }, { passive: true });

    updateControls(0);
  });
}

function setupCampusMerchExperience() {
  document.querySelectorAll(".campus-merch-module").forEach((module) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    module.querySelectorAll("img").forEach((image) => {
      const markLoaded = () => image.classList.add("is-loaded");
      if (image.complete && image.naturalWidth) markLoaded();
      else image.addEventListener("load", markLoaded, { once: true });
    });

    const introVisual = module.querySelector(".campus-merch-intro-visual");
    if (introVisual && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
      let parallaxFrame = 0;
      introVisual.addEventListener("pointermove", (event) => {
        cancelAnimationFrame(parallaxFrame);
        parallaxFrame = requestAnimationFrame(() => {
          const bounds = introVisual.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
          const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
          introVisual.style.setProperty("--campus-shift-x", `${x.toFixed(3)}`);
          introVisual.style.setProperty("--campus-shift-y", `${y.toFixed(3)}`);
        });
      });
      introVisual.addEventListener("pointerleave", () => {
        introVisual.style.setProperty("--campus-shift-x", "0");
        introVisual.style.setProperty("--campus-shift-y", "0");
      });
    }

    const seriesTabs = [...module.querySelectorAll(".campus-series-tab")];
    const seriesDetails = [...module.querySelectorAll(".campus-series-detail")];
    const seriesPanels = [...module.querySelectorAll(".campus-series-panel")];
    const seriesStage = module.querySelector(".campus-series-stage");

    const activateSeries = (key) => {
      seriesTabs.forEach((tab) => {
        const active = tab.dataset.campusSeriesTab === key;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      seriesDetails.forEach((detail) => {
        const active = detail.dataset.campusSeriesDetail === key;
        detail.classList.toggle("is-active", active);
        detail.setAttribute("aria-hidden", String(!active));
      });
      seriesPanels.forEach((panel) => {
        const active = panel.dataset.campusSeriesPanel === key;
        panel.classList.toggle("is-active", active);
        panel.setAttribute("aria-hidden", String(!active));
      });
      if (!reducedMotion && seriesStage) {
        seriesStage.classList.remove("is-switching");
        void seriesStage.offsetWidth;
        seriesStage.classList.add("is-switching");
      }
    };

    seriesTabs.forEach((tab) => tab.addEventListener("click", () => activateSeries(tab.dataset.campusSeriesTab)));

    seriesPanels.forEach((panel) => {
      const deck = panel.querySelector(".campus-series-deck");
      const slides = [...panel.querySelectorAll(".campus-series-slide")];
      const thumbs = [...panel.querySelectorAll(".campus-series-thumb")];
      const previous = panel.querySelector(".campus-series-prev");
      const next = panel.querySelector(".campus-series-next");
      const isFold = panel.dataset.layout === "fold";
      if (!deck || !slides.length) return;

      let activeIndex = 0;
      const showSeriesSlide = (nextIndex) => {
        activeIndex = (nextIndex + slides.length) % slides.length;
        const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
        const nextVisibleIndex = (activeIndex + 1) % slides.length;
        slides.forEach((slide, slideIndex) => {
          const active = slideIndex === activeIndex;
          slide.classList.toggle("is-active", active);
          slide.classList.toggle("is-prev", !isFold && slideIndex === previousIndex);
          slide.classList.toggle("is-next", !isFold && slideIndex === nextVisibleIndex);
          slide.setAttribute("aria-hidden", String(isFold ? false : !active && slideIndex !== previousIndex && slideIndex !== nextVisibleIndex));
        });
        thumbs.forEach((thumb, thumbIndex) => {
          const active = thumbIndex === activeIndex;
          thumb.classList.toggle("is-active", active);
          thumb.setAttribute("aria-pressed", String(active));
        });
      };

      deck.addEventListener("click", (event) => {
        const arrow = event.target.closest(".campus-series-arrow");
        if (arrow) {
          event.preventDefault();
          event.stopPropagation();
          showSeriesSlide(activeIndex + (arrow.classList.contains("campus-series-next") ? 1 : -1));
          return;
        }
        const slide = event.target.closest(".campus-series-slide");
        if (!slide) return;
        const selectedIndex = Number(slide.dataset.index);
        if (selectedIndex === activeIndex) return;
        event.preventDefault();
        event.stopPropagation();
        showSeriesSlide(selectedIndex);
      });
      thumbs.forEach((thumb) => thumb.addEventListener("click", () => showSeriesSlide(Number(thumb.dataset.index))));
      deck.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        showSeriesSlide(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
      });
      let touchStartX = 0;
      deck.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0]?.clientX || 0;
      }, { passive: true });
      deck.addEventListener("touchend", (event) => {
        const touchEndX = event.changedTouches[0]?.clientX || touchStartX;
        const distance = touchEndX - touchStartX;
        if (Math.abs(distance) < 42) return;
        showSeriesSlide(activeIndex + (distance < 0 ? 1 : -1));
      }, { passive: true });
      showSeriesSlide(0);
    });

    if (seriesTabs.length) activateSeries(seriesTabs[0].dataset.campusSeriesTab);

    const adaptationTabs = [...module.querySelectorAll(".campus-adaptation-tab")];
    const adaptationPanels = [...module.querySelectorAll(".campus-adaptation-panel")];
    const adaptationSwitcher = module.querySelector(".campus-adaptation-switcher");
    const activateAdaptation = (key) => {
      adaptationTabs.forEach((tab) => {
        const active = tab.dataset.campusAdaptationTab === key;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      adaptationPanels.forEach((panel) => {
        const active = panel.dataset.campusAdaptationPanel === key;
        panel.classList.toggle("is-active", active);
        panel.setAttribute("aria-hidden", String(!active));
      });
      if (!reducedMotion && adaptationSwitcher) {
        adaptationSwitcher.classList.remove("is-switching");
        void adaptationSwitcher.offsetWidth;
        adaptationSwitcher.classList.add("is-switching");
      }
    };

    adaptationTabs.forEach((tab) => tab.addEventListener("click", () => activateAdaptation(tab.dataset.campusAdaptationTab)));
    adaptationPanels.forEach((panel) => {
      if (panel.dataset.layout !== "space") return;
      const stage = panel.querySelector(".campus-adaptation-stage");
      const media = [...panel.querySelectorAll(".campus-adaptation-media")];
      if (!stage || !media.length) return;

      const featureMedia = (index) => {
        const sideItems = media.filter((_, itemIndex) => itemIndex !== index);
        media.forEach((item, itemIndex) => {
          item.classList.toggle("is-featured", itemIndex === index);
          item.classList.toggle("is-side-first", sideItems[0] === item);
          item.classList.toggle("is-side-second", sideItems[1] === item);
        });
      };
      stage.addEventListener("mouseleave", () => featureMedia(0));
      stage.addEventListener("click", (event) => {
        if (window.matchMedia("(max-width: 760px)").matches) return;
        const selected = event.target.closest(".campus-adaptation-media");
        if (!selected || selected.classList.contains("is-featured")) return;
        event.preventDefault();
        event.stopPropagation();
        featureMedia(media.indexOf(selected));
      });
      stage.addEventListener("keydown", (event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        const currentIndex = Math.max(0, media.findIndex((item) => item.classList.contains("is-featured")));
        featureMedia((currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + media.length) % media.length);
      });
      featureMedia(0);
    });
    if (adaptationTabs.length) activateAdaptation(adaptationTabs[0].dataset.campusAdaptationTab);

  });
}

function setupHeroIntroSequence() {
  const hero = document.querySelector(".hero-intro-sequence");
  if (!hero) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startsBelowHero = window.location.hash && !["#top", "#profile"].includes(window.location.hash);

  if (reduceMotion || startsBelowHero) {
    hero.classList.add("is-profile");
    return;
  }

  hero.classList.add("is-sequencing");

  window.setTimeout(() => {
    hero.classList.add("is-transitioning");
  }, 2950);

  window.setTimeout(() => {
    hero.classList.remove("is-sequencing", "is-transitioning");
    hero.classList.add("is-profile");
  }, 3650);
}
setupHeroIntroSequence();
setProfile();
renderCases();
setupReveal();
setupImageFallback();
setupImageViewer();
setupHumanMuseumExperience();
setupPeopleDailySeries();
setupCampusMerchExperience();
setupEvidenceConnectors();
setupGraduationGiftExperience();
