    function showLoader() { document.getElementById("loader") && document.getElementById("loader").classList.remove("hidden") } function hideLoader() { document.getElementById("loader") && document.getElementById("loader").classList.add("hidden") } window.addEventListener("DOMContentLoaded", (function () { hideLoader(); document.querySelectorAll("a").forEach((e => { e.addEventListener("click", showLoader) })) })), window.addEventListener("pagehide", (e => { hideLoader() })), window.addEventListener("popstate", (e => { hideLoader() })), window.addEventListener("load", (function () { hideLoader() })), window.addEventListener("pageshow", (function () { hideLoader() }));



    document.addEventListener("DOMContentLoaded", function () {
      const scrollerWrapper = document.getElementById("vpb_news_scroller_container");
    
      if (!scrollerWrapper) {
        console.error("Scroller container not found!");
        return;
      }
    
      let scrollInterval;
      const scrollSpeed = 50; // Adjust for desired speed
      const scrollIncrement = 1; // Pixels to scroll per interval
    
      function autoScroll() {
        const scrollHeight = scrollerWrapper.scrollHeight;
        const wrapperHeight = scrollerWrapper.clientHeight;
        const scrollTop = scrollerWrapper.scrollTop;
    
        if (scrollTop + wrapperHeight >= scrollHeight) {
          scrollerWrapper.scrollTop = 0; // Reset to top
        } else {
          scrollerWrapper.scrollTop += scrollIncrement;
        }
      }
    
      function startAutoScroll() {
        scrollInterval = setInterval(autoScroll, scrollSpeed);
      }
    
      function stopAutoScroll() {
        clearInterval(scrollInterval);
      }
    
      scrollerWrapper.addEventListener("mouseenter", stopAutoScroll);
      scrollerWrapper.addEventListener("mouseleave", startAutoScroll);
    
      startAutoScroll();
    });