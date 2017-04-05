json.array! @foods.each do |food|
  json.id food.id
  json.name food.name
  json.origin food.origin
  json.text "This is version 2"
end