(function($) {
  'use strict';

  //set animation timing
  var animationDelay = 3000,
    //loading bar effect
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 70,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect
    revealDuration = 600,
    revealAnimationDelay = 1500;

  initHeadline();

  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($(".brk-headline.letters").find("b"));
    //initialise headline animation
    animateHeadline($(".brk-headline"));  
  }

  function singleLetters($words) {
    $words.each(function() {
      var word = $(this),
        letters = word.text().split(""),
        selected = word.hasClass("is-visible");
      for (var i in letters) {
        if (word.parents(".rotate-2").length > 0)
          letters[i] = "<em>" + letters[i] + "</em>";
        letters[i] = selected
          ? '<i class="in">' + letters[i] + "</i>"
          : "<i>" + letters[i] + "</i>";
      }
      var newLetters = letters.join("");
      word.html(newLetters).css("opacity", 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function() {
      var headline = $(this);

      if (headline.hasClass("loading-bar")) {
        duration = barAnimationDelay;
        setTimeout(function() {
          headline.find(".brk-words-rotators").addClass("is-loading");
        }, barWaiting);
      } else if (headline.hasClass("clip")) {
        var spanWrapper = headline.find(".brk-words-rotators"),
          newWidth = spanWrapper.width() + 10;
        spanWrapper.css("width", newWidth);
      } else if (!headline.hasClass("type")) {
        //assign to .brk-words-rotators the width of its longest word
        var words = headline.find(".brk-words-rotators b"),
          width = 0;
        words.each(function() {
          var wordWidth = $(this).width();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find(".brk-words-rotators").css("width", width + 60);
      }

      //trigger animation
      setTimeout(function() {
        hideWord(headline.find(".is-visible").eq(0));
      }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);

    if ($word.parents(".brk-headline").hasClass("type")) {
      var parentSpan = $word.parent(".brk-words-rotators");
      parentSpan.addClass("selected").removeClass("waiting");
      setTimeout(function() {
        parentSpan.removeClass("selected");
        $word
          .removeClass("is-visible")
          .addClass("is-hidden")
          .children("i")
          .removeClass("in")
          .addClass("out");
      }, selectionDuration);
      setTimeout(function() {
        showWord(nextWord, typeLettersDelay);
      }, typeAnimationDelay);
    } else if ($word.parents(".brk-headline").hasClass("letters")) {
      var bool =
        $word.children("i").length >= nextWord.children("i").length
          ? true
          : false;
      hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents(".brk-headline").hasClass("clip")) {
      $word.parents(".brk-words-rotators").animate(
        {
          width: "2px"
        },
        revealDuration,
        function() {
          switchWord($word, nextWord);
          showWord(nextWord);
        }
      );
    } else if ($word.parents(".brk-headline").hasClass("loading-bar")) {
      $word.parents(".brk-words-rotators").removeClass("is-loading");
      switchWord($word, nextWord);
      setTimeout(function() {
        hideWord(nextWord);
      }, barAnimationDelay);
      setTimeout(function() {
        $word.parents(".brk-words-rotators").addClass("is-loading");
      }, barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(function() {
        hideWord(nextWord);
      }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if ($word.parents(".brk-headline").hasClass("type")) {
      showLetter($word.find("i").eq(0), $word, false, $duration);
      $word.addClass("is-visible").removeClass("is-hidden");
    } else if ($word.parents(".brk-headline").hasClass("clip")) {
      $word.parents(".brk-words-rotators").animate(
        {
          width: $word.width() + 10
        },
        revealDuration,
        function() {
          setTimeout(function() {
            hideWord($word);
          }, revealAnimationDelay);
        }
      );
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass("in").addClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(function() {
        hideLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function() {
        hideWord(takeNext($word));
      }, animationDelay);
    }

    if ($letter.is(":last-child") && $("html").hasClass("no-csstransitions")) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass("in").removeClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(function() {
        showLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else {
      if ($word.parents(".brk-headline").hasClass("type")) {
        setTimeout(function() {
          $word.parents(".brk-words-rotators").addClass("waiting");
        }, 200);
      }
      if (!$bool) {
        setTimeout(function() {
          hideWord($word);
        }, animationDelay);
      }
    }
  }

  function takeNext($word) {
    return !$word.is(":last-child")
      ? $word.next()
      : $word
          .parent()
          .children()
          .eq(0);
  }

  function takePrev($word) {
    return !$word.is(":first-child")
      ? $word.prev()
      : $word
          .parent()
          .children()
          .last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }
  $(window).on('resize', function() {
    var headline = $(".brk-headline");
    if (!headline.hasClass("type")) {
      //assign to .brk-words-rotators the width of its longest word
      var words = headline.find(".brk-words-rotators b"),
        width = 0;
      words.each(function() {
        var wordWidth = $(this).width();
        if (wordWidth > width) width = wordWidth;
      });
      headline.find(".brk-words-rotators").css("width", width);
    }
  });
})(jQuery);
