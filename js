document.addEventListener('DOMContentLoaded', function () {

  let fancyTransitionContainers =
    document.querySelectorAll('.fancyCardWrapper');

  fancyTransitionContainers.forEach((container, i) => {

    let isUpdateScheduled = false;

    function manageScroll() {

      let top = container.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      let scrolledRatio = top / windowHeight;

      scrolledRatio = Math.min(
        Math.max(scrolledRatio, 0),
        1
      );

      if (fancyTransitionContainers[i - 1]) {
        fancyTransitionContainers[i - 1]
          .style
          .setProperty(
            '--scrolled-ratio',
            1 - scrolledRatio
          );
      }

      isUpdateScheduled = false;
    }

    window.addEventListener('scroll', () => {

      if (!isUpdateScheduled) {

        isUpdateScheduled = true;

        requestAnimationFrame(manageScroll);
      }
    });

  });

});
