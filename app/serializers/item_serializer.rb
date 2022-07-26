class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :images, :description, :color, :price, :size, :condition, :material, :user_id, :sold_by, :images_url

  belongs_to :user 
end

