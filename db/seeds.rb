7.times do |i|
  image = "#{SecureRandom.hex}"
  name = Faker::HarryPotter.character
  email = "user#{SecureRandom.hex}@test.com"
  password = "password"
  u = User.create(email: email, name: name, image: image, password: password)

  10.times do |j|
    body = Faker::HarryPotter.quote
    Post.create(body: body, user_id: u.id)
  end
end

puts 'seeded'