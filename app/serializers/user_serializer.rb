class UsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :fullname 

  has_many :items 
end
