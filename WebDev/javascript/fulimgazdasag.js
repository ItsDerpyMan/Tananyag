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
  ul.setAttribute("class", "list");

  for (let i = 0; i < data.length; i++) {
    ul.appendChild(createChildElement(data[i]));
  }

  section.appendChild(ul);
  container.appendChild(section);
}

function renderData(str, data, container, order, selector = undefined) {
  let section = document.querySelector(".data");
  if (section === null) {
    section = document.createElement("section");
    section.setAttribute("class", "data");
    container.appendChild(section);
  }
  if (!section.hasChildNodes()) {
    const h1 = document.createElement("h1");
    h1.textContent = "Data";
    const headarticle = document.createElement("article");
    headarticle.appendChild(h1);

    section.appendChild(headarticle);
  }
  const h2 = document.createElement("h2");
  h2.textContent = str;
  const article = document.createElement("article");
  if (selector !== undefined && typeof selector === "String") {
    article.setAttribute("class", selector);
  }
  article.setAttribute("class", order);
  article.appendChild(h2);
  const p = document.createElement("p");
  p.textContent = data;
  article.appendChild(p);
  let headarticle = section.firstChild;
  headarticle.appendChild(article);
}
function createChildElement(data) {
  let element = document.createElement("li");
  element.textContent = data;
  return element;
}

// main
const container = document.getElementById("container");

const fuliumgazd = fuliumgazdasag.create();

const newArray = () => {
  fuliumgazd.createArray();
  renderList(fuliumgazd.array, container);
  let section = document.querySelector(".data");
  section.remove();
};

const maxValue = () => {
  let max = fuliumgazd.array[fuliumgazd.maxIndex()];
  renderData("Maximum érték", max, container, 1);
};
const hasEvenValue = () => {
  let bool = fuliumgazd.hasEven();
  renderData("Van-e páros érték", bool, container, 2);
};
const evenNumsSum = () => {
  let sum = fuliumgazd.evenNumbersSum();
  renderData("Páros értékek összege", sum, container, 3);
};
const dataSwap = () => {
  fuliumgazd.swapMinMaxvalues();
  renderList(fuliumgazd.array, container);
};
