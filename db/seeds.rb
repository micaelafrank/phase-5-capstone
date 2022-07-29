User.destroy_all
Item.destroy_all

5.times do 
    User.create!(
        username: Faker::Esport.player,
        fullname: Faker::Name.unique.name,
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password)
    end
micaela = User.create!(username: "m", fullname: Faker::Name.unique.name, email: Faker::Internet.unique.email, password: "1")
users = User.all 
puts "done seeding users!"

7.times do 
    Item.create!(
        itemname: Faker::Commerce.product_name, 
        price: Faker::Commerce.price(range: 0..30.0, as_string: true),
        description: Faker::Commerce.department,
        color: Faker::Commerce.color,
        user_id: 1,
        size: "small",
        condition: Faker::Commerce.color,
        material: Faker::Commerce.material
    )
    end

items = Item.all 
puts "done seeding items!"
