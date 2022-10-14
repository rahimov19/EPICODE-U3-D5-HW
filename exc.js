let x = "John";
let y = "Doe";
console.log(x, " <> ", y);
let objj = { name: "Aaa", surname: "Bbb", email: "aaa@bbb.de" };
delete objj.email;
let arrStr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(arrStr);
let arrRand = [];
for (i = 0; i < 100; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  arrRand.push(randomNumber);
  console.log(arrRand);
}
let minMax = function () {
  console.log(Math.min(...arrRand), Math.max(...arrRand));
};
console.log(minMax);

let arrArr = [];
let arrr = [];
for (i = 0; i < 10; i++) {
  let randomNumbers = Math.floor(Math.random() * 100);
  arrr.push(randomNumbers);

  arrArr.push(arrr);
  console.log(arrArr);
}
let arr1 = [1, 2, 3, 4];
let arr2 = [11, 22, 333, 4, 44, 66];
let longestArr = function () {
  if (arr1.length < arr2.length) {
    return arr2;
  } else {
    return arr1;
  }
};
let sum1 = 0;
let sum2 = 0;
let sumOfArr = function () {
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    sum2 += arr2[j];
  }

  if (sum1 < sum2) {
    return sum2;
  } else {
    return sum1;
  }
};

let elemId = document.getElementById("container");
let tds = document.getElementsByTagName("td");
let changeTd = function () {
  for (i = 0; i < tds.length; i++) {
    tds[i].innerText = "Text";
  }
};
console.log(tds);

let changeH1 = function () {
  let h1 = document.getElementsByTagName("h1");
  h1[0].innerText = "Another Text";
};

let addRow = function () {
  let table = document.querySelector("table");
  let row = document.createElement("tr");
  table.appendChild(row);
};

let addClass = function () {
  let row = document.querySelectorAll("tr");
  for (i = 0; i < row.length; i++) {
    row[i].classList.add("test");
  }
};
let addBackground = function () {
  let link = document.querySelectorAll("a");
  for (i = 0; i < link.length; i++) {
    link[i].style.backgroundColor("red");
  }
};

let addItem = function () {
  let list = document.querySelector("ul");
  let item = document.createElement("li");
  list.appendChild(item);
};

const emptyList = function () {
  const ol = document.getElementById("ol");
  ol.innerHTML = "";
};

const links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", () => {
    alert(links[i].href);
  });
}

let hideImg = function () {
  let imgs = document.querySelectorAll("img");
  for (i = 0; i < imgs.length; i++) {
    imgs[i].classList.add("visibility");
  }
};

function showOrHideTable() {
  let tableNode = document.getElementById("tableId");
  tableNode.classList.toggle("visibility");
}

window.onload(console.log("Page Loaded"));
