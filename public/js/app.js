(function () {
  const $openBtn = document.querySelector(".nav-open");
  const $closeBtn = document.querySelector(".nav-close");
  const $nav = document.querySelector(".nav");
  const $visual = [...document.querySelector(".visual ul").children];
  const liLength = $visual.length - 1;
  const $premium = document.querySelector(".premium-menu");
  const $invest = document.querySelector(".invest-list");
  let showNum = 0;
  let prev = 0;

  console.log(
    $premium.offsetTop - window.innerHeight,
    $invest.offsetTop - window.innerHeight
  );

  $openBtn.onclick = () => {
    console.log(1);
    $nav.classList.add("open");
  };

  $closeBtn.onclick = () => {
    $nav.classList.remove("open");
  };

  // window.onscroll = () => {
  //   if (
  //     window.scrollY - $premium.offsetTop / 2 > 0 &&
  //     window.scrollY - $premium.offsetTop / 2 <= $premium.offsetTop + 100
  //   ) {
  //     $invest.classList.remove("on");
  //     $premium.classList.add("on");
  //   }
  //   if (
  //     window.scrollY - $invest.offsetTop / 2 > 0 &&
  //     window.scrollY - $invest.offsetTop / 2 <= $invest.offsetTop
  //   ) {
  //     $premium.classList.remove("on");
  //     $invest.classList.add("on");
  //   }
  // };

  $visual[showNum].classList.add("show");

  setTimeout(function () {
    visual(showNum + 1);
  }, 3000);

  const visual = (num) => {
    prev = showNum;
    showNum = num > liLength ? 0 : num;
    document.querySelector(".show").classList.remove("show");
    $visual[prev].classList.add("off");
    $visual[showNum].classList.add("show");
    setTimeout(function () {
      if (document.querySelector(".off"))
        document.querySelector(".off").classList.remove("off");
      visual(showNum + 1);
    }, 3000);
  };
})();
