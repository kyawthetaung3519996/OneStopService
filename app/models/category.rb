class Category < ApplicationRecord
  has_one_attached :image

  validates :name, presence: true, uniqueness: true

  scope :active, -> { where(deleted_at: nil) }

  def archive
    update(deleted_at: DateTime.now)
  end
end
