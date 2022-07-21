User.destroy_all
Item.destroy_all

3.times do 
    User.create!(
        username: Faker::Esport.player,
        fullname: Faker::Name.unique.name,
        email: Faker::Internet.unique.email,
        password_digest: Faker::Internet.password,
        role: false)
    end

users = User.all 
puts "done seeding users!"

5.times do 
    Item.create!(
        itemname: Faker::Commerce.product_name, 
        price: Faker::Commerce.price(range: 0..30.0, as_string: true),
        description: Faker::Commerce.department,
        color: Faker::Commerce.color,
        user_id: 1,
        size: Faker::Commerce.color,
        condition: Faker::Commerce.color,
        material: Faker::Commerce.material)
    end

items = Item.all 
puts "done seeding items!"

