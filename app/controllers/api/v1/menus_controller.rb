class Api::V1::MenusController < ApplicationController
  before_action :set_menu, only: %i[show update destroy]

  def index
    @menus = MenuSearchQuery.call(index_params)

    render json: { data: @menus, next_page: @menus.next_page }
  end

  def show
    render json: {}, status: :not_found and return unless @menu

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

  def index_params
    params.permit(:page, :search_term, :sort_direction)
  end

  def set_menu
    @menu = Menu.find_by(id: params[:id])
  end

  def menu_params
    params.require(:menu).permit(:title, :price)
  end
end
