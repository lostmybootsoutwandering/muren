function init() {
  copyright();
}

/* comic crrazies  1. Set your total number of pages here*/
/* UPDATE TOTAL CHAPTERS when you post new comics  */
const totalChapters = 3; 

function setupChapterNav() {
    const path = window.location.pathname;
    const fileName = path.split("/").pop();
    const currentChapter = parseInt(fileName);
    const navPlaceholder = document.getElementById("navigation");

    if (!navPlaceholder) return;

    // 1. Logic for Same-Directory Navigation
    let prevHref;
    if (currentChapter > 0) {
        // If we are on 001 or higher, go to the previous number
        prevHref = (currentChapter - 1).toString().padStart(3, '0') + ".html";
    } else {
        // If we are on 000, go to the index page in the SAME folder
        prevHref = "index.html"; 
    }

    let nextHref = (currentChapter < totalChapters) ? 
        (currentChapter + 1).toString().padStart(3, '0') + ".html" : 
        "#";

    let nextDisabled = (currentChapter >= totalChapters);

    // 2. Inject the HTML
    navPlaceholder.innerHTML = `
       
    <a id="next-link" href="${nextHref}" style="${nextDisabled ? 'opacity:0.3; pointer-events:none;' : ''} class="magictext"">
            <img src="../img/nav_right.png" alt="right mouse click"></a><br><br>  
            <a href="../archive/index.html"><img src="../img/nav_left.png" alt="inspect the page"><br>
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
    copyrightDiv.innerHTML = "The entire fabric of life is in LMBOW.";
  }
}

