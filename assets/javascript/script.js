(function () {
  setTimeout(() => {
    document.getElementById("show-slide-1").classList.add("selected");
  }, 1000);
})();


// $("input[name='demo3']").TouchSpin();
// if (typeof revslider_showDoubleJqueryError === "undefined") {
//   function revslider_showDoubleJqueryError(sliderID) {
//     console.log(
//       "You have some jquery.js library include that comes after the Slider Revolution files js inclusion."
//     );
//     console.log("To fix this, you can:");
//     console.log(
//       "1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
//     );
//     console.log("2. Find the double jQuery.js inclusion and remove it");
//     return "Double Included jQuery Library";
//   }
// }

var mejsL10n = {
  language: "en",
  strings: {
    "mejs.download-file": "Download File",
    "mejs.install-flash":
      "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
    "mejs.fullscreen": "Fullscreen",
    "mejs.play": "Play",
    "mejs.pause": "Pause",
    "mejs.time-slider": "Time Slider",
    "mejs.time-help-text":
      "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
    "mejs.live-broadcast": "Live Broadcast",
    "mejs.volume-help-text":
      "Use Up/Down Arrow keys to increase or decrease volume.",
    "mejs.unmute": "Unmute",
    "mejs.mute": "Mute",
    "mejs.volume-slider": "Volume Slider",
    "mejs.video-player": "Video Player",
    "mejs.audio-player": "Audio Player",
    "mejs.captions-subtitles": "Captions/Subtitles",
    "mejs.captions-chapters": "Chapters",
    "mejs.none": "None",
    "mejs.afrikaans": "Afrikaans",
    "mejs.albanian": "Albanian",
    "mejs.arabic": "Arabic",
    "mejs.belarusian": "Belarusian",
    "mejs.bulgarian": "Bulgarian",
    "mejs.catalan": "Catalan",
    "mejs.chinese": "Chinese",
    "mejs.chinese-simplified": "Chinese (Simplified)",
    "mejs.chinese-traditional": "Chinese (Traditional)",
    "mejs.croatian": "Croatian",
    "mejs.czech": "Czech",
    "mejs.danish": "Danish",
    "mejs.dutch": "Dutch",
    "mejs.english": "English",
    "mejs.estonian": "Estonian",
    "mejs.filipino": "Filipino",
    "mejs.finnish": "Finnish",
    "mejs.french": "French",
    "mejs.galician": "Galician",
    "mejs.german": "German",
    "mejs.greek": "Greek",
    "mejs.haitian-creole": "Haitian Creole",
    "mejs.hebrew": "Hebrew",
    "mejs.hindi": "Hindi",
    "mejs.hungarian": "Hungarian",
    "mejs.icelandic": "Icelandic",
    "mejs.indonesian": "Indonesian",
    "mejs.irish": "Irish",
    "mejs.italian": "Italian",
    "mejs.japanese": "Japanese",
    "mejs.korean": "Korean",
    "mejs.latvian": "Latvian",
    "mejs.lithuanian": "Lithuanian",
    "mejs.macedonian": "Macedonian",
    "mejs.malay": "Malay",
    "mejs.maltese": "Maltese",
    "mejs.norwegian": "Norwegian",
    "mejs.persian": "Persian",
    "mejs.polish": "Polish",
    "mejs.portuguese": "Portuguese",
    "mejs.romanian": "Romanian",
    "mejs.russian": "Russian",
    "mejs.serbian": "Serbian",
    "mejs.slovak": "Slovak",
    "mejs.slovenian": "Slovenian",
    "mejs.spanish": "Spanish",
    "mejs.swahili": "Swahili",
    "mejs.swedish": "Swedish",
    "mejs.tagalog": "Tagalog",
    "mejs.thai": "Thai",
    "mejs.turkish": "Turkish",
    "mejs.ukrainian": "Ukrainian",
    "mejs.vietnamese": "Vietnamese",
    "mejs.welsh": "Welsh",
    "mejs.yiddish": "Yiddish",
  },
};
var tpj = jQuery;

