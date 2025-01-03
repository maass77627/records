Rails.application.routes.draw do

  resources :records

  resources :users, only: [:show, :index] do
  resources :records, only: [:index, :show, :destroy]
 end


post "/signup", to: "users#create"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
get "/me", to: "users#show"

get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 
end
