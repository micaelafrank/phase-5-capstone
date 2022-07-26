class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :num_of_likes 
      t.integer :user_id 
      t.integer :item_id 
      t.timestamps
    end
  end
end
