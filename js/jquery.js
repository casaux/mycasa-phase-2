$(document).ready(function(){




	menu = '<a href="#"><div class="casa-menu-menu"><img src="img/menu.svg" width="24"><span class="casa-menu-label">Menu</span></div><div class="casa-menu-close"><img src="img/close.svg" width="24"><span class="casa-menu-label">Close</span></div></a>';
	
	menu += '<div class="casa-menu-content">...</div>';
	
	$(".casa-menu").append(menu);
	
	
	$(".casa-menu").bind( "click", function() {
	  
	  
	  if($(".casa-menu-menu").css("display")=="block"){
	  	$(".casa-menu-menu").css("display","none");
	  	$(".casa-menu-close").css("display","block");
	  } else {
		$(".casa-menu-menu").css("display","block");
	  	$(".casa-menu-close").css("display","none");
	  }
	  
	  
	  
	});
	
	
	
	
	
	
	
});