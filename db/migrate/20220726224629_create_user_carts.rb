class CreateUserCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_carts do |t|
      t.integer :user_id 
      t.boolean :isCheckedOut, :default => false 
      t.timestamps
    end
  end
end
