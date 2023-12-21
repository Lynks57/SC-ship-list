// the list
const list = [
  {
    id: 1,
    title: "aegis vanguard warden",
    category: "heavy-fighter",
    price: 260,
    img: "https://media.starcitizen.tools/thumb/webp/4/41/Warden_-_3.6.0_-_Landed_in_hangar_-_Front_Port.jpg/800px-Warden_-_3.6.0_-_Landed_in_hangar_-_Front_Port.webp",
    desc: `2-seater heavy fighter with interior, long range fighting capability and extensive pilot controlled weapons.`,
    wiki: `https://starcitizen.tools/Vanguard_Warden`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=aegs_vanguard`,
    store: `https://robertsspaceindustries.com/pledge/ships/vanguard/vanguard-warden`,
    rating: 8,
    pro: "Very sturdy hull, can take a beating.<br>Single S5 pilot weapon for larger targets.",
    con: "4 bespoke S2 are fixed only.<br>Huge top-down cross-section.",
  },
  {
    id: 2,
    title: "anvil arrow",
    category: "light-fighter",
    price: 75,
    img: "https://media.starcitizen.tools/thumb/webp/4/47/Arrow_over_Celiin_3.9.1.png/800px-Arrow_over_Celiin_3.9.1.webp",
    desc: `Agile light fighter with decent weaponry, extremely maneuverable.`,
    wiki: `https://starcitizen.tools/Arrow`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=anvl_arrow`,
    store: `https://robertsspaceindustries.com/pledge/ships/anvil-arrow/Arrow`,
    rating: 9.5,
    pro: "Small front-rear cross-section with high maneuverability, can easily dodge bullets in duels.",
    con: "Single S1 shield means least shield in light fighter class.<br>Weak hull, little room for mistakes.",
  },
  {
    id: 3,
    title: "aegis gladius",
    category: "light-fighter",
    price: 90,
    img: "https://media.starcitizen.tools/thumb/webp/2/23/Gladius_Hangar_3.1.png/574px-Gladius_Hangar_3.1.webp",
    desc: `Balanced hull, shield and weapon, good all-rounder.`,
    wiki: `https://starcitizen.tools/Gladius`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=aegs_gladius`,
    store: `https://robertsspaceindustries.com/pledge/ships/gladius/gladius`,
    rating: 9,
    pro: "Decent stats in every aspect while in space.",
    con: "Poor atmospheric flight profile.",
  },
  {
    id: 4,
    title: "Anvil F7C Hornet",
    category: "medium-fighter",
    price: 110,
    img: "https://media.starcitizen.tools/thumb/webp/b/b6/F7C_-_Landed_in_Area18_hangar_-_Front_Port.jpg/800px-F7C_-_Landed_in_Area18_hangar_-_Front_Port.webp",
    desc: `Good firepower with strong forward acceleration.`,
    wiki: `https://starcitizen.tools/F7C_Hornet`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=anvl_hornet_f7c`,
    store: `https://robertsspaceindustries.com/pledge/ships/anvil-hornet/f7c-hornet`,
    rating: 10,
    pro: "High Gs make both team fights and duels very easy.",
    con: "Bugged acceleration stats.",
  },
  {
    id: 5,
    title: "anvil F8C lightning",
    category: "heavy-fighter",
    price: 300,
    img: "https://media.starcitizen.tools/thumb/webp/e/e3/F8C_in_hangar_above_world_with_pilot_walking_towards_it.jpg/560px-F8C_in_hangar_above_world_with_pilot_walking_towards_it.webp",
    desc: `Highest firepower in single-seaters, with decent maneuverability.`,
    wiki: `https://starcitizen.tools/F8C_Lightning`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=anvl_lightning_f8c`,
    store: `https://robertsspaceindustries.com/pledge/ships/lightning/F8C-Lightning`,
    rating: 8.5,
    pro: "Extremely high brust DPS in a relatively small package.",
    con: "No turret to cover blind spot, hard countered by light fighters if can't land shots.",
  },
  {
    id: 6,
    title: "Drake Corsair",
    category: "Gunship",
    price: 250,
    img: "https://media.starcitizen.tools/thumb/webp/9/90/Corsair_flying_above_clouds.png/800px-Corsair_flying_above_clouds.webp",
    desc: `With 4 S5 and 2 S4 all controlled by pilot, it shreds any target in seconds.`,
    wiki: `https://starcitizen.tools/Corsair`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=drak_corsair`,
    store: `https://robertsspaceindustries.com/pledge/ships/drake-corsair/Corsair`,
    rating: 5,
    pro: "Has more firepower than you need.",
    con: "Engines can be easily blow off.<br>Poor atmospheric flight profile.<br>Bad turrets coverage.",
  },
  {
    id: 7,
    title: "RSI Constellation Andromeda",
    category: "Gunship",
    price: 249,
    img: "https://media.starcitizen.tools/thumb/webp/d/d7/Andromeda_flying_from_Station_-_Front_Starboard.jpg/800px-Andromeda_flying_from_Station_-_Front_Starboard.webp",
    desc: `Missile boat with good turrets placement and a ship-launched fighter.`,
    wiki: `https://starcitizen.tools/Constellation_Andromeda`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=rsi_constellation_andromeda`,
    store: `https://robertsspaceindustries.com/pledge/ships/rsi-constellation/constellation-andromeda`,
    rating: 6.5,
    pro: "Good weapons with missile spamming capability.",
    con: "Ship-launched fighter usualy bugged.",
  },
  {
    id: 8,
    title: "aegis sabre",
    category: "medium-fighter",
    price: 170,
    img: "https://media.starcitizen.tools/thumb/webp/c/c7/Sabre_-_Flying_with_all_guns_firing.jpg/800px-Sabre_-_Flying_with_all_guns_firing.webp",
    desc: `Stealth space superiority fighter, with very low emisions.`,
    wiki: `https://starcitizen.tools/Sabre`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=aegs_sabre`,
    store: `https://robertsspaceindustries.com/pledge/ships/sabre/sabre`,
    rating: 1,
    pro: "Pancake.",
    con: "Pancake.<br>Stealth is not implemented yet.",
  },
  {
    id: 9,
    title: "aopoa San'tok.yāi",
    category: "medium-fighter",
    price: 240,
    img: "https://media.starcitizen.tools/thumb/webp/c/cb/San%27Tok.Yai_in_battle_over_world_firing_weapons_-_Cut.jpg/800px-San%27Tok.Yai_in_battle_over_world_firing_weapons_-_Cut.webp",
    desc: `Alien medium fighter with very high SCM speed. Engine pods will not be easily shot off despite the look.`,
    wiki: `https://starcitizen.tools/San%27tok.y%C4%81i`,
    loadout: `https://www.spviewer.eu/pages/ship-performances.html?ship=xnaa_santokyai`,
    store: `https://robertsspaceindustries.com/pledge/ships/aopoa-santokyai/Santoky-i`,
    rating: 2.5,
    pro: "Fighter with alien aesthetic.",
    con: "Due to the 'rule of cool' design, it has abysmal cross-section without shield or hull to compensate.",
  },
];
// DOM elements
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// load items
window.addEventListener("DOMContentLoaded", () => {
  displayListItems(list);
  displayFilterBtns();
});
// ListItemsFunction
function displayListItems(listItems) {
  const displayList = listItems.sort((a, b) => {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    }
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    }
    return 0;
  }).map((item) => (
    `<article class="list-item">
    <img src=${item.img} class="photo" alt=${item.title} data-wiki=${item.wiki}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price" data-store=${item.store}>${item.price}$</h4>
      </header>
      <p class="item-text">${item.desc}</p>
      <h4 class="loadout" data-loadout=${item.loadout}>loadout</h4>
      <span class="pro">Pros:</span><p class="item-pro">${item.pro}</p>
      <span class="con">Cons:</span><p class="item-con">${item.con}</p>
      <span>Combat rating: </span><span class="rating">${item.rating}</span>
    </div>
  </article>`
  )).join("");
  sectionCenter.innerHTML = displayList;
  // pictureBtns
  const pictureBtns = document.querySelectorAll(".photo");
  pictureBtns.forEach((picture) => {
    picture.addEventListener("click", (e) => {
      const wikiURL = e.currentTarget.dataset.wiki;
      if (wikiURL) {
        window.location.href = wikiURL;
      }
    }
    );
  });
  // LoadoutBtns
  const loadoutBtns = document.querySelectorAll(".loadout")
  loadoutBtns.forEach((loadout) => {
    loadout.addEventListener("click", (e) => {
      const loadoutURL = e.currentTarget.dataset.loadout;
      if (loadoutURL) {
        window.location.href = loadoutURL;
      }
    })
  })
  // PriceBtns
  const storeBtns = document.querySelectorAll(".price")
  storeBtns.forEach((store) => {
    store.addEventListener("click", (e) => {
      const storeURL = e.currentTarget.dataset.store;
      if (storeURL) {
        window.location.href = storeURL;
      }
    })
  })
  // Rating Color
  const ratings = document.querySelectorAll(".rating")
  ratings.forEach((rating) => {
    if (rating.textContent >= 8) {
      rating.style.color = "green"
    } else if (rating.textContent >= 5) {
      rating.style.color = "yellow"
    } else if (rating.textContent >= 1) {
      rating.style.color = "red"
    }
  })
}


// FilterBtns Function
function displayFilterBtns() {
  // auto filter creation
  const filterCategory = list.sort((a, b) => {
    if (a.category.toUpperCase() < b.category.toUpperCase()) {
      return -1;
    }
    if (a.category.toUpperCase() > b.category.toUpperCase()) {
      return 1;
    }
    return 0;
  }).reduce((value, item) => {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  }, ["all"]);
  // auto filter-btns creation
  const filterBtnHTML = filterCategory.map((category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  btnContainer.innerHTML = filterBtnHTML;
  // filterBtns DOM elements
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const listFiltered = list.filter((listItem) => {
        if (listItem.category === category) {
          return listItem;
        }
      })
      if (category === "all") {
        displayListItems(list);
      } else {
        displayListItems(listFiltered);
      }
    })
  })
}