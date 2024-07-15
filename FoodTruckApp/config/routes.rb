Rails.application.routes.draw do
  resources :food_trucks, only: [:index] do
  end
end