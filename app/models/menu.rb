class Menu < ApplicationRecord
  CURRENCIES = %w[EUR].freeze

  validates_presence_of :title, :price, :currency

  validates_numericality_of :price, greater_than_or_equal_to: 1
  validates_length_of :title, minimum: 3

  validates :currency, inclusion: { in: CURRENCIES }

  scope :by_title, ->(term) { where("title ilike '%#{term}%'") }
  scope :sorted_price, ->(sort) { order(price: sort) }
end
