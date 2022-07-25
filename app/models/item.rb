class Item < ApplicationRecord
    belongs_to :user 
    has_many_attached :images

    def sold_by
        seller = user.id
        User.find(seller).username
    end
end
