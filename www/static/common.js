function init() {
  copyright();
}

/* comic crrazies  1. Set your total number of pages here*/
/* UPDATE TOTAL CHAPTERS when you post new comics */
const totalChapters = 4; 

function setupChapterNav() {
    const path = window.location.pathname;
    const fileName = path.split("/").pop();
    const currentChapter = parseInt(fileName);
    const navPlaceholder = document.getElementById("navigation");

    if (!navPlaceholder) return;

    // 1. Logic for Same-Directory Navigation
    let prevHref;
    if (currentChapter > 0) {
        // Removed padStart so it links to "1.html" instead of "001.html"
        prevHref = (currentChapter - 1).toString() + ".html";
    } else {
        prevHref = "index.html"; 
    }

    // Removed padStart here as well
    let nextHref = (currentChapter < totalChapters) ? 
        (currentChapter + 1).toString() + ".html" : 
        "#";

    let nextDisabled = (currentChapter >= totalChapters);

    // 2. Inject the HTML
    navPlaceholder.innerHTML = `
        <a id="next-link" href="${nextHref}" 
           style="${nextDisabled ? 'opacity:0.3; pointer-events:none;' : ''}" >
            <img src="../img/nav_right.png" alt="Next">
        </a>
        <br><br>
        <a href="../archive/index.html">
            <img src="../img/nav_left.png" alt="Archive">
        </a>
    `;

    // 3. Keyboard Navigation Logic
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            window.location.href = prevHref;
        } else if (e.key === 'ArrowRight' && !nextDisabled) {
            window.location.href = nextHref;
        }
    });
}
window.addEventListener("DOMContentLoaded", setupChapterNav);


function copyright() {
  //initilise copyright
  const copyrightDiv = document.getElementById('copyright');
  if (copyrightDiv) {
    copyrightDiv.innerHTML = "Life is in LMBOW.";
  }
}

