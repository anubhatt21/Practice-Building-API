class FoodsController < ApplicationController
  def index
    @foods = Food.all
    render "index.json.jbuilder"
  end

  def show
    @food = Food.find_by(id: params[:id])
    render "show.json.jbuilder"
  end

  def create 
    @food = Food.new(
      name: params[:name],
      origin: params[:origin]
      )
    @food.save
    redirect_to "/foods/#{@food.id}"
  end
end
