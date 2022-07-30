class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :description, :color, :price, :size, :condition, :material, :user_id, :sold_by, :images_url
# :user_id,
  # belongs_to :user 
end

