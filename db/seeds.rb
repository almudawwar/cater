# frozen_string_literal: true

100.times do |n|
  Menu.create(title: "Menu #{n}", price: rand(1.00..100.00).round(2))
end
