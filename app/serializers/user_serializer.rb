class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname

  has_many :items 
end
