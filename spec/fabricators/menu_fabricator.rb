Fabricator(:menu) do
  title { Faker::Name.name }
  price { Faker::Number.within(range: 1.0..100.0) }
end
