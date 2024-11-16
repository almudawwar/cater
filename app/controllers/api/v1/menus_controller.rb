class Api::V1::MenusController < ApplicationController
  before_action :set_menu, only: %i[ show update destroy ]

  def index
    @menus = Menu.all

    render json: @menus
  end

  def show
    render json: @menu
  end

  def create
    @menu = Menu.new(menu_params)

    if @menu.save
      render json: @menu, status: :created, location: @menu
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @menu.destroy!
  end

  private
    def set_menu
      @menu = Menu.find_by(id: params[:id])
    end

    def menu_params
      params.require(:menu).permit(:title, :price)
    end
end
