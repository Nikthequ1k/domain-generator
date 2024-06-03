import "bootstrap";

import "./style.css";

function generateDomainName() {
  let firstPart = [
    "tech",
    "web",
    "data",
    "cloud",
    "code",
    "byte",
    "pixel",
    "net",
    "app",
    "online"
  ];
  let secondPart = [
    "hub",
    "genius",
    "world",
    "zone",
    "guru",
    "planet",
    "ninja",
    "buzz",
    "hive",
    "link"
  ];
  let extensions = [".com", ".net", ".org", ".io", ".co"];

  let firstIndex = Math.floor(Math.random() * firstPart.length);
  let secondIndex = Math.floor(Math.random() * secondPart.length);
  let extensionIndex = Math.floor(Math.random() * extensions.length);

  let domainName =
    firstPart[firstIndex] +
    secondPart[secondIndex] +
    extensions[extensionIndex];

  return domainName;
}

function displayDomainName() {
  let domainName = generateDomainName();
  document.getElementById("domain").innerText = domainName;
}
