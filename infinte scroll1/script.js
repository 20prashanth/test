/* ===============================================================================
// Setup with list.js
// =============================================================================*/
let itemList;               // Set when the page is loaded.
const itemsPerPage = 5;     // Total number of items you want to render on each page

window.addEventListener("load", () => {
  itemList = new List("items-container", {
    pagination: true,       // Required for pagination to work
    page: itemsPerPage,     // Items per page
    valueNames: [           // Properties to extract from JSON object and be inserted into our item template below
      "name",
      "category",
      "subcategory",
      { name: "thumbnail", attr: "src" },
      { name: "link", attr: "href" },
    ],
    item: `<li>
        <img class="mr-3 img-thumbnail thumbnail" src="" width="125px" height="125px" />
          <div class="media-body">
            <div class="name display-6 mt-2 mb-1"></div>
            <div class="mt-auto">
              <div class="category badge badge-primary"></div> &gt; 
              <div class="subcategory badge badge-secondary"></div>
            </div>
            <a class="link" href="" target="_blank">View Info</a>
        </div>
      </li>`,
  });

  // Load items (see bottom of page to view the items)
  itemList.add(items, () => {
    $("#info").text(`Total Items: ${itemList.items.length}`);
  });
});


/* ===============================================================================
// Infinite Pagination ｖ(⌒ｏ⌒)ｖ
// =============================================================================*/
let scrolling = false;      // Current state (are we currently scrolling or not?)
let page = 1;               // Starting page
const scrollThrottle = 250; // Interval between scroll checks.

// Event which is binded to the unordered list element's onscroll event.
// Simply updates the current state.
function scrollHandler() {
  scrolling = true;
}

// Infinite Scroll with Pagination
setInterval(() => {
  // Only bother checking if we can load next page items if the user is currently scrolling
  if (scrolling) {
    const container = $("#items-container");
    const containerPosY = container.height(); // Y position of the container top
    const scrollPosY = container.scrollTop(); // Scroll position Y

    const containerList = $("#items-container > .list");    // The actual list containing the items
    const containerListY = containerList.height();          // Container list height size

    const offsetY = 15;                                     // Distance from bottom or top that is considered within range to
                                                            // items on the next page

    // Can paginate, near the bottom of the list of items
    if (scrollPosY + containerPosY > containerListY - offsetY) {
      console.log("REACHED BOTTOM! Loading More Items!");
      page++;
      itemList.show(0, page * itemsPerPage);
    }
    // Near the top of the list (not used for infinite scroll, but
    // if you need to do something here, feel free to...)
    else if (scrollPosY + containerPosY < containerPosY + offsetY) {
      console.log("REACHED TOP!");
      // Do stuff
    }

    scrolling = false;
  }
}, scrollThrottle);


/* ===============================================================================
// Random Data
// =============================================================================*/
const items = [
  {
    name: "Iroha Isshiki",
    category: "Anime",
    subcategory: "Character",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Elden Ring",
    category: "Video Games",
    subcategory: "Miyazaki Plz",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Dark Souls",
    category: "Video Games",
    subcategory: "JRPG",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Bioshock",
    category: "Video Games",
    subcategory: "Shooter",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Kirby",
    category: "Video Games",
    subcategory: "Character",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "ICE +Caffeine",
    category: "Drink",
    subcategory: "Energy Drinks",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Demon Slayer",
    category: "TV",
    subcategory: "Anime",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Deadmau5",
    category: "Music",
    subcategory: "Music Artist",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Daft Punk",
    category: "Music",
    subcategory: "Music Artist",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "League of Legends",
    category: "Games",
    subcategory: "Cancer",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Mark Zuckerberg",
    category: "Robots",
    subcategory: "Evil",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Nhato",
    category: "Music Artist",
    subcategory: "EDM",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Python",
    category: "Tech",
    subcategory: "Programming Language",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Tik Tok",
    category: "Spyware",
    subcategory: "Cancer",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Portal 2",
    category: "Video Games",
    subcategory: "Puzzler",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Lack of a Better Name",
    category: "Music",
    subcategory: "Song",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    name: "Lucid Dream",
    category: "Music",
    subcategory: "Song",
    thumbnail: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
];