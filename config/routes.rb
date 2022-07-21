Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    resources :items 
    resources :users 
    # resources :admin_access_only, only: [:update, :destroy]

    post "/signup", to: "users#create"
    get "/me", to: "users#show" 
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    post "/sell", to: "items#create"

end
