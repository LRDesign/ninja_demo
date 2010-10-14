$.behavior({    
  'a#ajax_me': 					$.ninja.submits_as_ajax(),
  'form#new_product': 	$.ninja.submits_as_ajax({ 
		busy_element: function(elem){ return $('#products table') } 
	})
})

                           

// { busy_element: function(elem){ $('#products') } }







 