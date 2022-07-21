class User < ApplicationRecord
    has_many :items 
    has_secure_password 

    validates :email, :username, uniqueness: true

    # def fullname
    #     self.firstname + ' ' + self.lastname
    # end
end