var revapi13;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider131"] = {
  once:
    RS_MODULES.modules["revslider131"] !== undefined
      ? RS_MODULES.modules["revslider131"].once
      : undefined,
  init: function () {
    window.revapi13 =
      window.revapi13 === undefined ||
      window.revapi13 === null ||
      window.revapi13.length === 0
        ? document.getElementById("rev_slider_13_1")
        : window.revapi13;
    if (
      window.revapi13 === null ||
      window.revapi13 === undefined ||
      window.revapi13.length == 0
    ) {
      window.revapi13initTry =
        window.revapi13initTry === undefined ? 0 : window.revapi13initTry + 1;
      if (window.revapi13initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules["revslider131"].init();
        });
      return;
    }
    window.revapi13 = jQuery(window.revapi13);
    if (window.revapi13.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_13_1");
      return;
    }
    revapi13.revolutionInit({
      revapi: "revapi13",
      DPR: "dpr",
      sliderLayout: "fullscreen",
      duration: "4000ms",
      visibilityLevels: "1920,1700,1025,680",
      gridwidth: "1920,1300,1024,480",
      gridheight: "1080,800,800,800",
      lazyType: "smart",
      perspective: 600,
      perspectiveType: "global",
      editorheight: "1080,800,800,800",
      responsiveLevels: "1920,1700,1025,680",
      progressBar: { disableProgressBar: true },
      autoplay: false, // Ensure autoplay is disabled
      stopLoop: "on", // Stop after the first loop
      stopAfterLoops: 0, // Stop immediately
      stopAtSlide: 1, // Stop at the first slide
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false,
        touch: { touchenabled: true },
      },
      viewPort: {
        global: true,
        globalDist: "-200px",
        enable: false,
      },
      fallbacks: { allowHTML5AutoPlayOnAndroid: true },
    });
  },
}; // End of RevInitScript

document.getElementById("show-slide-1").addEventListener("click", function () {
  this.classList.add("selected");
  document.getElementById("show-slide-2").classList.remove("selected");
  document.getElementById("blackSection").classList.add("d-none");
  document.getElementById("whiteSection").classList.remove("d-none");
  revapi13.revshowslide(1);
});

document.getElementById("show-slide-2").addEventListener("click", function () {
  this.classList.add("selected");
  document.getElementById("show-slide-1").classList.remove("selected");
  document.getElementById("whiteSection").classList.add("d-none");
  document.getElementById("blackSection").classList.remove("d-none");
  revapi13.revshowslide(2);
});

if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal();
}

// Select all counters
const counters = document.querySelectorAll(".counter");
const totalValueDisplay = document.getElementById("total-value");

let totalWatt = 0; // To keep track of the total power consumption

// Helper function to update total and display it in kWh
function updateTotalValue() {
  totalWatt = 0; // Reset total before recalculating
  counters.forEach((counter) => {
    const wattage = parseInt(counter.getAttribute("data-watt")); // Get wattage from data attribute
    const counterValue = parseInt(
      counter.querySelector(".counter-value").innerHTML
    ); // Get the current counter value
    totalWatt += wattage * counterValue; // Calculate total wattage (watt * quantity)
  });
  totalValueDisplay.innerHTML = (totalWatt / 1000).toFixed(2)+"-KW"; // Display total in kWh, rounded to 3 decimal places
}

counters.forEach((counter) => {
  let counterValue = 0; // Initialize a separate counter for each counter element
  const counterDisplay = counter.querySelector(".counter-value");
  const incrementBtn = counter.querySelector(".increment-btn");
  const decrementBtn = counter.querySelector(".decrement-btn");

  // To increment the value of the counter
  incrementBtn.addEventListener("click", () => {
    counterValue++;
    counterDisplay.innerHTML = counterValue;
    updateTotalValue(); // Update total whenever the value changes
  });

  // To decrement the value of the counter, preventing it from going below 0
  decrementBtn.addEventListener("click", () => {
    if (counterValue > 0) {
      counterValue--;
      counterDisplay.innerHTML = counterValue;
      updateTotalValue(); // Update total whenever the value changes
    }
  });
});
