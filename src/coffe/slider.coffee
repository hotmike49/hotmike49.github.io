$ ->
  class Slider
    constructor: ->
      $slides = $('[data-slide]')
      @prepareSlides $slides
      @bindClickEvents()
      
    prepareSlides: ($slides) ->
      slidesArray = []
      
      $slides.each (index) ->
        slidesArray.push $(this).data('slide')
        if index == 0
          $(this).addClass 'active'
          
      @slidesArray = slidesArray
      
    
    
    getNextSlide: =>
      self = this
      $currentSlide = $('.slide.active')
      currentKey = $currentSlide.data 'slide'
      currentIndex = @slidesArray.indexOf(currentKey)
      
      $currentSlide.removeClass 'active'
      if currentIndex + 1 == @slidesArray.length
        nextKey = @slidesArray[0]
      else
        nextKey = @slidesArray[currentIndex + 1]
      $('[data-slide="' +nextKey+ '"]').addClass 'active'
      
    getPrevSlide: =>
      self = this
      $currentSlide = $('.slide.active')
      currentKey = $currentSlide.data 'slide'
      currentIndex = @slidesArray.indexOf(currentKey)
      
      $currentSlide.removeClass 'active'
      if currentIndex - 1 == -1
        prevKey = @slidesArray[@slidesArray.length - 1]
      else
        prevKey = @slidesArray[currentIndex - 1]
      $('[data-slide="' +prevKey+ '"]').addClass 'active'
      
    bindClickEvents: =>
      self = this
      $('[data-slider="next"]').on 'click', (e) ->
        self.getNextSlide()
      $('[data-slider="prev"]').on 'click', (e) ->
        self.getPrevSlide()
        
  new Slider
  
  