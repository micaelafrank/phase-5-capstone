class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :itemname
      t.float :price 
      t.text :description
      t.string :color
      t.integer :user_id 
      t.string :size 
      t.string :condition 
      t.string :material 
      # t.string :image1
      # t.string :image2
      # t.string :image3
      # t.string :image4
      t.timestamps
    end
  end
end
