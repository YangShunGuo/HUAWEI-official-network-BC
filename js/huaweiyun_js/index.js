$(function(){
	$(".tipone ul li a").on("click",function(e){
		// $(".section-body .content").css("display","block");
		var item_id=e.currentTarget.id;
		var items=$(".tipone .content");
		var itemstwo=$(".tiptwo .content");
		var chu=$(".tipone ul li a");
		var chutwo=$(".tiptwo ul li a");
		if(!$(this).hasClass("active"))
			{
				var t=false;
				var pre_id;
				chu.each(function(index,element){
					if($(element).hasClass("active")){
						t=true;
						pre_id=$(element).attr("id");
						console.log(pre_id);
						$(element).removeClass("active");

						items.each(function(index,element){
						if(element.dataset['mindex']==item_id){
								$(element).addClass("active");
								$(element).css("display","block");	
							}
						if(element.dataset['mindex']==pre_id){
								$(element).removeClass("active");	
								$(element).css("display","none");
							}
						})

					}
					})


					$(this).addClass("active");
				if(t==false){

						chutwo.each(function(index,element){
							$(element).removeClass("active");
						})
						itemstwo.each(function(index,element){
							$(element).slideUp(500,function(){

								$(element).removeClass("active");
								items.each(function(index,element){
							if(element.dataset['mindex']==item_id){
								$(element).slideDown(500,function(){
								$(element).addClass("active");	
								});
							}
						});
							});
						})


				   }
				
			}




		else{
			$(this).removeClass("active");
			items.each(function(index,element){
				if(element.dataset['mindex']==item_id){
					$(element).slideUp(500,function(){
					$(element).removeClass("active");	
					});
				}
			})
			}
	})


    $(".tiptwo ul li a").on("click",function(e){
		// $(".section-body .content").css("display","block");
		var item_id=e.currentTarget.id;
		var items=$(".tiptwo .content");
		var itemstwo=$(".tipone .content");
		var chu=$(".tiptwo ul li a");
		var chutwo=$(".tipone ul li a");
		if(!$(this).hasClass("active"))
			{
				var t=false;
				var pre_id;
				chu.each(function(index,element){
					if($(element).hasClass("active")){
						t=true;
						pre_id=$(element).attr("id");
						console.log(pre_id);
						$(element).removeClass("active");

						items.each(function(index,element){
						if(element.dataset['mindex']==item_id){
								$(element).addClass("active");
								$(element).css("display","block");	
							}
						if(element.dataset['mindex']==pre_id){
								$(element).removeClass("active");	
								$(element).css("display","none");
							}
						})

					}
					})


					$(this).addClass("active");
				if(t==false){

						chutwo.each(function(index,element){
							$(element).removeClass("active");
						})
						itemstwo.each(function(index,element){
							$(element).slideUp(500,function(){

								$(element).removeClass("active");
								items.each(function(index,element){
							if(element.dataset['mindex']==item_id){
								$(element).slideDown(500,function(){
								$(element).addClass("active");	
								});
							}
						});
							});
						})

						
				   }
				
			}




		else{
			$(this).removeClass("active");
			items.each(function(index,element){
				if(element.dataset['mindex']==item_id){
					$(element).slideUp(500,function(){
					$(element).removeClass("active");	
					});
				}
			})
			}
	})

    var items=$(".solution .body .wrap .souluton-centent ");
    $(".solution .body ul li").on("mouseenter",function(e){
    	var current_eve=$(this).attr("id");
    	$(this).siblings().removeClass("active");
    	$(this).addClass("active");
    	items.siblings().removeClass("active");
    	items.each(function(index,element){
    		if(element.dataset["mindex"]==current_eve)
    		{
    			$(element).addClass("active");
    		}
    	})

    })
    var active_news=$(".news .newscontent ul");
    var x_t=$(".news .newscontent ul li").outerWidth();
    var news_l=$(".news .newscontent ul li").length;
    var news_control=$(".news .newscontent .control a")
    var step=active_news.position().left;
    var pre_step=step;
    var index=1;
    console.log(news_control);
    var timer;
    news_timer();

     $('.news .newscontent ul li').on('mouseenter',function(){
    	clearInterval(timer);
    })

      $('.news .newscontent ul li').on('mouseleave',function(){
  			news_timer();	
      })

    news_control.on('click',function(e){
    	clearInterval(timer);
    	var i=this.dataset['mindex'];
    	step=(1-i)*x_t+pre_step;
    	console.log(this.dataset['mindex']);
    	active_news.css("transition","all 1s");
    	active_news.css("left",step+"px");
    	news_control.removeClass('active');
    	$(news_control[i-1]).addClass('active');
    	news_timer();

    })



function news_timer(){
	timer=setInterval(function(){
    	step=step-x_t;

    	news_control[index-1].classList.remove('active');
    	active_news.css("transition","all 1s");
    	active_news.css("left",step+"px");
    	index=index+1;
    	$(news_control[index-1]).addClass("active");
    	console.log(index+""+step);
    	if(index===4)
    	{
    	$(news_control[0]).addClass("active");

    	setTimeout(function(){
    		 	index=1;
    			active_news.css("transition","none");
    			step=pre_step;
    			active_news.css("left",step+"px");
    	},1000)
    	}
    	else{
    		$(news_control[index-1]).addClass("active");
    	}
    
    }, 3000)
}


})

