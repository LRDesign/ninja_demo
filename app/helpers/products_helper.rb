module ProductsHelper

  def delete_widget(product)    
    title = "Delete #{product.name}"
    content_tag(:form,  :action => product_path(product), :method => :post, :title => title, :class => "delete_widget") do
      hidden_field_tag("_method", :delete) +
      hidden_field_tag("authenticity_token", session[:_csrf_token]) +
      submit_tag("Delete")
    end        
  end
  
end
