class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :description, :color, :price, :size, :condition, :material, :sold_by, :images_url
# :user_id,
  # belongs_to :user 
end

