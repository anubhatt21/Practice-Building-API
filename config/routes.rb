Rails.application.routes.draw do
  get "/foods" => "foods#index"
  get "/foods/:id" => "foods#show"
  post "/foods" => "foods#create"

end
