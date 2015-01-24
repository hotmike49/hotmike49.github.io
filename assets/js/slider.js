(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $(function() {
    var Slider;
    Slider = (function() {
      function Slider() {
        this.bindClickEvents = __bind(this.bindClickEvents, this);
        this.getPrevSlide = __bind(this.getPrevSlide, this);
        this.getNextSlide = __bind(this.getNextSlide, this);
        var $slides;
        $slides = $('[data-slide]');
        this.prepareSlides($slides);
        this.bindClickEvents();
      }

      Slider.prototype.prepareSlides = function($slides) {
        var slidesArray;
        slidesArray = [];
        $slides.each(function(index) {
          slidesArray.push($(this).data('slide'));
          if (index === 0) {
            return $(this).addClass('active');
          }
        });
        return this.slidesArray = slidesArray;
      };

      Slider.prototype.getNextSlide = function() {
        var $currentSlide, currentIndex, currentKey, nextKey, self;
        self = this;
        $currentSlide = $('.slide.active');
        currentKey = $currentSlide.data('slide');
        currentIndex = this.slidesArray.indexOf(currentKey);
        $currentSlide.removeClass('active');
        if (currentIndex + 1 === this.slidesArray.length) {
          nextKey = this.slidesArray[0];
        } else {
          nextKey = this.slidesArray[currentIndex + 1];
        }
        return $('[data-slide="' + nextKey + '"]').addClass('active');
      };

      Slider.prototype.getPrevSlide = function() {
        var $currentSlide, currentIndex, currentKey, prevKey, self;
        self = this;
        $currentSlide = $('.slide.active');
        currentKey = $currentSlide.data('slide');
        currentIndex = this.slidesArray.indexOf(currentKey);
        $currentSlide.removeClass('active');
        if (currentIndex - 1 === -1) {
          prevKey = this.slidesArray[this.slidesArray.length - 1];
        } else {
          prevKey = this.slidesArray[currentIndex - 1];
        }
        return $('[data-slide="' + prevKey + '"]').addClass('active');
      };

      Slider.prototype.bindClickEvents = function() {
        var self;
        self = this;
        $('[data-slider="next"]').on('click', function(e) {
          return self.getNextSlide();
        });
        return $('[data-slider="prev"]').on('click', function(e) {
          return self.getPrevSlide();
        });
      };

      return Slider;

    })();
    return new Slider;
  });

}).call(this);
