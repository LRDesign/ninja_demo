// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
                
$.behavior({    
  '#ajax_new': 				$.ninja.submits_as_ajax_link(),
  'form#new_product': $.ninja.submits_as_ajax_form()
})
