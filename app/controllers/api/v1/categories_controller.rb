class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: %i[ show update destroy ]

  def index
    @categories = Category.active

    categories_with_images = @categories.map do |category|
      category_with_image_url(category)
    end

    render json: categories_with_images
  end

  def show
    render json: category_with_image_url(@category)
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: api_v1_category_url(@category)
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @category.archive
      render json: { message: 'Category successfully deleted' }, status: :ok
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  private
    def set_category
      @category = Category.find(params[:id])
    end

    def category_params
      params.require(:category).permit(:name, :image)
    end

    def category_with_image_url(category)
      category.as_json.merge(image_url: category.image.attached? ? url_for(category.image) : nil)
    end
end
