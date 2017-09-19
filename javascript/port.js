 myAudio=document.getElementById('audio2');
  myAudio.addEventListener('canplaythrough', function() {
    this.currentTime = 12;
    this.play();
  });









// StarWars = (function(){



// 	/*
// 	* Constructor
// 	*/

// 	function StarWars(args) {
// 		//Content wrapper
// 		this.el = $(args.el);

// 		//Audio to play the opening crawl
// 		this.audio = this.el.find('audio').get(0);

// 		//Start the animation
// 		this.start = this.el.find('.start');

// 		// The animation wraper
// 		this.animation = this.el.find('animation');

// 		//Remove aniamtion and shows the start screeen
// 		this.reset();

// 		//Start the animation on click
// 		this.start.bind('click', $.proxy(function(){
// 			this.start.hide();
// 			this.audio.play();

// 			//Ad the div.animation to the dom
// 			this.el.append(this.animation);
// 		}, this));
		
// 		//Reset teh aniamtion and shows teh start screen
// 		$$(this.audio).bind('ended', $.proxy(function(){
// 			this.audio.currentTime = 0;
// 			this.reset();
// 		}, this));
// 	}
// })

// /*
//  * Resets the animation and shows the start screen
//  */
//  StarWars.prototype.reset = function() {
//  	this.start();

//  	//Clone the div.animation
//  	this.cloned = this.animation.clone(true);

//  	//Remove it from the dom
//  	this.animation.remove();

//  	//Overwrite the this.animation property with the cloned one
//  	this.animation = this.cloned
//  };

//  return StarWars;
// }();