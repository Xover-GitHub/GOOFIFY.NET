"use strict";

const video = document.getElementById('BGvideo');
const textArea = document.getElementById("typed-text");
const result = document.getElementById("GFied-text");
const button = document.getElementById("GFy-submit");
let statusOfBG = true;

button.addEventListener("click", e => {
    e.preventDefault();
    let text = textArea.value;
    let c_text = text.replace(/r/g, 'w');
    c_text = c_text.replace(/R/g, 'W');
    c_text = c_text.replace(/р/g, 'в');
    c_text = c_text.replace(/Р/g, 'В');

    result.textContent = c_text + " :3";
});

result.addEventListener("click", () => {
    const textToCopy = result.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log("Text copied to clipboard successfully!");
        })
        .catch((error) => {
            console.error("Failed to copy: ", error);
        });
});

document.getElementById("reducelag").addEventListener("click", () => {
    video.classList.toggle("hidden");
    document.getElementById("reducelag").textContent = statusOfBG ? "Disabled!" : "Click to disable";
    statusOfBG = !statusOfBG;
});

textArea.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        e.preventDefault();
        button.click();
    }
});
