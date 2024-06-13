require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  setup do
    @category = categories(:category_1)
  end

  test "validation: Category name is required" do
    category = Category.new(name: nil)
    refute  category.valid?
    assert_not_nil category.errors[:name]
  end

  test "validation: Category name is unique" do
    category = Category.new(name: @category.name)
    refute  category.valid?
    assert_not_nil category.errors[:name]
  end
end
