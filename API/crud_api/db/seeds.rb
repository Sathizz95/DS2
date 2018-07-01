5.times do
  RestRoom.create({
    title: Faker::Address.state,
    body: Faker::Address.full_address

    })
end
