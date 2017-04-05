class Api::V2::FoodsController < ApplicationController
  
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

  def update
    @food = Food.find_by(id: params[:id])
    @food.name = params[:name] || @food.name
    @food.origin = params[:origin] || @food.origin
    @food.save
    render "show.json.jbuilder"
  end

  def destroy 
    @food = Food.find_by(id: params[:id])
    @food.destroy
    render json: {message: "Food item successfully destroyed!"}
  end
end
