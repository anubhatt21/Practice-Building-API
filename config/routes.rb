Rails.application.routes.draw do
  get "/foods" => "foods#index"
  get "/foods/:id" => "foods#show"
  post "/foods" => "foods#create"
  patch "/foods/:id" => "foods#update"
  delete "/foods/:id" => "foods#destroy"
end
