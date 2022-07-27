Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    resources :items 
    resources :users 
    resources :user_cart_items
    resources :user_carts, only: [:index, :show, :create, :destroy]
    # resources :admin_access_only, only: [:update, :destroy]

    post "/signup", to: "users#create"
    get "/me", to: "users#show" 
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    post "/sell", to: "items#create"
    get "/mycart", to: "user_carts#show"
    post "/create_cart" , to: "user_carts#create"
    post "/mycart", to: "user_cart_items#create"

end
