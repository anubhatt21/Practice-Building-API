Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      get "/foods" => "foods#index"
      get "/foods/:id" => "foods#show"
      post "/foods" => "foods#create"
      patch "/foods/:id" => "foods#update"
      delete "/foods/:id" => "foods#destroy"
    end


    namespace :v2 do
      get "/foods" => "foods#index"
      get "/foods/:id" => "foods#show"
      post "/foods" => "foods#create"
      patch "/foods/:id" => "foods#update"
      delete "/foods/:id" => "foods#destroy"
    end
  end
end
