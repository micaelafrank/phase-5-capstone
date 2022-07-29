Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    resources :items 
    resources :users 
    resources :user_cart_items, only: [:destroy]
    resources :user_carts, only: [:index, :show, :create]
    # resources :admin_access_only, only: [:update, :destroy]

    post "/signup", to: "users#create"
    get "/me", to: "users#show" 
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    post "/sell", to: "items#create"
    get "/mycart", to: "user_carts#show"
    # delete "/removeitem", to: "user_cart_items#destroy"
    post "/create_cart" , to: "user_carts#create"
    post "/addtocart", to: "user_cart_items#create"

end
