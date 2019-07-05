firebase.initializeApp({
    apiKey: "AIzaSyALU0JnKwTG1dw-RJQcKG7CZnQKixk9xwc",
    authDomain: "mymovies-sandbox.firebaseapp.com",
    databaseURL: "https://mymovies-sandbox.firebaseio.com",
    projectId: "mymovies-sandbox",
    storageBucket: "mymovies-sandbox.appspot.com",
    messagingSenderId: "60099081581",
    appId: "1:60099081581:web:1f8c90c1c14c3d75"
});


var db = firebase.firestore();
var count = 0;

function refresh() {
    db.collection("movies").doc("PNuceg1D6jp0N50q79bM").get().then(doc => {
        count = doc.data().count;
        $(".value").html(count);
    });
}

function add(val) {
    if (typeof val == "number") {
        count += val;
        $(".value").html(count);
        db.collection("movies").doc("PNuceg1D6jp0N50q79bM").update({
            count
        });
        $('html, body').animate({
            scrollTop: ($($('.value')[0]).offset().top - 100)
        }, 500);
    }
}

$(document).ready(refresh);