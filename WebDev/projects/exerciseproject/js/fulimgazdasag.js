const fuliumgazdasag = {
  min: 1,
  max: 10000,
  length: 20,

  create() {
    return this;
  },
  createArray() {
    const array = [];
    for (let _ = 0; _ <= this.length; _++) {
      array.push(getRandomNum(this.min, this.max));
    }
    this["array"] = array;
  },
  sumArray() {
    let sum;
    for (const i in this.array) {
      sum += i;
    }
    return sum;
  },
  hasEven() {
    let i = 0;
    while (i < this.length) {
      if (isEven(this.array[i])) {
        return true;
      }
      i++;
    }
    return false;
  },
  evenNumbersSum() {
    if (this.hasEven() === false) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      if (isEven(this.array[i])) {
        sum += this.array[i];
      }
    }
    return sum;
  },
  minIndex() {
    let min = 0;
    for (let i = 1; i < this.length; i++) {
      if (this.array[min] > this.array[i]) {
        min = i;
      }
    }
    return min;
  },
  maxIndex() {
    let max = 0;
    for (let i = 1; i < this.length; i++) {
      if (this.array[max] < this.array[i]) {
        max = i;
      }
    }
    return max;
  },
  swapMinMaxvalues() {
    let min = this.minIndex();
    let max = this.maxIndex();

    let temp = this.array[min];
    this.array[min] = this.array[max];
    this.array[max] = temp;
  },
  render() {},
};

function isEven(num) {
  return num % 2 === 0;
}
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function renderList(data, container) {
  let section = document.querySelector(".list");

  if (section !== null) {
    if (section.firstChild) {
      section.firstChild.remove();
    }
  } else {
    section = document.createElement("section");
    section.setAttribute("class", "list");
  }

  const ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    let element = createChildElement(data[i]);
    // indexed
    element.classList.add("indexed", "order-" + i);
    ul.appendChild(element);
  }

  section.appendChild(ul);
  container.appendChild(section);
}

function renderData(str, data, container, selector = undefined) {
  // Has any section called data
  // If not, create it.
  ensureDataSection(container);
  let section = document.querySelector(".data");
  // Has init any articles, if not create it.
  // This article will be deleted if a new DataSet has been made.
  if (!section.hasChildNodes()) {
    const h2 = document.createElement("h2");
    h2.textContent = "Data";
    section.appendChild(h2);
  }

  // The header of the article
  const h1 = document.createElement("h1");
  h1.textContent = str;
  const article = document.createElement("article");
  if (selector !== undefined && typeof selector === "string") {
    article.classList.add(selector);
  }
  // Defining an order
  article.appendChild(h1);
  const p = document.createElement("p");
  p.textContent = data;
  article.appendChild(p);
  section.appendChild(article);
}

function createChildElement(data) {
  let element = document.createElement("li");
  element.textContent = data;
  return element;
}

function ensureDataSection(container) {
  let section = document.querySelector(".data");
  if (section === null) {
    section = document.createElement("section");
    section.classList.add("data");
    container.appendChild(section);
  }
}

// highlights
const highlightMaxValue = () => {
  const indexes = [fuliumgazd.maxIndex()];
  highlightValues(indexes);
};
const highlightMinMaxValues = () => {
  const indexes = [fuliumgazd.minIndex(), fuliumgazd.maxIndex()];
  highlightValues(indexes);
};
function highlightValues(indexes) {
  const section = document.querySelector(".list");

  for (const i of indexes) {
    const value = document.querySelector(".order-" + i);
    if (value !== null) {
      value.classList.add("highlight");
    }
  }
}
function removeHighlights() {
  const section = document.querySelector(".list");
  const highlights = section.querySelectorAll(".highlight");
  for (let i = 0; i < highlights.length; i++) {
    highlights[i].classList.remove("highlight");
  }
}
const hightlightEvenValues = () => {
  const indexes = [];
  for (let i = 0; i < fuliumgazd.array.length; i++) {
    if (isEven(fuliumgazd.array[i])) {
      indexes.push(i);
    }
  }
  highlightValues(indexes);
};

// main
const container = document.getElementById("container");

const fuliumgazd = fuliumgazdasag.create();

const newArray = () => {
  fuliumgazd.createArray();
  renderList(fuliumgazd.array, container);
  let section = document.querySelector(".data");
  if (section !== null) {
    section.remove();
  }

  maxValue();
  hasEvenValue();
  evenNumsSum();

  const swap_button = document.querySelector(".swap");
  swap_button.addEventListener("mouseenter", () => {
    console.log("Hover");
    highlightMinMaxValues();
  });

  const articles = document.querySelectorAll("article");

  for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("mouseleave", () => {
      removeHighlights();
    });
  }
};

const maxValue = () => {
  let max = fuliumgazd.array[fuliumgazd.maxIndex()];
  let str = "A legnagyobb fülium érték: " + max;
  renderData("Maximum érték", str, container, "maxValue");

  const max_val = document.querySelector(".maxValue");
  max_val.addEventListener("mouseenter", () => {
    console.log("Hover");
    highlightMaxValue();
  });
};
const hasEvenValue = () => {
  let bool = fuliumgazd.hasEven();
  let str;
  if (bool) {
    str = "Van páros értékű fülium a gazdaságban.";
  } else {
    str = "Nem létezik páros értékű fülium a gazdaságban.";
  }
  renderData("Van-e páros érték", str, container, "hasEvenValue");

  const evenValues = document.querySelector(".hasEvenValue");
  evenValues.addEventListener("mouseenter", () => {
    console.log("Hover");
    hightlightEvenValues();
  });
};
const evenNumsSum = () => {
  let sum = fuliumgazd.evenNumbersSum();
  let str = "A fülium gazdaságban lévő páros értékek összege: " + sum;
  renderData("Páros értékek összege", str, container, "evenNumsSum");

  const evenValues = document.querySelector(".evenNumsSum");
  evenValues.addEventListener("mouseenter", () => {
    console.log("Hover");
    hightlightEvenValues();
  });
};
const dataSwap = () => {
  fuliumgazd.swapMinMaxvalues();
  renderList(fuliumgazd.array, container);
};
