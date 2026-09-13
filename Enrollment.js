
"use strict"

const $ = (x) => document.querySelector(x);


const today = new Date();
const persianDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
}).format(today);

$('.today').value = persianDate;

document.querySelectorAll(".persian").forEach(
    function (el) {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/[0-9]/g, d => "۰۱۲۳۴۵۶۷۸۹"[d])
        });
    });

document.querySelectorAll(".persian").forEach(function (el) {
    el.value = el.value.replace(
        /[0-9]/g,
        d => "۰۱۲۳۴۵۶۷۸۹"[d]
    );
});

const imageUpload = document.getElementById('imageUpload');
const uploadBut = document.getElementById('uploadBut');

uploadBut.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
        return;
    }

    const imageURL = URL.createObjectURL(file);

    imageUpload.src = imageURL;
});



$('.melli').addEventListener('input', () => {
    $('.shenas').value = $('.melli').value;
});



let QrcContain = $('.imgContain');

const makeQrc = () => {

    QrcContain.innerHTML = "";

    const theText = {
        name: $('.fullName').value.trim(),
        id: $('.melli').value.trim(),
        bDate: document.getElementById('birthDay').value.trim(),
        school: $('.school').value,
        grade: $('.grade').value,
        year: $('.year').value,
        last: "دوره ابتدایی 6 ساله توصیفی"
    };

    let result = theText.name + theText.id + theText.bDate + theText.school;

    new QRCode(QrcContain, {
        text: result,
        width: 100,
        height: 100
    });
};

$('.print').addEventListener('click', () => {
    makeQrc();
    window.print()
});