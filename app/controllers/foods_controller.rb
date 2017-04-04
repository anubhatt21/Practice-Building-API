class FoodsController < ApplicationController
  def index
    @foods = Food.all
    render "index.json.jbuilder"
  end

  def show
    @food = Food.find_by(id: params[:id])
    render "show.json.jbuilder"
  end
end
