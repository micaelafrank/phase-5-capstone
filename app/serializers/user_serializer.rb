class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname, :user_cart, :items
  # :show_cart

end
