require "test_helper"

class Api::V1::CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @category = categories(:category_1)
  end

  test "index: should get index" do
    get api_v1_categories_url, as: :json
    assert_response :success
  end

  test "create: should create category" do
    create_params = {
      category: {
        name: "Education",
      }
    }
    assert_difference("Category.count", 1) do
      post api_v1_categories_url, params: create_params, as: :json
    end

    assert_response :created
    assert_equal create_params[:category][:name], Category.last.name
  end

  test "create: If the category' name is null, an error will occur" do
    create_params = {
      category: {
        name: ""
      }
    }
    assert_difference("Category.count", 0) do
      post api_v1_categories_url, params: create_params, as: :json
    end

    assert_response :unprocessable_entity
  end

  test "create: If the category' name is the same, an error will occur" do
    create_params = {
      category: {
        name: @category.name
      }
    }
    assert_difference("Category.count", 0) do
      post api_v1_categories_url, params: create_params, as: :json
    end

    assert_response :unprocessable_entity
  end

  test "show: should show category" do
    get api_v1_category_url(@category), as: :json
    assert_response :success
  end

  test "update: should update category" do
    update_params = {
      category: {
        name: "Education"
      }
    }
    patch api_v1_category_url(@category), params: update_params, as: :json
    assert_response :success
    assert_equal update_params[:category][:name], @category.reload.name
  end

  test "update: If the category' name is null, an error will occur" do
    update_params = {
      category: {
        name: ""
      }
    }
    patch api_v1_category_url(@category), params: update_params, as: :json
    assert_response :unprocessable_entity
  end

  test "update: If the category' name is the same, an error will occur" do
    update_params = {
      category: {
        name: categories(:category_2).name
      }
    }
    patch api_v1_category_url(@category), params: update_params, as: :json
    assert_response :unprocessable_entity
  end

  test "destroy: should destroy category" do
    delete api_v1_category_url(@category), as: :json

    assert_response :success
    assert_not_nil @category.reload.deleted_at
  end
end
