Rails.application.routes.draw do
  get "/foods" => "foods#index"
  get "/foods/:id" => "foods#show"

end
