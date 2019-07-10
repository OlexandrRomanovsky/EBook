/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
"use strict";
class Book {
  constructor(txt, name, price) {
    txt.includes("http")
      ? this.fetchTxt(txt)
      : (this.pages = this.getPages(txt));
    this.curentPage = 0;
    this.authorName = name;
    this.digitPrice = price;
  }

  async fetchTxt(url) {
    try {
      let response = await fetch(url);
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      let user = await response.text();
      this.pages = await this.getPages(user);
    } catch (err) {
      alert(err);
    }
  }

  getPages(txt) {
    const charsPerPage = 20;
    const pages = [];
    const pagesAmount = txt.length / charsPerPage;
    let pagesFirstChar = 0;

    for (let i = 0; i < pagesAmount; i++) {
      const part = txt.substr(pagesFirstChar, charsPerPage);
      pages.push(part);
      pagesFirstChar += charsPerPage;
    }
    return pages;
  }

  startReading() {
    this.curentPage = 0;
    return this.pages[0];
  }

  jumpTo(pageNumber) {
    let toPageArr = --pageNumber;
    this.curentPage = toPageArr;
    return this.pages[toPageArr];
  }

  nextPage() {
    ++this.curentPage;
    return this.pages[this.curentPage];
  }

  prevPage() {
    --this.curentPage;
    return this.pages[this.curentPage];
  }

  find(searchTxt) {
    let pagesInclude = [];
    this.pages.forEach(function(text, page) {
      page++;
      text.includes(searchTxt) && pagesInclude.push({ page, text });
    });
    return pagesInclude;
  }

  continue() {
    return this.pages[this.curentPage];
  }

  author() {
    return this.authorName;
  }

  get digitPrice() {
    return this._priсe;
  }

  set digitPrice(price) {
    if (isNaN(price)) {
      alert("Fill the numbers");
    } else this._priсe = price;
  }

  price() {
    return this._priсe;
  }
}

let jungle = new Book(
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam sequi, libero iste recusandae autem vero sed. Fugiat dolorem nulla ex vero, cumque reprehenderit temporibus voluptatibus, quaerat non pariatur minima.",
  "Taras Shevchenko",
  123
);
console.log(jungle.pages);
console.log(jungle.pages.length);
console.log(jungle.pages[0]);
console.log(jungle.jumpTo(1));
console.log(jungle.curentPage);
console.log(jungle.nextPage());
console.log(jungle.nextPage());
console.log(jungle.nextPage());
console.log(jungle.curentPage);
console.log(jungle.prevPage());
console.log(jungle.prevPage());
console.log(jungle.prevPage());
console.log(jungle.find("h"));
console.log(jungle.continue());
console.log(jungle.jumpTo(3));
console.log(jungle.continue());
console.log(jungle.startReading());
console.log(jungle.jumpTo(4));
console.log(jungle.continue());
console.log(jungle.curentPage);
console.log(jungle.jumpTo(1));
console.log(jungle.author());
console.log(jungle.price());
