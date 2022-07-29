class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname
  # :show_cart

  has_one :user_cart
  has_many :items 
end
