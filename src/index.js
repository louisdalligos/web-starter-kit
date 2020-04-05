import { Header } from "@/app/header";
import { Footer } from "@/app/footer";

import "@scss/main.scss";
import webpackLogo from "@img/webpack-logo.png";

let header = new Header();
let footer = new Footer();
let firstHeading = header.getFirstHeading();
let footerText = footer.getFooterText();

console.log(firstHeading);
console.log(footerText);

document.getElementById("webpack-logo").setAttribute("src", webpackLogo);
